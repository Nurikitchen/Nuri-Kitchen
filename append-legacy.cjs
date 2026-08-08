const fs = require('fs');
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
fs.appendFileSync('public/legacy.js', '\n' + jsCode);
console.log('Appended to legacy.js successfully.');
