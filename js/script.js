document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    const header = document.querySelector('header');

    // Відкриття та закриття меню при натисканні на кнопку "бургер"
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Автоматичне закриття меню при кліку на будь-яке посилання (для мобільних)
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 600) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Ефект для шапки при скролі
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(16, 16, 21, 0.98)'; /* Менш прозорий фон */
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        } else {
            header.style.backgroundColor = 'rgba(16, 16, 21, 0.9)'; /* Більш прозорий фон */
            header.style.boxShadow = 'none';
        }
    });
});

// ... твій попередній код шапки ...

    // --- Логіка для Галереї (Лайтбокс) ---
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxPlaceholder = document.getElementById('lightbox-placeholder');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.close-lightbox');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Отримуємо назву спрайту
            const title = item.textContent.trim();
            
            // Якщо всередині gallery-item ти колись додаш тег <img>, скрипт це зрозуміє
            const imgElement = item.querySelector('img');
            
            if (imgElement) {
                // Якщо є картинка — показуємо її
                lightboxImg.src = imgElement.src;
                lightboxImg.style.display = 'block';
                lightboxPlaceholder.style.display = 'none';
            } else {
                // Якщо картинки немає (як зараз) — показуємо стильну заглушку
                lightboxImg.style.display = 'none';
                lightboxPlaceholder.style.display = 'flex';
                lightboxPlaceholder.textContent = title;
            }

            lightboxCaption.textContent = title;
            lightbox.classList.add('active'); // Відкриваємо вікно
        });
    });

    // Функція закриття
    const closeLightbox = () => {
        lightbox.classList.remove('active');
    };

    // Закриваємо при кліку на хрестик
    closeBtn.addEventListener('click', closeLightbox);
    
    // Закриваємо при кліку на темний фон (поза картинкою)
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Закриваємо клавішею Escape (зручно на ПК)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });