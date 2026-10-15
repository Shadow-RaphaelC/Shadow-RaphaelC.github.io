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
    "card.more": "View project →",
    "status.done": "Completed",
    "status.wip": "In progress",
    "status.planned": "Planned",
    "detail.back": "← Back to projects",
    "detail.role": "My role",
    "detail.team": "Team",
    "detail.stack": "Stack",
    "detail.overview": "The project",
    "detail.contrib": "What I did"
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
    "card.more": "Voir le projet →",
    "status.done": "Terminé",
    "status.wip": "En cours",
    "status.planned": "Planifié",
    "detail.back": "← Retour aux projets",
    "detail.role": "Mon rôle",
    "detail.team": "Équipe",
    "detail.stack": "Technologies",
    "detail.overview": "Le projet",
    "detail.contrib": "Ce que j'ai fait"
  }
};

// =====================================================
//  PROJECT DATA
// =====================================================
// id:            used in the URL -> #project/frenesie   (lowercase, no spaces)
// category:      "game" | "web" | "mobile"   (filter buttons)
// status:        "done" | "wip" | "planned"  (badge color)
// media:         "img/x.gif", "img/x.png" or "img/x.mp4"  ("" = none)
// description:   short text on the card (also the subtitle on the detail page)
// role / team:   shown in the boxes on the detail page ("" = box hidden)
// overview:      paragraphs explaining the project (one string = one paragraph)
// contributions: bullet list of what YOU did
// Every text field has an en AND fr version.
const projects = [
  {
    id: "frenesie",
    title: "Frénésie",
    category: "game",
    status: "wip",
    media: "",
    description: {
      en: "Round-based online PvP abilities game made with a team of 4.",
      fr: "Jeu JcJ en ligne à capacités, en rondes, réalisé en équipe de 4."
    },
    role: { en: "Team lead · Gameplay programmer", fr: "Chef d'équipe · Programmeur gameplay" },
    team: { en: "4 developers", fr: "4 développeurs" },
    overview: {
      en: [
        "Frénésie is an online PvP game where every character has its own set of abilities. A match is played over several rounds until a player reaches the point goal set in the lobby: kills give trophies, and winning a round gives 3.",
        "Between rounds, the players who lost can pick an augment, and gems earned from kills and assists buy upgrades or reroll the offered choices. Augments unlocked in the meta shop stay unlocked between matches thanks to cloud saves. Matches are invite-only, between friends."
      ],
      fr: [
        "Frénésie est un jeu JcJ en ligne où chaque personnage a ses propres capacités. Une partie se joue en plusieurs rondes jusqu'à ce qu'un joueur atteigne l'objectif de points choisi dans le lobby : chaque élimination donne un trophée, et gagner une ronde en donne 3.",
        "Entre les rondes, les joueurs qui ont perdu peuvent choisir un augment, et les gemmes gagnées avec les éliminations et les assistances servent à acheter des améliorations ou à relancer les choix offerts. Les augments débloqués dans la boutique restent débloqués d'une partie à l'autre grâce à la sauvegarde infonuagique. Les parties se font sur invitation, entre amis."
      ]
    },
    contributions: {
      en: [
        "Lead the team and coordinate the work across sprints",
        "Built the health and damage system at the base of the character class hierarchy",
        "Programmed playable characters and their abilities (Umbris, Melodieuzze, LeeMao)",
        "Co-building the augment system and each character's unique augments",
        "Building the save service on Unity Cloud Save with anonymous sign-in, which the gems and shop systems are built on"
      ],
      fr: [
        "Diriger l'équipe et coordonner le travail d'un sprint à l'autre",
        "Système de vie et de dégâts à la base de la hiérarchie de classes des personnages",
        "Programmation de personnages jouables et de leurs capacités (Umbris, Melodieuzze, LeeMao)",
        "Co-développement du système d'augments et des augments uniques de chaque personnage",
        "Développement du service de sauvegarde sur Unity Cloud Save avec connexion anonyme, sur lequel reposent les gemmes et la boutique"
      ]
    },
    tags: ["Unity", "C#", "Netcode for GameObjects", "Unity Cloud Save"],
    links: { repo: "", demo: "" }
  },
  {
    id: "residue",
    title: "Residue: Off The Record",
    category: "game",
    status: "wip",
    media: "",
    description: {
      en: "Indie psychological horror narrative game about a retired cop in a decaying town.",
      fr: "Jeu narratif d'horreur psychologique indépendant sur un policier retraité dans une ville en décrépitude."
    },
    role: { en: "Solo developer · Writer · Designer", fr: "Développeur solo · Scénariste · Concepteur" },
    team: { en: "Solo", fr: "Solo" },
    overview: {
      en: [
        "You play a retired cop living with PTSD in a rundown, mysterious town. Every day, a radio broadcast follows a growing missing persons case, and the town changes the more you uncover.",
        "The game is choice-based with a day/night cycle and multiple endings. The look is lo-fi and gritty, and the atmosphere leans heavily on sound: static, whispers, clocks and heartbeats."
      ],
      fr: [
        "On incarne un policier retraité qui vit avec un TSPT dans une ville délabrée et mystérieuse. Chaque jour, une émission de radio suit une affaire de disparitions qui prend de l'ampleur, et la ville change à mesure qu'on découvre la vérité.",
        "Le jeu est basé sur les choix, avec un cycle jour/nuit et plusieurs fins. Le style est lo-fi et granuleux, et l'ambiance repose beaucoup sur le son : statique, chuchotements, horloges et battements de cœur."
      ]
    },
    contributions: {
      en: [
        "Wrote the story bible: characters, the town, chapter structure and hidden reveals",
        "Set the art direction: 2D pixel art made in Aseprite, with selective 3D intrusions for key horror moments",
        "Designing the gameplay systems: day/night cycle, choices, investigation and mental state"
      ],
      fr: [
        "Écriture de la bible narrative : personnages, ville, structure des chapitres et révélations cachées",
        "Direction artistique : pixel art 2D fait dans Aseprite, avec des intrusions 3D ciblées pour les moments d'horreur clés",
        "Conception des systèmes de jeu : cycle jour/nuit, choix, enquête et état mental"
      ]
    },
    tags: ["Unity URP", "C#", "Aseprite", "Cinemachine"],
    links: { repo: "", demo: "" }
  },
  {
    id: "jankyfantasy",
    title: "JankyFantasy",
    category: "game",
    status: "done",
    media: "",
    description: {
      en: "Local co-op brawler for 1 to 4 players against a boss driven by a behavior tree.",
      fr: "Brawler coopératif local de 1 à 4 joueurs contre un boss contrôlé par un arbre de comportement."
    },
    role: { en: "", fr: "" },   // TODO: your role
    team: { en: "", fr: "" },   // TODO: team size (or "Solo")
    overview: {
      en: [
        "Up to 4 players pick a Paladin, a Mage or an Archer and team up against a boss controlled by a behavior tree. Each class has its own passive and held perks, and downed players can be revived by their teammates before it's too late.",
        "Attacks apply elemental marks, and combining elements triggers combos, inspired by Genshin Impact."
      ],
      fr: [
        "Jusqu'à 4 joueurs choisissent un Paladin, un Mage ou un Archer et s'allient contre un boss contrôlé par un arbre de comportement. Chaque classe a ses propres atouts passifs et maintenus, et les joueurs à terre peuvent être réanimés par leurs coéquipiers avant qu'il soit trop tard.",
        "Les attaques appliquent des marques élémentaires, et combiner les éléments déclenche des combos, inspiré de Genshin Impact."
      ]
    },
    // TODO: confirm these are the parts YOU built
    contributions: {
      en: [
        "Built a shared Combattant base class with tank controls, extended by the playable characters",
        "Made the elemental combo system with a static lookup table",
        "Set up local multiplayer with Unity's Input System: 2 keyboard layouts + gamepads, each paired to its own player",
        "Built the downed and revive system"
      ],
      fr: [
        "Classe de base Combattant partagée avec contrôles de type tank, étendue par les personnages jouables",
        "Système de combos élémentaires avec une table de correspondance statique",
        "Multijoueur local avec le Input System de Unity : 2 dispositions clavier + manettes, chacune associée à son joueur",
        "Système de joueur à terre et de réanimation"
      ]
    },
    tags: ["Unity", "C#", "Input System", "Behavior tree"],
    links: { repo: "", demo: "" }
  },
  {
    id: "voidtech",
    title: "VoidTech",
    category: "mobile",
    status: "done",
    media: "",
    description: {
      en: "Cybersecurity hardware e-commerce app with a dark hacker aesthetic.",
      fr: "Application de commerce en ligne de matériel de cybersécurité, au style hacker sombre."
    },
    role: { en: "", fr: "" },   // TODO
    team: { en: "", fr: "" },   // TODO
    overview: {
      en: ["A mobile store for cybersecurity hardware, with a dark hacker look (neon green on near-black). Products, the cart and user data are stored locally with SQLite."],
      fr: ["Une boutique mobile de matériel de cybersécurité, avec un look hacker sombre (vert néon sur noir). Les produits, le panier et les données des utilisateurs sont stockés localement avec SQLite."]
    },
    // TODO: confirm these are the parts YOU built
    contributions: {
      en: [
        "Wrote a custom translation (i18n) hook instead of using a library",
        "Protected routes with Expo Router so pages redirect when you're not logged in",
        "Shared app state with React Context, optimized with useMemo and useCallback",
        "Added sound effects with expo-audio"
      ],
      fr: [
        "Hook de traduction (i18n) maison plutôt qu'une librairie",
        "Routes protégées avec Expo Router : redirection si l'utilisateur n'est pas connecté",
        "État partagé avec React Context, optimisé avec useMemo et useCallback",
        "Effets sonores avec expo-audio"
      ]
    },
    tags: ["React Native", "Expo", "SQLite", "React Context"],
    links: { repo: "", demo: "" }
  },
  {
    id: "registrar",
    title: "Registrar",
    category: "web",
    status: "done",
    media: "",
    description: {
      en: "Full CRUD web app to manage college students, courses and teachers.",
      fr: "Application web CRUD complète pour gérer les étudiants, les cours et les enseignants d'un cégep."
    },
    role: { en: "", fr: "" },   // TODO
    team: { en: "", fr: "" },   // TODO
    overview: {
      en: ["A web app to manage a college's students, courses and teachers: create, view, edit and delete each one. Built with ASP.NET MVC 5 and deployed online on Azure."],
      fr: ["Une application web pour gérer les étudiants, les cours et les enseignants d'un cégep : ajout, consultation, modification et suppression. Construite avec ASP.NET MVC 5 et déployée en ligne sur Azure."]
    },
    contributions: {
      en: ["Built the CRUD pages and models", "Deployed the app to Azure"],
      fr: ["Pages CRUD et modèles", "Déploiement de l'application sur Azure"]
    },
    tags: ["ASP.NET MVC 5", "C#", "Azure"],
    links: { repo: "", demo: "" }
  },
  {
    id: "darquest",
    title: "DarQuest",
    category: "web",
    status: "done",
    media: "",
    description: {
      en: "Fantasy shop platform made in a team: login, shopping cart, inventory and a riddle system.",
      fr: "Plateforme de boutique fantastique réalisée en équipe : connexion, panier, inventaire et système d'énigmes."
    },
    role: { en: "", fr: "" },   // TODO
    team: { en: "", fr: "" },   // TODO
    overview: {
      en: ["A dark-fantasy web shop where players buy items with gold, silver and bronze coins, manage their inventory and answer riddles to earn more. The database logic runs through MySQL stored procedures called with PDO."],
      fr: ["Une boutique web de fantasy sombre où les joueurs achètent des objets avec des pièces d'or, d'argent et de bronze, gèrent leur inventaire et répondent à des énigmes pour en gagner plus. La logique de base de données passe par des procédures stockées MySQL appelées avec PDO."]
    },
    contributions: {
      en: [
        "Built the shopping cart: add items without reloading the page, change quantities and pay",
        "Built the inventory page with resell prices",
        "Added shop filters: search, item type and price sorting",
        "Made the item detail popup and the header showing the player's coins",
        "Debugged and fixed several stored procedures"
      ],
      fr: [
        "Panier d'achat : ajout d'objets sans recharger la page, modification des quantités et paiement",
        "Page d'inventaire avec prix de revente",
        "Filtres de boutique : recherche, type d'objet et tri par prix",
        "Fenêtre de détails des objets et en-tête affichant les pièces du joueur",
        "Débogage et correction de plusieurs procédures stockées"
      ]
    },
    tags: ["PHP", "MySQL", "JavaScript"],
    links: { repo: "", demo: "" }
  },
  {
    id: "pi-server",
    title: "Pi Server + MinyClaude",
    category: "web",
    status: "planned",
    media: "",
    description: {
      en: "Raspberry Pi 5 home server to host this portfolio, with a Python AI assistant.",
      fr: "Serveur maison Raspberry Pi 5 pour héberger ce portfolio, avec un assistant IA en Python."
    },
    role: { en: "Solo", fr: "Solo" },
    team: { en: "", fr: "" },
    overview: {
      en: ["A home server built on a Raspberry Pi 5 that will host this portfolio online through a Cloudflare Tunnel. It will also run MinyClaude, a Python assistant that searches my project files first and only falls back to a cloud AI when needed."],
      fr: ["Un serveur maison sur Raspberry Pi 5 qui hébergera ce portfolio en ligne grâce à un Cloudflare Tunnel. Il fera aussi rouler MinyClaude, un assistant en Python qui cherche d'abord dans mes fichiers de projets et passe à une IA infonuagique seulement au besoin."]
    },
    contributions: {
      en: ["Planning the hardware: 8 GB Pi 5, NVMe SSD, active cooling and a small status screen", "Designing MinyClaude's architecture: local search first, cloud fallback"],
      fr: ["Planification du matériel : Pi 5 de 8 Go, SSD NVMe, refroidissement actif et petit écran d'état", "Conception de l'architecture de MinyClaude : recherche locale d'abord, IA infonuagique en renfort"]
    },
    tags: ["Raspberry Pi", "Python", "Cloudflare Tunnel"],
    links: { repo: "", demo: "" }
  }
];

