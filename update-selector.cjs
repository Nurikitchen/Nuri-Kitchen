const fs = require('fs');

// 1. Update Modals.html
const modalsPath = 'src/html/Modals.html';
let modalsHtml = fs.readFileSync(modalsPath, 'utf8');

const modalMarker = '<!-- Modal: Platform Selector -->';
const modalIndex = modalsHtml.indexOf(modalMarker);

const newModalHtml = `
    <!-- Modal: Platform Selector -->
    <div id="platform-selector-modal" class="fixed inset-0 z-[110] hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onclick="closePlatformSelectorModal()"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-md border border-slate-100">
            <button type="button" onclick="closePlatformSelectorModal()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full w-8 h-8 flex items-center justify-center transition-colors z-10">
              <i class="fa-solid fa-xmark text-[22.5px] leading-[35px]"></i>
            </button>
            <div class="p-6 md:p-8">
              <h4 class="text-[22.5px] leading-[35px] font-bold text-[#0F172A] mb-6 text-center">Chọn nền tảng đặt hàng</h4>
              <div class="space-y-4">
                  <!-- Nuri Web -->
                  <a href="#" id="btn-nuriweb" onclick="closePlatformSelectorModal(); if(window.switchView) window.switchView('order'); return false;" class="flex items-center gap-4 p-4 rounded-xl border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 transition-colors">
                      <div class="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white text-2xl">
                          <i class="fa-solid fa-globe"></i>
                      </div>
                      <div class="flex-1">
                          <h5 class="font-bold text-slate-800 text-lg">Trang Web Nuri</h5>
                          <p class="text-sm text-slate-500">Đặt trực tiếp & tích điểm</p>
                      </div>
                      <i class="fa-solid fa-chevron-right text-slate-400"></i>
                  </a>
                  
                  <!-- ShopeeFood -->
                  <a href="#" target="_blank" id="btn-shopeefood" class="flex items-center gap-4 p-4 rounded-xl border border-orange-200 bg-orange-50 hover:bg-orange-100 transition-colors">
                      <div class="w-12 h-12 bg-[#ee4d2d] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                          S
                      </div>
                      <div class="flex-1">
                          <h5 class="font-bold text-slate-800 text-lg">ShopeeFood</h5>
                          <p class="text-sm text-slate-500">Giao hàng tận nơi</p>
                      </div>
                      <i class="fa-solid fa-arrow-up-right-from-square text-slate-400"></i>
                  </a>
                  
                  <!-- GrabFood -->
                  <a href="#" target="_blank" id="btn-grabfood" class="flex items-center gap-4 p-4 rounded-xl border border-green-200 bg-green-50 hover:bg-green-100 transition-colors">
                      <div class="w-12 h-12 bg-[#00B14F] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                          G
                      </div>
                      <div class="flex-1">
                          <h5 class="font-bold text-slate-800 text-lg">GrabFood</h5>
                          <p class="text-sm text-slate-500">Giao nhanh hỏa tốc</p>
                      </div>
                      <i class="fa-solid fa-arrow-up-right-from-square text-slate-400"></i>
                  </a>
                  
                  <!-- Xanh SM Food -->
                  <a href="#" target="_blank" id="btn-xanhsm" class="flex items-center gap-4 p-4 rounded-xl border border-cyan-200 bg-cyan-50 hover:bg-cyan-100 transition-colors">
                      <div class="w-12 h-12 bg-[#00d0e2] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                          X
                      </div>
                      <div class="flex-1">
                          <h5 class="font-bold text-slate-800 text-lg">Xanh SM Food</h5>
                          <p class="text-sm text-slate-500">Giao nhanh thân thiện môi trường</p>
                      </div>
                      <i class="fa-solid fa-arrow-up-right-from-square text-slate-400"></i>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
`;

if (modalIndex !== -1) {
    modalsHtml = modalsHtml.substring(0, modalIndex) + newModalHtml;
} else {
    modalsHtml += '\n' + newModalHtml;
}
fs.writeFileSync(modalsPath, modalsHtml);

// 2. Update legacy.js
const legacyPath = 'public/legacy.js';
let legacyJs = fs.readFileSync(legacyPath, 'utf8');

const jsMarker = 'window.openPlatformSelectorModal = function() {';
const jsIndex = legacyJs.indexOf(jsMarker);

const newJsCode = `window.openPlatformSelectorModal = function() {
    const modal = document.getElementById('platform-selector-modal');
    if (modal) {
        try {
            const settingsStr = localStorage.getItem('nutriadmin_settings');
            const settings = settingsStr ? JSON.parse(settingsStr) : {};
            
            const btnNuri = document.getElementById('btn-nuriweb');
            if (btnNuri) {
                if (settings.orderWebsiteEnable === false) btnNuri.style.display = 'none';
                else btnNuri.style.display = 'flex';
            }
            
            const btnShopee = document.getElementById('btn-shopeefood');
            if (btnShopee) {
                if (settings.orderShopeeFoodEnable === false) btnShopee.style.display = 'none';
                else {
                    btnShopee.style.display = 'flex';
                    btnShopee.href = settings.orderShopeeFoodUrl || '#';
                }
            }
            
            const btnGrab = document.getElementById('btn-grabfood');
            if (btnGrab) {
                if (settings.orderGrabFoodEnable === false) btnGrab.style.display = 'none';
                else {
                    btnGrab.style.display = 'flex';
                    btnGrab.href = settings.orderGrabFoodUrl || '#';
                }
            }
            
            const btnXanhsm = document.getElementById('btn-xanhsm');
            if (btnXanhsm) {
                if (settings.orderXanhSMEnable === false) btnXanhsm.style.display = 'none';
                else {
                    btnXanhsm.style.display = 'flex';
                    btnXanhsm.href = settings.orderXanhSMUrl || '#';
                }
            }
        } catch(e) {
            console.error(e);
        }
        modal.classList.remove('hidden');
    }
};

window.closePlatformSelectorModal = function() {
    const modal = document.getElementById('platform-selector-modal');
    if (modal) modal.classList.add('hidden');
};
`;

if (jsIndex !== -1) {
    legacyJs = legacyJs.substring(0, jsIndex) + newJsCode;
} else {
    legacyJs += '\n' + newJsCode;
}
fs.writeFileSync(legacyPath, legacyJs);

console.log('Updated both files successfully!');
