const fs = require('fs');
const path = require('path');

const legacyPath = path.join(__dirname, 'public', 'legacy.js');
let legacyJs = fs.readFileSync(legacyPath, 'utf8');

// 1. Update window.openGrandOpeningPopup to ensure modal exists in DOM
const oldOpenFn = `window.openGrandOpeningPopup = function () {
        const modal = document.getElementById("user-grand-opening-modal");`;

const newOpenFn = `window.openGrandOpeningPopup = function () {
        if (!document.getElementById("user-grand-opening-modal") && typeof window.ensureGrandOpeningModalInDOM === "function") {
          window.ensureGrandOpeningModalInDOM();
        }
        const modal = document.getElementById("user-grand-opening-modal");`;

if (legacyJs.includes(oldOpenFn)) {
  legacyJs = legacyJs.replace(oldOpenFn, newOpenFn);
  console.log('openGrandOpeningPopup updated to ensure modal in DOM.');
}

// 2. Add ensureGrandOpeningModalInDOM & setupHomepageGrandOpeningObserver
const additionalCode = `
      // Helper to ensure Grand Opening Popup Modal is injected into DOM
      window.ensureGrandOpeningModalInDOM = function() {
        if (document.getElementById("user-grand-opening-modal")) return;

        const savedSettings = localStorage.getItem("nutriadmin_settings");
        let settingsObj = savedSettings ? JSON.parse(savedSettings) : {};
        const bannerText = settingsObj.bannerGrandOpeningText || "GRAND OPENING - 15/11/2026";
        const mascotImgSrc = settingsObj.bannerMascotImg || "";

        const modalHTML = \`
          <div id="user-grand-opening-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 opacity-0 pointer-events-none transition-opacity duration-500" onclick="if(event.target === this) window.closeGrandOpeningPopup()">
              <div class="relative w-full max-w-[1152px] mx-4 sm:mx-6 flex flex-col items-center justify-center transform scale-90 translate-y-8 transition-all duration-500" id="user-grand-opening-modal-content">
                  <!-- Close Button -->
                  <button type="button" id="close-user-grand-opening-modal" class="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-slate-500 hover:text-red-500 hover:bg-red-50 shadow-xl z-[60] border-2 border-slate-200 transition-colors text-xl md:text-2xl" onclick="window.closeGrandOpeningPopup()">
                      <i class="fa-solid fa-xmark"></i>
                  </button>

                  <div class="banner-scale-wrapper mt-4 mb-6 relative w-full">
                    <div class="banner-scale bg-[#f3faeb] rounded-3xl overflow-hidden shadow-sm border border-emerald-100 flex flex-col z-0">
                      <div class="flex flex-col md:flex-row items-center p-6 md:p-12 z-10 h-full overflow-visible">
                        <!-- Left Content -->
                        <div class="w-full md:w-7/12 z-10 flex flex-col items-start text-left shrink-0">
                          <div class="inline-flex items-center bg-red-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-br-2xl rounded-tl-2xl text-lg md:text-2xl font-black uppercase tracking-wide mb-4 md:mb-6 transform -skew-x-6 shadow-md">
                            <span class="skew-x-6 flex items-center gap-2 md:gap-3">
                              <i class="fa-solid fa-party-popper text-yellow-300 animate-bounce"></i>
                              <span>\${bannerText}</span>
                            </span>
                          </div>

                          <h2 class="text-3xl md:text-6xl font-black text-[#1b5e20] leading-tight tracking-tight uppercase mb-4 drop-shadow-sm">
                            SIÊU ƯU ĐÃI<br />KHAI TRƯƠNG!
                          </h2>

                          <p class="text-slate-700 text-base md:text-xl font-bold mb-6 max-w-lg leading-relaxed">
                            Ăn ngon mỗi ngày, vóc dáng chuẩn ngay!<br />
                            Cơ hội trải nghiệm thực đơn chuẩn y khoa với mức giá không tưởng.
                          </p>

                          <div class="flex items-center gap-3 mb-6">
                            <i class="fa-solid fa-leaf text-emerald-600"></i>
                            <span class="text-emerald-800 font-bold uppercase tracking-wider text-sm">ƯU ĐÃI KẾT THÚC SAU</span>
                            <i class="fa-solid fa-leaf text-emerald-600"></i>
                          </div>

                          <div class="flex gap-2 md:gap-4 mb-8">
                            <div class="bg-[#1b5e20] text-white px-3 md:px-4 py-2 rounded-xl text-center shadow-md">
                              <span class="block text-xl md:text-3xl font-black">102</span>
                              <span class="text-[10px] md:text-xs font-bold uppercase">NGÀY</span>
                            </div>
                            <div class="bg-[#1b5e20] text-white px-3 md:px-4 py-2 rounded-xl text-center shadow-md">
                              <span class="block text-xl md:text-3xl font-black">07</span>
                              <span class="text-[10px] md:text-xs font-bold uppercase">GIỜ</span>
                            </div>
                            <div class="bg-[#1b5e20] text-white px-3 md:px-4 py-2 rounded-xl text-center shadow-md">
                              <span class="block text-xl md:text-3xl font-black">13</span>
                              <span class="text-[10px] md:text-xs font-bold uppercase">PHÚT</span>
                            </div>
                          </div>

                          <div class="flex flex-wrap gap-4">
                            <button type="button" onclick="window.closeGrandOpeningPopup(); window.openPlatformSelectorModal();" class="bg-[#1b5e20] hover:bg-[#124116] text-white px-6 md:px-8 py-3.5 rounded-2xl font-black text-base md:text-lg shadow-lg hover:scale-105 transition-all flex items-center gap-2">
                              👑 Đăng Ký Mua Gói
                            </button>
                            <button type="button" onclick="window.closeGrandOpeningPopup(); window.openPlatformSelectorModal();" class="bg-white text-[#1b5e20] border-2 border-[#1b5e20] hover:bg-emerald-50 px-6 md:px-8 py-3.5 rounded-2xl font-black text-base md:text-lg shadow-md hover:scale-105 transition-all flex items-center gap-2">
                              ☕ Đăng Ký Đặt 1 Bữa
                            </button>
                          </div>
                        </div>

                        <!-- Right Banner Badge Card -->
                        <div class="w-full md:w-5/12 mt-6 md:mt-0 flex justify-center relative">
                          <div class="bg-white p-6 rounded-3xl shadow-xl border border-emerald-100 flex items-center gap-4 max-w-sm">
                            <div class="bg-red-500 text-white font-black text-2xl p-4 rounded-2xl shrink-0">
                              -15%
                            </div>
                            <div>
                              <h4 class="font-bold text-slate-900 text-lg">Giảm 15% Toàn Menu</h4>
                              <p class="text-sm text-slate-500">Dành cho 50 khách đầu tiên.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        \`;

        document.body.insertAdjacentHTML("beforeend", modalHTML);
      };

      // Homepage Grand Opening Scroll Observer
      window.setupHomepageGrandOpeningObserver = function() {
        const savedSettings = localStorage.getItem("nutriadmin_settings");
        let settingsObj = savedSettings ? JSON.parse(savedSettings) : {};
        const showBanner = settingsObj.bannerGrandOpeningEnabled !== false;

        if (!showBanner) return;
        if (window.hasShownGrandOpeningPopupHomepage) return;

        const pkgSection = document.getElementById("section-dang-ki-goi");
        if (!pkgSection) return;

        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              window.hasShownGrandOpeningPopupHomepage = true;
              if (typeof window.ensureGrandOpeningModalInDOM === "function") {
                window.ensureGrandOpeningModalInDOM();
              }
              setTimeout(() => {
                if (typeof window.openGrandOpeningPopup === "function") {
                  window.openGrandOpeningPopup();
                }
              }, 500);
              observer.disconnect();
            }
          },
          { threshold: 0.15 }
        );

        observer.observe(pkgSection);
      };

      // Trigger observer on load and scroll
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => {
          setTimeout(window.setupHomepageGrandOpeningObserver, 800);
        });
      } else {
        setTimeout(window.setupHomepageGrandOpeningObserver, 800);
      }
      window.addEventListener("scroll", () => {
        if (!window.hasShownGrandOpeningPopupHomepage) {
          window.setupHomepageGrandOpeningObserver();
        }
      }, { passive: true });
`;

if (!legacyJs.includes('setupHomepageGrandOpeningObserver')) {
  legacyJs = legacyJs + '\n' + additionalCode;
  console.log('Homepage Grand Opening observer added to legacy.js');
}

fs.writeFileSync(legacyPath, legacyJs, 'utf8');
