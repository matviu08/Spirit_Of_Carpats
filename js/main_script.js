// ====== СВІТЛЯЧКИ ======
const particlesContainer = document.createElement('div');
particlesContainer.id = 'particles';
document.body.appendChild(particlesContainer);

function createParticle() {
    const p = document.createElement('div');
    p.classList.add('particle');

    const size = Math.random() * 6 + 4; // трохи більші
    p.style.width = size + 'px';
    p.style.height = size + 'px';

    p.style.left = Math.random() * window.innerWidth + 'px';
    p.style.top = window.innerHeight + 'px';
    p.style.opacity = 0.8 + Math.random() * 0.2;

    const duration = 4000 + Math.random() * 3000; // мілісекунди
    const offsetX = Math.random() * 100 - 50;
    const rotation = Math.random() * 360;

    p.animate([
        { transform: 'translateY(0px) translateX(0px) rotate(0deg)', opacity: p.style.opacity },
        { transform: `translateY(-${window.innerHeight + 100}px) translateX(${offsetX}px) rotate(${rotation}deg)`, opacity: 0 }
    ], { duration: duration, iterations: 1, easing: 'ease-out' });

    particlesContainer.appendChild(p);
    setTimeout(() => p.remove(), duration);
}
setInterval(createParticle, 100); // більш реалістичний інтервал