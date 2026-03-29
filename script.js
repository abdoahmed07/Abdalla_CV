let currentLang = 'en';

function toggleLang() {
  currentLang = currentLang === 'en' ? 'sv' : 'en';
  const btn = document.getElementById('langToggle');

  if (currentLang === 'sv') {
    btn.textContent = '🇬🇧 English';
    document.documentElement.lang = 'sv';
  } else {
    btn.textContent = '🇸🇪 Swedish';
    document.documentElement.lang = 'en';
  }

  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = currentLang === 'sv' ? el.dataset.sv : el.dataset.en;
  });
}