const backToTopButton = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 1400) { // Exibe o botão após 300px de rolagem
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });

  
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Faz a rolagem suave
    });
  });