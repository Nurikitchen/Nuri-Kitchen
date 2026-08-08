const fs = require('fs');

const modalHtml = `
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
                  <a href="#" onclick="closePlatformSelectorModal(); if(window.switchView) window.switchView('landing'); return false;" class="flex items-center gap-4 p-4 rounded-xl border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 transition-colors">
                      <div class="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white text-2xl">
                          <i class="fa-solid fa-globe"></i>
                      </div>
                      <div class="flex-1">
                          <h5 class="font-bold text-slate-800 text-lg">Trang Web Nuri</h5>
                          <p class="text-sm text-slate-500">Đặt trực tiếp & tích điểm</p>
                      </div>
                      <i class="fa-solid fa-chevron-right text-slate-400"></i>
                  </a>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
`;
fs.appendFileSync('src/html/Modals.html', '\n' + modalHtml);

const jsCode = `
window.openPlatformSelectorModal = function() {
    const modal = document.getElementById('platform-selector-modal');
    if (modal) {
        try {
            const settingsStr = localStorage.getItem('nuri_settings');
            const settings = settingsStr ? JSON.parse(settingsStr) : {};
            
            const btnShopee = document.getElementById('btn-shopeefood');
            if (btnShopee) {
                if (settings.orderShopeefoodEnable === false) btnShopee.style.display = 'none';
                else {
                    btnShopee.style.display = 'flex';
                    if (settings.orderShopeefoodUrl) btnShopee.href = settings.orderShopeefoodUrl;
                    else btnShopee.href = 'https://shopeefood.vn';
                }
            }
            
            const btnGrab = document.getElementById('btn-grabfood');
            if (btnGrab) {
                if (settings.orderGrabfoodEnable === false) btnGrab.style.display = 'none';
                else {
                    btnGrab.style.display = 'flex';
                    if (settings.orderGrabfoodUrl) btnGrab.href = settings.orderGrabfoodUrl;
                    else btnGrab.href = 'https://food.grab.com/vn/';
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
fs.appendFileSync('modal-js-chunk.js', '\n' + jsCode);
console.log('Appended modal HTML and JS successfully.');
