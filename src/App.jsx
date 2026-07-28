import React, { useEffect } from 'react';
import navbarHtml from './html/Navbar.html?raw';
import mainHtml from './html/MainContent.html?raw';
import modalsHtml from './html/Modals.html?raw';
import './legacy.css';
import './index.css';

export default function App() {
  useEffect(() => {
    if (document.getElementById('legacy-script-loader')) return;

    const script = document.createElement('script');
    script.id = 'legacy-script-loader';
    script.src = './legacy.js';
    script.onload = () => {
        const cmsScript = document.createElement('script');
        cmsScript.src = './cms.js';
        cmsScript.onload = () => {
          window.document.dispatchEvent(new Event('DOMContentLoaded', {
              bubbles: true,
              cancelable: true
          }));

          const showBanner = JSON.parse(localStorage.getItem("nutriadmin_settings") || "{}").bannerGrandOpeningEnabled !== false;
          if (showBanner && !window.hasShownGrandOpeningPopup) {
            const selfMixBanner = document.getElementById("home-self-mix-banner");
            if (selfMixBanner) {
              const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                  window.hasShownGrandOpeningPopup = true;
                  if (window.openGrandOpeningPopup) setTimeout(window.openGrandOpeningPopup, 500);
                  observer.disconnect();
                }
              }, { threshold: 0.2 });
              observer.observe(selfMixBanner);
            }
          }
        };
        document.body.appendChild(cmsScript);
    };
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const updateViewport = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const metaViewport = document.querySelector('meta[name=viewport]');
      if (metaViewport) {
        if (urlParams.get("mode") === "admin") {
          metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        } else {
          metaViewport.setAttribute('content', 'width=1280');
        }
      }
    };
    
    // Check initially
    updateViewport();
    
    // Intercept pushState and replaceState to detect mode changes
    const originalPushState = window.history.pushState;
    window.history.pushState = function() {
      originalPushState.apply(this, arguments);
      updateViewport();
    };
    const originalReplaceState = window.history.replaceState;
    window.history.replaceState = function() {
      originalReplaceState.apply(this, arguments);
      updateViewport();
    };
    window.addEventListener('popstate', updateViewport);

    return () => {
      window.removeEventListener('popstate', updateViewport);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const wrapper = document.getElementById('scroll-animation-wrapper');
      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Bắt đầu tính progress ngay khi mép trên của wrapper chạm mép dưới màn hình
      const maxScroll = wrapper.offsetHeight; 
      const currentScroll = windowHeight - rect.top;

      let progress = 0;
      if (currentScroll > 0) {
        progress = Math.min(1, currentScroll / maxScroll);
      }

      // Hiệu ứng "Tách đôi màn hình" (Curtain Reveal): hoàn tất trong 25% cuộn đầu tiên
      const curtainProgress = Math.min(1, progress / 0.25);
      const curtainTop = document.getElementById('curtain-top');
      const curtainBottom = document.getElementById('curtain-bottom');
      if (curtainTop) curtainTop.style.transform = `translateY(-${curtainProgress * 100}%)`;
      if (curtainBottom) curtainBottom.style.transform = `translateY(${curtainProgress * 100}%)`;

      // Hoạt ảnh các vật thể: bắt đầu từ 15% và kết thúc ở 70%
      // 30% còn lại (từ 0.7 đến 1.0) là khoảng ghim màn hình (dead zone)
      let animProgress = 0;
      if (progress > 0.15) {
        animProgress = Math.min(1, (progress - 0.15) / 0.55);
      }

      const img1 = document.getElementById('anim-img-1');
      const img2 = document.getElementById('anim-img-2');
      const img3 = document.getElementById('anim-img-3');
      const slogan1 = document.getElementById('anim-slogan-1');
      const slogan2 = document.getElementById('anim-slogan-2');

      if (img1) img1.style.transform = `translate(-50%, ${(1 - animProgress) * 150}vh)`;
      if (img2) img2.style.transform = `translateX(${(1 - animProgress) * 150}vw)`;
      if (img3) img3.style.transform = `translateX(-${(1 - animProgress) * 150}vw)`;

      if (slogan1) {
        slogan1.style.opacity = animProgress;
        slogan1.style.transform = `scale(${0.5 + 0.5 * animProgress}) translateY(${-50 * (1 - animProgress)}px)`;
      }
      if (slogan2) {
        slogan2.style.opacity = animProgress;
        slogan2.style.transform = `scale(${0.5 + 0.5 * animProgress}) translateY(${50 * (1 - animProgress)}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Add small delay to ensure DOM is ready since it's injected via innerHTML
    setTimeout(handleScroll, 500); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: navbarHtml }} />
      <div dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <div dangerouslySetInnerHTML={{ __html: modalsHtml }} />
    </>
  );
}
