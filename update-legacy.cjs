const fs = require('fs');
let code = fs.readFileSync('public/legacy.js', 'utf8');

// 1. Update selectSizeInModal
code = code.replace(
    'if (selfMixContext) {\n          showToast("Size',
    'if (selfMixContext && selfMixContext !== "landing") {\n          showToast("Size'
);

// 2. Update renderCreateDishStep sizeLockedLabel
code = code.replace(
    'if (selfMixContext) {\n            sizeLockedLabel =',
    'if (selfMixContext && selfMixContext !== "landing") {\n            sizeLockedLabel ='
);

// 3. Update the three size buttons' inline conditions (lean, balance, power)
code = code.replaceAll(
    '${selfMixContext ? "disabled" : ""}',
    '${(selfMixContext && selfMixContext !== "landing") ? "disabled" : ""}'
);
code = code.replaceAll(
    'selfMixContext ? "bg-slate-50 text-slate-400',
    '(selfMixContext && selfMixContext !== "landing") ? "bg-slate-50 text-slate-400'
);
code = code.replace(
    '${selfMixContext && sizeKey === "lean"',
    '${(selfMixContext && selfMixContext !== "landing") && sizeKey === "lean"'
);
code = code.replace(
    '${selfMixContext && sizeKey === "balance"',
    '${(selfMixContext && selfMixContext !== "landing") && sizeKey === "balance"'
);
code = code.replace(
    '${selfMixContext && sizeKey === "power"',
    '${(selfMixContext && selfMixContext !== "landing") && sizeKey === "power"'
);

// 4. Update saveCreatedDish
const elseBlockIndex = code.indexOf('} else {\n            const customItem = {');
if (elseBlockIndex !== -1) {
    const landingLogic = `} else if (selfMixContext === 'landing') {
            const totals = calculateCustomDishTotals(sizeKey);
            const customItem = {
                dishId: "custom-" + Date.now(),
                name: createDishData.name || "Món Tự Mix",
                sizeKey: sizeKey,
                sizeLabel: sizeLabel,
                price: totals.price,
                qty: 1,
                isCustom: true,
                note: noteArr.join('\\n'),
                kcal: Math.round(totals.kcal),
                protein: Math.round(totals.protein),
                carbs: Math.round(totals.carbs),
                fat: Math.round(totals.fat),
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80"
            };
            
            const container = document.getElementById('landing-selfmix-dish-container');
            if (container) {
                container.innerHTML = \`
                    <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 w-full md:w-[450px] relative animate-fadeInUp">
                        <div class="h-40 overflow-hidden relative">
                            <img src="\${customItem.image}" class="w-full h-full object-cover" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div class="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                <h4 class="text-white font-bold text-xl drop-shadow-md truncate pr-2">\${customItem.name}</h4>
                                <span class="bg-amber-500 text-white font-bold px-3 py-1 rounded-full text-sm shadow-md whitespace-nowrap">\${customItem.sizeLabel}</span>
                            </div>
                        </div>
                        <div class="p-5">
                            <div class="grid grid-cols-4 gap-2 mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                <div class="text-center">
                                    <div class="text-[10px] text-slate-500 font-medium uppercase tracking-wider mb-1">KCAL</div>
                                    <div class="font-black text-slate-800 text-sm">\${customItem.kcal}</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-[10px] text-slate-500 font-medium uppercase tracking-wider mb-1">PRO</div>
                                    <div class="font-black text-slate-800 text-sm">\${customItem.protein}g</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-[10px] text-slate-500 font-medium uppercase tracking-wider mb-1">CARB</div>
                                    <div class="font-black text-slate-800 text-sm">\${customItem.carbs}g</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-[10px] text-slate-500 font-medium uppercase tracking-wider mb-1">FAT</div>
                                    <div class="font-black text-slate-800 text-sm">\${customItem.fat}g</div>
                                </div>
                            </div>
                            <div class="text-sm text-slate-600 space-y-1.5 mb-5 bg-emerald-50/50 p-4 rounded-xl border border-emerald-100/50">
                                \${noteArr.map(n => \`<div class="flex items-start gap-2"><i class="fa-solid fa-check text-emerald-500 mt-1 flex-shrink-0"></i> <span>\${n}</span></div>\`).join('')}
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="text-2xl font-black text-emerald-600">\${customItem.price.toLocaleString()}đ</div>
                                <button onclick="window.openOrderPlatformModal('landing')" class="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2.5 px-6 rounded-xl shadow-md shadow-emerald-500/30 transition-all hover:-translate-y-0.5">
                                    Đăng Ký Gói
                                </button>
                            </div>
                        </div>
                        <button onclick="document.getElementById('landing-selfmix-dish-container').classList.add('hidden')" class="absolute top-3 right-3 w-8 h-8 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-colors">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                \`;
                container.classList.remove('hidden');
            }
            
            closeCreateDishModal();
            showToast("Đã tạo món thành công! Bạn có thể xem kết quả ngay bên dưới.");
        `;
    code = code.substring(0, elseBlockIndex) + landingLogic + code.substring(elseBlockIndex);
} else {
    console.error("Could not find else block");
}

fs.writeFileSync('public/legacy.js', code, 'utf8');
console.log('Update successful');