// =====================================================
//  LANGUAGE STATE
// =====================================================
// Starting language: saved choice -> browser language -> English
function getStartingLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "fr") return saved;
  } catch (e) { /* storage blocked (private mode etc.) — ignore */ }
  return navigator.language.startsWith("fr") ? "fr" : "en";
}

let currentLang = getStartingLang();
let currentFilter = "all";
let openProjectId = null;   // id of the project being shown, or null on the home page

// t("nav.projects") -> "Projects" or "Projets"
function t(key) {
  return translations[currentLang][key] ?? key;
}

// Grabs the current language from a {en, fr} field
function tr(field) {
  return field ? field[currentLang] : "";
}

// =====================================================
//  SHARED HELPERS
// =====================================================
// Picks <video> or <img> depending on the file extension
function mediaTag(src, alt) {
  if (/\.(mp4|webm)$/i.test(src)) {
    return `<video src="${src}" autoplay muted loop playsinline></video>`;
  }
  return `<img src="${src}" alt="${alt}" loading="lazy">`;
}

function linksHtml(p) {
  let links = "";
  if (p.links.repo) links += `<a href="${p.links.repo}" target="_blank" rel="noopener">${t("card.code")}</a>`;
  if (p.links.demo) links += `<a href="${p.links.demo}" target="_blank" rel="noopener">${t("card.demo")}</a>`;
  return links ? `<div class="card__links">${links}</div>` : "";
}

