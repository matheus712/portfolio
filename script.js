document.addEventListener('DOMContentLoaded', () => {

  /* ===== ESTRELAS ===== */
  const starsContainer = document.getElementById("stars");

  if (starsContainer) {
    for (let i = 0; i < 120; i++) {
      const s = document.createElement("div");
      s.classList.add("star");
      s.style.top = Math.random() * 100 + "vh";
      s.style.left = Math.random() * 100 + "vw";
      s.style.animationDelay = (Math.random() * 2).toFixed(2) + "s";
      s.style.transform = `scale(${(Math.random() * 1.2 + 0.4).toFixed(2)})`;
      starsContainer.appendChild(s);
    }
  }

  /* ===== DARK MODE ===== */
  const toggleBtn = document.getElementById('toggle-dark');
  const html = document.documentElement;

  function applyTheme(theme) {
    if (theme === 'dark') {
      html.classList.add('dark');
      toggleBtn.textContent = '☀️';
      toggleBtn.setAttribute('aria-pressed', 'true');
    } else {
      html.classList.remove('dark');
      toggleBtn.textContent = '🌙';
      toggleBtn.setAttribute('aria-pressed', 'false');
    }
  }

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isNowDark = html.classList.toggle('dark');
      const newTheme = isNowDark ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      applyTheme(newTheme);
    });
  }

});