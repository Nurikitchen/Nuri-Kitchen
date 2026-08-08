const fs = require('fs');
const path = require('path');

const legacyPath = path.join(__dirname, 'public', 'legacy.js');
let legacyJs = fs.readFileSync(legacyPath, 'utf8');

// 1. Phóng to Vòng Quay May Mắn Banner
const oldWheelBanner = `<div class="max-w-xl mx-auto bg-slate-900 p-4 md:p-6 rounded-3xl shadow-xl border border-slate-800 mb-4 animate-fade-in flex items-center justify-between cursor-pointer hover:scale-[1.02] transition-transform relative overflow-hidden group" onclick="openWheelPopup()">
                          <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <div class="relative z-10 flex items-center gap-4">
                              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-[0_0_15px_rgba(16,185,129,0.5)] group-hover:animate-pulse">
                                  <i class="fa-solid fa-gift text-xl"></i>
                              </div>
                              <div>
                                  <h4 class="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 mb-1 tracking-wide">VÒNG QUAY MAY MẮN</h4>
                                  <p class="text-sm text-slate-400">Nhấn để quay và nhận mã ưu đãi đặc biệt!</p>
                              </div>
                          </div>
                          <div class="relative z-10 text-slate-500 group-hover:text-emerald-400 transition-colors">
                              <i class="fa-solid fa-chevron-right text-xl"></i>
                          </div>
                      </div>`;

const newWheelBanner = `<div class="w-full max-w-4xl mx-auto bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 p-5 md:p-7 rounded-3xl shadow-2xl border-2 border-emerald-500/40 mb-6 animate-fade-in flex items-center justify-between cursor-pointer hover:scale-[1.01] transition-transform relative overflow-hidden group" onclick="openWheelPopup()">
                          <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <div class="relative z-10 flex items-center gap-5">
                              <div class="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(16,185,129,0.6)] group-hover:animate-pulse shrink-0">
                                  <i class="fa-solid fa-gift text-2xl md:text-3xl"></i>
                              </div>
                              <div>
                                  <h4 class="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300 mb-1 tracking-wide">VÒNG QUAY MAY MẮN</h4>
                                  <p class="text-sm md:text-base text-slate-300">Nhấn để quay và nhận ngay mã ưu đãi đặc biệt!</p>
                              </div>
                          </div>
                          <div class="relative z-10 text-emerald-400 group-hover:translate-x-1 transition-transform pl-4">
                              <i class="fa-solid fa-circle-chevron-right text-2xl md:text-3xl drop-shadow"></i>
                          </div>
                      </div>`;

if (legacyJs.includes(oldWheelBanner)) {
  legacyJs = legacyJs.replace(oldWheelBanner, newWheelBanner);
  console.log('Lucky wheel banner enlarged to max-w-4xl.');
} else {
  console.log('oldWheelBanner target not found');
}

// 2. Mở rộng container gói đăng ký (Chỉ thay đổi kích thước container, giữ nguyên 100% nội dung & hàm bên trong)
const oldPkgContainerStart = `<div class="banner-scale-wrapper relative mb-10 mt-8 w-full">
                              <div class="banner-scale flex flex-col items-center bg-transparent border-0 shadow-none min-h-0 pt-4 pb-4" data-desktop-width="760">
                                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 items-stretch w-[760px] mx-auto text-left px-2 lg:px-0 mt-16">`;

const newPkgContainerStart = `<div class="relative mb-10 mt-8 w-full">
                              <div class="flex flex-col items-center w-full">
                                  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch w-full max-w-6xl mx-auto text-left px-2 lg:px-0 mt-8">`;

if (legacyJs.includes(oldPkgContainerStart)) {
  legacyJs = legacyJs.replace(oldPkgContainerStart, newPkgContainerStart);
  console.log('Package cards container expanded to max-w-6xl.');
} else {
  console.log('oldPkgContainerStart target not found');
}

