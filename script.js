const themeToggle = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-label');
const body = document.body;
const footer = document.querySelector('footer');
const socialIconTwitter = document.querySelector('.social-icons-top .fab.fa-twitter');
const socialIconLinkedin = document.querySelector('.social-icons-top .fab.fa-linkedin');


// Check the user's theme preference from local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  body.classList.add(currentTheme);
  updateThemeLabel(currentTheme); 
}

themeToggle.addEventListener('change', () => {
  
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode'); // remove light mode
    body.classList.add('dark-mode'); // add dark mode
    updateThemeLabel('dark-mode');
    localStorage.setItem('theme', 'dark-mode');
  } else {
    body.classList.remove('dark-mode'); // remove dark mode
    body.classList.add('light-mode'); // add light mode
    updateThemeLabel('light-mode');
    localStorage.setItem('theme', 'light-mode');
  }
});

function updateThemeLabel(theme) {
  if (theme === 'dark-mode') {
    themeLabel.textContent = 'Burn your eyes';
    themeLabel.style.color = '#fff'; 
    footer.style.color = '#fff'; 
    footer.style.backgroundColor = '#333'; 
    body.style.backgroundColor = '#333'; 
    body.style.color = '#fff';
    socialIconTwitter.style.color = '#fff';
    socialIconLinkedin.style.color = '#fff';
  } else {
    themeLabel.textContent = 'Quickly back!';
    themeLabel.style.color = '#000'; 
    footer.style.color = '#000'; 
    footer.style.backgroundColor = '#fff'; 
    body.style.backgroundColor = '#fff';
    body.style.color = '#000';
    socialIconTwitter.style.color = '#000';
    socialIconLinkedin.style.color = '#000';
  }
}


function showPopup(socialMedia) {
    let message = '';
  
    // Check which social media icon was clicked and set the appropriate message
    if (socialMedia === 'Twitter') {
      message = 'Elon ruined it.';
    } else if (socialMedia === 'LinkedIn') {
      message = 'You clicked on the LinkedIn icon!';
    } else {
      message = 'You clicked on an unknown social media icon!';
    }
  
    // Display the pop-up message
    alert(message);
  }
  