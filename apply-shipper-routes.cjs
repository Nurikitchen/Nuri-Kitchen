const fs = require('fs');
const path = require('path');

// 1. Update MainContent.html
const mainContentPath = path.join(__dirname, 'src', 'html', 'MainContent.html');
let mainContent = fs.readFileSync(mainContentPath, 'utf8');

const targetHtml = `<option value="ready">✅ Sẵn sàng giao (ready)</option>
                  </select>`;

const replacementHtml = `<option value="ready">✅ Sẵn sàng giao (ready)</option>
                    <option value="all_shipper_routes">🚚 Tuyến đường giao hàng (Tất cả Shipper)</option>
                  </select>`;

if (mainContent.includes(targetHtml)) {
  mainContent = mainContent.replace(targetHtml, replacementHtml);
}

const mapDivTarget = `<div id="customer-density-map" class="h-[400px] w-full rounded-xl bg-slate-100 relative z-0 flex items-center justify-center">
              <div class="text-slate-400 font-medium" id="map-loading-text">
                Đang tải bản đồ...
              </div>
            </div>`;

const mapDivReplacement = `<div id="customer-density-map" class="h-[420px] w-full rounded-xl bg-slate-100 relative z-0 flex items-center justify-center border border-slate-200 shadow-inner">
              <div class="text-slate-400 font-medium" id="map-loading-text">
                Đang tải bản đồ...
              </div>
            </div>
            <!-- Dynamic Route Info Panel -->
            <div id="shipper-route-summary-card" class="mt-4 hidden p-4 bg-slate-900 text-white rounded-xl shadow-lg border border-slate-800 transition-all">
              <div class="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 text-lg">
                    <i class="fa-solid fa-route"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-base text-white flex items-center gap-2" id="route-summary-title">
                      Tuyến đường giao hàng
                    </h4>
                    <p class="text-xs text-slate-400 mt-0.5" id="route-summary-subtitle">Lộ trình Google Maps / OSRM</p>
                  </div>
                </div>
                <button onclick="clearRouteSummaryView()" class="text-slate-400 hover:text-white text-sm bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors" title="Đóng bảng lộ trình">
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3 text-center">
                <div class="bg-white/5 rounded-lg p-2 border border-white/10">
                  <div class="text-[11px] text-slate-400 uppercase font-semibold">Xuất phát</div>
                  <div class="font-bold text-sm text-emerald-400 mt-0.5"><i class="fa-solid fa-store mr-1"></i> Bếp Nuri</div>
                </div>
                <div class="bg-white/5 rounded-lg p-2 border border-white/10">
                  <div class="text-[11px] text-slate-400 uppercase font-semibold">Tổng điểm dừng</div>
                  <div class="font-bold text-sm text-amber-300 mt-0.5" id="route-total-stops">0 đơn</div>
                </div>
                <div class="bg-white/5 rounded-lg p-2 border border-white/10">
                  <div class="text-[11px] text-slate-400 uppercase font-semibold">Tổng quãng đường</div>
                  <div class="font-bold text-sm text-sky-300 mt-0.5" id="route-total-distance">-- km</div>
                </div>
                <div class="bg-white/5 rounded-lg p-2 border border-white/10">
                  <div class="text-[11px] text-slate-400 uppercase font-semibold">Thời gian ước tính</div>
                  <div class="font-bold text-sm text-indigo-300 mt-0.5" id="route-total-time">-- phút</div>
                </div>
              </div>
              <div class="text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                <i class="fa-solid fa-location-arrow text-emerald-400"></i> Trình tự các điểm giao:
              </div>
              <div id="route-stops-sequence" class="flex flex-wrap gap-2 text-xs">
                <!-- Populated via JS -->
              </div>
            </div>`;

if (mainContent.includes(mapDivTarget)) {
  mainContent = mainContent.replace(mapDivTarget, mapDivReplacement);
  fs.writeFileSync(mainContentPath, mainContent, 'utf8');
  console.log('MainContent.html updated.');
} else {
  console.log('mapDivTarget not found in MainContent.html');
}

