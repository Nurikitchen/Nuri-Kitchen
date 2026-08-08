const fs = require('fs');
const path = require('path');

const legacyPath = path.join(__dirname, 'public', 'legacy.js');
let legacyJs = fs.readFileSync(legacyPath, 'utf8');

const floatingIconCode = `
      // Global Floating Grand Opening Icon Creator (above Chatbot icon)
      window.ensureFloatingGrandOpeningIconInDOM = function() {
        if (document.getElementById("floating-grand-opening-icon")) return;

        const iconHTML = \`
          <div id="floating-grand-opening-icon" class="fixed bottom-24 md:bottom-28 right-6 z-40 hidden cursor-pointer transform hover:scale-110 transition-all duration-300 shadow-2xl rounded-full" onclick="window.openGrandOpeningPopup()">
              <div class="bg-gradient-to-br from-[#1b5e20] to-emerald-600 text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-2xl md:text-3xl border-2 border-white shadow-[0_0_20px_rgba(16,185,129,0.6)] relative animate-bounce">
                  <i class="fa-solid fa-party-popper text-yellow-300"></i>
                  <span class="absolute -top-1 -left-1 bg-red-600 text-white text-[10px] md:text-xs font-black px-2 py-0.5 rounded-full shadow-md animate-pulse border border-white">-15%</span>
              </div>
          </div>
        \`;

        document.body.insertAdjacentHTML("beforeend", iconHTML);
      };
`;

if (!legacyJs.includes('ensureFloatingGrandOpeningIconInDOM')) {
  legacyJs = legacyJs + '\n' + floatingIconCode;
  console.log('ensureFloatingGrandOpeningIconInDOM added.');
}

// Replace closeGrandOpeningPopup definition
const oldCloseFnRegex = /window\.closeGrandOpeningPopup\s*=\s*function\s*\(\)\s*\{[\s\S]*?\};/g;

const newCloseFn = `window.closeGrandOpeningPopup = function () {
        const modal = document.getElementById("user-grand-opening-modal");
        const content = document.getElementById("user-grand-opening-modal-content");
        
        if (typeof window.ensureFloatingGrandOpeningIconInDOM === "function") {
          window.ensureFloatingGrandOpeningIconInDOM();
        }
        const icon = document.getElementById("floating-grand-opening-icon");

        if (modal && content) {
          modal.classList.add("opacity-0", "pointer-events-none");
          content.classList.add("scale-90", "translate-y-8");

          const savedSettings = localStorage.getItem("nutriadmin_settings");
          let settingsObj = savedSettings ? JSON.parse(savedSettings) : {};
          const showBanner = settingsObj.bannerGrandOpeningEnabled !== false;

          if (showBanner && icon) {
            setTimeout(() => {
              icon.classList.remove("hidden");
              icon.classList.add("animate-fade-in");
            }, 300);
          }
        }
      };`;

if (legacyJs.match(oldCloseFnRegex)) {
  legacyJs = legacyJs.replace(oldCloseFnRegex, newCloseFn);
  console.log('closeGrandOpeningPopup updated to show floating icon on close.');
}

// Replace openGrandOpeningPopup definition
const oldOpenFnRegex = /window\.openGrandOpeningPopup\s*=\s*function\s*\(\)\s*\{[\s\S]*?\};/g;

const newOpenFn = `window.openGrandOpeningPopup = function () {
        const icon = document.getElementById("floating-grand-opening-icon");
        if (icon) {
          icon.classList.add("hidden");
        }

        if (typeof window.ensureGrandOpeningModalInDOM === "function") {
          window.ensureGrandOpeningModalInDOM();
        }
        const modal = document.getElementById("user-grand-opening-modal");
        const content = document.getElementById("user-grand-opening-modal-content");

        if (modal && content) {
          modal.classList.remove("opacity-0", "pointer-events-none");
          content.classList.remove("scale-90", "translate-y-8");

          // Play chime sound effect
          try {
            const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3");
            audio.volume = 0.6;
            audio.play().catch((e) => console.log("Audio play prevented:", e));
          } catch (e) {}
        }
      };`;

if (legacyJs.match(oldOpenFnRegex)) {
  legacyJs = legacyJs.replace(oldOpenFnRegex, newOpenFn);
  console.log('openGrandOpeningPopup updated to hide floating icon and play sound.');
}

fs.writeFileSync(legacyPath, legacyJs, 'utf8');
