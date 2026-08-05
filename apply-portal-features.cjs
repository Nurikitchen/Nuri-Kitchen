const fs = require('fs');
const path = require('path');

// 1. Update MainContent.html
const mainContentPath = path.join(__dirname, 'src', 'html', 'MainContent.html');
let mainContent = fs.readFileSync(mainContentPath, 'utf8');

const targetLocation = `<div class="relative bg-white dark:bg-slate-800 rounded-[32px] overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm text-center group hover:border-amber-200 dark:hover:border-amber-800 transition-colors flex flex-col justify-between pb-8">
                <div>
                  <div class="relative w-full h-[180px] overflow-hidden mb-6" style="border-bottom-left-radius: 50% 15%; border-bottom-right-radius: 50% 15%;">
                    <img src="https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&amp;fit=crop&amp;w=600&amp;q=80" alt="Tự Tạo Món (Self-Mix)" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerpolicy="no-referrer">
                    <div class="absolute inset-0 bg-amber-900/20 pointer-events-none"></div>
                  </div>
                  <div class="px-6">
                    <h3 class="text-[25px] leading-[35px] font-bold text-slate-900 dark:text-white mb-3">Tự Tạo Món (Self-Mix)</h3>
                    <p class="text-slate-500 dark:text-slate-400 leading-relaxed text-[17.5px] leading-[25px]"><span class="font-semibold text-amber-600 dark:text-amber-400">Khác biệt độc quyền:</span> Trái ngược hoàn toàn với các đơn vị gói ăn truyền thống có thực đơn cố định không thể thay đổi, Nuri cho phép bạn tự do chọn lựa từng món riêng, tùy biến linh hoạt theo sở thích cá nhân.</p>
                  </div>
                </div>
              </div>
            </div>`;

