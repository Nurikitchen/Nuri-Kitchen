const fs = require('fs');
const path = require('path');

const legacyPath = path.join(__dirname, 'public', 'legacy.js');
let legacyJs = fs.readFileSync(legacyPath, 'utf8');

// 1. Equalize Package 3 size by disabling scale(1.05) on active package
const targetActivePkgCssDesktop = `@media (min-width: 768px) {
                              .pkg-label.active-pkg {
                                  transform: scale(1.05);
                                  z-index: 10;
                              }
                          }`;

const newActivePkgCssDesktop = `@media (min-width: 768px) {
                              .pkg-label.active-pkg {
                                  transform: none !important;
                                  z-index: 10;
                              }
                          }`;

if (legacyJs.includes(targetActivePkgCssDesktop)) {
  legacyJs = legacyJs.replace(targetActivePkgCssDesktop, newActivePkgCssDesktop);
  console.log('Disabled scale(1.05) on desktop active package.');
} else {
  console.log('targetActivePkgCssDesktop not found');
}

const targetActivePkgCssMobile = `@media (max-width: 767px) {
                              .pkg-label.active-pkg {
                                  transform: scale(1.05) translateY(-5px) !important;
                                  margin-top: -16px !important;
                                  margin-bottom: 16px !important;
                              }
                          }`;

const newActivePkgCssMobile = `@media (max-width: 767px) {
                              .pkg-label.active-pkg {
                                  transform: none !important;
                                  margin-top: 0 !important;
                                  margin-bottom: 0 !important;
                              }
                          }`;

if (legacyJs.includes(targetActivePkgCssMobile)) {
  legacyJs = legacyJs.replace(targetActivePkgCssMobile, newActivePkgCssMobile);
  console.log('Disabled scale(1.05) on mobile active package.');
} else {
  console.log('targetActivePkgCssMobile not found');
}

// 2. Equalize button sizes ("XEM MENU ĐẦY ĐỦ" and "ĐĂNG KÝ GÓI")
const targetButtonsHtml = `<div class="mt-8 flex flex-col md:flex-row justify-center items-center gap-4 w-full relative z-20 pb-8">
            <button type="button" onclick="window.openPlatformSelectorModal()" class="animate-attention-glow-shake relative group/order-btn overflow-hidden w-full md:w-auto bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black text-lg py-3.5 px-8 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.6)] hover:shadow-[0_0_40px_rgba(245,158,11,0.9)] border-2 border-amber-300 z-20 flex-1 max-w-[250px]">
              <span class="absolute inset-0 w-full h-full rounded-full opacity-30 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none"></span>
              <span class="relative flex items-center justify-center gap-2">
                <i class="fa-solid fa-gift text-amber-100 animate-bounce text-xl"></i>
                ĐĂNG KÝ GÓI
              </span>
            </button>

            <button type="button" onclick="openPublicMenu()" class="relative group/menu-btn overflow-hidden w-full md:w-auto bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black text-lg py-3.5 px-8 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:shadow-[0_0_40px_rgba(16,185,129,0.8)] border-2 border-emerald-300 z-20 flex-1 max-w-[250px]">
              <span class="absolute inset-0 w-full h-full rounded-full opacity-30 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none"></span>
              <span class="relative flex items-center justify-center gap-2">
                <i class="fa-solid fa-utensils text-emerald-100 text-xl"></i>
                XEM MENU ĐẦY ĐỦ
              </span>
            </button>
          </div>`;

const newEqualButtonsHtml = `<div class="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-xl mx-auto relative z-20 pb-8">
            <button type="button" onclick="window.openPlatformSelectorModal()" class="animate-attention-glow-shake relative group/order-btn overflow-hidden w-full sm:w-64 h-14 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black text-base md:text-lg rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.6)] hover:shadow-[0_0_40px_rgba(245,158,11,0.9)] border-2 border-amber-300 z-20 shrink-0 flex items-center justify-center cursor-pointer">
              <span class="absolute inset-0 w-full h-full rounded-full opacity-30 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none"></span>
              <span class="relative flex items-center justify-center gap-2">
                <i class="fa-solid fa-gift text-amber-100 animate-bounce text-xl"></i>
                ĐĂNG KÝ GÓI
              </span>
            </button>

            <button type="button" onclick="openPublicMenu()" class="relative group/menu-btn overflow-hidden w-full sm:w-64 h-14 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black text-base md:text-lg rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:shadow-[0_0_40px_rgba(16,185,129,0.8)] border-2 border-emerald-300 z-20 shrink-0 flex items-center justify-center cursor-pointer">
              <span class="absolute inset-0 w-full h-full rounded-full opacity-30 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none"></span>
              <span class="relative flex items-center justify-center gap-2">
                <i class="fa-solid fa-utensils text-emerald-100 text-xl"></i>
                XEM MENU ĐẦY ĐỦ
              </span>
            </button>
          </div>`;

if (legacyJs.includes(targetButtonsHtml)) {
  legacyJs = legacyJs.replace(targetButtonsHtml, newEqualButtonsHtml);
  console.log('Action buttons equalized.');
} else {
  console.log('targetButtonsHtml not found');
}

fs.writeFileSync(legacyPath, legacyJs, 'utf8');