// 2. Update legacy.js
const legacyPath = path.join(__dirname, 'public', 'legacy.js');
let legacyCode = fs.readFileSync(legacyPath, 'utf8');

// Update renderShippers to add Route button and populate select
const targetRenderShippersBtn = `<button onclick="showShipperQR(\${s.id})" class="text-emerald-500 hover:text-emerald-700 mr-3 transition-colors" title="Mã QR cho Tài xế"><i class="fa-solid fa-qrcode"></i></button>`;
const replacementRenderShippersBtn = `<button onclick="viewShipperRoute(\${s.id})" class="text-amber-500 hover:text-amber-700 mr-3 transition-colors text-sm font-semibold inline-flex items-center gap-1" title="Xem tuyến đường giao hàng"><i class="fa-solid fa-route"></i> Tuyến đường</button>
                              <button onclick="showShipperQR(\${s.id})" class="text-emerald-500 hover:text-emerald-700 mr-3 transition-colors" title="Mã QR cho Tài xế"><i class="fa-solid fa-qrcode"></i></button>`;

if (legacyCode.includes(targetRenderShippersBtn)) {
  legacyCode = legacyCode.replace(targetRenderShippersBtn, replacementRenderShippersBtn);
} else {
  console.log('targetRenderShippersBtn not found');
}

// Inject populateShipperRouteOptions inside renderShippers
const renderShippersStart = `function renderShippers() {
        initShipperMap();`;
const renderShippersReplacement = `function renderShippers() {
        initShipperMap();
        populateShipperRouteOptions();`;

if (legacyCode.includes(renderShippersStart)) {
  legacyCode = legacyCode.replace(renderShippersStart, renderShippersReplacement);
}

// Update filterShipperDensityMap logic
const filterStartTarget = `if (filterVal === "all_pinned") {`;
const filterStartReplacement = `if (filterVal === "all_shipper_routes") {
            drawAllShippersRoutes();
            return;
          } else if (filterVal && filterVal.startsWith("route_")) {
            const sId = filterVal.replace("route_", "");
            drawSingleShipperRoute(sId);
            return;
          } else {
            const card = document.getElementById("shipper-route-summary-card");
            if (card) card.classList.add("hidden");
          }

          if (filterVal === "all_pinned") {`;

if (legacyCode.includes(filterStartTarget)) {
  legacyCode = legacyCode.replace(filterStartTarget, filterStartReplacement);
}

