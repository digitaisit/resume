const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check the user's theme preference from local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  body.classList.add(currentTheme);
}

themeToggle.addEventListener('change', () => {
  if (body.classList.contains('light-mode')) {
    // If the current theme is light, switch to dark
    body.classList.replace('light-mode', 'dark-mode');
    localStorage.setItem('theme', 'dark-mode');
  } else {
    // If the current theme is dark, switch to light
    body.classList.replace('dark-mode', 'light-mode');
    localStorage.setItem('theme', 'light-mode');
  }
});