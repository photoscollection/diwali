
```

---

### ⚙️ 3. `script.js`

```js
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

function downloadCard() {
  const card = document.getElementById('card');
  html2canvas(card).then(canvas => {
    const link = document.createElement('a');
    link.download = 'diwali-greeting.png';
    link.href = canvas.toDataURL();
    link.click();
});
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
      vx: (Math.random() - 0.5⁽¹⁾⁽²⁾

--------
[1]  (https://github.com/kooks7/kooks7.github.io/tree/eeaef025be0a14390ef9fa7212bde6e9a95c5465/_posts%2F2020-06-23-%5BTypeScript%5D-TypeScript-%EA%B8%B0%EB%B3%B8-%ED%83%80%EC%9E%85.md)
[2]  (https://github.com/lzh-yi/Web-Fork-/tree/024b3e55587afdf9f05a677613a75f24e3d1803e/03-CSS%E8%BF%9B%E9%98%B6%2F04-%E5%A6%82%E4%BD%95%E8%AE%A9%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0%E6%B0%B4%E5%B9%B3%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD%EF%BC%9F.md)