// =====================================================
//  HOME: PROJECT CARDS
// =====================================================
const grid = document.getElementById("project-grid");

// One project -> one clickable card. The whole card is a link to #project/<id>
function createCard(p) {
  const tags = p.tags.map(tag => `<span class="tag">#${tag}</span>`).join("");
  const media = p.media ? `<div class="card__media">${mediaTag(p.media, p.title)}</div>` : "";

  return `
    <a class="card" href="#project/${p.id}">
      ${media}
      <div class="card__top">
        <h3>${p.title}</h3>
        <span class="status status--${p.status}">${t("status." + p.status)}</span>
      </div>
      <p class="card__desc">${tr(p.description)}</p>
      <div class="card__tags">${tags}</div>
      <span class="card__more">${t("card.more")}</span>
    </a>`;
}

function renderProjects() {
  const visible = currentFilter === "all"
    ? projects
    : projects.filter(p => p.category === currentFilter);

  grid.innerHTML = visible.map(createCard).join("");
}

// =====================================================
//  DETAIL PAGE
// =====================================================
const homeView = document.getElementById("home-view");
const detailView = document.getElementById("detail-view");

// A small box like "MY ROLE / Team lead". Returns "" if there's no value.
function metaBox(label, value) {
  return value ? `<div class="meta-box"><h4>${label}</h4><p>${value}</p></div>` : "";
}