// Append Route functions at the end of legacy.js
const routeFunctionsCode = `

// ==========================================
// SHIPPER ROUTE MAPPING & OSRM LOGIC
// ==========================================
let leafletPolylines = [];

function populateShipperRouteOptions() {
  const filterEl = document.getElementById("density-map-filter");
  if (!filterEl) return;
  
  const currentVal = filterEl.value;
  let html = \`
    <option value="all_pinned">📌 Khách hàng đã ghim vị trí</option>
    <option value="all_active_orders">📦 Tất cả đơn cần giao (Chờ XN / Đang CB / Sẵn sàng)</option>
    <option value="all_shipper_routes">🚚 Tuyến đường giao hàng (Tất cả Shipper)</option>
    <option value="pending">⏳ Chờ xác nhận (pending)</option>
    <option value="processing">🔥 Đang chuẩn bị (processing)</option>
    <option value="ready">✅ Sẵn sàng giao (ready)</option>
  \`;
  
  if (Array.isArray(shippers) && shippers.length > 0) {
    html += \`<optgroup label="🚚 Tuyến đường từng Shipper">\`;
    shippers.forEach(s => {
      const sOrders = (orders || []).filter(o => o.shipperId == s.id && o.status !== "completed" && o.status !== "cancelled");
      html += \`<option value="route_\${s.id}">🛵 Tuyến đường: \${s.name} (\${sOrders.length} đơn)</option>\`;
    });
    html += \`</optgroup>\`;
  }
  
  filterEl.innerHTML = html;
  if ([...filterEl.options].some(o => o.value === currentVal)) {
    filterEl.value = currentVal;
  }
}

function viewShipperRoute(shipperId) {
  populateShipperRouteOptions();
  const filterEl = document.getElementById("density-map-filter");
  if (filterEl) {
    filterEl.value = \`route_\${shipperId}\`;
  }
  filterShipperDensityMap();
  const mapDiv = document.getElementById("customer-density-map");
  if (mapDiv) {
    mapDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function clearRouteSummaryView() {
  const filterEl = document.getElementById("density-map-filter");
  if (filterEl) filterEl.value = "all_pinned";
  const card = document.getElementById("shipper-route-summary-card");
  if (card) card.classList.add("hidden");
  filterShipperDensityMap();
}

function clearMapLayers() {
  if (typeof L !== "undefined" && dashboardMapInst instanceof L.Map) {
    if (Array.isArray(leafletMarkers)) {
      leafletMarkers.forEach(m => dashboardMapInst.removeLayer(m));
    }
    leafletMarkers = [];
    if (Array.isArray(leafletPolylines)) {
      leafletPolylines.forEach(p => dashboardMapInst.removeLayer(p));
    }
    leafletPolylines = [];
  }
}

function calculateDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function sortWaypointsOptimized(startPos, targetOrders) {
  let unvisited = [...targetOrders];
  let curr = { lat: startPos[0], lng: startPos[1] };
  let sorted = [];

  while (unvisited.length > 0) {
    let nearestIdx = -1;
    let minD = Infinity;

    for (let i = 0; i < unvisited.length; i++) {
      const d = calculateDistanceKm(curr.lat, curr.lng, unvisited[i].lat, unvisited[i].lng);
      if (d < minD) {
        minD = d;
        nearestIdx = i;
      }
    }

    if (nearestIdx !== -1) {
      const nextItem = unvisited.splice(nearestIdx, 1)[0];
      sorted.push(nextItem);
      curr = { lat: nextItem.lat, lng: nextItem.lng };
    } else {
      break;
    }
  }

  return sorted;
}

async function fetchOSRMRoute(waypointsCoords) {
  try {
    const coordsStr = waypointsCoords.map(c => \`\${c[0]},\${c[1]}\`).join(';');
    const url = \`https://router.project-osrm.org/route/v1/driving/\${coordsStr}?overview=full&geometries=geojson\`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    if (data.routes && data.routes[0]) {
      const route = data.routes[0];
      const geometry = route.geometry.coordinates.map(c => [c[1], c[0]]);
      return {
        geometry: geometry,
        distanceKm: (route.distance / 1000).toFixed(1),
        durationMin: Math.round(route.duration / 60)
      };
    }
  } catch (err) {
    console.warn("OSRM Route fetch error, using polyline fallback", err);
  }
  return null;
}

function focusMapOnPoint(lat, lng) {
  if (dashboardMapInst) {
    dashboardMapInst.setView([lat, lng], 16);
  }
}

async function drawSingleShipperRoute(shipperId) {
  clearMapLayers();
  const shipper = (shippers || []).find(s => s.id == shipperId);
  if (!shipper) {
    if (typeof showToast === "function") showToast("Không tìm thấy Shipper", "error");
    return;
  }

  const kPos = typeof getKitchenPos === "function" ? getKitchenPos() : [10.7769, 106.7009];
  const card = document.getElementById("shipper-route-summary-card");

  // Store Marker
  const storeIcon = L.divIcon({
    className: 'custom-store-pin',
    html: '<div style="background-color: #ef4444; color: white; border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; font-size: 18px; box-shadow: 0 0 12px rgba(239,68,68,0.8); border: 2px solid white;"><i class="fa-solid fa-store"></i></div>',
    iconSize: [36, 36],
    iconAnchor: [18, 18]
  });
  const storeM = L.marker(kPos, { icon: storeIcon })
    .bindPopup('<b>🏪 Cửa hàng / Bếp trung tâm Nuri</b><br>Xuất phát lộ trình')
    .addTo(dashboardMapInst);
  leafletMarkers.push(storeM);

  const rawOrders = (orders || []).filter(o => o.shipperId == shipperId && o.status !== "completed" && o.status !== "cancelled");

  if (rawOrders.length === 0) {
    if (card) {
      card.classList.remove("hidden");
      document.getElementById("route-summary-title").innerHTML = \`Tuyến đường: <span class="text-emerald-400 font-bold">\${shipper.name}</span>\`;
      document.getElementById("route-summary-subtitle").innerText = \`SĐT: \${shipper.phone} | BKS: \${shipper.plate || '--'}\`;
      document.getElementById("route-total-stops").innerText = "0 đơn";
      document.getElementById("route-total-distance").innerText = "0 km";
      document.getElementById("route-total-time").innerText = "0 phút";
      document.getElementById("route-stops-sequence").innerHTML = \`<span class="text-slate-400 italic">Shipper chưa có đơn hàng nào được phân công.</span>\`;
    }
    dashboardMapInst.setView(kPos, 14);
    return;
  }

  const targetOrders = rawOrders.map(o => {
    let lat = o.lat ? parseFloat(o.lat) : null;
    let lng = o.lng ? parseFloat(o.lng) : null;
    if (!lat || !lng) {
      const cus = (purchasedCustomers || []).find(c => c.id == o.packageCustomerId || c.phone === o.phone);
      if (cus && cus.lat && cus.lng) {
        lat = parseFloat(cus.lat);
        lng = parseFloat(cus.lng);
      }
    }
    if (!lat || !lng) {
      lat = kPos[0] + (Math.random() * 0.03 - 0.015);
      lng = kPos[1] + (Math.random() * 0.03 - 0.015);
    }
    return { ...o, lat, lng };
  });

  const sortedWaypoints = sortWaypointsOptimized(kPos, targetOrders);
  const osrmWaypoints = [[kPos[1], kPos[0]], ...sortedWaypoints.map(w => [w.lng, w.lat])];
  const routeResult = await fetchOSRMRoute(osrmWaypoints);

  let routeLatLngs = [];
  let distStr = "-- km";
  let timeStr = "-- phút";

  if (routeResult && routeResult.geometry && routeResult.geometry.length > 0) {
    routeLatLngs = routeResult.geometry;
    distStr = \`\${routeResult.distanceKm} km\`;
    timeStr = \`\${routeResult.durationMin} phút\`;
  } else {
    routeLatLngs = [kPos, ...sortedWaypoints.map(w => [w.lat, w.lng])];
    let totalD = 0;
    for (let i = 0; i < routeLatLngs.length - 1; i++) {
      totalD += calculateDistanceKm(routeLatLngs[i][0], routeLatLngs[i][1], routeLatLngs[i+1][0], routeLatLngs[i+1][1]);
    }
    distStr = \`\${totalD.toFixed(1)} km (Ước tính)\`;
    timeStr = \`\${Math.round(totalD * 4)} phút\`;
  }

  const routePolyline = L.polyline(routeLatLngs, {
    color: '#6366f1',
    weight: 5,
    opacity: 0.85,
    lineCap: 'round',
    lineJoin: 'round'
  }).addTo(dashboardMapInst);
  leafletPolylines.push(routePolyline);

  let bounds = [kPos];
  let seqHtml = \`<span class="bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded border border-emerald-500/30 flex items-center gap-1 font-semibold"><i class="fa-solid fa-store"></i> Bếp Nuri</span>\`;

  sortedWaypoints.forEach((w, idx) => {
    bounds.push([w.lat, w.lng]);
    const stopNum = idx + 1;

    const stopIcon = L.divIcon({
      className: 'custom-stop-pin',
      html: \`<div style="background-color: #f59e0b; color: white; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 13px; box-shadow: 0 0 10px rgba(245,158,11,0.8); border: 2px solid white;">\${stopNum}</div>\`,
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });

    const itemsStr = (w.items || []).map(i => i.name).join(', ') || 'Suất ăn';
    const m = L.marker([w.lat, w.lng], { icon: stopIcon })
      .bindPopup(\`
        <div class="p-1 min-w-[180px]">
          <div class="font-bold text-slate-800 text-sm border-b pb-1 mb-1">📍 Điểm dừng #\${stopNum} - Đơn #\${w.id}</div>
          <div class="text-xs text-slate-600"><b>Khách hàng:</b> \${w.customerName || '--'}</div>
          <div class="text-xs text-slate-600"><b>SĐT:</b> \${w.phone || '--'}</div>
          <div class="text-xs text-slate-600"><b>Địa chỉ:</b> \${w.address || '--'}</div>
          <div class="text-xs text-slate-600 mt-1"><b>Món:</b> \${itemsStr}</div>
        </div>
      \`)
      .addTo(dashboardMapInst);
    leafletMarkers.push(m);

    seqHtml += \` <i class="fa-solid fa-chevron-right text-slate-500 self-center"></i> 
      <div onclick="focusMapOnPoint(\${w.lat}, \${w.lng})" class="cursor-pointer bg-slate-800 hover:bg-slate-700 text-white px-2.5 py-1 rounded border border-slate-700 flex items-center gap-1.5 transition-colors">
        <span class="w-4 h-4 rounded-full bg-amber-500 text-white font-bold text-[10px] flex items-center justify-center">\${stopNum}</span>
        <span class="font-medium">\${w.customerName || 'Đơn #' + w.id}</span>
      </div>\`;
  });

  if (card) {
    card.classList.remove("hidden");
    document.getElementById("route-summary-title").innerHTML = \`Tuyến đường: <span class="text-emerald-400 font-bold">\${shipper.name}</span>\`;
    document.getElementById("route-summary-subtitle").innerText = \`SĐT: \${shipper.phone} | BKS: \${shipper.plate || '--'}\`;
    document.getElementById("route-total-stops").innerText = \`\${sortedWaypoints.length} đơn hàng\`;
    document.getElementById("route-total-distance").innerText = distStr;
    document.getElementById("route-total-time").innerText = timeStr;
    document.getElementById("route-stops-sequence").innerHTML = seqHtml;
  }

  try {
    dashboardMapInst.fitBounds(bounds, { padding: [50, 50], maxZoom: 16 });
  } catch (e) {
    dashboardMapInst.setView(kPos, 13);
  }
}

async function drawAllShippersRoutes() {
  clearMapLayers();
  const kPos = typeof getKitchenPos === "function" ? getKitchenPos() : [10.7769, 106.7009];
  const card = document.getElementById("shipper-route-summary-card");

  const storeIcon = L.divIcon({
    className: 'custom-store-pin',
    html: '<div style="background-color: #ef4444; color: white; border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; font-size: 18px; box-shadow: 0 0 12px rgba(239,68,68,0.8); border: 2px solid white;"><i class="fa-solid fa-store"></i></div>',
    iconSize: [36, 36],
    iconAnchor: [18, 18]
  });
  const storeM = L.marker(kPos, { icon: storeIcon })
    .bindPopup('<b>🏪 Cửa hàng / Bếp trung tâm Nuri</b><br>Xuất phát lộ trình')
    .addTo(dashboardMapInst);
  leafletMarkers.push(storeM);

  const colors = ["#6366f1", "#10b981", "#f59e0b", "#ec4899", "#3b82f6", "#14b8a6", "#8b5cf6"];
  let bounds = [kPos];
  let totalStopsCount = 0;
  let totalDistKmAcc = 0;
  let seqHtml = \`<span class="bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded border border-emerald-500/30 flex items-center gap-1 font-semibold"><i class="fa-solid fa-store"></i> Bếp Nuri</span>\`;

  for (let sIdx = 0; sIdx < (shippers || []).length; sIdx++) {
    const s = shippers[sIdx];
    const sColor = colors[sIdx % colors.length];

    const rawOrders = (orders || []).filter(o => o.shipperId == s.id && o.status !== "completed" && o.status !== "cancelled");
    if (rawOrders.length === 0) continue;

    const targetOrders = rawOrders.map(o => {
      let lat = o.lat ? parseFloat(o.lat) : null;
      let lng = o.lng ? parseFloat(o.lng) : null;
      if (!lat || !lng) {
        const cus = (purchasedCustomers || []).find(c => c.id == o.packageCustomerId || c.phone === o.phone);
        if (cus && cus.lat && cus.lng) { lat = parseFloat(cus.lat); lng = parseFloat(cus.lng); }
      }
      if (!lat || !lng) {
        lat = kPos[0] + (Math.random() * 0.03 - 0.015);
        lng = kPos[1] + (Math.random() * 0.03 - 0.015);
      }
      return { ...o, lat, lng };
    });

    const sortedWaypoints = sortWaypointsOptimized(kPos, targetOrders);
    const osrmWaypoints = [[kPos[1], kPos[0]], ...sortedWaypoints.map(w => [w.lng, w.lat])];
    const routeResult = await fetchOSRMRoute(osrmWaypoints);

    let routeLatLngs = [];
    if (routeResult && routeResult.geometry) {
      routeLatLngs = routeResult.geometry;
      totalDistKmAcc += parseFloat(routeResult.distanceKm) || 0;
    } else {
      routeLatLngs = [kPos, ...sortedWaypoints.map(w => [w.lat, w.lng])];
    }

    const routePolyline = L.polyline(routeLatLngs, {
      color: sColor,
      weight: 5,
      opacity: 0.85,
      lineCap: 'round',
      lineJoin: 'round'
    }).addTo(dashboardMapInst);
    leafletPolylines.push(routePolyline);

    sortedWaypoints.forEach((w, idx) => {
      bounds.push([w.lat, w.lng]);
      totalStopsCount++;
      const stopNum = idx + 1;

      const stopIcon = L.divIcon({
        className: 'custom-stop-pin',
        html: \`<div style="background-color: \${sColor}; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; box-shadow: 0 0 8px \${sColor}; border: 2px solid white;">\${stopNum}</div>\`,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      });

      const m = L.marker([w.lat, w.lng], { icon: stopIcon })
        .bindPopup(\`
          <div class="p-1 min-w-[180px]">
            <div class="font-bold text-slate-800 text-sm border-b pb-1 mb-1">📍 Shipper: \${s.name} (Điểm #\${stopNum})</div>
            <div class="text-xs text-slate-600"><b>Đơn hàng:</b> #\${w.id}</div>
            <div class="text-xs text-slate-600"><b>Khách:</b> \${w.customerName || '--'} (\${w.phone || '--'})</div>
            <div class="text-xs text-slate-600"><b>Địa chỉ:</b> \${w.address || '--'}</div>
          </div>
        \`)
        .addTo(dashboardMapInst);
      leafletMarkers.push(m);
    });

    seqHtml += \`<div class="w-full flex items-center gap-2 mt-2 pt-2 border-t border-slate-800">
      <span class="w-3 h-3 rounded-full" style="background-color: \${sColor}"></span>
      <span class="font-bold text-white text-xs">\${s.name} (\${sortedWaypoints.length} đơn):</span>
      <span class="text-slate-300 text-xs">\${sortedWaypoints.map((w, i) => \`#\${i+1} \${w.customerName || w.id}\`).join(' ➔ ')}</span>
    </div>\`;
  }

  if (card) {
    card.classList.remove("hidden");
    document.getElementById("route-summary-title").innerHTML = \`Tuyến đường: <span class="text-emerald-400 font-bold">Tất cả Shipper đang giao</span>\`;
    document.getElementById("route-summary-subtitle").innerText = \`Tổng hợp toàn bộ tuyến đường giao hàng\`;
    document.getElementById("route-total-stops").innerText = \`\${totalStopsCount} đơn hàng\`;
    document.getElementById("route-total-distance").innerText = totalDistKmAcc > 0 ? \`\${totalDistKmAcc.toFixed(1)} km\` : \`-- km\`;
    document.getElementById("route-total-time").innerText = totalDistKmAcc > 0 ? \`\${Math.round(totalDistKmAcc * 4)} phút\` : \`-- phút\`;
    document.getElementById("route-stops-sequence").innerHTML = seqHtml;
  }

  try {
    dashboardMapInst.fitBounds(bounds, { padding: [50, 50], maxZoom: 15 });
  } catch (e) {
    dashboardMapInst.setView(kPos, 13);
  }
}
`;

legacyCode += routeFunctionsCode;
fs.writeFileSync(legacyPath, legacyCode, 'utf8');
console.log('legacy.js updated with shipper routes logic.');
