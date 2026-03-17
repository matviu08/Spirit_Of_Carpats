document.addEventListener('DOMContentLoaded', () => {
    
    // ====== МАГІЧНІ СВІТЛЯЧКИ ТА ЛИСТЯ ======
    const particlesContainer = document.getElementById('particles');
    const leavesContainer = document.getElementById('leaves');

    function createParticle() {
        if (!particlesContainer) return;
        const p = document.createElement('div');
        p.classList.add('particle');

        const size = Math.random() * 8 + 4;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.left = Math.random() * window.innerWidth + 'px';
        p.style.top = window.innerHeight + 'px';
        
        const duration = (4 + Math.random() * 4) * 1000;
        const offsetX = Math.random() * 150 - 75;

        p.animate([
            { transform: 'translateY(0) translateX(0) scale(1)', opacity: 1 },
            { transform: `translateY(-${window.innerHeight + 100}px) translateX(${offsetX}px) scale(0)`, opacity: 0 }
        ], { duration: duration, iterations: 1, easing: 'ease-out' });

        particlesContainer.appendChild(p);
        setTimeout(() => p.remove(), duration);
    }

    // Твій друг ставив тут 1 мілісекунду. Я поставив 300 (3 рази на секунду) - це ідеально і безпечно!
    if (particlesContainer) setInterval(createParticle, 300);


    // ====== МОБІЛЬНЕ МЕНЮ ======
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }

    // ====== ЛАЙТБОКС (ГАЛЕРЕЯ) ======
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.close-lightbox');

    if (lightbox && galleryItems.length > 0) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const imgElement = item.querySelector('img');
                const titleElement = item.querySelector('.sprite-name');
                
                if (imgElement && titleElement) {
                    lightboxImg.src = imgElement.src;
                    lightboxImg.style.display = 'block';
                    lightboxCaption.textContent = titleElement.textContent;
                    lightbox.classList.add('active');
                }
            });
        });

        const closeLightbox = () => lightbox.classList.remove('active');
        
        closeBtn.addEventListener('click', closeLightbox);
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
    }
});