function renderDetail(p) {
  const paragraphs = tr(p.overview).map(text => `<p class="detail__text">${text}</p>`).join("");
  const contributions = tr(p.contributions).map(c => `<li>${c}</li>`).join("");
  const media = p.media ? `<div class="detail__media">${mediaTag(p.media, p.title)}</div>` : "";

  detailView.innerHTML = `
    <a class="detail__back" href="#projects">${t("detail.back")}</a>

    <div class="detail__header">
      <h1>${p.title}</h1>
      <span class="status status--${p.status}">${t("status." + p.status)}</span>
    </div>
    <p class="detail__tagline">${tr(p.description)}</p>

    ${media}

    <div class="detail__meta" ${media ? "" : 'style="margin-top:30px"'}>
      ${metaBox(t("detail.role"), tr(p.role))}
      ${metaBox(t("detail.team"), tr(p.team))}
      ${metaBox(t("detail.stack"), p.tags.join(" · "))}
    </div>

    <h2>${t("detail.overview")}</h2>
    ${paragraphs}

    ${contributions ? `<h2>${t("detail.contrib")}</h2><ul class="detail__list">${contributions}</ul>` : ""}

    ${linksHtml(p)}
  `;
}

// =====================================================
//  ROUTER: decides what to show based on the URL hash
// =====================================================
// "#project/frenesie" -> detail page for Frénésie
// "#skills"           -> home page, scrolled to the Skills section
// ""                  -> home page, top
function route() {
  const hash = decodeURIComponent(location.hash.slice(1));   // remove the "#"

  if (hash.startsWith("project/")) {
    const id = hash.split("/")[1];
    const project = projects.find(p => p.id === id);

    if (project) {
      openProjectId = id;
      renderDetail(project);
      homeView.hidden = true;
      detailView.hidden = false;
      document.title = `${project.title} · Raphaël Couturier`;
      window.scrollTo(0, 0);
      return;
    }
    // unknown id -> fall through to the home page
  }

  openProjectId = null;
  detailView.hidden = true;
  homeView.hidden = false;
  document.title = "Raphaël Couturier · Developer";

  const target = hash && document.getElementById(hash);
  if (target) target.scrollIntoView();
  else window.scrollTo(0, 0);
}

// Runs every time the hash changes (clicking a card, the back button, nav links...)
window.addEventListener("hashchange", route);

// =====================================================
//  LANGUAGE SWITCH
// =====================================================
function applyLanguage() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  document.documentElement.lang = currentLang;
  document.getElementById("lang-toggle").textContent = currentLang === "en" ? "FR" : "EN";

  renderProjects();
  // if a project is open, redraw it in the new language (without scrolling)
  if (openProjectId) renderDetail(projects.find(p => p.id === openProjectId));
}

// =====================================================
//  EVENTS
// =====================================================
document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".filter.is-active").classList.remove("is-active");
    button.classList.add("is-active");
    currentFilter = button.dataset.filter;
    renderProjects();
  });
});

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
route();   // handles someone opening a direct link like .../#project/frenesie
