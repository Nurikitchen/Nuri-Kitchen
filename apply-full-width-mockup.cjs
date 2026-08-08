const fs = require('fs');
const path = require('path');

const mainContentPath = path.join(__dirname, 'src', 'html', 'MainContent.html');
let mainContent = fs.readFileSync(mainContentPath, 'utf8');

const targetOldStart = `<!-- Cột Phải: Khung mô phỏng màn hình App động (Interactive Live Mockup) -->`;
const targetOldEnd = `<!-- Bottom Navigation Bar Simulator -->
                      <div class="pt-2 border-t border-slate-200 flex justify-around text-slate-400 text-sm shrink-0 bg-white rounded-b-xl">
                        <i class="fa-solid fa-house text-emerald-600 cursor-pointer"></i>
                        <i class="fa-solid fa-calendar-week hover:text-slate-700 cursor-pointer"></i>
                        <i class="fa-solid fa-chart-pie hover:text-slate-700 cursor-pointer"></i>
                        <i class="fa-solid fa-user hover:text-slate-700 cursor-pointer"></i>
                      </div>
                    </div>
                  </div>
                </div>`;

const startIdx = mainContent.indexOf(targetOldStart);
const endIdx = mainContent.indexOf(targetOldEnd);

const newFullWidthHtml = `<!-- Cột Phải: Hiển thị Mẫu Mô Tả Trang Cá Nhân Full Viền (Full Right Container, không màn hình giả lập phone) -->
                <div class="w-full lg:w-5/12 flex flex-col h-full min-h-[440px]">
                  <div class="w-full h-full bg-slate-50 rounded-3xl p-4 md:p-5 shadow-2xl border border-slate-200 text-slate-800 flex flex-col justify-between relative overflow-hidden">
                    
                    <!-- Ideal Customer Header Card (Persistent across steps) -->
                    <div class="bg-white rounded-2xl p-3 shadow-sm border border-slate-100 mb-3 shrink-0">
                      <div class="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
                        <div class="flex items-center gap-2.5">
                          <div class="w-9 h-9 rounded-full bg-emerald-500 text-white font-black text-sm flex items-center justify-center shadow">
                            A
                          </div>
                          <div>
                            <h5 class="text-xs md:text-sm font-bold text-slate-900 leading-tight">Nguyễn Văn A</h5>
                            <div class="flex items-center gap-1 mt-0.5">
                              <span class="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">BMI 21.5 (Cân đối)</span>
                            </div>
                          </div>
                        </div>
                        <span class="text-[10px] bg-indigo-50 text-indigo-700 font-bold px-2.5 py-1 rounded-full border border-indigo-100">Gói EatClean 21N</span>
                      </div>
                      
                      <!-- Ideal Target Stats Bar -->
                      <div class="grid grid-cols-3 gap-2 text-center bg-slate-50 p-2 rounded-xl text-xs">
                        <div>
                          <span class="block text-[10px] text-slate-400 font-medium">Calo lý tưởng</span>
                          <b class="text-emerald-600 font-bold">1,850 kcal</b>
                        </div>
                        <div>
                          <span class="block text-[10px] text-slate-400 font-medium">Protein</span>
                          <b class="text-sky-600 font-bold">135g</b>
                        </div>
                        <div>
                          <span class="block text-[10px] text-slate-400 font-medium">Tiến độ gói</span>
                          <b class="text-amber-600 font-bold">14 / 21 Ngày</b>
                        </div>
                      </div>
                    </div>

                    <!-- Dynamic Step Panels Container -->
                    <div id="portal-mockup-screen" class="flex-1 overflow-y-auto custom-scrollbar pr-0.5 space-y-3">
                      
                      <!-- Step 0 Panel: Dinh dưỡng hôm nay (Authentic UI Matching User Screenshot 1) -->
                      <div id="mockup-step-0" class="step-mockup-panel space-y-3">
                        <div class="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                          <div class="flex items-center justify-between">
                            <span class="text-xs md:text-sm font-extrabold text-slate-800 flex items-center gap-1.5">
                              <i class="fa-solid fa-chart-pie text-emerald-600"></i> Dinh dưỡng hôm nay
                            </span>
                            <button type="button" class="bg-emerald-50 text-emerald-600 hover:bg-emerald-100 px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 border border-emerald-200/50">
                              <i class="fa-solid fa-plus text-[10px]"></i> Nhập thêm
                            </button>
                          </div>

                          <!-- 4 Circular Gauges -->
                          <div class="grid grid-cols-4 gap-2 text-center py-2 border-y border-slate-100">
                            <!-- Calo -->
                            <div class="flex flex-col items-center">
                              <div class="relative w-12 h-12 mb-1">
                                <svg class="w-12 h-12 transform -rotate-90">
                                  <circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="4" fill="transparent" class="text-slate-100"></circle>
                                  <circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="4" fill="transparent" stroke-dasharray="125.6" stroke-dashoffset="26" class="text-amber-500"></circle>
                                </svg>
                                <div class="absolute inset-0 flex items-center justify-center">
                                  <span class="text-xs font-bold text-amber-500">78%</span>
                                </div>
                              </div>
                              <span class="text-[10px] text-slate-500 font-medium">Calo 🔥</span>
                              <b class="text-xs text-slate-800 font-bold">1,450<span class="text-[9px] text-slate-400 font-normal">/1850</span></b>
                            </div>

                            <!-- Protein -->
                            <div class="flex flex-col items-center">
                              <div class="relative w-12 h-12 mb-1">
                                <svg class="w-12 h-12 transform -rotate-90">
                                  <circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="4" fill="transparent" class="text-slate-100"></circle>
                                  <circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="4" fill="transparent" stroke-dasharray="125.6" stroke-dashoffset="18" class="text-rose-500"></circle>
                                </svg>
                                <div class="absolute inset-0 flex items-center justify-center">
                                  <span class="text-xs font-bold text-rose-500">85%</span>
                                </div>
                              </div>
                              <span class="text-[10px] text-slate-500 font-medium">Đạm 🥩</span>
                              <b class="text-xs text-slate-800 font-bold">115<span class="text-[9px] text-slate-400 font-normal">/135g</span></b>
                            </div>

                            <!-- Carb -->
                            <div class="flex flex-col items-center">
                              <div class="relative w-12 h-12 mb-1">
                                <svg class="w-12 h-12 transform -rotate-90">
                                  <circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="4" fill="transparent" class="text-slate-100"></circle>
                                  <circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="4" fill="transparent" stroke-dasharray="125.6" stroke-dashoffset="21" class="text-sky-500"></circle>
                                </svg>
                                <div class="absolute inset-0 flex items-center justify-center">
                                  <span class="text-xs font-bold text-sky-500">83%</span>
                                </div>
                              </div>
                              <span class="text-[10px] text-slate-500 font-medium">Tinh bột 🍚</span>
                              <b class="text-xs text-slate-800 font-bold">150<span class="text-[9px] text-slate-400 font-normal">/180g</span></b>
                            </div>

                            <!-- Fat -->
                            <div class="flex flex-col items-center">
                              <div class="relative w-12 h-12 mb-1">
                                <svg class="w-12 h-12 transform -rotate-90">
                                  <circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="4" fill="transparent" class="text-slate-100"></circle>
                                  <circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="4" fill="transparent" stroke-dasharray="125.6" stroke-dashoffset="22" class="text-yellow-500"></circle>
                                </svg>
                                <div class="absolute inset-0 flex items-center justify-center">
                                  <span class="text-xs font-bold text-yellow-600">82%</span>
                                </div>
                              </div>
                              <span class="text-[10px] text-slate-500 font-medium">Béo 💧</span>
                              <b class="text-xs text-slate-800 font-bold">45<span class="text-[9px] text-slate-400 font-normal">/55g</span></b>
                            </div>
                          </div>

                          <!-- Calo 7 ngày qua Mini Chart -->
                          <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                            <div class="flex items-center justify-between text-xs mb-1.5">
                              <span class="font-bold text-slate-700">Calo 7 ngày qua</span>
                              <div class="flex gap-2 text-[9px] text-slate-500">
                                <span class="flex items-center"><span class="w-2 h-2 rounded-full bg-amber-400 mr-1"></span>Nhập thêm</span>
                                <span class="flex items-center"><span class="w-2 h-2 rounded-full bg-emerald-400 mr-1"></span>Gói ăn</span>
                              </div>
                            </div>

                            <!-- Bar Chart Visualization -->
                            <div class="relative pt-4 pb-1">
                              <!-- Target Dashed Line -->
                              <div class="absolute top-[28%] left-0 right-0 border-b border-dashed border-emerald-500 z-0">
                                <span class="absolute -top-2.5 right-0 text-[9px] font-extrabold text-emerald-700 bg-emerald-100 px-1 rounded">Mục tiêu (1850)</span>
                              </div>

                              <div class="grid grid-cols-7 gap-1.5 items-end h-16 z-10 relative text-center text-[9px]">
                                <div class="flex flex-col items-center h-full justify-end">
                                  <div class="w-3 bg-emerald-400 rounded-t h-[65%]"></div>
                                  <span class="text-slate-400 font-medium mt-1">T2</span>
                                </div>
                                <div class="flex flex-col items-center h-full justify-end">
                                  <div class="w-3 bg-emerald-500 rounded-t h-[75%]"></div>
                                  <span class="text-slate-400 font-medium mt-1">T3</span>
                                </div>
                                <div class="flex flex-col items-center h-full justify-end">
                                  <div class="w-3 bg-emerald-400 rounded-t h-[70%]"></div>
                                  <span class="text-slate-400 font-medium mt-1">T4</span>
                                </div>
                                <div class="flex flex-col items-center h-full justify-end">
                                  <div class="w-3 bg-emerald-500 rounded-t h-[80%]"></div>
                                  <span class="text-slate-400 font-medium mt-1">T5</span>
                                </div>
                                <div class="flex flex-col items-center h-full justify-end">
                                  <div class="w-3 bg-emerald-400 rounded-t h-[72%]"></div>
                                  <span class="text-slate-400 font-medium mt-1">T6</span>
                                </div>
                                <div class="flex flex-col items-center h-full justify-end">
                                  <div class="w-3 bg-amber-400 rounded-t h-[78%]"></div>
                                  <span class="text-amber-700 font-bold mt-1 bg-amber-100 px-1 rounded">T7</span>
                                </div>
                                <div class="flex flex-col items-center h-full justify-end">
                                  <div class="w-3 bg-amber-400 rounded-t h-[82%]"></div>
                                  <span class="text-amber-700 font-bold mt-1 bg-amber-100 px-1 rounded">CN</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Step 1 Panel: Authentic Meal Calendar -->
                      <div id="mockup-step-1" class="step-mockup-panel hidden space-y-3">
                        <div class="flex items-center justify-between text-xs md:text-sm font-bold text-slate-800 pb-1.5 border-b border-slate-200">
                          <span class="flex items-center gap-1.5 text-emerald-600"><i class="fa-solid fa-calendar-days"></i> Lịch ăn uống (Meal Calendar)</span>
                          <span class="text-[10px] text-emerald-600 font-semibold cursor-pointer">Xem tiến độ đơn ➔</span>
                        </div>

                        <!-- Timeline Items -->
                        <div class="relative border-l-2 border-emerald-200 ml-2 pl-4 space-y-3 text-xs">
                          <!-- Monday -->
                          <div class="relative">
                            <div class="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white"></div>
                            <div class="bg-white p-2 rounded-xl border border-slate-100 flex justify-between items-center shadow-2xs">
                              <div>
                                <p class="font-semibold text-slate-400 line-through text-xs">Thứ 2: Thịt Bò Bằm Gạo Lứt</p>
                                <p class="text-[10px] text-emerald-600 font-bold"><i class="fa-solid fa-check"></i> Đã hoàn thành</p>
                              </div>
                              <span class="text-amber-400 text-xs">★★★★★</span>
                            </div>
                          </div>

                          <!-- Tuesday (Today) -->
                          <div class="relative">
                            <div class="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-amber-500 border-2 border-white animate-pulse"></div>
                            <div class="bg-amber-50/90 border border-amber-200 rounded-2xl p-2.5 shadow-xs space-y-2">
                              <div class="flex items-center gap-3">
                                <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=140&q=80" class="w-12 h-12 object-cover rounded-xl shadow-xs shrink-0" alt="Món ăn">
                                <div class="flex-1 min-w-0">
                                  <div class="flex justify-between items-start">
                                    <p class="font-bold text-slate-800 text-xs">Thứ 3 (Hôm nay)</p>
                                    <i class="fa-solid fa-heart text-rose-500 text-xs cursor-pointer"></i>
                                  </div>
                                  <p class="text-xs text-amber-800 font-medium truncate">Thịt Bò Bằm Gạo Lứt Bông Cải</p>
                                  <span class="inline-block bg-amber-200/70 text-amber-900 font-bold text-[10px] px-1.5 rounded">520 kcal</span>
                                </div>
                              </div>
                              <button type="button" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-1.5 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors">
                                <i class="fa-solid fa-arrows-rotate"></i> Đổi Món Khác
                              </button>
                            </div>
                          </div>

                          <!-- Wednesday -->
                          <div class="relative opacity-70">
                            <div class="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-slate-300 border-2 border-white"></div>
                            <div class="bg-white p-2 rounded-xl border border-slate-100 flex items-center gap-3">
                              <div class="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-sm">🥦</div>
                              <div>
                                <p class="font-bold text-slate-700 text-xs">Thứ 4: Ức Gà Áp Chảo Sốt Bơ</p>
                                <p class="text-[10px] text-slate-400">Dự kiến giao: 11:00 - 12:00</p>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>

                      <!-- Step 2 Panel: Nutrition Tracker -->
                      <div id="mockup-step-2" class="step-mockup-panel hidden space-y-3">
                        <div class="text-xs md:text-sm font-bold text-slate-800 pb-1.5 border-b border-slate-200 flex justify-between items-center">
                          <span class="flex items-center gap-1.5 text-sky-600"><i class="fa-solid fa-chart-pie"></i> Dinh Dưỡng Nuri AI Tối Ưu</span>
                          <span class="text-[10px] bg-sky-100 text-sky-700 font-bold px-2 py-0.5 rounded">Hôm nay</span>
                        </div>

                        <div class="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                          <div class="relative w-16 h-16 rounded-full border-4 border-slate-100 border-t-emerald-500 border-r-emerald-500 border-b-emerald-500 flex items-center justify-center shrink-0">
                            <div class="text-center">
                              <span class="block text-xs font-extrabold text-slate-800">1,450</span>
                              <span class="block text-[8px] text-slate-400">/1,850 kcal</span>
                            </div>
                          </div>
                          <div class="flex-1 space-y-1.5 text-xs">
                            <div>
                              <div class="flex justify-between text-slate-600 mb-0.5"><span>Protein</span><b class="text-sky-600">115g / 135g</b></div>
                              <div class="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden"><div class="w-[85%] h-full bg-sky-500"></div></div>
                            </div>
                            <div>
                              <div class="flex justify-between text-slate-600 mb-0.5"><span>Carbs</span><b class="text-amber-600">150g / 180g</b></div>
                              <div class="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden"><div class="w-[83%] h-full bg-amber-500"></div></div>
                            </div>
                            <div>
                              <div class="flex justify-between text-slate-600 mb-0.5"><span>Fat</span><b class="text-rose-600">45g / 55g</b></div>
                              <div class="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden"><div class="w-[82%] h-full bg-rose-500"></div></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Step 3 Panel: Realtime Shipper & Reward Points -->
                      <div id="mockup-step-3" class="step-mockup-panel hidden space-y-3">
                        <div class="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-3 rounded-2xl shadow-xs flex items-center justify-between text-xs md:text-sm">
                          <span class="font-bold flex items-center gap-1.5"><i class="fa-solid fa-coins text-amber-200"></i> Điểm Tích Lũy Nuri Club:</span>
                          <span class="font-extrabold bg-white/20 px-2.5 py-1 rounded-full border border-white/30">+1,250 Points</span>
                        </div>

                        <div class="bg-white p-3 rounded-2xl border border-emerald-200 shadow-sm space-y-2">
                          <div class="flex items-center justify-between text-xs md:text-sm">
                            <span class="font-bold text-emerald-600 flex items-center gap-1.5"><i class="fa-solid fa-truck-fast"></i> Shipper Đang Giao Hàng</span>
                            <span class="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">11:45 AM</span>
                          </div>
                          <p class="text-xs text-slate-600 leading-snug">Tài xế Nguyễn Văn B đang di chuyển đến địa chỉ của bạn (cách 1.2km).</p>
                          <div class="bg-slate-50 p-1.5 rounded-xl text-[10px] text-slate-500 flex justify-between">
                            <span>Mã đơn: #10482</span>
                            <span>Dự kiến: 8 phút nữa</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>`;

if (startIdx !== -1 && endIdx !== -1) {
  const fullTarget = mainContent.substring(startIdx, endIdx + targetOldEnd.length);
  mainContent = mainContent.replace(fullTarget, newFullWidthHtml);
  fs.writeFileSync(mainContentPath, mainContent, 'utf8');
  console.log('MainContent.html updated with full-width right column container.');
} else {
  console.log('Target range for full-width mockup not found');
}
