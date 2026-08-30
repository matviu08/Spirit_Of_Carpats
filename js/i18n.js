/* ======================================================
   SPIRITS OF THE CARPATHIANS — ПЕРЕМИКАЧ МОВИ (UK / EN)
   Зберігає вибір мови в localStorage і синхронізує його
   між усіма сторінками сайту.
   ====================================================== */

(function () {
    const STORAGE_KEY = 'soc_lang';
    const DEFAULT_LANG = 'uk';

    const translations = {
        uk: {
            // ─── HERO (index.html) ───
            'hero.badge': 'Тепер розробляється на Unity Engine',
            'hero.subtitle': 'СТВОРЕННЯ ЛЕГЕНДИ',
            'hero.text': 'Піксельна подорож крізь темні ліси, духів та давні легенди. Розробляється matviu08, BobrickCS22, forking2.',
            'hero.cta': 'Увійти у світ',

            // ─── NAV ───
            'nav.about': 'Історія',
            'nav.mechanics': 'Механіки',
            'nav.gallery': 'Галерея',
            'nav.roadmap': 'План',
            'nav.updates': 'Девлог',
            'nav.team': 'Команда',
            'nav.community': 'Спільнота',

            // ─── ABOUT ───
            'about.badge': 'Проєкт переноситься на Unity Engine',
            'about.title': 'Глава 1: Поклик Карпат',
            'about.p1': 'Головний герой — колишній лісничий, який повертається до рідних лісів Карпат заради ностальгії. Знайомі стежки та залишені колись позначки для туристів викликають теплі спогади.',
            'about.p2': 'Вирушивши до своєї старої наглядової вишки, герой бере до рук сокиру і раптом ловить моторошний флешбек із невідомим голосом. Проігнорувавши попередження, він зрубує хворе дерево... і пробуджує щось паранормальне.',
            'about.p3': 'Звідкись прилітає газета з майбутнього. Раптовий удар. Темрява. Так закінчується перша глава.',

            // ─── MECHANICS ───
            'mechanics.title': 'Арсенал механік',
            'mechanics.m1.title': 'Вдосконалений рух',
            'mechanics.m1.text': 'Повністю кастомна система переміщення гравця (BetterPlayerMovement). Плавні стрибки, чітке керування та нові анімації для максимального контролю в платформінгу.',
            'mechanics.m2.title': 'Система локацій',
            'mechanics.m2.text': 'Безшовне перемикання між рівнями завдяки власному LocationService. Кожна зона має свої моделі, унікальну музику та багатошаровий дизайн (Added3Layer).',
            'mechanics.m3.title': 'Збереження прогресу',
            'mechanics.m3.text': 'Надійна система SaveService, яка фіксує всі досягнення. Гравці можуть налаштовувати гру під себе у детальному меню опцій, і всі дані будуть збережені.',

            // ─── GALLERY ───
            'gallery.title': 'Галерея спрайтів та фонів',
            'gallery.item1': 'Лісничий (Idle)',
            'gallery.item2': 'Газета з майбутнього',
            'gallery.item3': 'Хворе дерево',
            'gallery.item4': 'Карпатський ліс',
            'gallery.item5': 'Фон головного меню',
            'gallery.item6': 'Фон налаштувань',
            'gallery.audioTitle': 'Аудіоархів: Звуки лісу',
            'gallery.stopped': 'Зупинено',
            'gallery.playing': 'Відтворюється...',
            'gallery.play': '▶ PLAY',
            'gallery.pause': '⏸ PAUSE',

            // ─── ROADMAP ───
            'roadmap.title': 'Дорожня карта розробки',
            'roadmap.stagesTitle': 'Етапи проєкту',
            'roadmap.s1.title': 'Прототип',
            'roadmap.s1.text': 'Базовий рух, тестова локація, збереження гри.',
            'roadmap.s2.title': 'Альфа-версія',
            'roadmap.s2.text': 'Головне меню, базова фізика, створення першої глави та налаштування звуків.',
            'roadmap.s3.title': 'Портування на Unity',
            'roadmap.s3.text': 'Перенесення проєкту на Unity Engine: фізика, спрайти, освітлення та системи збережень.',
            'roadmap.s3.tag': 'В процесі',
            'roadmap.s4.title': 'Бета-тестування',
            'roadmap.s4.text': 'Полірування багів, оптимізація та підготовка до релізу.',
            'roadmap.s5.title': 'Реліз',
            'roadmap.s5.text': 'Публікація Spirits Of The Carpathians для гравців.',
            'roadmap.progressTitle': 'Загальний прогрес',
            'roadmap.p1': 'Механіки та Код',
            'roadmap.p2': 'Графіка та Спрайти',
            'roadmap.p3': 'Звук та Музика',
            'roadmap.p4': 'Лор та Сюжет',
            'roadmap.p5': 'Портування на Unity',

            // ─── UPDATES / DEVLOG ───
            'updates.title': 'Хроніки розробки (Девлог)',

            'devlog.unity.title': 'Перехід на Unity Engine',
            'devlog.unity.tag': 'Рушій 30/08/2026',
            'devlog.unity.p1': 'Прийнято рішення перенести проєкт на <strong>Unity Engine</strong>. Це дасть нам стабільнішу фізику, готову систему 2D-освітлення, зручніші інструменти для роботи зі спрайтами та анімаціями, а також спростить подальшу кросплатформенну збірку гри.',
            'devlog.unity.q': 'Чому відбувся перехід?',
            'devlog.unity.p2': 'Ми зіткнулись з нестабільністю консольної розробки і проблемою з працюванням над асетами, графікою і всім іншим, що має бути в звичайній грі. Також дане рішення допомагає нам покращити якість самої гри.',
            'devlog.unity.p3': 'Наразі команда переносить існуючі напрацювання — рух персонажа, локації та систему збережень — у нове середовище. Частина візуальних ефектів (світло, частинки, атмосфера лісу) вже виглядає краще, ніж на попередньому рушії.',

            'devlog.p1.title': 'Фізика(БЕТА)',
            'devlog.p1.tag': 'Оновлення фізики 13/04/2026',
            'devlog.p1.text': 'Проведено масштабне оновлення фізичного рушія гри розробником (<strong>BobrickCS22</strong>). У рамках цього етапу було закладено основу для нової системи освітлення: реалізовано перші механіки взаємодії світла з об’єктами, додано базову модель його поширення та затухання, що вже дозволяє створювати більш глибоку й атмосферну візуальну складову. Разом із цим триває активна робота над удосконаленням фізики — зокрема, система колізій усе ще перебуває в процесі доопрацювання. Виявлені неточності та нестабільності поступово виправляються, і в найближчих оновленнях очікується суттєве покращення її роботи.',

            'devlog.p2.title': 'Генерація локації, атмосфера',
            'devlog.p2.tag': 'Оновлення локіції 23/03/2026',
            'devlog.p2.text': 'Була виконна робота над генерацією локацій та створенням атмосфери. Мною (<strong>BobrickCS22</strong>) було зроблено перше оновлення атмосфери локації, тепер світ став ширший. В данний момент виконуються роботи над колізією.',

            'devlog.p3.title': 'Фізика, Рух та Анімації',
            'devlog.p3.tag': 'Оновлення Beta',
            'devlog.p3.text': 'Останні кілька днів ми активно працювали над ядром гри. <strong>BobrickCS22</strong> викотив нову бету фізики (Physics_Beta!), що зробило світ більш живим (додано генерацію хмар). Тим часом <strong>forking2</strong> переписав систему керування на BetterPlayerMovement. Я (Матвій) підв\'язав під це нові спрайти та анімації. Тепер персонаж відчувається дуже динамічно!',

            'devlog.p4.title': 'Система локацій та збережень',
            'devlog.p4.tag': 'Архітектура',
            'devlog.p4.text': 'Велика робота "під капотом". Ми реалізували повноцінне перемикання між локаціями. <strong>BobrickCS22</strong> оновив моделі та LocationService, а <strong>forking2</strong> закінчив роботу над SaveService, щоб прогрес між цими локаціями не втрачався. Також додали підтримку трьох шарів для рівнів (Added3Layer) для створення ефекту глибини.',

            'devlog.p5.title': 'Головне меню, опції та звук',
            'devlog.p5.tag': 'UI / UX',
            'devlog.p5.text': 'Гра нарешті отримує своє "обличчя". Я частково завершив логіку головного меню та створив повноцінне вікно налаштувань, де тепер можна перемикати опції. Додав фонову музику та нові зображення, а <strong>BobrickCS22</strong> озвучив інтерфейс (створено hover_sound.wav для кнопок). Проєкт зібрано до купи, баги пофікшено!',

            // ─── TEAM ───
            'team.title': 'Команда розробників',
            'team.role': 'Full-stack розробник',
            'team.m1.text': 'Як і вся команда, займався всім потроху: від написання коду та базової логіки до малювання піксель-арту, створення анімацій та UI.',
            'team.m2.text': 'Універсальний боєць. Разом з іншими працював над загальною архітектурою, налаштуванням фізики, левел-дизайном та атмосферними звуками.',
            'team.m3.text': 'Також доклав руку до всіх аспектів проєкту. Активно працював над рухом гравця, системами збереження та спільним поліруванням гри.',
            'team.githubBtn': 'Профіль GitHub',

            // ─── FOOTER ───
            'footer.rights': '© 2026 matviu08, BobrickCS22, forking2. Всі права захищено.',
            'footer.stack': 'Розробляється на <span>Unity Engine</span> · HTML5 · CSS3 · JavaScript',

            // ─── EASTER EGG ───
            'easterEgg.text': 'ЛІС ПАМ\'ЯТАЄ...',

            // ─── COMMUNITY PAGE ───
            'community.back': '← Повернутись на сайт',
            'community.ok': 'OK',
            'community.discussion': 'Обговорення',
            'community.chat': 'Чат',
            'community.nickPlaceholder': 'Введи свій нікнейм',
            'community.commentPlaceholder': 'Написати коментар...',
            'community.chatPlaceholder': 'Напиши повідомлення...',
            'community.nickSaved': 'Нікнейм встановлено: ',

            // ─── PAGE TITLES ───
            'page.indexTitle': 'Spirits Of The Carpathians - Вхід',
            'page.mainTitle': 'Spirits Of The Carpathians - Девлог',
            'page.communityTitle': 'SYSTEM://LINK Chat — Spirits Of The Carpathians'
        },

        en: {
            // ─── HERO ───
            'hero.badge': 'Now being developed on Unity Engine',
            'hero.subtitle': 'THE MAKING OF A LEGEND',
            'hero.text': 'A pixel-art journey through dark forests, spirits, and ancient legends. Developed by matviu08, BobrickCS22, forking2.',
            'hero.cta': 'Enter the world',

            // ─── NAV ───
            'nav.about': 'Story',
            'nav.mechanics': 'Mechanics',
            'nav.gallery': 'Gallery',
            'nav.roadmap': 'Roadmap',
            'nav.updates': 'Devlog',
            'nav.team': 'Team',
            'nav.community': 'Community',

            // ─── ABOUT ───
            'about.badge': 'The project is being ported to Unity Engine',
            'about.title': 'Chapter 1: The Call of the Carpathians',
            'about.p1': 'The protagonist — a former forest ranger — returns to his native Carpathian woods out of nostalgia. Familiar trails and old tourist markers stir up warm memories.',
            'about.p2': 'Heading to his old watchtower, he picks up an axe and is suddenly hit by an eerie flashback with an unknown voice. Ignoring the warning, he cuts down a sick tree... and awakens something paranormal.',
            'about.p3': 'A newspaper from the future flies in out of nowhere. A sudden blow. Darkness. So ends the first chapter.',

            // ─── MECHANICS ───
            'mechanics.title': 'Arsenal of Mechanics',
            'mechanics.m1.title': 'Improved Movement',
            'mechanics.m1.text': 'A fully custom player movement system (BetterPlayerMovement). Smooth jumps, crisp controls, and new animations for maximum control in platforming.',
            'mechanics.m2.title': 'Location System',
            'mechanics.m2.text': 'Seamless switching between levels powered by a custom LocationService. Each zone has its own models, unique music, and multi-layer design (Added3Layer).',
            'mechanics.m3.title': 'Progress Saving',
            'mechanics.m3.text': 'A reliable SaveService that records every achievement. Players can customize the game to their liking in a detailed options menu, with everything saved.',

            // ─── GALLERY ───
            'gallery.title': 'Sprite & Background Gallery',
            'gallery.item1': 'Ranger (Idle)',
            'gallery.item2': 'Newspaper From the Future',
            'gallery.item3': 'Sick Tree',
            'gallery.item4': 'Carpathian Forest',
            'gallery.item5': 'Main Menu Background',
            'gallery.item6': 'Options Background',
            'gallery.audioTitle': 'Audio Archive: Sounds of the Forest',
            'gallery.stopped': 'Stopped',
            'gallery.playing': 'Playing...',
            'gallery.play': '▶ PLAY',
            'gallery.pause': '⏸ PAUSE',

            // ─── ROADMAP ───
            'roadmap.title': 'Development Roadmap',
            'roadmap.stagesTitle': 'Project Stages',
            'roadmap.s1.title': 'Prototype',
            'roadmap.s1.text': 'Basic movement, test location, game saving.',
            'roadmap.s2.title': 'Alpha Version',
            'roadmap.s2.text': 'Main menu, basic physics, creation of the first chapter, and sound setup.',
            'roadmap.s3.title': 'Unity Porting',
            'roadmap.s3.text': 'Migrating the project to Unity Engine: physics, sprites, lighting, and save systems.',
            'roadmap.s3.tag': 'In progress',
            'roadmap.s4.title': 'Beta Testing',
            'roadmap.s4.text': 'Bug polishing, optimization, and release preparation.',
            'roadmap.s5.title': 'Release',
            'roadmap.s5.text': 'Publishing Spirits Of The Carpathians for players.',
            'roadmap.progressTitle': 'Overall Progress',
            'roadmap.p1': 'Mechanics & Code',
            'roadmap.p2': 'Graphics & Sprites',
            'roadmap.p3': 'Sound & Music',
            'roadmap.p4': 'Lore & Story',
            'roadmap.p5': 'Unity Porting',

            // ─── UPDATES / DEVLOG ───
            'updates.title': 'Development Chronicles (Devlog)',

            'devlog.unity.title': 'Switching to Unity Engine',
            'devlog.unity.tag': 'Engine 30/08/2026',
            'devlog.unity.p1': 'We\'ve decided to move the project to <strong>Unity Engine</strong>. This gives us more stable physics, a ready-made 2D lighting system, more convenient tools for working with sprites and animations, and simplifies future cross-platform builds.',
            'devlog.unity.q': 'Why did we switch?',
            'devlog.unity.p2': 'We ran into instability with the console-based development setup and struggled to work efficiently with assets, graphics, and everything else a proper game needs. This decision also helps us improve the overall quality of the game.',
            'devlog.unity.p3': 'The team is currently porting existing work — character movement, locations, and the save system — into the new environment. Some visual effects (lighting, particles, forest atmosphere) already look better than on the previous engine.',

            'devlog.p1.title': 'Physics (BETA)',
            'devlog.p1.tag': 'Physics update 13/04/2026',
            'devlog.p1.text': 'A major update to the game\'s physics engine was carried out by developer <strong>BobrickCS22</strong>. As part of this stage, the foundation for a new lighting system was laid: the first mechanics of light interacting with objects were implemented, along with a basic model of light propagation and falloff, which already allows for a deeper, more atmospheric visual feel. Meanwhile, work on improving physics continues — in particular, the collision system is still being refined. Discovered inaccuracies and instabilities are gradually being fixed, and a significant improvement is expected in upcoming updates.',

            'devlog.p2.title': 'Location Generation, Atmosphere',
            'devlog.p2.tag': 'Location update 23/03/2026',
            'devlog.p2.text': 'Work was done on location generation and building atmosphere. I (<strong>BobrickCS22</strong>) made the first atmosphere update for the location — the world is now wider. Work on collisions is currently underway.',

            'devlog.p3.title': 'Physics, Movement & Animations',
            'devlog.p3.tag': 'Beta update',
            'devlog.p3.text': 'Over the past few days we worked hard on the game\'s core. <strong>BobrickCS22</strong> rolled out a new physics beta (Physics_Beta!), making the world feel more alive (added cloud generation). Meanwhile, <strong>forking2</strong> rewrote the control system with BetterPlayerMovement. I (Matviy) hooked up new sprites and animations for it. The character now feels much more dynamic!',

            'devlog.p4.title': 'Location & Save System',
            'devlog.p4.tag': 'Architecture',
            'devlog.p4.text': 'A lot of work "under the hood". We implemented full switching between locations. <strong>BobrickCS22</strong> updated the models and LocationService, while <strong>forking2</strong> finished work on SaveService so progress between locations isn\'t lost. We also added support for three level layers (Added3Layer) to create a sense of depth.',

            'devlog.p5.title': 'Main Menu, Options & Sound',
            'devlog.p5.tag': 'UI / UX',
            'devlog.p5.text': 'The game finally gets its "face". I partially finished the main menu logic and built a full options window where settings can now be toggled. Added background music and new visuals, while <strong>BobrickCS22</strong> voiced the interface (created hover_sound.wav for buttons). The project is stitched together, bugs fixed!',

            // ─── TEAM ───
            'team.title': 'Development Team',
            'team.role': 'Full-stack Developer',
            'team.m1.text': 'Like the rest of the team, worked on a bit of everything: from writing code and core logic to drawing pixel art, creating animations, and UI.',
            'team.m2.text': 'A jack of all trades. Worked with the others on the overall architecture, physics setup, level design, and atmospheric sound.',
            'team.m3.text': 'Also contributed to every aspect of the project. Actively worked on player movement, save systems, and overall game polishing.',
            'team.githubBtn': 'GitHub Profile',

            // ─── FOOTER ───
            'footer.rights': '© 2026 matviu08, BobrickCS22, forking2. All rights reserved.',
            'footer.stack': 'Built with <span>Unity Engine</span> · HTML5 · CSS3 · JavaScript',

            // ─── EASTER EGG ───
            'easterEgg.text': 'THE FOREST REMEMBERS...',

            // ─── COMMUNITY PAGE ───
            'community.back': '← Back to the site',
            'community.ok': 'OK',
            'community.discussion': 'Discussion',
            'community.chat': 'Chat',
            'community.nickPlaceholder': 'Enter your nickname',
            'community.commentPlaceholder': 'Write a comment...',
            'community.chatPlaceholder': 'Write a message...',
            'community.nickSaved': 'Nickname set: ',

            // ─── PAGE TITLES ───
            'page.indexTitle': 'Spirits Of The Carpathians - Login',
            'page.mainTitle': 'Spirits Of The Carpathians - Devlog',
            'page.communityTitle': 'SYSTEM://LINK Chat — Spirits Of The Carpathians'
        }
    };

    function getLang() {
        try {
            return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
        } catch (e) {
            return DEFAULT_LANG;
        }
    }

    function setLang(lang) {
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    }

    function applyLang(lang) {
        const dict = translations[lang] || translations[DEFAULT_LANG];

        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key] !== undefined) {
                el.setAttribute('placeholder', dict[key]);
            }
        });

        const toggleBtn = document.getElementById('lang-toggle');
        if (toggleBtn) {
            toggleBtn.textContent = lang === 'uk' ? 'EN' : 'UA';
        }
    }

    function initLangToggle() {
        const lang = getLang();
        applyLang(lang);

        const toggleBtn = document.getElementById('lang-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                const current = getLang();
                const next = current === 'uk' ? 'en' : 'uk';
                setLang(next);
                applyLang(next);
            });
        }
    }

    // Публічний хелпер для інших скриптів (наприклад, community_script.js)
    window.i18n = {
        t: function (key) {
            const dict = translations[getLang()] || translations[DEFAULT_LANG];
            return dict[key] !== undefined ? dict[key] : key;
        },
        lang: getLang
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLangToggle);
    } else {
        initLangToggle();
    }
})();