const bannerComponentHtml = `<div class="relative bg-white dark:bg-slate-800 rounded-[32px] overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm text-center group hover:border-amber-200 dark:hover:border-amber-800 transition-colors flex flex-col justify-between pb-8">
                <div>
                  <div class="relative w-full h-[180px] overflow-hidden mb-6" style="border-bottom-left-radius: 50% 15%; border-bottom-right-radius: 50% 15%;">
                    <img src="https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&amp;fit=crop&amp;w=600&amp;q=80" alt="Tự Tạo Món (Self-Mix)" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerpolicy="no-referrer">
                    <div class="absolute inset-0 bg-amber-900/20 pointer-events-none"></div>
                  </div>
                  <div class="px-6">
                    <h3 class="text-[25px] leading-[35px] font-bold text-slate-900 dark:text-white mb-3">Tự Tạo Món (Self-Mix)</h3>
                    <p class="text-slate-500 dark:text-slate-400 leading-relaxed text-[17.5px] leading-[25px]"><span class="font-semibold text-amber-600 dark:text-amber-400">Khác biệt độc quyền:</span> Trái ngược hoàn toàn với các đơn vị gói ăn truyền thống có thực đơn cố định không thể thay đổi, Nuri cho phép bạn tự do chọn lựa từng món riêng, tùy biến linh hoạt theo sở thích cá nhân.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Ô chữ nhật ngang: Giới thiệu tính năng Trang cá nhân khách hàng & Hoạt ảnh động -->
            <div id="customer-portal-features-banner" class="mt-12 w-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-[32px] p-6 md:p-10 text-white shadow-2xl border border-indigo-800/60 relative overflow-hidden">
              <div class="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>
              <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

              <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-10">
                
                <!-- Cột Trái: Sơ đồ quy trình & Mô tả tính năng -->
                <div class="w-full lg:w-7/12 flex flex-col justify-between">
                  <div>
                    <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs md:text-sm font-bold uppercase tracking-wider mb-4">
                      <i class="fa-solid fa-mobile-screen-button"></i> Độc Quyền Trên App / Trang Cá Nhân
                    </div>
                    <h3 class="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight mb-3">
                      Quản lý Gói Ăn & Dinh Dưỡng Thông Minh 360°
                    </h3>
                    <p class="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                      Trang cá nhân giúp bạn chủ động hoàn toàn lộ trình ăn uống: Xem thực đơn, linh hoạt đổi món theo khẩu vị, theo dõi Calo/Macro chuẩn xác và nhận thông báo giao hàng realtime.
                    </p>
                  </div>

                  <!-- Sơ đồ quy trình 4 bước tương tác (Process Flowchart Diagram) -->
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    <!-- Step 1 -->
                    <div onclick="setPortalShowcaseStep(0)" id="portal-step-btn-0" class="portal-step-card cursor-pointer p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-emerald-500/50 transition-all flex flex-col items-center text-center group">
                      <div class="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-sm mb-2 group-hover:scale-110 transition-transform shadow-md">
                        1
                      </div>
                      <span class="text-xs font-bold text-white leading-snug">Đăng nhập PWA App</span>
                      <span class="text-[10px] text-slate-300 mt-1">1-Chạm trên ĐT</span>
                    </div>

                    <!-- Step 2 -->
                    <div onclick="setPortalShowcaseStep(1)" id="portal-step-btn-1" class="portal-step-card cursor-pointer p-3 rounded-2xl bg-white/5 hover:bg-white/15 border border-white/10 transition-all flex flex-col items-center text-center group">
                      <div class="w-9 h-9 rounded-xl bg-slate-700 text-slate-300 flex items-center justify-center font-bold text-sm mb-2 group-hover:scale-110 transition-transform">
                        2
                      </div>
                      <span class="text-xs font-bold text-slate-300 leading-snug">Lịch & Đổi món</span>
                      <span class="text-[10px] text-slate-400 mt-1">Linh hoạt khẩu vị</span>
                    </div>

                    <!-- Step 3 -->
                    <div onclick="setPortalShowcaseStep(2)" id="portal-step-btn-2" class="portal-step-card cursor-pointer p-3 rounded-2xl bg-white/5 hover:bg-white/15 border border-white/10 transition-all flex flex-col items-center text-center group">
                      <div class="w-9 h-9 rounded-xl bg-slate-700 text-slate-300 flex items-center justify-center font-bold text-sm mb-2 group-hover:scale-110 transition-transform">
                        3
                      </div>
                      <span class="text-xs font-bold text-slate-300 leading-snug">Theo dõi Calo</span>
                      <span class="text-[10px] text-slate-400 mt-1">Biểu đồ dinh dưỡng</span>
                    </div>

                    <!-- Step 4 -->
                    <div onclick="setPortalShowcaseStep(3)" id="portal-step-btn-3" class="portal-step-card cursor-pointer p-3 rounded-2xl bg-white/5 hover:bg-white/15 border border-white/10 transition-all flex flex-col items-center text-center group">
                      <div class="w-9 h-9 rounded-xl bg-slate-700 text-slate-300 flex items-center justify-center font-bold text-sm mb-2 group-hover:scale-110 transition-transform">
                        4
                      </div>
                      <span class="text-xs font-bold text-slate-300 leading-snug">Giao hàng & Tích điểm</span>
                      <span class="text-[10px] text-slate-400 mt-1">Realtime Shipper</span>
                    </div>
                  </div>

                  <!-- CTA Button & Controls -->
                  <div class="flex flex-wrap items-center gap-4">
                    <button onclick="openCustomerPortalDemo()" class="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold rounded-2xl text-sm md:text-base shadow-lg shadow-emerald-500/25 transition-all flex items-center gap-2 cursor-pointer">
                      <i class="fa-solid fa-circle-play"></i> Trải nghiệm Trang cá nhân ngay
                    </button>
                    <button onclick="togglePortalShowcaseAutoPlay()" id="btn-portal-showcase-autoplay" class="px-4 py-3 bg-white/10 hover:bg-white/20 text-slate-200 font-semibold rounded-2xl text-xs md:text-sm transition-all flex items-center gap-2 border border-white/10 cursor-pointer">
                      <i class="fa-solid fa-pause"></i> Tự động phát hoạt ảnh
                    </button>
                  </div>
                </div>

                <!-- Cột Phải: Khung mô phỏng màn hình App động (Interactive Live Mockup) -->
                <div class="w-full lg:w-5/12 flex justify-center">
                  <div class="relative w-full max-w-[320px] aspect-[9/18] bg-slate-950 rounded-[40px] p-3 shadow-2xl border-4 border-slate-800 flex flex-col overflow-hidden">
                    <!-- Phone Notch / Camera -->
                    <div class="w-32 h-4 bg-slate-900 rounded-b-2xl mx-auto flex items-center justify-center gap-1 z-30 mb-2">
                      <div class="w-2.5 h-2.5 rounded-full bg-slate-950"></div>
                      <div class="w-2 h-2 rounded-full bg-indigo-950"></div>
                    </div>

                    <!-- App Screen Simulator Container -->
                    <div class="flex-1 bg-slate-900 rounded-[28px] p-4 flex flex-col justify-between relative overflow-hidden border border-slate-800/80">
                      
                      <!-- Dynamic Step Screen Content -->
                      <div id="portal-mockup-screen" class="transition-all duration-500 ease-in-out">
                        <!-- Step 0 Screen: PWA Login & Home -->
                        <div id="mockup-step-0" class="step-mockup-panel space-y-3">
                          <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                            <div class="flex items-center gap-2">
                              <div class="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xs">
                                🥗
                              </div>
                              <div>
                                <h5 class="text-xs font-bold text-white">Chào Nguyễn Văn A</h5>
                                <p class="text-[10px] text-emerald-400 font-medium">● Gói EatClean 21 Ngày</p>
                              </div>
                            </div>
                            <span class="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full">PWA App</span>
                          </div>
                          
                          <div class="bg-gradient-to-br from-emerald-600/30 to-teal-600/20 p-3 rounded-2xl border border-emerald-500/30 text-center">
                            <i class="fa-solid fa-mobile-screen-button text-2xl text-emerald-400 mb-1"></i>
                            <h6 class="text-xs font-bold text-white">Đã Cài Đặt PWA Màn Hình Chính</h6>
                            <p class="text-[10px] text-slate-300 mt-1">Truy cập 1-chạm không cần qua trình duyệt web</p>
                          </div>

                          <div class="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700 text-xs flex justify-between items-center">
                            <span class="text-slate-300">Đã hoàn thành:</span>
                            <span class="font-bold text-amber-400">12 / 21 Ngày giao</span>
                          </div>
                        </div>

                        <!-- Step 1 Screen: Menu & Swap Dish -->
                        <div id="mockup-step-1" class="step-mockup-panel hidden space-y-3">
                          <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                            <span class="text-xs font-bold text-white flex items-center gap-1.5"><i class="fa-solid fa-calendar-days text-indigo-400"></i> Thực Đơn Hôm Nay</span>
                            <span class="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded font-medium">Thứ Ba</span>
                          </div>

                          <div class="bg-slate-800 p-2.5 rounded-2xl border border-indigo-500/40 space-y-2">
                            <div class="flex items-center justify-between">
                              <span class="text-xs font-bold text-emerald-300">Bữa Trưa: Salad Ức Gà</span>
                              <span class="text-[10px] text-slate-400">450 kcal</span>
                            </div>
                            <div class="flex gap-2">
                              <button class="flex-1 bg-indigo-600/40 border border-indigo-400/50 hover:bg-indigo-600 text-white text-[10px] font-bold py-1.5 rounded-xl transition-all flex items-center justify-center gap-1">
                                <i class="fa-solid fa-arrows-rotate"></i> Đổi Món Khác
                              </button>
                              <button class="bg-slate-700 hover:bg-slate-600 text-slate-200 text-[10px] font-bold px-2 py-1.5 rounded-xl">
                                Hoãn giao
                              </button>
                            </div>
                          </div>

                          <div class="bg-slate-800/60 p-2 rounded-xl border border-slate-700/60 text-[10px] text-slate-300 flex items-center justify-between">
                            <span>Bữa Tối: Cá Hồi Sốt Bơ Chanh</span>
                            <span class="text-amber-400 font-bold">520 kcal</span>
                          </div>
                        </div>

                        <!-- Step 2 Screen: Calorie & Macro Tracker -->
                        <div id="mockup-step-2" class="step-mockup-panel hidden space-y-3">
                          <div class="text-center border-b border-slate-800 pb-2">
                            <h5 class="text-xs font-bold text-white flex items-center justify-center gap-1"><i class="fa-solid fa-chart-pie text-sky-400"></i> Dinh Dưỡng Nạp Vào</h5>
                          </div>

                          <div class="flex items-center justify-center gap-4 bg-slate-800/80 p-3 rounded-2xl border border-slate-700">
                            <!-- Circular Calorie Gauge -->
                            <div class="relative w-16 h-16 rounded-full border-4 border-slate-700 border-t-emerald-500 border-r-emerald-500 flex items-center justify-center">
                              <div class="text-center">
                                <span class="block text-xs font-extrabold text-white">1,450</span>
                                <span class="block text-[8px] text-slate-400">/1,800 kcal</span>
                              </div>
                            </div>
                            <!-- Macro Progress Bars -->
                            <div class="flex-1 space-y-1.5 text-[10px]">
                              <div>
                                <div class="flex justify-between text-slate-300 mb-0.5"><span>Protein</span><span class="font-bold text-sky-400">110g / 130g</span></div>
                                <div class="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden"><div class="w-[85%] h-full bg-sky-400"></div></div>
                              </div>
                              <div>
                                <div class="flex justify-between text-slate-300 mb-0.5"><span>Carbs</span><span class="font-bold text-amber-400">160g / 200g</span></div>
                                <div class="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden"><div class="w-[80%] h-full bg-amber-400"></div></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- Step 3 Screen: Realtime Shipper & Points -->
                        <div id="mockup-step-3" class="step-mockup-panel hidden space-y-3">
                          <div class="bg-gradient-to-r from-amber-500/20 to-orange-500/20 p-2.5 rounded-xl border border-amber-500/30 flex items-center justify-between text-xs">
                            <span class="font-bold text-amber-300 flex items-center gap-1"><i class="fa-solid fa-coins"></i> Điểm Thưởng:</span>
                            <span class="font-extrabold text-white bg-amber-500/30 px-2 py-0.5 rounded-full border border-amber-400/40">+1,250 Nuri Points</span>
                          </div>

                          <div class="bg-slate-800 p-3 rounded-2xl border border-emerald-500/50 space-y-2 animate-pulse">
                            <div class="flex items-center justify-between text-xs">
                              <span class="font-bold text-emerald-400 flex items-center gap-1"><i class="fa-solid fa-truck-fast"></i> Shipper Đang Giao</span>
                              <span class="text-[10px] text-slate-400">11:45 AM</span>
                            </div>
                            <p class="text-[10px] text-slate-300">Tài xế Nguyễn Văn B đang đến gần địa chỉ của bạn (cách 1.2km).</p>
                          </div>
                        </div>
                      </div>

                      <!-- Bottom Navigation Bar Simulator -->
                      <div class="pt-2 border-t border-slate-800 flex justify-around text-slate-500 text-[16px]">
                        <i class="fa-solid fa-house text-emerald-400"></i>
                        <i class="fa-solid fa-utensils hover:text-slate-300"></i>
                        <i class="fa-solid fa-chart-simple hover:text-slate-300"></i>
                        <i class="fa-solid fa-user hover:text-slate-300"></i>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>`;

