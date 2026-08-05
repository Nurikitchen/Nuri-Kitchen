const fs = require('fs');
const path = require('path');

const mainContentPath = path.join(__dirname, 'src', 'html', 'MainContent.html');
let mainContent = fs.readFileSync(mainContentPath, 'utf8');

const targetOldMockupStart = `<div class="relative w-full max-w-[320px] aspect-[9/18] bg-slate-950 rounded-[40px] p-3 shadow-2xl border-4 border-slate-800 flex flex-col overflow-hidden">`;
const targetOldMockupEnd = `<!-- Bottom Navigation Bar Simulator -->
                      <div class="pt-2 border-t border-slate-800 flex justify-around text-slate-500 text-[16px]">
                        <i class="fa-solid fa-house text-emerald-400"></i>
                        <i class="fa-solid fa-utensils hover:text-slate-300"></i>
                        <i class="fa-solid fa-chart-simple hover:text-slate-300"></i>
                        <i class="fa-solid fa-user hover:text-slate-300"></i>
                      </div>
                    </div>
                  </div>
                </div>`;

const newMockupHtml = `<div class="relative w-full max-w-[320px] aspect-[9/18] bg-slate-950 rounded-[40px] p-3 shadow-2xl border-4 border-slate-800 flex flex-col overflow-hidden">
                    <!-- Phone Notch / Camera -->
                    <div class="w-32 h-4 bg-slate-900 rounded-b-2xl mx-auto flex items-center justify-center gap-1 z-30 mb-2 shrink-0">
                      <div class="w-2.5 h-2.5 rounded-full bg-slate-950"></div>
                      <div class="w-2 h-2 rounded-full bg-indigo-950"></div>
                    </div>

                    <!-- App Screen Simulator Container (Authentic Light Mode UI) -->
                    <div class="flex-1 bg-slate-50 rounded-[28px] p-3 flex flex-col justify-between relative overflow-hidden border border-slate-200 text-slate-800 shadow-inner">
                      
                      <!-- Ideal Customer Header Card (Persistent across steps) -->
                      <div class="bg-white rounded-2xl p-2.5 shadow-sm border border-slate-100 mb-2 shrink-0">
                        <div class="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
                          <div class="flex items-center gap-2">
                            <div class="w-8 h-8 rounded-full bg-emerald-500 text-white font-black text-xs flex items-center justify-center shadow">
                              A
                            </div>
                            <div>
                              <h5 class="text-xs font-bold text-slate-900 leading-tight">Nguyễn Văn A</h5>
                              <div class="flex items-center gap-1">
                                <span class="text-[9px] bg-emerald-100 text-emerald-700 font-bold px-1.5 py-0.2 rounded">BMI 21.5 (Cân đối)</span>
                              </div>
                            </div>
                          </div>
                          <span class="text-[9px] bg-indigo-50 text-indigo-700 font-bold px-2 py-0.5 rounded-full border border-indigo-100">EatClean 21N</span>
                        </div>
                        
                        <!-- Ideal Target Stats Bar -->
                        <div class="grid grid-cols-3 gap-1 text-center bg-slate-50 p-1.5 rounded-xl text-[9px]">
                          <div>
                            <span class="block text-slate-400">Calo lý tưởng</span>
                            <b class="text-emerald-600 font-bold">1,850 kcal</b>
                          </div>
                          <div>
                            <span class="block text-slate-400">Protein</span>
                            <b class="text-sky-600 font-bold">135g</b>
                          </div>
                          <div>
                            <span class="block text-slate-400">Tiến độ</span>
                            <b class="text-amber-600 font-bold">14 / 21 Ngày</b>
                          </div>
                        </div>
                      </div>

                      <!-- Dynamic Step Panels -->
                      <div id="portal-mockup-screen" class="flex-1 overflow-y-auto custom-scrollbar pr-0.5 space-y-2">
                        
                        <!-- Step 0 Panel: PWA & Account Overview -->
                        <div id="mockup-step-0" class="step-mockup-panel space-y-2">
                          <div class="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-2.5 rounded-xl shadow-sm text-center">
                            <i class="fa-solid fa-mobile-screen-button text-xl mb-1"></i>
                            <h6 class="text-xs font-bold">Đã Cài Đặt PWA Màn Hình Chính</h6>
                            <p class="text-[9px] text-emerald-100 mt-0.5">Truy cập 1-chạm cực nhanh không cần mở web</p>
                          </div>

                          <div class="bg-white p-2 rounded-xl border border-slate-100 shadow-sm text-xs space-y-1.5">
                            <div class="flex justify-between items-center text-[10px]">
                              <span class="text-slate-500">Hoàn thành lộ trình:</span>
                              <b class="text-emerald-600">67% (14 Bữa ăn)</b>
                            </div>
                            <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                              <div class="bg-emerald-500 h-full w-[67%] rounded-full"></div>
                            </div>
                          </div>
                        </div>

                        <!-- Step 1 Panel: Authentic Meal Calendar (Matching User Screenshot 2) -->
                        <div id="mockup-step-1" class="step-mockup-panel hidden space-y-2">
                          <div class="flex items-center justify-between text-xs font-bold text-slate-800 pb-1 border-b border-slate-200">
                            <span class="flex items-center gap-1 text-emerald-600"><i class="fa-solid fa-calendar-days"></i> Lịch ăn uống (Meal Calendar)</span>
                            <span class="text-[9px] text-emerald-600 font-semibold cursor-pointer">Xem tất cả ➔</span>
                          </div>

                          <!-- Timeline Items -->
                          <div class="relative border-l-2 border-emerald-200 ml-2 pl-3 space-y-2 text-[10px]">
                            
                            <!-- Monday (Past) -->
                            <div class="relative">
                              <div class="absolute -left-[17px] top-1 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white"></div>
                              <div class="bg-white p-1.5 rounded-lg border border-slate-100 flex justify-between items-center shadow-2xs">
                                <div>
                                  <p class="font-semibold text-slate-400 line-through text-[9px]">Thứ 2: Thịt Bò Bằm Gạo Lứt</p>
                                  <p class="text-[8px] text-emerald-600 font-bold"><i class="fa-solid fa-check"></i> Đã hoàn thành</p>
                                </div>
                                <span class="text-amber-400 text-[9px]">★★★★★</span>
                              </div>
                            </div>

                            <!-- Tuesday (Today - Highlight Active Meal Card) -->
                            <div class="relative">
                              <div class="absolute -left-[17px] top-1 w-2.5 h-2.5 rounded-full bg-amber-500 border-2 border-white animate-pulse"></div>
                              <div class="bg-amber-50/90 border border-amber-200 rounded-xl p-2 shadow-xs space-y-1.5">
                                <div class="flex items-center gap-2">
                                  <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=120&q=80" class="w-10 h-10 object-cover rounded-lg shadow-xs shrink-0" alt="Món ăn">
                                  <div class="flex-1 min-w-0">
                                    <div class="flex justify-between items-start">
                                      <p class="font-bold text-slate-800 text-[10px] truncate">Thứ 3 (Hôm nay)</p>
                                      <i class="fa-solid fa-heart text-rose-500 text-[10px] cursor-pointer"></i>
                                    </div>
                                    <p class="text-[9px] text-amber-800 font-medium truncate">Thịt Bò Bằm Gạo Lứt Bông Cải</p>
                                    <span class="inline-block bg-amber-200/60 text-amber-900 font-bold text-[8px] px-1 rounded">520 kcal</span>
                                  </div>
                                </div>
                                <button type="button" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-1 rounded-lg text-[9px] flex items-center justify-center gap-1 shadow-xs transition-colors">
                                  <i class="fa-solid fa-arrows-rotate"></i> Đổi Món Khác
                                </button>
                              </div>
                            </div>

                            <!-- Wednesday (Upcoming) -->
                            <div class="relative opacity-70">
                              <div class="absolute -left-[17px] top-1 w-2.5 h-2.5 rounded-full bg-slate-300 border-2 border-white"></div>
                              <div class="bg-white p-1.5 rounded-lg border border-slate-100 flex items-center gap-2">
                                <div class="w-7 h-7 rounded bg-slate-200 flex items-center justify-center text-[10px]">🥦</div>
                                <div>
                                  <p class="font-bold text-slate-700 text-[9px]">Thứ 4: Ức Gà Áp Chảo Sốt Bơ</p>
                                  <p class="text-[8px] text-slate-400">Dự kiến giao: 11:00 - 12:00</p>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>

                        <!-- Step 2 Panel: Calorie & Macro Nutrition Tracker -->
                        <div id="mockup-step-2" class="step-mockup-panel hidden space-y-2">
                          <div class="text-xs font-bold text-slate-800 pb-1 border-b border-slate-200 flex justify-between items-center">
                            <span class="flex items-center gap-1 text-sky-600"><i class="fa-solid fa-chart-pie"></i> Dinh Dưỡng Nuri AI Tối Ưu</span>
                            <span class="text-[9px] bg-sky-100 text-sky-700 font-bold px-1.5 py-0.5 rounded">Hôm nay</span>
                          </div>

                          <!-- Circular Calorie Gauge Card -->
                          <div class="bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                            <div class="relative w-14 h-14 rounded-full border-4 border-slate-100 border-t-emerald-500 border-r-emerald-500 border-b-emerald-500 flex items-center justify-center shrink-0">
                              <div class="text-center">
                                <span class="block text-[11px] font-extrabold text-slate-800">1,450</span>
                                <span class="block text-[7px] text-slate-400">/1,850 kcal</span>
                              </div>
                            </div>
                            <div class="flex-1 space-y-1 text-[9px]">
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
                        <div id="mockup-step-3" class="step-mockup-panel hidden space-y-2">
                          <!-- Points Card -->
                          <div class="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-2.5 rounded-xl shadow-xs flex items-center justify-between text-xs">
                            <span class="font-bold flex items-center gap-1"><i class="fa-solid fa-coins text-amber-200"></i> Điểm Nuri Club:</span>
                            <span class="font-extrabold bg-white/20 px-2 py-0.5 rounded-full border border-white/30">+1,250 Points</span>
                          </div>

                          <!-- Shipper Tracking Notification Card -->
                          <div class="bg-white p-2.5 rounded-xl border border-emerald-200 shadow-sm space-y-1.5">
                            <div class="flex items-center justify-between text-xs">
                              <span class="font-bold text-emerald-600 flex items-center gap-1"><i class="fa-solid fa-truck-fast"></i> Shipper Đang Giao</span>
                              <span class="text-[9px] bg-emerald-100 text-emerald-800 font-bold px-1.5 rounded">11:45 AM</span>
                            </div>
                            <p class="text-[9px] text-slate-600 leading-tight">Tài xế Nguyễn Văn B đang di chuyển đến địa chỉ của bạn (cách 1.2km).</p>
                            <div class="bg-slate-50 p-1 rounded text-[8px] text-slate-500 flex justify-between">
                              <span>Mã đơn: #10482</span>
                              <span>Dự kiến: 8 phút nữa</span>
                            </div>
                          </div>
                        </div>

                      </div>

                      <!-- Bottom Navigation Bar Simulator -->
                      <div class="pt-2 border-t border-slate-200 flex justify-around text-slate-400 text-sm shrink-0 bg-white rounded-b-xl">
                        <i class="fa-solid fa-house text-emerald-600 cursor-pointer"></i>
                        <i class="fa-solid fa-calendar-week hover:text-slate-700 cursor-pointer"></i>
                        <i class="fa-solid fa-chart-pie hover:text-slate-700 cursor-pointer"></i>
                        <i class="fa-solid fa-user hover:text-slate-700 cursor-pointer"></i>
                      </div>
                    </div>
                  </div>
                </div>`;

const startIdx = mainContent.indexOf(targetOldMockupStart);
const endIdx = mainContent.indexOf(targetOldMockupEnd);

if (startIdx !== -1 && endIdx !== -1) {
  const fullTarget = mainContent.substring(startIdx, endIdx + targetOldMockupEnd.length);
  mainContent = mainContent.replace(fullTarget, newMockupHtml);
  fs.writeFileSync(mainContentPath, mainContent, 'utf8');
  console.log('MainContent.html updated with authentic customer portal mockup UI.');
} else {
  console.log('Target mockup range not found in MainContent.html');
}
