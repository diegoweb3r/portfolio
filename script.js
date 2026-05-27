const botaoModo = document.getElementById('toggle-dark');
const htmlElement = document.documentElement;
const toggleImg = document.getElementById('toggle-mode-img');

if (localStorage.getItem('tema') === 'dark') {
  htmlElement.classList.add('dark-mode');
}


botaoModo.addEventListener('click', () => {
  htmlElement.classList.toggle('dark-mode');
  
  if (htmlElement.classList.contains('dark-mode')) {
    localStorage.setItem('tema', 'dark');
    toggleImg.src = './assets/sun.png';
  } else {
    localStorage.setItem('tema', 'light');
    toggleImg.src = './assets/lua.png';
  }
});