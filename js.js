const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-list a");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

// Fechar o menu ao clicar em qualquer link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
      console.log("Link clicado"); // Verifica se o clique no link está sendo detectado
      if (nav.classList.contains("active")) {
        nav.classList.remove("active");
      }
    });
  });
  
