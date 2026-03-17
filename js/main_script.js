// ====== СВІТЛЯЧКИ ======
const particlesContainer = document.createElement('div');
particlesContainer.id = 'particles';
document.body.appendChild(particlesContainer);

function createParticle() {
    const p = document.createElement('div');
    p.classList.add('particle');
    const size = Math.random()*4 + 2;
    p.style.width = size+'px';
    p.style.height = size+'px';
    p.style.left = Math.random()*window.innerWidth+'px';
    p.style.top = Math.random()*window.innerHeight+'px';
    p.style.opacity = Math.random();
    const duration = 4 + Math.random()*4;
    p.animate([
        { transform:'translateY(0px)', opacity: p.style.opacity },
        { transform:'translateY(-150px)', opacity:0 }
    ], { duration: duration*1000, iterations:1, easing:'linear' });
    particlesContainer.appendChild(p);
    setTimeout(()=>p.remove(), duration*1000);
}
setInterval(createParticle,120);

// ====== ЛИСТЯ / МАГІЧНІ ЧАСТИНКИ ======
const leavesContainer = document.createElement('div');
leavesContainer.id='leaves';
document.body.appendChild(leavesContainer);

function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    leaf.style.left = Math.random()*window.innerWidth+'px';
    leaf.style.top = window.innerHeight+'px';
    leaf.style.opacity = 0.3+Math.random()*0.7;
    const speed = 4000+Math.random()*4000;
    leaf.animate([
        { transform:'translateY(0px) rotate(0deg)' },
        { transform:`translateY(-${window.innerHeight + 50}px) rotate(${Math.random()*360}deg)` }
    ], { duration:speed, iterations:1, easing:'linear' });
    leavesContainer.appendChild(leaf);
    setTimeout(()=>leaf.remove(), speed);
}
setInterval(createLeaf,350);

// ====== МЕНЮ МОБІЛЬНЕ ======
const menuToggle = document.getElementById('mobile-menu');
const nav = document.getElementById('nav-links');
menuToggle.addEventListener('click',()=>{ nav.classList.toggle('active'); });

// ====== LIGHTBOX (якщо потрібен) ======
document.querySelectorAll('.gallery-item').forEach(item=>{
    item.addEventListener('click',()=>{
        const lb = document.getElementById('lightbox');
        const caption = document.getElementById('lightbox-caption');
        const placeholder = document.getElementById('lightbox-placeholder');
        lb.classList.add('active');
        caption.innerText = item.innerText;
        placeholder.style.display='flex';
    });
});
document.querySelector('.close-lightbox').addEventListener('click',()=>{
    document.getElementById('lightbox').classList.remove('active');
});