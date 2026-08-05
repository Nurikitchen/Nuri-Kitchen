const fs = require('fs');
const path = require('path');

// 1. Update MainContent.html
const mainContentPath = path.join(__dirname, 'src', 'html', 'MainContent.html');
let mainContent = fs.readFileSync(mainContentPath, 'utf8');

const pwaBannerHtml = `

<!-- Banner Thông Báo Cài Đặt PWA trên Di Động -->
<div id="pwa-install-banner" class="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-[999] hidden animate-slide-up">
  <div class="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-emerald-100 dark:border-emerald-900/50 flex flex-col gap-3 relative overflow-hidden">
    <div class="absolute -right-6 -top-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none"></div>
    
    <div class="flex items-start gap-3">
      <!-- PWA Icon -->
      <div class="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white shadow-md border border-white/20 overflow-hidden shrink-0">
        <img id="pwa-banner-icon-img" class="absolute inset-0 w-full h-full object-cover hidden" alt="Nuri PWA Icon">
        <svg id="pwa-banner-icon-svg" class="w-6 h-6 z-10" viewBox="0 0 512 512" fill="#ffffff">
          <path d="M140 300 C140 180, 240 140, 280 0 C280 120, 180 160, 140 300 Z" opacity="0.9"></path>
          <path d="M140 300 C140 180, 40 140, 0 0 C0 120, 100 160, 140 300 Z" opacity="0.9"></path>
        </svg>
      </div>

      <div class="flex-1 min-w-0 pr-6">
        <h4 class="font-bold text-slate-900 dark:text-white text-base leading-tight">Cài đặt Ứng dụng Nuri</h4>
        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
          Thêm Nuri vào màn hình điện thoại giống như app đã cài đặt để nhận tư vấn nhanh nhất!
        </p>
      </div>

      <button type="button" onclick="closePwaInstallBanner()" class="absolute top-3 right-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-full transition-colors">
        <i class="fa-solid fa-xmark text-base"></i>
      </button>
    </div>

    <div class="flex items-center gap-2 pt-1">
      <button type="button" onclick="triggerPwaInstall()" class="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-2.5 px-4 rounded-xl shadow-md transition-all text-center flex items-center justify-center gap-2 cursor-pointer">
        <i class="fa-solid fa-download"></i> Cài đặt ngay
      </button>
      <button type="button" onclick="closePwaInstallBanner()" class="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm py-2.5 px-4 rounded-xl transition-colors cursor-pointer">
        Để sau
      </button>
    </div>
  </div>
</div>
`;

mainContent += pwaBannerHtml;
fs.writeFileSync(mainContentPath, mainContent, 'utf8');
console.log('MainContent.html updated with PWA install banner HTML.');

// 2. Update legacy.js
const legacyPath = path.join(__dirname, 'public', 'legacy.js');
let legacyCode = fs.readFileSync(legacyPath, 'utf8');

