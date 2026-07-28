
window.openOrderPlatformModal = function(source, duration, size, meals) {
    const modal = document.getElementById('order-platform-modal');
    if (!modal) return;
    
    // Auto-fill values if provided (or fallback to defaults)
    const durationElem = document.getElementById('modal-pkg-duration');
    const sizeElem = document.getElementById('modal-pkg-size');
    const mealsElem = document.getElementById('modal-pkg-meals');
    
    if (durationElem) durationElem.value = duration || '7';
    if (sizeElem) sizeElem.value = size || 'lean';
    if (mealsElem) mealsElem.value = meals || '1';

    modal.classList.remove('hidden');

    // Populate districts
    const d = document.getElementById('modal-pkg-district');
    const w = document.getElementById('modal-pkg-ward');
    if (d && w && window.locationData && window.locationData['TP. Hồ Chí Minh']) {
        d.innerHTML = '<option value="">Quận/Huyện *</option>';
        w.innerHTML = '<option value="">Phường/Xã *</option>';
        w.disabled = true;
        for (let k in window.locationData['TP. Hồ Chí Minh']) {
            d.innerHTML += `<option value="${k}">${k}</option>`;
        }
    }
};

window.closeOrderPlatformModal = function() {
    const modal = document.getElementById('order-platform-modal');
    if (modal) modal.classList.add('hidden');
};

window.updateModalPkgWards = function() {
    const d = document.getElementById('modal-pkg-district')?.value;
    const w = document.getElementById('modal-pkg-ward');
    if (!w) return;
    
    w.innerHTML = '<option value="">Phường/Xã *</option>';
    if (d && window.locationData && window.locationData['TP. Hồ Chí Minh'][d]) {
        w.disabled = false;
        window.locationData['TP. Hồ Chí Minh'][d].forEach(
            (x) => (w.innerHTML += `<option value="${x}">${x}</option>`)
        );
    } else {
        w.disabled = true;
    }
};

window.submitModalPackage = function(e) {
    if (e) e.preventDefault();
    const p = document.getElementById('modal-pkg-name')?.value || '';
    const phoneVal = document.getElementById('modal-pkg-phone')?.value || '';
    const streetVal = document.getElementById('modal-pkg-street')?.value || '';
    const wardVal = document.getElementById('modal-pkg-ward')?.value || '';
    const districtVal = document.getElementById('modal-pkg-district')?.value || '';

    if (!p || !phoneVal || !streetVal || !wardVal || !districtVal) {
        if (window.showToast) window.showToast('Vui lòng điền đầy đủ thông tin đặt hàng', 'error');
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get('utm_source') || 'organic';

    const nameVal = p;
    const addressVal = `${streetVal}${wardVal ? ', ' + wardVal : ''}${districtVal ? ', ' + districtVal : ''}, HCM`;

    const formDuration = document.getElementById('modal-pkg-duration')?.value;
    const formSize = document.getElementById('modal-pkg-size')?.value;
    const formMeals = document.getElementById('modal-pkg-meals')?.value;

    const newLead = {
        id: Date.now(),
        name: nameVal,
        phone: phoneVal,
        address: addressVal,
        package: formDuration || '7',
        size: formSize || 'lean',
        meals: formMeals || '1',
        source: source,
        date: new Date(),
        isGrandOpening: true,
        luckyPrize: ''
    };

    if (window.potentialCustomers) {
        window.potentialCustomers.unshift(newLead);
        try {
            localStorage.setItem('nutriadmin_potential_customers', JSON.stringify(window.potentialCustomers));
        } catch (err) {
            console.error(err);
        }
    }

    if (window.syncStateToServer) window.syncStateToServer();
    if (window.playSuccessSound) window.playSuccessSound();

    if (window.showToast) window.showToast('Đăng ký lộ trình thành công! Nuri Kitchen sẽ liên hệ bạn sớm.', 'success');

    window.closeOrderPlatformModal();

    const overlay = document.getElementById('success-overlay');
    const content = document.getElementById('success-overlay-content');
    if (overlay && content) {
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.6 },
                colors: ['#10B981', '#3B82F6', '#F59E0B', '#EF4444', '#8B5CF6']
            });
        }
        overlay.classList.remove('hidden');
        overlay.classList.add('flex');
        setTimeout(() => {
            content.classList.remove('scale-95', 'opacity-0');
            content.classList.add('scale-100', 'opacity-100');
        }, 10);
    }
};
