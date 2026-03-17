// ====== СВІТЛЯЧКИ ======
const particlesContainer = document.getElementById('particles');

function createParticle() {
    const p = document.createElement('div');
    p.classList.add('particle');

    const size = Math.random() * 8 + 4; // збільшуємо мінімум до 4, максимум до 12
    p.style.width = size + 'px';
    p.style.height = size + 'px';

    p.style.left = Math.random() * window.innerWidth + 'px';
    p.style.top = window.innerHeight + 'px';

    p.style.background = 'radial-gradient(circle, #8affc1, #6fcf97)';
    p.style.boxShadow = '0 0 12px #8affc1, 0 0 20px #6fcf97';
    p.style.borderRadius = '50%';

    p.style.opacity = 1;
    const duration = 4 + Math.random() * 4;

    const offsetX = Math.random() * 150 - 75;
    const rotation = Math.random() * 360;

    p.animate([
        { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: 1 },
        { transform: `translateY(-${window.innerHeight + 100}px) translateX(${offsetX}px) rotate(${rotation}deg)`, opacity: 0 }
    ], { duration: duration * 1000, iterations: 1, easing: 'ease-out' });

    particlesContainer.appendChild(p);

    setTimeout(() => p.remove(), duration * 1000);
}

setInterval(createParticle, 20);

// ====== ЛИСТЯ / МАГІЧНІ ЧАСТИНКИ ======
const leavesContainer = document.getElementById('leaves');

function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    leaf.style.left = Math.random()*window.innerWidth+'px';
    leaf.style.top = window.innerHeight+'px';
    leaf.style.opacity = 1;
    const speed = 4000+Math.random()*4000;
    leaf.animate([
        { transform:'translateY(0px) rotate(0deg)' },
        { transform:`translateY(-${window.innerHeight + 100}px) rotate(${Math.random()*360}deg)` }
    ], { duration:speed, iterations:1, easing:'linear' });
    leavesContainer.appendChild(leaf);
    setTimeout(()=>leaf.remove(), speed);
}
setInterval(createLeaf,1);