/**
 * Axlorum Technologies — Privacy Policy Page
 * Matrix animation + Navigation logic
 */

// === MATRIX ANIMATION ===
const canvas = document.getElementById("spaceMatrix");
const ctx = canvas.getContext("2d");

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&*<>/\\";
const size = 18;
const columns = [];
for (let i = 0; i < 300; i++) {
  columns[i] = {
    x: Math.random() * w,
    y: Math.random() * h,
    speed: 2 + Math.random() * 4
  };
}

function draw() {
  ctx.fillStyle = "rgba(5, 8, 15, 0.08)";
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "#00baff";
  ctx.font = size + "px monospace";

  columns.forEach(col => {
    const char = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(char, col.x, col.y);

    col.y += col.speed;
    if (col.y > h) {
      col.y = -size;
      col.x = Math.random() * w;
    }
  });

  requestAnimationFrame(draw);
}

draw();

// === MAIN APP LOGIC ===
document.addEventListener("DOMContentLoaded", () => {

  // === NAVBAR HIDE ON SCROLL ===
  const nav = document.querySelector('.nav');
  let lastScrollY = window.scrollY;
  let ticking = false;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      nav.classList.add('hidden');
    } else {
      nav.classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(handleScroll);
      ticking = true;
    }
  });

  console.log("Axlorum Privacy Policy initialized");
});
