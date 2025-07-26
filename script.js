const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

if(localStorage.getItem('theme') === 'dark'){
  body.classList.add('dark-mode');
  toggleBtn.textContent = 'Gündüz Modu';
} else {
  toggleBtn.textContent = 'Gece Modu';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if(body.classList.contains('dark-mode')){
    toggleBtn.textContent = 'Gündüz Modu';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleBtn.textContent = 'Gece Modu';
    localStorage.setItem('theme', 'light');
  }
});