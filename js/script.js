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

    if (particlesContainer) setInterval(createParticle, 300);


// ====== МОБІЛЬНЕ МЕНЮ ======
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            if (navLinks.classList.contains('active')) {
                mobileMenuBtn.innerHTML = '✕';
            } else {
                mobileMenuBtn.innerHTML = '☰';
            }
        });

        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                // МАГІЯ ТУТ: Змінили 768 на 1024, щоб меню закривалося і на планшетах!
                if (window.innerWidth <= 1024) {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.innerHTML = '☰';
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
            // Закриваємо тільки якщо клікнули на темний фон, а не на саму картинку!
            if (e.target === lightbox) closeLightbox();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
    }

    // ====== ПАСХАЛКА (ХВОРЕ ДЕРЕВО) ======
    const paranormalOverlay = document.getElementById('paranormal-overlay');
    let treeClicks = 0;
    let clickTimer;

    // Рахуємо кліки по ЗБІЛЬШЕНІЙ картинці в лайтбоксі
    if (lightboxImg && paranormalOverlay) {
        lightboxImg.addEventListener('click', () => {
            
            // Спрацьовує тільки якщо зараз відкрито "Хворе дерево"
            if (lightboxCaption.textContent === 'Хворе дерево') {
                treeClicks++;
                
                clearTimeout(clickTimer);
                clickTimer = setTimeout(() => {
                    treeClicks = 0; // Скидаємо, якщо довго не клікати
                }, 1500);

                if (treeClicks === 5) {
                    treeClicks = 0;
                    triggerParanormalEvent();
                }
            }
        });
    }

    function triggerParanormalEvent() {
        paranormalOverlay.classList.add('active');
        
        // Генеруємо звук
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            
            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(100, audioCtx.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(10, audioCtx.currentTime + 1.2);
            
            gainNode.gain.setValueAtTime(1, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 1.2);
            
            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            
            oscillator.start();
            oscillator.stop(audioCtx.currentTime + 1.2);
        } catch(e) { 
            console.log('Аудіо не підтримується'); 
        }

        // Ховаємо екран через 1 секунду
        setTimeout(() => {
            paranormalOverlay.classList.remove('active');
        }, 1000);
    }
});

// ====== РЕТРО АУДІОПЛЕЄР ======
    const playBtn = document.getElementById('play-btn');
    const audioTrack = document.getElementById('bgm-audio');
    const retroPlayer = document.getElementById('retro-player');
    const trackStatus = document.getElementById('track-status');

    if (playBtn && audioTrack) {
        // Зменшуємо гучність, щоб не налякати (30%)
        audioTrack.volume = 0.7; 

        playBtn.addEventListener('click', () => {
            if (audioTrack.paused) {
                audioTrack.play();
                playBtn.innerHTML = '⏸ PAUSE';
                retroPlayer.classList.add('is-playing');
                trackStatus.textContent = 'Відтворюється...';
            } else {
                audioTrack.pause();
                playBtn.innerHTML = '▶ PLAY';
                retroPlayer.classList.remove('is-playing');
                trackStatus.textContent = 'Зупинено';
            }
        });
    }