if (mainContent.includes(targetLocation)) {
  mainContent = mainContent.replace(targetLocation, bannerComponentHtml);
  fs.writeFileSync(mainContentPath, mainContent, 'utf8');
  console.log('MainContent.html updated with customer portal banner component.');
} else {
  console.log('targetLocation not found in MainContent.html');
}

// 2. Update legacy.js
const legacyPath = path.join(__dirname, 'public', 'legacy.js');
let legacyCode = fs.readFileSync(legacyPath, 'utf8');

const portalShowcaseJsLogic = `

// ==========================================
// CUSTOMER PORTAL FEATURE SHOWCASE & ANIMATION
// ==========================================
let currentPortalShowcaseStep = 0;
let portalShowcaseTimer = null;
let isPortalShowcaseAutoPlay = true;

function setPortalShowcaseStep(stepIdx) {
  currentPortalShowcaseStep = stepIdx;
  
  // 1. Update Step Buttons styling
  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(\`portal-step-btn-\${i}\`);
    if (btn) {
      const numBadge = btn.querySelector('.w-9');
      const titleSpan = btn.querySelector('.text-xs');

      if (i === stepIdx) {
        btn.className = "portal-step-card cursor-pointer p-3 rounded-2xl bg-white/10 border border-emerald-500/60 shadow-lg shadow-emerald-500/10 transition-all flex flex-col items-center text-center group scale-105";
        if (numBadge) numBadge.className = "w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-sm mb-2 shadow-md";
        if (titleSpan) titleSpan.className = "text-xs font-bold text-emerald-300 leading-snug";
      } else {
        btn.className = "portal-step-card cursor-pointer p-3 rounded-2xl bg-white/5 hover:bg-white/15 border border-white/10 transition-all flex flex-col items-center text-center group";
        if (numBadge) numBadge.className = "w-9 h-9 rounded-xl bg-slate-700 text-slate-300 flex items-center justify-center font-bold text-sm mb-2 group-hover:scale-110 transition-transform";
        if (titleSpan) titleSpan.className = "text-xs font-bold text-slate-300 leading-snug";
      }
    }
  }

  // 2. Update Mockup Screen
  for (let i = 0; i < 4; i++) {
    const panel = document.getElementById(\`mockup-step-\${i}\`);
    if (panel) {
      if (i === stepIdx) {
        panel.classList.remove("hidden");
        panel.classList.add("animate-fade-in");
      } else {
        panel.classList.add("hidden");
        panel.classList.remove("animate-fade-in");
      }
    }
  }
}

function startPortalShowcaseAutoPlay() {
  if (portalShowcaseTimer) clearInterval(portalShowcaseTimer);
  portalShowcaseTimer = setInterval(() => {
    if (!isPortalShowcaseAutoPlay) return;
    currentPortalShowcaseStep = (currentPortalShowcaseStep + 1) % 4;
    setPortalShowcaseStep(currentPortalShowcaseStep);
  }, 3500);
}

function togglePortalShowcaseAutoPlay() {
  isPortalShowcaseAutoPlay = !isPortalShowcaseAutoPlay;
  const btn = document.getElementById("btn-portal-showcase-autoplay");
  if (btn) {
    if (isPortalShowcaseAutoPlay) {
      btn.innerHTML = \`<i class="fa-solid fa-pause"></i> Tự động phát hoạt ảnh\`;
      btn.className = "px-4 py-3 bg-white/10 hover:bg-white/20 text-slate-200 font-semibold rounded-2xl text-xs md:text-sm transition-all flex items-center gap-2 border border-white/10 cursor-pointer";
    } else {
      btn.innerHTML = \`<i class="fa-solid fa-play"></i> Tiếp tục tự động phát\`;
      btn.className = "px-4 py-3 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold rounded-2xl text-xs md:text-sm transition-all flex items-center gap-2 border border-emerald-500/40 cursor-pointer";
    }
  }
}

function openCustomerPortalDemo() {
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set("mode", "customer-portal");
  window.history.pushState({}, "", "?" + urlParams.toString());
  if (typeof renderView === "function") {
    renderView("customer-portal");
  } else {
    window.location.search = "?mode=customer-portal";
  }
}

// Auto init on load
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    setPortalShowcaseStep(0);
    startPortalShowcaseAutoPlay();
  }, 1200);
});
`;

legacyCode += portalShowcaseJsLogic;
fs.writeFileSync(legacyPath, legacyCode, 'utf8');
console.log('legacy.js updated with customer portal showcase logic.');