const pwaLogicCode = `

// ==========================================
// PWA DYNAMIC ICON SYNC & MOBILE INSTALL BANNER LOGIC
// ==========================================
window.deferredPwaPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  window.deferredPwaPrompt = e;
  checkAndShowPwaInstallBanner();
});

function handlePwaIconUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  if (file.size > 2 * 1024 * 1024) {
    if (typeof showToast === "function") showToast("Vui lòng chọn file hình ảnh nhỏ hơn 2MB", "error");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const base64Icon = e.target.result;
    pwaCustomIcon = base64Icon;
    window.pwaCustomIcon = base64Icon;
    try {
      localStorage.setItem("nutriadmin_pwa_custom_icon", base64Icon);
    } catch (err) {}

    if (typeof clientStateUpdates !== 'undefined') {
      clientStateUpdates.pwaCustomIcon = base64Icon;
      if (!clientStateUpdates.isOverwriteKeys) clientStateUpdates.isOverwriteKeys = [];
      if (!clientStateUpdates.isOverwriteKeys.includes("pwaCustomIcon")) {
        clientStateUpdates.isOverwriteKeys.push("pwaCustomIcon");
      }
    }

    updatePwaIconUI();
    if (typeof showToast === "function") showToast("Đã tải lên và cập nhật Biểu tượng PWA!", "success");
  };
  reader.readAsDataURL(file);
}

function resetPwaIconToDefault() {
  pwaCustomIcon = "";
  window.pwaCustomIcon = "";
  try {
    localStorage.setItem("nutriadmin_pwa_custom_icon", "");
  } catch (e) {}

  if (typeof clientStateUpdates !== 'undefined') {
    clientStateUpdates.pwaCustomIcon = "";
    if (!clientStateUpdates.isOverwriteKeys) clientStateUpdates.isOverwriteKeys = [];
    if (!clientStateUpdates.isOverwriteKeys.includes("pwaCustomIcon")) {
      clientStateUpdates.isOverwriteKeys.push("pwaCustomIcon");
    }
  }

  updatePwaIconUI();
  if (typeof showToast === "function") showToast("Đã khôi phục biểu tượng PWA mặc định!", "info");
}

function updatePwaIconUI() {
  const iconSrc = window.pwaCustomIcon || pwaCustomIcon || "";
  
  // 1. Admin preview image
  const adminImg = document.getElementById("pwa-admin-icon-preview-img");
  const adminSvg = document.getElementById("pwa-admin-icon-preview-svg");
  const resetBtn = document.getElementById("pwa-icon-reset-btn");
  if (adminImg && adminSvg) {
    if (iconSrc) {
      adminImg.src = iconSrc;
      adminImg.classList.remove("hidden");
      adminSvg.classList.add("hidden");
      if (resetBtn) resetBtn.classList.remove("hidden");
    } else {
      adminImg.src = "";
      adminImg.classList.add("hidden");
      adminSvg.classList.remove("hidden");
      if (resetBtn) resetBtn.classList.add("hidden");
    }
  }

  // 2. Mockup preview image
  const mockupImg = document.getElementById("phone-mockup-pwa-icon-img");
  const mockupSvg = document.getElementById("phone-mockup-pwa-icon-svg");
  if (mockupImg && mockupSvg) {
    if (iconSrc) {
      mockupImg.src = iconSrc;
      mockupImg.classList.remove("hidden");
      mockupSvg.classList.add("hidden");
    } else {
      mockupImg.src = "";
      mockupImg.classList.add("hidden");
      mockupSvg.classList.remove("hidden");
    }
  }

  // 3. PWA Install Banner Image
  const bannerImg = document.getElementById("pwa-banner-icon-img");
  const bannerSvg = document.getElementById("pwa-banner-icon-svg");
  if (bannerImg && bannerSvg) {
    if (iconSrc) {
      bannerImg.src = iconSrc;
      bannerImg.classList.remove("hidden");
      bannerSvg.classList.add("hidden");
    } else {
      bannerImg.src = "";
      bannerImg.classList.add("hidden");
      bannerSvg.classList.remove("hidden");
    }
  }

  // 4. Update Favicon & Apple touch icon & Dynamic Manifest
  try {
    const _appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]');
    const _favicon = document.querySelector('link[rel="icon"]');
    const _manifestLink = document.querySelector('link[rel="manifest"]');

    if (iconSrc) {
      if (_appleTouchIcon) _appleTouchIcon.href = iconSrc;
      if (_favicon) {
        _favicon.href = iconSrc;
        _favicon.type = iconSrc.startsWith('data:image/svg') ? 'image/svg+xml' : iconSrc.startsWith('data:image/png') ? 'image/png' : 'image/jpeg';
      }
      if (_manifestLink) {
        const _manifestObj = {
          short_name: "Nuri",
          name: "Nuri - Tư Vấn Dinh Dưỡng",
          description: "Chuyên gia dinh dưỡng ảo & Thực đơn cá nhân hóa của bạn",
          icons: [{ src: iconSrc, type: iconSrc.startsWith('data:image/svg') ? 'image/svg+xml' : 'image/png', sizes: "192x192 512x512", purpose: "any maskable" }],
          start_url: "/?mode=landing",
          background_color: "#f8fafc",
          theme_color: "#10b981",
          display: "standalone",
          orientation: "portrait"
        };
        const _blob = new Blob([JSON.stringify(_manifestObj)], { type: "application/json" });
        _manifestLink.href = URL.createObjectURL(_blob);
      }
    }
  } catch (e) {}
}

function checkAndShowPwaInstallBanner() {
  const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
  const isDismissed = sessionStorage.getItem("nuri_pwa_banner_dismissed");
  if (isDismissed === "true") return;

  const urlParams = new URLSearchParams(window.location.search);
  const currentMode = urlParams.get("mode") || "landing";

  // Check target customer pages
  const isCustomerPage = ["landing", "nutri-landing", "survey", "customer-portal", "customer-app", "customer-login"].includes(currentMode) || currentMode === null;

  if (isMobileDevice && isCustomerPage) {
    const banner = document.getElementById("pwa-install-banner");
    if (banner) {
      updatePwaIconUI();
      banner.classList.remove("hidden");
    }
  }
}

function closePwaInstallBanner() {
  const banner = document.getElementById("pwa-install-banner");
  if (banner) {
    banner.classList.add("hidden");
    sessionStorage.setItem("nuri_pwa_banner_dismissed", "true");
  }
}

async function triggerPwaInstall() {
  if (window.deferredPwaPrompt) {
    window.deferredPwaPrompt.prompt();
    const { outcome } = await window.deferredPwaPrompt.userChoice;
    if (outcome === 'accepted') {
      if (typeof showToast === "function") showToast("Cảm ơn bạn đã cài đặt ứng dụng Nuri!", "success");
      closePwaInstallBanner();
    }
    window.deferredPwaPrompt = null;
  } else {
    // iOS Safari or browser without direct prompt support
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isIOS) {
      alert("Để cài đặt Nuri trên iPhone/iPad:\\n\\n1. Chạm vào nút Chia sẻ (biểu tượng mũi tên đi lên ở góc màn hình)\\n2. Cuộn xuống và chọn 'Thêm vào Màn hình chính' (Add to Home Screen)\\n3. Nhấn 'Thêm'");
    } else {
      alert("Để cài đặt Nuri vào màn hình điện thoại:\\n\\n1. Bấm nút Menu (3 dấu chấm) trên trình duyệt\\n2. Chọn 'Thêm vào màn hình chính' (Add to Home Screen) hoặc 'Cài đặt ứng dụng'.");
    }
  }
}

// Auto check PWA Banner on load
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    updatePwaIconUI();
    checkAndShowPwaInstallBanner();
  }, 1000);
});
`;

legacyCode += pwaLogicCode;
fs.writeFileSync(legacyPath, legacyCode, 'utf8');
console.log('legacy.js updated with PWA icon & banner logic.');
