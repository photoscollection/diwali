js
const nameInput = document.getElementById('nameInput');
const greeting = document.getElementById('greeting');
const message = document.getElementById('message');
const audio = document.getElementById('bgMusic');
const toggleBtn = document.getElementById('audioToggle');

const greetingsList = [
  "Wishing you a Diwali full of light, laughter, and love.",
  "May your life sparkle with joy and prosperity this Diwali!",
  "Let the lamps of Diwali brighten your path to success.",
  "শুভ দীপাবলি! আলো ও আনন্দে ভরে উঠুক তোমার জীবন।",
  "Happy Diwali! May your home be filled with happiness and harmony.",
  "Sending you warm wishes for a joyful and blessed Diwali.",
  "May the festival of lights illuminate your heart and soul.",
  "Diwali blessings to you and your family—shine on!",
  "Celebrate this Diwali with sweets, smiles, and sparkles!",
  "Wishing you endless moments of joy this Diwali season."
];

function updateGreeting(name) {
  greeting.classList.remove('show');
  message.classList.remove('show');

  setTimeout(() => {
    greeting.textContent = name? `শুভ দীপাবলি, ${name} ✨`: 'শুভ দীপাবলি ✨';
    message.textContent = greetingsList[Math.floor(Math.random() * greetingsList.length)];
    greeting.classList.add('show');
    message.classList.add('show');
}, 100);
}

updateGreeting('');

nameInput.addEventListener('input', () => {
  const name = nameInput.value.trim();
  updateGreeting(name);
});

function copyGreeting() {
  const name = nameInput.value.trim() || 'Friend';
  const text = `শুভ দীপাবলি, ${name}! ${message.textContent} 🪔✨`;
  navigator.clipboard.writeText(text).then(() => alert("Greeting copied!"));
}

toggleBtn.addEventListener('click', () => {
  audio.muted =!audio.muted;
  toggleBtn.textContent = audio.muted? '🔇 Unmute': '🔈 Mute';
});

// Fireworks animation
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createBurst(x, y) {
  for (let i = 0; i < 40; i++) {
    particles.push({
      x, y,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      alpha: 1,
      radius: 2 + Math.random() * 2,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`
});
}
}

canvas.addEventListener('click', e => createBurst(e.clientX, e.clientY));

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= 0.02;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.alpha;
    ctx.fill();
});
  particles = particles.filter(p => p.alpha> 0);
  ctx.globalAlpha = 1;
  requestAnimationFrame(animate);
}
animate();
```
