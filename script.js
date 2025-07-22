
  const toggleBtn = document.getElementById('menu-toggle');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav a');

  // Função para alternar o menu
  function toggleMenu() {
    nav.classList.toggle('active');
    toggleBtn.classList.toggle('open');
  }

  // Clicar no botão hamburguer
  toggleBtn.addEventListener('click', toggleMenu);

  // Clicar em qualquer link do menu
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      toggleBtn.classList.remove('open');
    });
  });