// 3. Cân đối khung "Chỉ muốn thử trước món ăn hôm nay?" và các nút bấm
const oldCtaSection = `<!-- CTA: Đặt món dùng thử -->
                      <div class="mt-8 mb-12 text-center animate-fade-in border-t border-slate-200 pt-10">
                          <h4 class="text-lg font-bold text-[#0F172A] mb-3">Chỉ muốn thử trước món ăn hôm nay?</h4>
                          <p class="text-sm text-slate-500 mb-6 max-w-md mx-auto">Trải nghiệm ngay hương vị thực đơn Nuri gợi ý. Giao hàng nóng hổi tận nơi trong 30 phút!</p>
                          \${
                            showBanner
                              ? \`
      <button id="cta-order-now-btn" type="button" onclick="window.openPlatformSelectorModal()" class="bg-[#F97316] text-white px-8 py-3.5 rounded-xl font-bold text-lg transition-all lg:hover:-translate-y-1 lg:hover:shadow-lg active:scale-[0.98] lg:hover:bg-[#EA580C] flex items-center justify-center gap-2 mx-auto animate-glow-pulse">
          <i class="fa-solid fa-utensils"></i> Đăng ký đặt 1 bữa
      </button>
      \`
                              : \`
      <button id="cta-order-now-btn" type="button" onclick="openOrderPlatformModal()" class="bg-[#F97316] text-white px-8 py-3.5 rounded-xl font-bold text-lg transition-all lg:hover:-translate-y-1 lg:hover:shadow-lg active:scale-[0.98] lg:hover:bg-[#EA580C] flex items-center justify-center gap-2 mx-auto animate-glow-pulse">
          <i class="fa-solid fa-motorcycle"></i> Đặt món giao ngay
      </button>
      \`
                          }
                      </div>

                      <!-- Zalo Button -->
                      <div class="mt-8 text-center animate-fade-in">
                          <p class="text-sm text-slate-600 font-medium mb-3">Bạn cần chuyên gia tư vấn kỹ hơn?</p>
                          <a href="\${zaloUrl}" target="_blank" class="inline-flex items-center justify-center gap-2 bg-[#0068FF] hover:bg-[#0054cc] text-white px-8 py-3.5 rounded-xl font-bold text-lg transition-all mx-auto transform hover:-translate-y-1 active:scale-95 animate-glow-pulse-blue">
                              <i class="fa-solid fa-comment-dots"></i> Nhắn tin Zalo nhận ưu đãi
                          </a>
                      </div>`;

const newCtaSection = `<!-- CTA: Đặt món dùng thử & Tư vấn Zalo cân đối chiều ngang -->
                      <div class="w-full max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm mt-10 mb-12 text-center animate-fade-in">
                          <h4 class="text-xl md:text-2xl font-extrabold text-slate-900 mb-2">Chỉ muốn thử trước món ăn hôm nay?</h4>
                          <p class="text-sm md:text-base text-slate-500 mb-6 max-w-xl mx-auto">Trải nghiệm ngay hương vị thực đơn Nuri gợi ý. Giao hàng nóng hổi tận nơi trong 30 phút!</p>
                          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mx-auto">
                              \${
                                showBanner
                                  ? \`
          <button id="cta-order-now-btn" type="button" onclick="window.openPlatformSelectorModal()" class="w-full bg-[#F97316] hover:bg-[#EA580C] text-white px-6 py-3.5 rounded-xl font-bold text-base md:text-lg transition-all shadow-md flex items-center justify-center gap-2 animate-glow-pulse cursor-pointer">
              <i class="fa-solid fa-utensils"></i> Đăng ký đặt 1 bữa
          </button>
          \`
                                  : \`
          <button id="cta-order-now-btn" type="button" onclick="openOrderPlatformModal()" class="w-full bg-[#F97316] hover:bg-[#EA580C] text-white px-6 py-3.5 rounded-xl font-bold text-base md:text-lg transition-all shadow-md flex items-center justify-center gap-2 animate-glow-pulse cursor-pointer">
              <i class="fa-solid fa-motorcycle"></i> Đặt món giao ngay
          </button>
          \`
                              }
                              <a href="\${zaloUrl}" target="_blank" class="w-full bg-[#0068FF] hover:bg-[#0054cc] text-white px-6 py-3.5 rounded-xl font-bold text-base md:text-lg transition-all shadow-md flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:scale-95 animate-glow-pulse-blue cursor-pointer">
                                  <i class="fa-solid fa-comment-dots"></i> Nhắn tin Zalo nhận ưu đãi
                              </a>
                          </div>
                      </div>`;

if (legacyJs.includes(oldCtaSection)) {
  legacyJs = legacyJs.replace(oldCtaSection, newCtaSection);
  console.log('CTA order trial section updated with balanced grid layout.');
} else {
  console.log('oldCtaSection target not found in legacy.js');
}

fs.writeFileSync(legacyPath, legacyJs, 'utf8');
