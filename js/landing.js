/**
 * Axlorum Technologies — Landing Page
 * Enterprise-grade landing page logic
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

  // === TRANSLATIONS ===
  const translations = {
    en: {
      "nav.login": "Login",
      "landing.hero.title": "Advanced Market Intelligence",
      "landing.hero.subtitle": "Institutional-grade AI infrastructure for autonomous market operations. Built for precision. Designed for scale.",
      "landing.hero.cta": "Request Early Access",
      "landing.highlights.h1.title": "Adaptive Decision Systems",
      "landing.highlights.h1.desc": "Real-time market regime detection with autonomous strategy calibration. No manual intervention required.",
      "landing.highlights.h2.title": "Multi-layer Risk Architecture",
      "landing.highlights.h2.desc": "Dynamic position management with institutional-grade exposure controls. Defined drawdown parameters.",
      "landing.highlights.h3.title": "Real-time Behavior Modeling",
      "landing.highlights.h3.desc": "Continuous market microstructure analysis with pattern recognition across multiple timeframes.",
      "footer.login": "Login",
      "footer.contact": "Contact",
      "footer.legal": "Trading involves substantial risk. Past performance does not guarantee future results."
    },
    he: {
      "nav.login": "התחברות",
      "landing.hero.title": "אינטליגנציה שוקית מתקדמת",
      "landing.hero.subtitle": "תשתית AI ברמה מוסדית לפעילות שוק אוטונומית. נבנה לדיוק. תוכנן לקנה מידה.",
      "landing.hero.cta": "בקש גישה מוקדמת",
      "landing.highlights.h1.title": "מערכות החלטה אדפטיביות",
      "landing.highlights.h1.desc": "זיהוי משטר שוק בזמן אמת עם כיול אסטרטגיה אוטונומי. ללא צורך בהתערבות ידנית.",
      "landing.highlights.h2.title": "ארכיטקטורת סיכון רב-שכבתית",
      "landing.highlights.h2.desc": "ניהול פוזיציות דינמי עם בקרת חשיפה ברמה מוסדית. פרמטרי ירידה מוגדרים.",
      "landing.highlights.h3.title": "מודלינג התנהגות בזמן אמת",
      "landing.highlights.h3.desc": "ניתוח מיקרו-מבנה שוק רציף עם זיהוי דפוסים על פני מסגרות זמן מרובות.",
      "footer.login": "התחברות",
      "footer.contact": "צור קשר",
      "footer.legal": "מסחר כרוך בסיכון משמעותי. ביצועי עבר אינם מבטיחים תוצאות עתידיות."
    }
  };

  // === AUTO DETECT BROWSER LANGUAGE ===
  const detectLanguage = () => {
    const browserLang = navigator.language || navigator.userLanguage;
    // Check if Hebrew
    if (browserLang.startsWith("he")) {
      return "he";
    }
    return "en";
  };

  const applyTranslations = (lang) => {
    const t = translations[lang];
    if (!t) return;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) {
        el.textContent = t[key];
      }
    });

    // Update HTML dir attribute for RTL
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  };

  // Apply language based on browser settings
  applyTranslations(detectLanguage());

  // === CTA BUTTON HANDLER ===
  const handleSignup = () => {
    const token = localStorage.getItem("token");
    if (token) {
      window.location.href = "https://axlorum.ai/";
    } else {
      window.location.href = "signup.html";
    }
  };

  // Bind CTA button
  const ctaPrimary = document.getElementById("cta-primary");
  if (ctaPrimary) {
    ctaPrimary.addEventListener("click", handleSignup);
  }

  console.log("Axlorum landing initialized");
});
