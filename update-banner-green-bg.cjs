const fs = require('fs');
const path = require('path');

const mainContentPath = path.join(__dirname, 'src', 'html', 'MainContent.html');
let mainContent = fs.readFileSync(mainContentPath, 'utf8');

const targetOldBannerBg = `<div id="customer-portal-features-banner" class="mt-12 w-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-[32px] p-6 md:p-10 text-white shadow-2xl border border-indigo-800/60 relative overflow-hidden">
              <div class="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>
              <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>`;

const newGreenBannerBg = `<div id="customer-portal-features-banner" class="mt-12 w-full bg-gradient-to-br from-emerald-900 via-teal-950 to-emerald-900 rounded-[32px] p-6 md:p-10 text-white shadow-2xl border border-emerald-700/50 relative overflow-hidden">
              <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/food.png')] opacity-15 pointer-events-none"></div>
              <div class="absolute -top-24 -right-24 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none"></div>
              <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl pointer-events-none"></div>`;

if (mainContent.includes(targetOldBannerBg)) {
  mainContent = mainContent.replace(targetOldBannerBg, newGreenBannerBg);
  fs.writeFileSync(mainContentPath, mainContent, 'utf8');
  console.log('MainContent.html updated with green background & food texture overlay.');
} else {
  console.log('targetOldBannerBg not found in MainContent.html');
}
