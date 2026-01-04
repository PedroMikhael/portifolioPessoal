// --- Menu Mobile ---
function toggleMobileMenu() {
  const menu = document.querySelector('.mobile-menu');
  const icon = document.querySelector('.mobile-menu-icon i');
  
  menu.classList.toggle('active');
  
  // Alterna ícone entre barras e X
  if (menu.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark');
  } else {
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  }
}

// --- Dark / Light Mode ---
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');

// Verifica preferência salva ou do sistema
const savedTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateIcon(savedTheme);
} else {
  document.documentElement.setAttribute('data-theme', systemTheme);
  updateIcon(systemTheme);
}

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateIcon(newTheme);
});

function updateIcon(theme) {
  if (theme === 'dark') {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }
}

// Fechar menu mobile ao clicar em link (UX)
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.remove('active');
    document.querySelector('.mobile-menu-icon i').classList.remove('fa-xmark');
    document.querySelector('.mobile-menu-icon i').classList.add('fa-bars');
  });
});