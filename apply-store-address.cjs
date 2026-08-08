const fs = require('fs');
const path = require('path');

// 1. Update MainContent.html
const mainContentPath = path.join(__dirname, 'src', 'html', 'MainContent.html');
let mainContent = fs.readFileSync(mainContentPath, 'utf8');

const oldButtonHtml = `<button type="button" onclick="getStoreLocationFromGoogle()" class="bg-blue-50 text-blue-600 hover:bg-blue-100 px-3 py-2.5 rounded-lg border border-blue-200 transition-colors flex items-center gap-2 text-[17.5px] leading-[25px] font-medium shrink-0 shadow-sm" title="Lấy tọa độ định vị">
                          <i class="fa-solid fa-location-crosshairs"></i>
                          <span class="hidden sm:inline">Định vị</span>
                        </button>`;

const newButtonHtml = `<button type="button" id="btn-store-pin-modal" onclick="openStoreLocationPinModal()" class="bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200 px-3.5 py-2.5 rounded-lg transition-all flex items-center gap-2 text-[17.5px] leading-[25px] font-medium shrink-0 shadow-sm" title="Chọn & Ghim vị trí cửa hàng trên bản đồ">
                          <i class="fa-solid fa-location-dot text-rose-500"></i>
                          <span id="btn-store-pin-text" class="hidden sm:inline font-semibold">Ghim vị trí</span>
                        </button>`;

if (mainContent.includes(oldButtonHtml)) {
  mainContent = mainContent.replace(oldButtonHtml, newButtonHtml);
  console.log('Button replaced in MainContent.html');
} else {
  console.log('oldButtonHtml not found in MainContent.html');
}

// Add store pin modal at the end of MainContent.html
const storePinModalHtml = `

<!-- Modal: Ghim Vị Trí Cửa Hàng -->
<div id="store-pin-modal" class="fixed inset-0 z-[70] hidden items-center justify-center bg-slate-900/70 backdrop-blur-sm p-4 animate-fade-in">
  <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-100 flex flex-col max-h-[90vh]">
    <div class="p-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white flex justify-between items-center shrink-0">
      <div>
        <h3 class="font-bold text-lg flex items-center gap-2">
          <i class="fa-solid fa-store text-rose-200"></i> Định vị & Ghim vị trí Cửa hàng / Bếp Nuri
        </h3>
        <p class="text-xs text-rose-100 mt-0.5" id="store-pin-modal-address">Số nhà, Tên đường, Phường/Xã, Quận/Huyện</p>
      </div>
      <button type="button" onclick="closeStoreLocationPinModal()" class="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
    </div>
    
    <div class="p-4 flex-1 overflow-y-auto flex flex-col gap-3">
      <div class="flex flex-wrap items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-xs gap-2">
        <span class="text-slate-600 font-medium flex items-center gap-1.5">
          <i class="fa-solid fa-map-pin text-rose-500"></i> Tọa độ ghim: <b id="store-pin-coords-display" class="text-slate-900 font-mono">Chưa chọn</b>
        </span>
        <div class="flex items-center gap-2">
          <button type="button" onclick="getStoreCurrentGPSLocation()" class="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 px-2.5 py-1.5 rounded-lg font-bold flex items-center gap-1 transition-colors">
            <i class="fa-solid fa-crosshairs"></i> GPS hiện tại
          </button>
          <button type="button" onclick="aiGeocodeStoreAddress()" class="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 px-2.5 py-1.5 rounded-lg font-bold flex items-center gap-1 transition-colors">
            <i class="fa-solid fa-wand-magic-sparkles"></i> AI Tìm vị trí
          </button>
        </div>
      </div>
      
      <div id="store-pin-map" class="h-[360px] w-full rounded-xl bg-slate-100 border border-slate-200 relative z-0"></div>
      <p class="text-xs text-slate-500 italic text-center">💡 Mẹo: Bấm hoặc kéo thả biểu tượng Cửa hàng 🏪 trên bản đồ để chọn tọa độ chính xác nhất.</p>
    </div>

    <div class="p-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3 shrink-0">
      <button type="button" onclick="closeStoreLocationPinModal()" class="px-4 py-2 text-sm font-semibold text-slate-600 bg-white border border-slate-300 hover:bg-slate-100 rounded-xl transition-all">
        Hủy bỏ
      </button>
      <button type="button" onclick="saveStoreLocationPin()" class="px-5 py-2 text-sm font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-xl shadow-md transition-all flex items-center gap-2">
        <i class="fa-solid fa-check"></i> Lưu vị trí ghim
      </button>
    </div>
  </div>
</div>
`;

mainContent += storePinModalHtml;
fs.writeFileSync(mainContentPath, mainContent, 'utf8');
console.log('MainContent.html updated with store pin modal.');

// 2. Update legacy.js
const legacyPath = path.join(__dirname, 'public', 'legacy.js');
let legacyCode = fs.readFileSync(legacyPath, 'utf8');

