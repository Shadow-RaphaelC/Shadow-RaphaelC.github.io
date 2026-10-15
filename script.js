// =====================================================
//  TRANSLATIONS (static text on the page)
// =====================================================
// Every element with data-i18n="some.key" gets its text from here.
// To add new text: put data-i18n="x.y" in the HTML, then add "x.y" in BOTH languages.
const translations = {
  en: {
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "hero.kicker": "> hello world",
    "hero.role": "Game & software developer",
    "hero.bio": "Final-year computer science student at Collège Lionel-Groulx (mobile, web and game development). I like building things people actually play and use. Currently looking for an internship.",
    "hero.cta": "See my projects",
    "projects.title": "Projects",
    "filter.all": "All",
    "filter.game": "Games",
    "filter.web": "Web",
    "filter.mobile": "Mobile",
    "skills.title": "Skills",
    "skills.languages": "Languages",
    "skills.frameworks": "Engines & frameworks",
    "skills.concepts": "Concepts & tools",
    "skills.oop": "OOP",
    "skills.async": "Async / multithreading",
    "skills.learning": "currently learning",
    "contact.title": "Contact",
    "contact.text": "Open to internships and junior roles. Bilingual (French / English).",
    "contact.email": "Email me",
    "card.code": "Code",
    "card.demo": "Play / Demo",
    "status.done": "Completed",
    "status.wip": "In progress",
    "status.planned": "Planned"
  },
  fr: {
    "nav.projects": "Projets",
    "nav.skills": "Compétences",
    "nav.contact": "Contact",
    "hero.kicker": "> bonjour le monde",
    "hero.role": "Développeur de jeux et de logiciels",
    "hero.bio": "Étudiant en dernière année en techniques de l'informatique au Collège Lionel-Groulx (mobile, web et jeux vidéo). J'aime créer des choses que les gens jouent et utilisent pour vrai. Présentement à la recherche d'un stage.",
    "hero.cta": "Voir mes projets",
    "projects.title": "Projets",
    "filter.all": "Tous",
    "filter.game": "Jeux",
    "filter.web": "Web",
    "filter.mobile": "Mobile",
    "skills.title": "Compétences",
    "skills.languages": "Langages",
    "skills.frameworks": "Moteurs et frameworks",
    "skills.concepts": "Concepts et outils",
    "skills.oop": "POO",
    "skills.async": "Asynchrone / multithreading",
    "skills.learning": "en apprentissage",
    "contact.title": "Contact",
    "contact.text": "Ouvert aux stages et aux postes juniors. Bilingue (français / anglais).",
    "contact.email": "M'écrire",
    "card.code": "Code",
    "card.demo": "Jouer / Démo",
    "status.done": "Terminé",
    "status.wip": "En cours",
    "status.planned": "Planifié"
  }
};

// =====================================================
//  PROJECT DATA
// =====================================================
// category: "game" | "web" | "mobile"   (used by the filter buttons)
// status:   "done" | "wip" | "planned"  (changes the badge color)
// image:    path to a screenshot/GIF, e.g. "img/jankyfantasy.gif" ("" = no image)
// links:    "" hides that link
// description / highlights have an en AND fr version
const projects = [
  {
    title: "Frénésie",
    category: "game",
    status: "wip",
    image: "",
    description: {
      en: "Round-based online PvP abilities game made with a team of 4. Players earn trophies, gems and augments between rounds.",
      fr: "Jeu JcJ en ligne à capacités, en rondes, réalisé en équipe de 4. Les joueurs gagnent des trophées, des gemmes et des augments entre les rondes."
    },
    highlights: {
      en: ["Team lead", "Coded playable characters and their abilities", "Building the augment system and a cloud save service"],
      fr: ["Chef d'équipe", "Programmation des personnages jouables et de leurs capacités", "Développement du système d'augments et d'une sauvegarde infonuagique"]
    },
    tags: ["Unity", "C#", "Netcode for GameObjects", "Unity Cloud Save"],
    links: { repo: "", demo: "" }
  },
  {
    title: "Residue: Off The Record",
    category: "game",
    status: "wip",
    image: "",
    description: {
      en: "Indie psychological horror narrative game about a retired cop in a decaying town. Choice-based, with a day/night cycle and multiple endings.",
      fr: "Jeu narratif d'horreur psychologique indépendant sur un policier retraité dans une ville en décrépitude. Basé sur les choix, avec cycle jour/nuit et plusieurs fins."
    },
    highlights: {
      en: ["Solo project: story bible, design and code", "2D pixel art with selective 3D moments"],
      fr: ["Projet solo : bible narrative, conception et code", "Pixel art 2D avec des moments 3D ciblés"]
    },
    tags: ["Unity URP", "C#", "Aseprite", "Cinemachine"],
    links: { repo: "", demo: "" }
  },
  {
    title: "JankyFantasy",
    category: "game",
    status: "done",
    image: "",
    description: {
      en: "Local co-op brawler for 1 to 4 players (Paladin, Mage, Archer) against a boss driven by a behavior tree.",
      fr: "Brawler coopératif local de 1 à 4 joueurs (Paladin, Mage, Archer) contre un boss contrôlé par un arbre de comportement."
    },
    highlights: {
      en: ["Elemental combo system", "Multi-device input: 2 keyboard layouts + gamepads", "Down-but-not-out revive system"],
      fr: ["Système de combos élémentaires", "Entrées multi-appareils : 2 dispositions clavier + manettes", "Système de réanimation des joueurs à terre"]
    },
    tags: ["Unity", "C#", "Input System", "Behavior tree"],
    links: { repo: "", demo: "" }
  },
  {
    title: "VoidTech",
    category: "mobile",
    status: "done",
    image: "",
    description: {
      en: "Cybersecurity hardware e-commerce app with a dark hacker aesthetic.",
      fr: "Application de commerce en ligne de matériel de cybersécurité, au style hacker sombre."
    },
    highlights: {
      en: ["Local database with SQLite", "Custom translation (i18n) hook", "Protected routes with Expo Router"],
      fr: ["Base de données locale avec SQLite", "Hook de traduction (i18n) maison", "Routes protégées avec Expo Router"]
    },
    tags: ["React Native", "Expo", "SQLite", "React Context"],
    links: { repo: "", demo: "" }
  },
  {
    title: "Registrar",
    category: "web",
    status: "done",
    image: "",
    description: {
      en: "Full CRUD web app to manage college students, courses and teachers.",
      fr: "Application web CRUD complète pour gérer les étudiants, les cours et les enseignants d'un cégep."
    },
    highlights: {
      en: ["Deployed to Azure"],
      fr: ["Déployée sur Azure"]
    },
    tags: ["ASP.NET MVC 5", "C#", "Azure"],
    links: { repo: "", demo: "" }
  },
  {
    title: "DarQuest",
    category: "web",
    status: "done",
    image: "",
    description: {
      en: "Fantasy shop platform made in a team: login, shopping cart, inventory and a riddle system.",
      fr: "Plateforme de boutique fantastique réalisée en équipe : connexion, panier, inventaire et système d'énigmes."
    },
    highlights: {
      en: ["Stored procedures + PDO", "Shop filters, cart and resell logic"],
      fr: ["Procédures stockées + PDO", "Filtres de boutique, panier et logique de revente"]
    },
    tags: ["PHP", "MySQL", "JavaScript"],
    links: { repo: "", demo: "" }
  },
  {
    title: "Pi Server + MinyClaude",
    category: "web",
    status: "planned",
    image: "",
    description: {
      en: "Raspberry Pi 5 home server to host this portfolio, with a Python AI assistant that searches my project files.",
      fr: "Serveur maison Raspberry Pi 5 pour héberger ce portfolio, avec un assistant IA en Python qui fouille mes fichiers de projets."
    },
    highlights: {
      en: ["Currently in the planning stage"],
      fr: ["Présentement en phase de planification"]
    },
    tags: ["Raspberry Pi", "Python", "Cloudflare Tunnel"],
    links: { repo: "", demo: "" }
  }
];

