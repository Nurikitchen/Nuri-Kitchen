const fs = require('fs');
const path = require('path');

const legacyPath = path.join(__dirname, 'public', 'legacy.js');
let legacyJs = fs.readFileSync(legacyPath, 'utf8');

// Replace openGrandOpeningPopup and ensureGrandOpeningModalInDOM with 100% dynamic rendering logic
const oldEnsureBlockRegex = /\/\/ Helper to ensure Grand Opening Popup Modal is injected into DOM[\s\S]*?window\.setupHomepageGrandOpeningObserver =/g;

const newDynamicBlock = `// Dynamic Grand Opening Modal Template (100% synchronized with Web Admin)
      window.renderGrandOpeningModalHTML = function () {
        const savedSettings = localStorage.getItem("nutriadmin_settings");
        let settingsObj = savedSettings ? JSON.parse(savedSettings) : {};

        const bannerText = settingsObj.bannerGrandOpeningText || "GRAND OPENING - 15/11/2026";
        const bannerTexts = settingsObj.bannerTexts || {};

        function getBannerText(id, defaultVal) {
          return bannerTexts[id] || defaultVal;
        }

        const bannerImgTop = settingsObj.bannerImgTop || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80";
        const bannerImgBottom = settingsObj.bannerImgBottom || "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80";

        return \`
          <div id="user-grand-opening-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 opacity-0 pointer-events-none transition-opacity duration-500" onclick="if(event.target === this) window.closeGrandOpeningPopup()">
              <div class="relative w-full max-w-[1152px] mx-4 sm:mx-6 flex flex-col items-center justify-center transform scale-90 translate-y-8 transition-all duration-500" id="user-grand-opening-modal-content">
                  <!-- Close Button -->
                  <button type="button" id="close-user-grand-opening-modal" class="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-slate-500 hover:text-red-500 hover:bg-red-50 shadow-xl z-[60] border-2 border-slate-200 transition-colors text-xl md:text-2xl" onclick="window.closeGrandOpeningPopup()">
                      <i class="fa-solid fa-xmark"></i>
                  </button>

                  <!-- GRAND OPENING BANNER WRAPPER -->
                  <div class="banner-scale-wrapper mt-4 mb-6 relative w-full">
                    <div class="banner-scale bg-[#f3faeb] rounded-3xl overflow-hidden shadow-sm border border-emerald-100 flex flex-col z-0">
                      <!-- Main Content Area -->
                      <div class="flex flex-col md:flex-row items-center p-6 md:p-12 z-10 h-full overflow-visible">
                        <!-- Left Content -->
                        <div class="w-full md:w-7/12 z-10 flex flex-col items-start text-left shrink-0">
                          <!-- Ribbon -->
                          <div class="inline-flex items-center bg-red-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-br-2xl rounded-tl-2xl text-lg md:text-2xl font-black uppercase tracking-wide mb-4 md:mb-6 transform -skew-x-6 shadow-md">
                            <span class="skew-x-6 flex items-center gap-2 md:gap-3">
                              <i class="fa-solid fa-party-popper text-yellow-300 animate-bounce"></i>
                              <span id="user-banner-grand-opening-text">\${bannerText}</span>
                            </span>
                          </div>

                          <!-- Main Title -->
                          <h2 class="text-3xl md:text-6xl font-black uppercase leading-[1.1] mb-4 md:mb-6 tracking-tight">
                            <span id="user-banner-title1" class="text-[#1b5e20] block">SIÊU ƯU ĐÃI</span>
                            <span id="user-banner-title2" class="text-slate-900 block drop-shadow-sm">KHAI TRƯƠNG!</span>
                          </h2>

                          <!-- Subtitle -->
                          <p id="user-banner-subtitle" class="text-slate-700 text-base md:text-xl font-medium mb-6 max-w-lg leading-relaxed">
                            \${getBannerText("user-banner-subtitle", "Ăn ngon mỗi ngày, vóc dáng chuẩn ngay! Cơ hội trải nghiệm thực đơn chuẩn y khoa với mức giá không tưởng.")}
                          </p>

                          <!-- Countdown section -->
                          <div class="mb-6 md:mb-8 w-full flex flex-col items-start shrink-0">
                            <div class="flex items-center gap-2 text-[#2e7d32] font-bold text-xs md:text-sm mb-3 uppercase tracking-wider">
                              <i class="fa-solid fa-leaf text-emerald-500"></i>
                              <span id="user-banner-cd-text">ƯU ĐÃI KẾT THÚC SAU</span>
                              <i class="fa-solid fa-leaf text-emerald-500 transform scale-x-[-1]"></i>
                            </div>
                            <div class="flex items-center justify-start gap-2 md:gap-4">
                              <!-- Day -->
                              <div class="bg-[#1a3a2a] text-white rounded-2xl w-14 h-14 md:w-20 md:h-20 flex flex-col items-center justify-center shadow-md border border-[#2a4a3a] relative overflow-hidden group">
                                <span id="user-banner-cd-day" class="text-xl md:text-3xl font-black text-white relative z-10">102</span>
                                <span class="text-[9px] md:text-xs font-bold mt-0.5 text-emerald-200 relative z-10">NGÀY</span>
                              </div>
                              <span class="text-xl md:text-3xl font-black text-[#1a3a2a] animate-pulse pb-2">:</span>
                              <!-- Hour -->
                              <div class="bg-[#1a3a2a] text-white rounded-2xl w-14 h-14 md:w-20 md:h-20 flex flex-col items-center justify-center shadow-md border border-[#2a4a3a] relative overflow-hidden group">
                                <span id="user-banner-cd-hour" class="text-xl md:text-3xl font-black text-white relative z-10">07</span>
                                <span class="text-[9px] md:text-xs font-bold mt-0.5 text-emerald-200 relative z-10">GIỜ</span>
                              </div>
                              <span class="text-xl md:text-3xl font-black text-[#1a3a2a] animate-pulse pb-2">:</span>
                              <!-- Minute -->
                              <div class="bg-[#1a3a2a] text-white rounded-2xl w-14 h-14 md:w-20 md:h-20 flex flex-col items-center justify-center shadow-md border border-[#2a4a3a] relative overflow-hidden group">
                                <span id="user-banner-cd-minute" class="text-xl md:text-3xl font-black text-white relative z-10">13</span>
                                <span class="text-[9px] md:text-xs font-bold mt-0.5 text-emerald-200 relative z-10">PHÚT</span>
                              </div>
                            </div>
                          </div>

                          <!-- Buttons -->
                          <div class="flex flex-wrap gap-3 md:gap-4 w-full">
                            <button type="button" onclick="window.closeGrandOpeningPopup(); window.openPlatformSelectorModal();" class="flex-1 min-w-[180px] bg-[#0f7632] hover:bg-[#0c5c27] text-white px-6 md:px-8 py-3.5 rounded-xl font-bold text-base md:text-lg shadow-md transition-transform hover:-translate-y-1 flex items-center justify-center gap-2 animate-glow-pulse-emerald cursor-pointer">
                              <i class="fa-solid fa-crown text-yellow-300 animate-bounce"></i>
                              <span id="user-banner-btn1">Đăng Ký Mua Gói</span>
                            </button>
                            <button type="button" onclick="window.closeGrandOpeningPopup(); window.openPlatformSelectorModal();" class="flex-1 min-w-[180px] bg-white hover:bg-slate-50 text-[#0f7632] border-2 border-[#0f7632] px-6 md:px-8 py-3.5 rounded-xl font-bold text-base md:text-lg shadow-sm transition-all hover:-translate-y-1 flex items-center justify-center gap-2 hover:shadow-md cursor-pointer">
                              <i class="fa-solid fa-bell-concierge animate-bounce"></i>
                              <span id="user-banner-btn2">Đăng Ký Đặt 1 Bữa</span>
                            </button>
                          </div>
                        </div>

                        <!-- Right Images & Badges -->
                        <div class="w-full md:w-5/12 relative h-[300px] md:h-[450px] mt-8 md:mt-0 z-10 flex justify-center md:justify-end shrink-0">
                          <!-- Top Food Image -->
                          <img id="user-banner-img-banner-top" src="\${bannerImgTop}" alt="Healthy Meal Box" class="absolute top-0 right-4 md:right-0 w-56 md:w-80 h-40 md:h-56 object-cover rounded-3xl shadow-2xl border-4 md:border-[6px] border-white rotate-3 z-20" />

                          <!-- Bottom Food Image -->
                          <img id="user-banner-img-banner-bottom" src="\${bannerImgBottom}" alt="Healthy Beef Box" class="absolute bottom-0 right-12 md:right-16 w-56 md:w-80 h-40 md:h-56 object-cover rounded-3xl shadow-2xl border-4 md:border-[6px] border-white -rotate-6 z-10" />

                          <!-- Circle Badge -->
                          <div class="absolute top-1/4 -right-2 md:-right-10 bg-[#165a25] text-white w-28 h-28 md:w-36 md:h-36 rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-[#f3faeb] z-30 transform hover:scale-105 transition-transform animate-[bounce_3s_infinite]">
                            <span id="user-banner-badge1-line1" class="text-[10px] md:text-xs font-bold uppercase mb-0.5 md:mb-1 text-emerald-100 tracking-wider">Hiện chỉ còn</span>
                            <span id="user-banner-badge1-line2" class="text-4xl md:text-6xl font-black text-yellow-400 leading-none" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3)">19</span>
                            <span id="user-banner-badge1-line3" class="text-xs md:text-sm font-bold mt-0.5 md:mt-1 tracking-widest">SLOT!</span>
                          </div>

                          <!-- Center Banner Badge -->
                          <div class="absolute top-[45%] -left-4 md:-left-16 transform -translate-y-1/2 bg-white rounded-2xl p-3 md:p-5 shadow-xl border border-emerald-100 flex items-center gap-3 md:gap-4 z-30 w-[280px] md:w-[340px]">
                            <div id="user-banner-badge2-percent" class="bg-red-600 text-white p-3 md:p-4 rounded-xl font-black text-2xl md:text-3xl flex-shrink-0 shadow-inner">
                              \${getBannerText("user-banner-badge2-percent", "-15%")}
                            </div>
                            <div>
                              <div id="user-banner-badge2-line1" class="font-bold text-slate-800 text-sm md:text-base leading-tight mb-1">
                                \${getBannerText("user-banner-badge2-line1", "Giảm 15% Toàn Menu")}
                              </div>
                              <div id="user-banner-badge2-line2" class="text-xs text-slate-500 leading-snug">
                                \${getBannerText("user-banner-badge2-line2", 'Dành cho <span class="text-[#d97706] font-bold">50 khách</span> đầu tiên.')}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        \`;
      };

      window.ensureGrandOpeningModalInDOM = function() {
        const existing = document.getElementById("user-grand-opening-modal");
        if (existing) existing.remove();
        document.body.insertAdjacentHTML("beforeend", window.renderGrandOpeningModalHTML());
      };

      window.openGrandOpeningPopup = function () {
        window.ensureGrandOpeningModalInDOM();
        const modal = document.getElementById("user-grand-opening-modal");
        const content = document.getElementById("user-grand-opening-modal-content");

        if (modal && content) {
          modal.classList.remove("opacity-0", "pointer-events-none");
          content.classList.remove("scale-90", "translate-y-8");

          // Play chime notification sound
          try {
            const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3");
            audio.volume = 0.6;
            audio.play().catch((e) => console.log("Audio play prevented:", e));
          } catch (e) {}
        }
      };

      window.setupHomepageGrandOpeningObserver =`;

if (legacyJs.match(oldEnsureBlockRegex)) {
  legacyJs = legacyJs.replace(oldEnsureBlockRegex, newDynamicBlock);
  console.log('legacy.js updated with 100% dynamic grand opening popup & sound effect.');
} else {
  console.log('oldEnsureBlockRegex not found, appending dynamic block...');
  legacyJs = legacyJs + '\n' + newDynamicBlock + ' window.setupHomepageGrandOpeningObserver =';
}

fs.writeFileSync(legacyPath, legacyJs, 'utf8');
