const fs = require('fs');
const path = require('path');

const mainContentPath = path.join(__dirname, 'src', 'html', 'MainContent.html');
let mainContent = fs.readFileSync(mainContentPath, 'utf8');

// 1. Update Step 1 Button
const oldStep1Btn = `<div onclick="setPortalShowcaseStep(0)" id="portal-step-btn-0" class="portal-step-card cursor-pointer p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-emerald-500/50 transition-all flex flex-col items-center text-center group">
                      <div class="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-sm mb-2 group-hover:scale-110 transition-transform shadow-md">
                        1
                      </div>
                      <span class="text-xs font-bold text-white leading-snug">Đăng nhập PWA App</span>
                      <span class="text-[10px] text-slate-300 mt-1">1-Chạm trên ĐT</span>
                    </div>`;

const newStep1Btn = `<div onclick="setPortalShowcaseStep(0)" id="portal-step-btn-0" class="portal-step-card cursor-pointer p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-emerald-500/50 transition-all flex flex-col items-center text-center group">
                      <div class="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-sm mb-2 group-hover:scale-110 transition-transform shadow-md">
                        1
                      </div>
                      <span class="text-xs font-bold text-white leading-snug">Dinh dưỡng hôm nay</span>
                      <span class="text-[10px] text-slate-300 mt-1">Tính toán & Nhập bữa</span>
                    </div>`;

if (mainContent.includes(oldStep1Btn)) {
  mainContent = mainContent.replace(oldStep1Btn, newStep1Btn);
  console.log('Step 1 button updated.');
} else {
  console.log('oldStep1Btn not found');
}

// 2. Update Step 1 Mockup Panel
const oldStep0MockupStart = `<!-- Step 0 Panel: PWA & Account Overview -->`;
const oldStep0MockupEnd = `<!-- Step 1 Panel: Authentic Meal Calendar (Matching User Screenshot 2) -->`;

const startIdx = mainContent.indexOf(oldStep0MockupStart);
const endIdx = mainContent.indexOf(oldStep0MockupEnd);

