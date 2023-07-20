const themeToggle = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-label');
const body = document.body;

// Check the user's theme preference from local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  body.classList.add(currentTheme);
  updateThemeLabel(currentTheme); // Update the theme label text and color
}

themeToggle.addEventListener('change', () => {
  if (body.classList.contains('light-mode')) {
    // If the current theme is light, switch to dark
    body.classList.replace('light-mode', 'dark-mode');
    updateThemeLabel('dark-mode'); // Update the theme label text and color
    localStorage.setItem('theme', 'dark-mode');
  } else {
    // If the current theme is dark, switch to light
    body.classList.replace('dark-mode', 'light-mode');
    updateThemeLabel('light-mode'); // Update the theme label text and color
    localStorage.setItem('theme', 'light-mode');
  }
});

function updateThemeLabel(theme) {
  if (theme === 'dark-mode') {
    themeLabel.textContent = 'Burn your eyes';
    themeLabel.style.color = '#fff'; // Set text color for dark theme
  } else {
    themeLabel.textContent = 'Quickly back!';
    themeLabel.style.color = '#000'; // Set text color for light theme
  }
}
