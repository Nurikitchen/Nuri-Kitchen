(function() {
  let isEditMode = false;
  let hasInjectedToolbar = false;
  let originalHtml = "";

  function injectToolbar() {
    if (hasInjectedToolbar) return;
    const toolbar = document.createElement('div');
    toolbar.id = 'nuri-cms-toolbar';
    toolbar.className = 'fixed bottom-4 right-4 bg-slate-900 text-white rounded-2xl shadow-2xl p-2 flex items-center gap-2 z-50 transition-all';
    toolbar.innerHTML = `
      <div class="px-3 font-bold text-emerald-400 border-r border-slate-700 hidden sm:block">Nuri CMS</div>
      <button id="cms-btn-edit" class="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-sm font-medium transition-colors flex items-center gap-2">
        <i class="fa-solid fa-pen"></i> Chỉnh sửa
      </button>
      <button id="cms-btn-save" class="hidden px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-sm font-medium transition-colors flex items-center gap-2">
        <i class="fa-solid fa-floppy-disk"></i> Lưu tạm
      </button>
      <button id="cms-btn-sync" class="hidden px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl text-sm font-medium transition-colors flex items-center gap-2">
        <i class="fa-solid fa-cloud-arrow-up"></i> Đồng bộ
      </button>
      <button id="cms-btn-cancel" class="hidden px-4 py-2 bg-red-600 hover:bg-red-500 rounded-xl text-sm font-medium transition-colors flex items-center gap-2">
        <i class="fa-solid fa-xmark"></i> Thoát
      </button>
    `;
    document.body.appendChild(toolbar);
    hasInjectedToolbar = true;

    document.getElementById('cms-btn-edit').addEventListener('click', toggleEditMode);
    document.getElementById('cms-btn-save').addEventListener('click', saveToLocal);
    document.getElementById('cms-btn-sync').addEventListener('click', syncToFirebase);
    document.getElementById('cms-btn-cancel').addEventListener('click', cancelEdit);
  }

  function toggleEditMode() {
    isEditMode = true;
    const kitchenView = document.getElementById('view-kitchen');
    originalHtml = kitchenView.innerHTML; // Store original to revert if needed

    // Update buttons
    document.getElementById('cms-btn-edit').classList.add('hidden');
    document.getElementById('cms-btn-save').classList.remove('hidden');
    document.getElementById('cms-btn-sync').classList.remove('hidden');
    document.getElementById('cms-btn-cancel').classList.remove('hidden');

    // Make text elements editable
    const textSelectors = 'h1, h2, h3, h4, h5, p, span, li, button, a';
    const elements = kitchenView.querySelectorAll(textSelectors);
    elements.forEach(el => {
      // Only make it editable if it has text directly inside, to prevent breaking icons/structure too much
      if (el.textContent.trim().length > 0 && (el.children.length === 0 || (el.childNodes.length > 0 && Array.from(el.childNodes).some(n => n.nodeType === 3 && n.textContent.trim().length > 0)))) {
        el.setAttribute('contenteditable', 'true');
        el.classList.add('outline', 'outline-2', 'outline-dashed', 'outline-emerald-400', 'outline-offset-2', 'hover:bg-emerald-50', 'dark:hover:bg-emerald-900/30', 'transition-colors', 'cms-editable-text');
      }
    });

    
    // Make sequence editable
    const seqSection = kitchenView.querySelector('#section-scroll-sequence');
    if (seqSection && !kitchenView.querySelector('#btn-edit-hero-seq')) {
      const btn = document.createElement('div');
      btn.id = 'btn-edit-hero-seq';
      btn.className = 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-white px-5 py-3 rounded-xl z-[999] cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex items-center gap-3 hover:bg-slate-800 transition-colors border border-slate-700 cms-ignore';
      btn.innerHTML = '<i class="fa-solid fa-film text-emerald-400"></i> <span class="font-bold text-sm">Chỉnh sửa Sequence</span>';
      
      const input = document.createElement('input');
      input.type = 'file';
      input.multiple = true;
      input.accept = 'image/png, image/jpeg';
      input.className = 'hidden cms-ignore';
      input.onchange = (e) => {
        if (window.uploadHeroSequence) window.uploadHeroSequence(e);
      };
      
      btn.appendChild(input);
      btn.onclick = () => input.click();
      
      // Wrapper for relative positioning
      const wrapper = document.createElement('div');
      wrapper.className = 'absolute inset-0 w-full h-full bg-black/10 z-[100] flex items-center justify-center cms-ignore';
      wrapper.id = 'hero-seq-edit-overlay';
      wrapper.appendChild(btn);
      
      seqSection.appendChild(wrapper);
    }

// Make images editable
    const images = kitchenView.querySelectorAll('img');
    images.forEach(img => {
      img.classList.add('outline', 'outline-4', 'outline-dashed', 'outline-blue-400', 'cursor-pointer', 'hover:opacity-80', 'transition-opacity', 'cms-editable-image');
      img.title = "Click để thay ảnh";
      img.addEventListener('click', handleImageClick);
    });

    // Add Bulk Upload button for customer meals
    const mealsCarousel = document.getElementById('customer-meals-carousel');
    if (mealsCarousel && !document.getElementById('cms-bulk-upload-btn')) {
      const bulkBtn = document.createElement('button');
      bulkBtn.id = 'cms-bulk-upload-btn';
      bulkBtn.className = 'absolute top-0 right-0 z-50 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg flex items-center gap-2 transition-colors cms-dynamic-ui';
      bulkBtn.innerHTML = '<i class="fa-solid fa-upload"></i> Tải lên hàng loạt';
      bulkBtn.onclick = handleBulkUpload;
      // Append to the parent relative container so it floats over the carousel
      mealsCarousel.parentElement.appendChild(bulkBtn);
    }

    if (window.showToast) window.showToast("Đã bật chế độ chỉnh sửa. Click vào văn bản hoặc hình ảnh để sửa.", "info");
  }

  function cancelEdit() {
  
    const overlay = document.getElementById('hero-seq-edit-overlay');
    if (overlay) overlay.remove();
  isEditMode = false;
    const kitchenView = document.getElementById('view-kitchen');
    // Revert to original
    if (originalHtml) {
      kitchenView.innerHTML = originalHtml;
    }
    resetToolbar();
    if (window.showToast) window.showToast("Đã hủy chỉnh sửa.", "info");
  }

  function resetToolbar() {
    document.getElementById('cms-btn-edit').classList.remove('hidden');
    document.getElementById('cms-btn-save').classList.add('hidden');
    document.getElementById('cms-btn-sync').classList.add('hidden');
    document.getElementById('cms-btn-cancel').classList.add('hidden');
  }

  function stripCmsClasses(html) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    
    // Strip text editables
    tempDiv.querySelectorAll('.cms-editable-text').forEach(el => {
      el.removeAttribute('contenteditable');
      el.classList.remove('outline', 'outline-2', 'outline-dashed', 'outline-emerald-400', 'outline-offset-2', 'hover:bg-emerald-50', 'dark:hover:bg-emerald-900/30', 'transition-colors', 'cms-editable-text');
    });

    // Strip image editables
    tempDiv.querySelectorAll('.cms-editable-image').forEach(img => {
      img.removeAttribute('title');
      img.classList.remove('outline', 'outline-4', 'outline-dashed', 'outline-blue-400', 'cursor-pointer', 'hover:opacity-80', 'transition-opacity', 'cms-editable-image');
    });

    // Strip active classes from scroll reveal so they can animate again on load
    tempDiv.querySelectorAll('.reveal.active, .reveal-left.active, .reveal-right.active, .reveal-scale.active').forEach(el => {
      el.classList.remove('active');
    });

    // Remove dynamic UI elements like bulk upload button
    tempDiv.querySelectorAll('.cms-dynamic-ui').forEach(el => el.remove());

    return tempDiv.innerHTML;
  }

  function saveToLocal() {
    const kitchenView = document.getElementById('view-kitchen');
    const cleanHtml = stripCmsClasses(kitchenView.innerHTML);
    localStorage.setItem('nuri_kitchen_custom_html', cleanHtml);
    
    isEditMode = false;
    const overlay = kitchenView.querySelector('#hero-seq-edit-overlay'); if (overlay) overlay.remove();
      kitchenView.innerHTML = cleanHtml;
    resetToolbar();
    
    if (window.showToast) window.showToast("Đã lưu chỉnh sửa (Local).", "success");
    if (window.initScrollReveal) setTimeout(window.initScrollReveal, 100);
  }

  async function syncToFirebase() {
    // Save to local first just in case
    const kitchenView = document.getElementById('view-kitchen');
    const cleanHtml = stripCmsClasses(kitchenView.innerHTML);
    localStorage.setItem('nuri_kitchen_custom_html', cleanHtml);

    // Now upload
    if (window.showToast) window.showToast("Đang đồng bộ lên Firebase...", "info");
    try {
      if (!window.firebase || !window.firebase.firestore) {
        throw new Error("Firebase chưa được khởi tạo!");
      }
      const db = window.firebase.firestore();
      await db.collection("nutriadmin_v1").doc("kitchen_page_content").set({
        html: cleanHtml,
        updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
      
      isEditMode = false;
      kitchenView.innerHTML = cleanHtml;
      resetToolbar();
      
      if (window.showToast) window.showToast("Đã đồng bộ thành công lên máy chủ!", "success");
      if (window.initScrollReveal) setTimeout(window.initScrollReveal, 100);
    } catch (e) {
      console.error(e);
      if (window.showToast) window.showToast("Lỗi đồng bộ: " + e.message, "error");
    }
  }

  function handleBulkUpload() {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = 'image/*';
    input.onchange = async (event) => {
      const files = Array.from(event.target.files);
      if (files.length === 0) return;
      
      if (window.showToast) window.showToast(`Đang tải lên và xử lý ${files.length} ảnh...`, "info");
      
      const carousel = document.getElementById('customer-meals-carousel');
      if (!carousel) return;
      const images = carousel.querySelectorAll('img');
      
      let processed = 0;
      for (let i = 0; i < files.length && i < images.length; i++) {
        await new Promise((resolve) => {
          compressImage(files[i], (base64) => {
            images[i].src = base64;
            processed++;
            resolve();
          });
        });
      }
      
      if (window.showToast) window.showToast(`Đã thay thế thành công ${processed} ảnh!`, "success");
    };
    input.click();
  }

  function handleImageClick(e) {
    if (!isEditMode) return;
    const img = e.target;
    
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event) => {
      const file = event.target.files[0];
      if (file) {
        compressImage(file, (base64) => {
          img.src = base64;
          if (window.showToast) window.showToast("Đã thay ảnh (chờ Lưu/Đồng bộ)", "success");
        });
      }
    };
    input.click();
  }

  function compressImage(file, callback) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        
        const MAX_WIDTH = 1000;
        const MAX_HEIGHT = 1000;
        
        if (width > height) {
          if (width > MAX_WIDTH) {
            height = Math.round((height *= MAX_WIDTH / width));
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width = Math.round((width *= MAX_HEIGHT / height));
            height = MAX_HEIGHT;
          }
        }
        
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        
        const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7);
        callback(compressedBase64);
      };
    };
  }

  function checkAdminToolbar() {
    if (typeof window.checkAdminSessionSilent !== 'undefined' && window.checkAdminSessionSilent()) {
      const params = new URLSearchParams(window.location.search);
      // Only show on kitchen view when admin is logged in, or we can just show it if admin session is true and we are on kitchen
      // Wait, is "kitchen" view active?
      const kitchenView = document.getElementById('view-kitchen');
      if (kitchenView && !kitchenView.classList.contains('hidden')) {
        injectToolbar();
      } else {
        const toolbar = document.getElementById('nuri-cms-toolbar');
        if (toolbar) toolbar.remove();
        hasInjectedToolbar = false;
      }
    } else {
      const toolbar = document.getElementById('nuri-cms-toolbar');
      if (toolbar) toolbar.remove();
      hasInjectedToolbar = false;
    }
  }

  async function loadFirebaseContent() {
    try {
      if (!window.firebase || !window.firebase.firestore) return;
      const db = window.firebase.firestore();
      const doc = await db.collection("nutriadmin_v1").doc("kitchen_page_content").get();
      if (doc.exists) {
        const data = doc.data();
        if (data.html) {
          const kitchenView = document.getElementById('view-kitchen');
          if (kitchenView) {
            kitchenView.innerHTML = data.html;
            if (window.initScrollReveal) setTimeout(window.initScrollReveal, 100);
          }
        }
      }
    } catch (e) {
      console.error("Error loading CMS content:", e);
    }
  }

  // Hook into DOMContentLoaded
  window.addEventListener('DOMContentLoaded', () => {
    // Check if we have local version first (for faster load)
    const localHtml = localStorage.getItem('nuri_kitchen_custom_html');
    if (localHtml) {
      const kitchenView = document.getElementById('view-kitchen');
      if (kitchenView) kitchenView.innerHTML = localHtml;
    }

    // Wait for firebase to be ready
    const checkFirebase = setInterval(() => {
      if (window.firebase && window.firebase.firestore) {
        clearInterval(checkFirebase);
        loadFirebaseContent();
      }
    }, 500);

    // Periodically check for admin toolbar
    setInterval(checkAdminToolbar, 1000);
  });
})();