// Upgrade initSetDistricts & updateSetWards
const oldInitSetDistricts = `function initSetDistricts() {
        const d = document.getElementById("set-district");
        if (!d) return;
        d.innerHTML = '<option value="">Quận/Huyện</option>';
        for (let k in locationData["TP. Hồ Chí Minh"]) {
          d.innerHTML += \`<option value="\${k}">\${k}</option>\`;
        }
      }`;

const newInitSetDistricts = `function initSetDistricts() {
        const d = document.getElementById("set-district");
        if (!d) return;
        const currentVal = d.value;
        d.innerHTML = '<option value="">Quận/Huyện</option>';
        if (window.locationData && window.locationData["TP. Hồ Chí Minh"]) {
          for (let k in window.locationData["TP. Hồ Chí Minh"]) {
            d.innerHTML += \`<option value="\${k}">\${k}</option>\`;
          }
        }
        if (currentVal) d.value = currentVal;
        updateStorePinButtonState();
      }`;

if (legacyCode.includes(oldInitSetDistricts)) {
  legacyCode = legacyCode.replace(oldInitSetDistricts, newInitSetDistricts);
}

const oldUpdateSetWards = `function updateSetWards() {
        const setDistrict = document.getElementById("set-district");
        if (!setDistrict) return;
        const d = setDistrict.value,
          w = document.getElementById("set-ward");
        if (!w) return;
        w.innerHTML = '<option value="">Phường/Xã</option>';
        if (d) {
          w.disabled = false;
          for (let wd of locationData["TP. Hồ Chí Minh"][d]) {
            w.innerHTML += \`<option value="\${wd}">\${wd}</option>\`;
          }
        } else {
          w.disabled = true;
        }
      }`;

const newUpdateSetWards = `function updateSetWards() {
        const setDistrict = document.getElementById("set-district");
        if (!setDistrict) return;
        const d = setDistrict.value,
          w = document.getElementById("set-ward");
        if (!w) return;
        const currentW = w.value;
        w.innerHTML = '<option value="">Phường/Xã</option>';
        if (d && window.locationData && window.locationData["TP. Hồ Chí Minh"] && window.locationData["TP. Hồ Chí Minh"][d]) {
          w.disabled = false;
          window.locationData["TP. Hồ Chí Minh"][d].forEach(wd => {
            w.innerHTML += \`<option value="\${wd}">\${wd}</option>\`;
          });
          if (currentW) w.value = currentW;
        } else {
          w.disabled = true;
        }
      }`;

if (legacyCode.includes(oldUpdateSetWards)) {
  legacyCode = legacyCode.replace(oldUpdateSetWards, newUpdateSetWards);
}

