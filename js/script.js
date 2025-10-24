const menuHamburguer = document.querySelector(".menu-hamburguer");
menuHamburguer.addEventListener("click", () => {
  toggleMenu();
});

function toggleMenu() {
  const nav = document.querySelector(".nav-responsive");
  menuHamburguer.classList.toggle("change");

  if (menuHamburguer.classList.contains("change")) {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
}

let currentLanguage = "pt-BR";

const translations = {
  "pt-BR": {
    inicio: "Início",
    sobre_mim: "Sobre",
    projetos: "Projetos",
    contato: "Contato",
    about_me_title: "Sobre Mim",
    about_me_subtitle: "Desenvolvedor Web com experiência em:",
    about_me_text:
      "Sou bacharel em Ciência da Computação e um apaixonado pela área de Desenvolvimento Web. Estou sempre em busca de expandir meus conhecimentos, aprimorar minhas habilidades, descobrir novas ferramentas e topar desafios que me desenvolvam profissionalmente. Estou apto a trabalhar de forma presencial, híbrida ou remota",
    curriculo: "Currículo",
  },
  "en-US": {
    inicio: "Home",
    sobre_mim: "About",
    projetos: "Projects",
    contato: "Contact",
    about_me_title: "About Me",
    about_me_subtitle: "Web Developer with experience in:",
    about_me_text:
      "I hold a Bachelor's degree in Computer Science and I am passionate about Web Development. I am always seeking to expand my knowledge, improve my skills, discover new tools, and take on challenges that will develop me professionally. I am available to work on-site, hybrid, or remotely.",
    curriculo: "Resume",
  },
};

function translatePage() {
  const elementsToTranslate = document.querySelectorAll("[data-translate]");
  elementsToTranslate.forEach((element) => {
    const key = element.getAttribute("data-translate");
    element.textContent = translations[currentLanguage][key];
  });
}

const countryIcon = document.getElementById("language-button");
const image = document.getElementById("language-icon");
const resume = document.getElementById("button-cv");

countryIcon.addEventListener("click", () => {
  currentLanguage = currentLanguage === "pt-BR" ? "en-US" : "pt-BR";
  resume.href =
    currentLanguage === "pt-BR"
      ? "./assets/Currículo - Elisandro Sousa.pdf"
      : "./assets/Resume - Elisandro Sousa.pdf";
  image.src =
    currentLanguage === "pt-BR"
      ? "/assets/usa-flag.png"
      : "/assets/brazil-flag.png";
  image.alt = currentLanguage === "pt-BR" ? "brazil flag" : "usa flag";
  translatePage();
});

translatePage();
