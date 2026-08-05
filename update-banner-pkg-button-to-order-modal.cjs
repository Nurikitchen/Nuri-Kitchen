const fs = require('fs');
const path = require('path');

const legacyPath = path.join(__dirname, 'public', 'legacy.js');
let legacyJs = fs.readFileSync(legacyPath, 'utf8');

// 1. Update window.handleBannerPkgClick definition
const handleBannerPkgClickCode = `
      window.handleBannerPkgClick = function () {
        if (typeof window.closeGrandOpeningPopup === "function") {
          window.closeGrandOpeningPopup();
        }
        setTimeout(() => {
          if (typeof window.openOrderPlatformModal === "function") {
            window.openOrderPlatformModal("grand_opening");
          }
        }, 150);
      };
`;

if (!legacyJs.includes('window.handleBannerPkgClick =')) {
  legacyJs = legacyJs + '\n' + handleBannerPkgClickCode;
  console.log('window.handleBannerPkgClick defined.');
} else {
  // Replace existing definition if any
  legacyJs = legacyJs.replace(/window\.handleBannerPkgClick\s*=\s*function\s*\(\)\s*\{[\s\S]*?\};/g, handleBannerPkgClickCode);
  console.log('window.handleBannerPkgClick updated.');
}

// 2. Update onclick inside renderGrandOpeningModalHTML
const oldBtnClick = `onclick="window.closeGrandOpeningPopup(); window.openPlatformSelectorModal();" class="flex-1 min-w-[180px] bg-[#0f7632] hover:bg-[#0c5c27] text-white px-6 md:px-8 py-3.5 rounded-xl font-bold text-base md:text-lg shadow-md transition-transform hover:-translate-y-1 flex items-center justify-center gap-2 animate-glow-pulse-emerald cursor-pointer"`;

const newBtnClick = `onclick="window.handleBannerPkgClick();" class="flex-1 min-w-[180px] bg-[#0f7632] hover:bg-[#0c5c27] text-white px-6 md:px-8 py-3.5 rounded-xl font-bold text-base md:text-lg shadow-md transition-transform hover:-translate-y-1 flex items-center justify-center gap-2 animate-glow-pulse-emerald cursor-pointer"`;

if (legacyJs.includes(oldBtnClick)) {
  legacyJs = legacyJs.replace(oldBtnClick, newBtnClick);
  console.log('Button onclick updated to window.handleBannerPkgClick().');
}

fs.writeFileSync(legacyPath, legacyJs, 'utf8');
