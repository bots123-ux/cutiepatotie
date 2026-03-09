// ── Floating hearts ──
const emojis = ['❤️', '🩷', '💕', '💗', '🌸', '💝', '✨', '💖'];
const container = document.getElementById('heartsContainer');

function spawnHeart() {
    const el = document.createElement('span');
    el.className = 'heart-particle';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = Math.random() * 100 + 'vw';

    const dur = 5 + Math.random() * 6;
    el.style.animationDuration = dur + 's';
    el.style.animationDelay = (Math.random() * 3) + 's';
    el.style.fontSize = (1 + Math.random() * 1.4) + 'rem';

    container.appendChild(el);
    setTimeout(() => el.remove(), (dur + 3) * 1000);
}

// Spawn an initial batch, then keep spawning
for (let i = 0; i < 12; i++) spawnHeart();
setInterval(spawnHeart, 500);

// ── Kiss modal ──
const modal = document.getElementById('kissModal');

document.getElementById('exitButton').addEventListener('click', () => {
    modal.classList.add('show');
});

document.getElementById('closeModal').addEventListener('click', () => {
    modal.classList.remove('show');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('show');
});