const newStep0MockupHtml = `<!-- Step 0 Panel: Dinh dưỡng hôm nay (Authentic UI Matching User Screenshot 1) -->
                        <div id="mockup-step-0" class="step-mockup-panel space-y-2">
                          
                          <!-- Dinh dưỡng hôm nay Header Card -->
                          <div class="bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm space-y-2">
                            <div class="flex items-center justify-between">
                              <span class="text-[10px] font-extrabold text-slate-800 flex items-center gap-1">
                                <i class="fa-solid fa-chart-pie text-emerald-600"></i> Dinh dưỡng hôm nay
                              </span>
                              <button type="button" class="bg-emerald-50 text-emerald-600 hover:bg-emerald-100 px-2 py-0.5 rounded text-[8px] font-bold flex items-center gap-0.5 border border-emerald-200/50">
                                <i class="fa-solid fa-plus text-[7px]"></i> Nhập thêm
                              </button>
                            </div>

                            <!-- 4 Circular Gauges -->
                            <div class="grid grid-cols-4 gap-1 text-center py-1 border-y border-slate-100">
                              <!-- Calo -->
                              <div class="flex flex-col items-center">
                                <div class="relative w-9 h-9 mb-0.5">
                                  <svg class="w-9 h-9 transform -rotate-90">
                                    <circle cx="18" cy="18" r="15" stroke="currentColor" stroke-width="3" fill="transparent" class="text-slate-100"></circle>
                                    <circle cx="18" cy="18" r="15" stroke="currentColor" stroke-width="3" fill="transparent" stroke-dasharray="94.2" stroke-dashoffset="20" class="text-amber-500"></circle>
                                  </svg>
                                  <div class="absolute inset-0 flex items-center justify-center">
                                    <span class="text-[8px] font-bold text-amber-500">78%</span>
                                  </div>
                                </div>
                                <span class="text-[8px] text-slate-500 font-medium">Calo 🔥</span>
                                <b class="text-[8px] text-slate-800 font-bold">1,450<span class="text-[6.5px] text-slate-400 font-normal">/1850</span></b>
                              </div>

                              <!-- Protein -->
                              <div class="flex flex-col items-center">
                                <div class="relative w-9 h-9 mb-0.5">
                                  <svg class="w-9 h-9 transform -rotate-90">
                                    <circle cx="18" cy="18" r="15" stroke="currentColor" stroke-width="3" fill="transparent" class="text-slate-100"></circle>
                                    <circle cx="18" cy="18" r="15" stroke="currentColor" stroke-width="3" fill="transparent" stroke-dasharray="94.2" stroke-dashoffset="14" class="text-rose-500"></circle>
                                  </svg>
                                  <div class="absolute inset-0 flex items-center justify-center">
                                    <span class="text-[8px] font-bold text-rose-500">85%</span>
                                  </div>
                                </div>
                                <span class="text-[8px] text-slate-500 font-medium">Đạm 🥩</span>
                                <b class="text-[8px] text-slate-800 font-bold">115<span class="text-[6.5px] text-slate-400 font-normal">/135g</span></b>
                              </div>

                              <!-- Carb -->
                              <div class="flex flex-col items-center">
                                <div class="relative w-9 h-9 mb-0.5">
                                  <svg class="w-9 h-9 transform -rotate-90">
                                    <circle cx="18" cy="18" r="15" stroke="currentColor" stroke-width="3" fill="transparent" class="text-slate-100"></circle>
                                    <circle cx="18" cy="18" r="15" stroke="currentColor" stroke-width="3" fill="transparent" stroke-dasharray="94.2" stroke-dashoffset="16" class="text-sky-500"></circle>
                                  </svg>
                                  <div class="absolute inset-0 flex items-center justify-center">
                                    <span class="text-[8px] font-bold text-sky-500">83%</span>
                                  </div>
                                </div>
                                <span class="text-[8px] text-slate-500 font-medium">Tinh bột 🍚</span>
                                <b class="text-[8px] text-slate-800 font-bold">150<span class="text-[6.5px] text-slate-400 font-normal">/180g</span></b>
                              </div>

                              <!-- Fat -->
                              <div class="flex flex-col items-center">
                                <div class="relative w-9 h-9 mb-0.5">
                                  <svg class="w-9 h-9 transform -rotate-90">
                                    <circle cx="18" cy="18" r="15" stroke="currentColor" stroke-width="3" fill="transparent" class="text-slate-100"></circle>
                                    <circle cx="18" cy="18" r="15" stroke="currentColor" stroke-width="3" fill="transparent" stroke-dasharray="94.2" stroke-dashoffset="17" class="text-yellow-500"></circle>
                                  </svg>
                                  <div class="absolute inset-0 flex items-center justify-center">
                                    <span class="text-[8px] font-bold text-yellow-600">82%</span>
                                  </div>
                                </div>
                                <span class="text-[8px] text-slate-500 font-medium">Béo 💧</span>
                                <b class="text-[8px] text-slate-800 font-bold">45<span class="text-[6.5px] text-slate-400 font-normal">/55g</span></b>
                              </div>
                            </div>

                            <!-- Calo 7 ngày qua Mini Chart -->
                            <div class="bg-slate-50 p-2 rounded-lg border border-slate-100">
                              <div class="flex items-center justify-between text-[8px] mb-1">
                                <span class="font-bold text-slate-700">Calo 7 ngày qua</span>
                                <div class="flex gap-1.5 text-[7px] text-slate-500">
                                  <span class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-amber-400 mr-0.5"></span>Nhập thêm</span>
                                  <span class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-0.5"></span>Gói ăn</span>
                                </div>
                              </div>

                              <!-- Bar Chart Visualization -->
                              <div class="relative pt-3 pb-1">
                                <!-- Target Dashed Line -->
                                <div class="absolute top-[28%] left-0 right-0 border-b border-dashed border-emerald-500 z-0">
                                  <span class="absolute -top-2 right-0 text-[6.5px] font-extrabold text-emerald-700 bg-emerald-100 px-0.5 rounded">1850</span>
                                </div>

                                <div class="grid grid-cols-7 gap-1 items-end h-10 z-10 relative text-center text-[7px]">
                                  <!-- T2 -->
                                  <div class="flex flex-col items-center h-full justify-end">
                                    <div class="w-2.5 bg-emerald-400 rounded-t h-[65%]"></div>
                                    <span class="text-slate-400 font-medium mt-0.5">T2</span>
                                  </div>
                                  <!-- T3 -->
                                  <div class="flex flex-col items-center h-full justify-end">
                                    <div class="w-2.5 bg-emerald-500 rounded-t h-[75%]"></div>
                                    <span class="text-slate-400 font-medium mt-0.5">T3</span>
                                  </div>
                                  <!-- T4 -->
                                  <div class="flex flex-col items-center h-full justify-end">
                                    <div class="w-2.5 bg-emerald-400 rounded-t h-[70%]"></div>
                                    <span class="text-slate-400 font-medium mt-0.5">T4</span>
                                  </div>
                                  <!-- T5 -->
                                  <div class="flex flex-col items-center h-full justify-end">
                                    <div class="w-2.5 bg-emerald-500 rounded-t h-[80%]"></div>
                                    <span class="text-slate-400 font-medium mt-0.5">T5</span>
                                  </div>
                                  <!-- T6 -->
                                  <div class="flex flex-col items-center h-full justify-end">
                                    <div class="w-2.5 bg-emerald-400 rounded-t h-[72%]"></div>
                                    <span class="text-slate-400 font-medium mt-0.5">T6</span>
                                  </div>
                                  <!-- T7 (Highlighted) -->
                                  <div class="flex flex-col items-center h-full justify-end">
                                    <div class="w-2.5 bg-amber-400 rounded-t h-[78%]"></div>
                                    <span class="text-amber-700 font-bold mt-0.5 bg-amber-100 px-0.5 rounded">T7</span>
                                  </div>
                                  <!-- CN (Highlighted) -->
                                  <div class="flex flex-col items-center h-full justify-end">
                                    <div class="w-2.5 bg-amber-400 rounded-t h-[82%]"></div>
                                    <span class="text-amber-700 font-bold mt-0.5 bg-amber-100 px-0.5 rounded">CN</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        `;

if (startIdx !== -1 && endIdx !== -1) {
  const fullTarget = mainContent.substring(startIdx, endIdx);
  mainContent = mainContent.replace(fullTarget, newStep0MockupHtml);
  fs.writeFileSync(mainContentPath, mainContent, 'utf8');
  console.log('MainContent.html updated with Step 0 Daily Nutrition mockup UI.');
} else {
  console.log('Target Step 0 mockup range not found');
}