// =====================================================
//  LANGUAGE STATE
// =====================================================
// Pick the starting language:
// 1. what the visitor chose last time (saved in their browser)
// 2. otherwise their browser language (fr-CA, fr-FR... -> "fr")
// 3. otherwise English
function getStartingLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "fr") return saved;
  } catch (e) { /* storage blocked (private mode etc.) — ignore */ }
  return navigator.language.startsWith("fr") ? "fr" : "en";
}

let currentLang = getStartingLang();
let currentFilter = "all";

// Shortcut: t("nav.projects") -> "Projects" or "Projets"
function t(key) {
  return translations[currentLang][key] ?? key;
}

// =====================================================
//  RENDERING
// =====================================================
const grid = document.getElementById("project-grid");

// Turns ONE project object into the HTML for ONE card
function createCard(p) {
  const highlights = p.highlights[currentLang].map(h => `<li>${h}</li>`).join("");
  const tags = p.tags.map(tag => `<span class="tag">#${tag}</span>`).join("");

  const media = p.image
    ? `<div class="card__media"><img src="${p.image}" alt="${p.title}" loading="lazy"></div>`
    : "";

  let links = "";
  if (p.links.repo) links += `<a href="${p.links.repo}" target="_blank" rel="noopener">${t("card.code")}</a>`;
  if (p.links.demo) links += `<a href="${p.links.demo}" target="_blank" rel="noopener">${t("card.demo")}</a>`;

  return `
    <article class="card">
      ${media}
      <div class="card__top">
        <h3>${p.title}</h3>
        <span class="status status--${p.status}">${t("status." + p.status)}</span>
      </div>
      <p class="card__desc">${p.description[currentLang]}</p>
      <ul class="card__highlights">${highlights}</ul>
      <div class="card__tags">${tags}</div>
      ${links ? `<div class="card__links">${links}</div>` : ""}
    </article>`;
}

// Draws all cards that match the current filter
function renderProjects() {
  const visible = currentFilter === "all"
    ? projects
    : projects.filter(p => p.category === currentFilter);

  grid.innerHTML = visible.map(createCard).join("");
}

// Swaps every data-i18n element's text + re-draws the cards
function applyLanguage() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  document.documentElement.lang = currentLang;          // <html lang="fr">
  // the button shows the OTHER language (the one you'd switch to)
  document.getElementById("lang-toggle").textContent = currentLang === "en" ? "FR" : "EN";

  renderProjects();
}

// =====================================================
//  EVENTS
// =====================================================
// Filter buttons
document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".filter.is-active").classList.remove("is-active");
    button.classList.add("is-active");

    currentFilter = button.dataset.filter;   // reads data-filter="game" etc.
    renderProjects();
  });
});

// Language toggle
document.getElementById("lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "fr" : "en";
  try { localStorage.setItem("lang", currentLang); } catch (e) { /* ignore */ }
  applyLanguage();
});

// =====================================================
//  START
// =====================================================
document.getElementById("year").textContent = new Date().getFullYear();
applyLanguage();