// Append Store Location Pin Modal Logic to legacy.js
const storePinJsLogic = `

// ==========================================
// STORE LOCATION PIN MAP MODAL LOGIC
// ==========================================
let storePinMap = null;
let storePinMarker = null;
let currentStorePinLat = null;
let currentStorePinLng = null;

function updateStorePinButtonState() {
  const btn = document.getElementById("btn-store-pin-modal");
  const textEl = document.getElementById("btn-store-pin-text");
  const latEl = document.getElementById("set-lat");
  const lngEl = document.getElementById("set-lng");
  if (!btn || !textEl) return;

  const lat = latEl ? latEl.value : null;
  const lng = lngEl ? lngEl.value : null;

  if (lat && lng && !isNaN(parseFloat(lat)) && !isNaN(parseFloat(lng))) {
    btn.className = "bg-rose-100 text-rose-700 hover:bg-rose-200 border border-rose-300 font-bold px-3.5 py-2.5 rounded-lg transition-all flex items-center gap-2 text-[17.5px] leading-[25px] shrink-0 shadow-sm";
    textEl.innerText = "Đã ghim vị trí";
  } else {
    btn.className = "bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200 font-semibold px-3.5 py-2.5 rounded-lg transition-all flex items-center gap-2 text-[17.5px] leading-[25px] shrink-0 shadow-sm";
    textEl.innerText = "Ghim vị trí";
  }
}

function openStoreLocationPinModal() {
  const street = document.getElementById("set-street")?.value || "";
  const ward = document.getElementById("set-ward")?.value || "";
  const district = document.getElementById("set-district")?.value || "";
  
  const fullAddr = \`\${street}\${ward ? ', ' + ward : ''}\${district ? ', ' + district : ''}, TP. Hồ Chí Minh\`.replace(/^,\\s*/, '');
  const addrEl = document.getElementById("store-pin-modal-address");
  if (addrEl) addrEl.innerText = fullAddr || "Chưa nhập thông tin địa chỉ cụ thể";

  const modal = document.getElementById("store-pin-modal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }

  let latVal = document.getElementById("set-lat")?.value;
  let lngVal = document.getElementById("set-lng")?.value;

  let initialPos = [10.7769, 106.7009]; // Default TP.HCM center
  if (latVal && lngVal && !isNaN(parseFloat(latVal)) && !isNaN(parseFloat(lngVal))) {
    initialPos = [parseFloat(latVal), parseFloat(lngVal)];
  } else if (typeof getKitchenPos === "function") {
    initialPos = getKitchenPos();
  }

  currentStorePinLat = initialPos[0];
  currentStorePinLng = initialPos[1];
  updateStoreCoordsDisplay();

  setTimeout(() => {
    const storeIcon = L.divIcon({
      className: 'custom-store-pin',
      html: '<div style="background-color: #ef4444; color: white; border-radius: 50%; width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; font-size: 20px; box-shadow: 0 0 12px rgba(239,68,68,0.8); border: 2px solid white;"><i class="fa-solid fa-store"></i></div>',
      iconSize: [38, 38],
      iconAnchor: [19, 19]
    });

    if (!storePinMap) {
      storePinMap = L.map("store-pin-map").setView(initialPos, 16);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(storePinMap);

      storePinMarker = L.marker(initialPos, { icon: storeIcon, draggable: true }).addTo(storePinMap);

      storePinMarker.on("dragend", function (e) {
        const pos = e.target.getLatLng();
        currentStorePinLat = pos.lat;
        currentStorePinLng = pos.lng;
        updateStoreCoordsDisplay();
      });

      storePinMap.on("click", function (e) {
        storePinMarker.setLatLng(e.latlng);
        currentStorePinLat = e.latlng.lat;
        currentStorePinLng = e.latlng.lng;
        updateStoreCoordsDisplay();
      });
    } else {
      storePinMap.setView(initialPos, 16);
      storePinMarker.setLatLng(initialPos);
      storePinMap.invalidateSize();
    }
  }, 150);
}

function updateStoreCoordsDisplay() {
  const el = document.getElementById("store-pin-coords-display");
  if (el) {
    el.innerText = \`\${Number(currentStorePinLat).toFixed(5)}, \${Number(currentStorePinLng).toFixed(5)}\`;
  }
}

function closeStoreLocationPinModal() {
  const modal = document.getElementById("store-pin-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

function saveStoreLocationPin() {
  if (currentStorePinLat && currentStorePinLng) {
    document.getElementById("set-lat").value = currentStorePinLat;
    document.getElementById("set-lng").value = currentStorePinLng;
    updateStorePinButtonState();
    if (typeof showToast === "function") {
      showToast("Đã chọn vị trí ghim Cửa hàng thành công! Hãy nhấn 'Lưu cấu hình' để hoàn tất.", "success");
    }
  }
  closeStoreLocationPinModal();
}

function getStoreCurrentGPSLocation() {
  if ("geolocation" in navigator) {
    if (typeof showToast === "function") showToast("Đang định vị GPS...", "info");
    navigator.geolocation.getCurrentPosition(
      function (position) {
        currentStorePinLat = position.coords.latitude;
        currentStorePinLng = position.coords.longitude;
        const newPos = [currentStorePinLat, currentStorePinLng];
        if (storePinMarker) storePinMarker.setLatLng(newPos);
        if (storePinMap) storePinMap.setView(newPos, 16);
        updateStoreCoordsDisplay();
        if (typeof showToast === "function") showToast("Đã lấy định vị GPS thành công!", "success");
      },
      function (error) {
        if (typeof showToast === "function") showToast("Không thể lấy định vị: " + error.message, "error");
      }
    );
  } else {
    if (typeof showToast === "function") showToast("Trình duyệt không hỗ trợ Geolocation", "error");
  }
}

async function aiGeocodeStoreAddress() {
  const street = document.getElementById("set-street")?.value || "";
  const ward = document.getElementById("set-ward")?.value || "";
  const district = document.getElementById("set-district")?.value || "";

  const query = \`\${street} \${ward} \${district} Hồ Chí Minh Việt Nam\`.trim();
  if (!street && !ward && !district) {
    if (typeof showToast === "function") showToast("Vui lòng nhập số nhà, tên đường hoặc quận phường trước!", "error");
    return;
  }

  if (typeof showToast === "function") showToast("🤖 AI đang tìm kiếm tọa độ cửa hàng...", "info");

  try {
    const res = await fetch(\`https://nominatim.openstreetmap.org/search?format=json&q=\${encodeURIComponent(query)}&limit=1&accept-language=vi\`);
    const data = await res.json();
    if (data && data.length > 0) {
      currentStorePinLat = parseFloat(data[0].lat);
      currentStorePinLng = parseFloat(data[0].lon);
      const newPos = [currentStorePinLat, currentStorePinLng];
      if (storePinMarker) storePinMarker.setLatLng(newPos);
      if (storePinMap) storePinMap.setView(newPos, 16);
      updateStoreCoordsDisplay();
      if (typeof showToast === "function") showToast("🤖 AI đã tìm thấy vị trí!", "success");
    } else {
      if (typeof showToast === "function") showToast("AI không tìm thấy vị trí chính xác. Vui lòng kéo thả marker trên bản đồ.", "error");
    }
  } catch (err) {
    console.error("AI Geocode Store Error:", err);
    if (typeof showToast === "function") showToast("Lỗi kết nối khi tìm kiếm vị trí.", "error");
  }
}
`;

legacyCode += storePinJsLogic;
fs.writeFileSync(legacyPath, legacyCode, 'utf8');
console.log('legacy.js updated with store pin modal logic.');
