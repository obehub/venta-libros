const books = [
  {
    id: "procesado-para-subir-de-nivel",
    title: "Procesado para subir de nivel",
    author: "Malaquias Belen",
    category: "Proceso y proposito",
    price: 595,
    rating: 4.9,
    description: "Es una obra inspiradora que enseña cómo Dios utiliza los procesos, las pruebas y los desafíos de la vida para preparar a sus hijos para un propósito mayor. Basado principalmente en la historia de José, este libro revela que cada dificultad tiene un propósito divino y que los momentos más difíciles pueden convertirse en la plataforma para alcanzar nuevos niveles de crecimiento, madurez, liderazgo y bendición. Una guía práctica para aprender a confiar en Dios mientras Él nos forma para nuestro destino.",
    cover: "/IMG/procesado_subir.jpg",
  },
  {
    id: "detras-del-manto",
    title: "Detras del manto",
    author: "Malaquias Belen",
    category: "Espiritu Santo",
    price: 595,
    rating: 4.8,
    description: "Una obra inspiradora que invita al lector a profundizar en su relación con el Espíritu Santo y a descubrir la verdadera esencia de la vida espiritual. A través de enseñanzas bíblicas, reflexiones prácticas y principios de discernimiento, el autor muestra la importancia de vivir bajo la guía del Espíritu de Dios y no detrás de la fama o el reconocimiento de los hombres. Este libro desafía al creyente a examinar su caminar cristiano, fortalecer su intimidad con Dios y reconocer la voz del Espíritu Santo en medio de los desafíos de estos tiempos. Es un llamado a la santidad, al discernimiento espiritual y a una comunión genuina con la presencia de Dios.",
    cover: "IMG/detras_del_manto.jpg",
  },
  {
    id: "mujeres-diferentes-en-otra-dimension",
    title: "Mujeres diferentes en otra dimension",
    author: "Malaquias Belen",
    category: "Mujer y proposito",
    price: 595,
    rating: 4.7,
    description: "Es un libro inspirador que desafía a la mujer a descubrir su identidad, propósito y poder en Dios. A través de ejemplos de mujeres bíblicas que transformaron sus circunstancias, el autor muestra que el pasado, las limitaciones y las adversidades no determinan el destino de una mujer que confía en el Señor. Esta obra es una invitación a levantarse con fe, romper barreras, conquistar nuevas dimensiones espirituales y convertirse en una influencia de cambio para la familia, la iglesia y la sociedad.",
    cover: "IMG/mujeres_otra_dimension.jpg",
  },
  {
    id: "consumido-es",
    title: "Consumido es",
    author: "Malaquias Belen",
    category: "Cruz y redencion",
    price: 595,
    rating: 4.6,
    description: "Descifrando los Codigos de la Cruz es una obra que lleva al lector a descubrir el profundo significado de las últimas palabras de Jesucristo en la cruz. Con un enfoque bíblico, profético y práctico, el pastor Malaquias Belen explora los misterios de la redención, el poder de la sangre de Cristo y la victoria alcanzada en el Calvario. Cada capítulo revela verdades espirituales que fortalecen la fe, inspiran una vida de entrega a Dios y ayudan a comprender que la obra de Jesús fue perfecta, completa y eterna. Un libro que invita a valorar el sacrificio de Cristo y a vivir bajo el poder transformador de su declaración final: Consumado es.",
    cover: "IMG/consumido_es.jpg",
  },
  {
    id: "promesas-que-no-se-vencen",
    title: "Promesas que no se vencen",
    author: "Malaquias Belen",
    category: "Fe y esperanza",
    price: 595,
    rating: 4.5,
    description: "Es una obra de fe y esperanza que reúne poderosas promesas bíblicas para fortalecer al creyente en diferentes áreas de la vida. A través de enseñanzas prácticas y fundamentos bíblicos, el autor demuestra que las promesas de Dios siguen vigentes y pueden traer consuelo, dirección y fortaleza en tiempos de depresión, enfermedad, dificultades familiares, desafíos financieros y necesidades espirituales. Un libro diseñado para inspirar confianza en la fidelidad de Dios y recordar que Sus promesas nunca caducan.",
    cover: "IMG/promesas_no_vencen.jpeg",
  },
  {
    id: "caracter-de-un-profeta",
    title: "Caracter de un profeta",
    author: "Malaquias Belen",
    category: "Caracter y liderazgo",
    price: 595,
    rating: 4.8,
    description: "Es una obra que destaca la importancia del carácter como fundamento indispensable para todo aquel que ha sido llamado por Dios. A través de las vidas de Noe, Abraham, Moises, José, David, Elias y Jesucristo, el autor presenta principios bíblicos que forman a un verdadero siervo de Dios: obediencia, fe, paciencia, fidelidad, integridad, pasión espiritual y humildad. Este libro confronta la falsa espiritualidad de nuestros tiempos y llama a los creyentes a desarrollar un carácter conforme al corazón de Dios, demostrando que la unción sin carácter puede destruir, pero el carácter forjado por Dios sostiene el propósito, el ministerio y el testimonio de una vida dedicada al Reino.",
    cover: "IMG/caracter_profeta.jpeg",
  },
  {
    id: "necesito-alguien-con-quien-hablar",
    title: "Necesito alguien con quien hablar",
    author: "Malaquias Belen",
    category: "Sanidad emocional",
    price: 595,
    rating: 4.9,
    description: "Es un libro que aborda con honestidad la depresión, el agotamiento emocional y la soledad que muchas veces enfrentan pastores, líderes y creyentes en silencio. A través de experiencias personales, principios bíblicos y reflexiones prácticas, Malaquias Belen ofrece una guía de esperanza, restauración y acompañamiento para quienes necesitan recordar que pedir ayuda no es una señal de debilidad, sino un paso hacia la sanidad.",
    cover: "IMG/necesito_alguien.jpg",
  },
  {
    id: "cuando-dios-cambia-tus-planes",
    title: "Cuando Dios cambia tus planes",
    author: "Malaquias Belen",
    category: "Direccion divina",
    price: 595,
    rating: 4.9,
    description: "Es una obra inspiradora que revela cómo Dios trabaja en silencio cuando la vida toma rumbos inesperados. A través de experiencias personales, enseñanzas bíblicas y profundas reflexiones, Malaquias Belen muestra que las puertas cerradas, los retrasos y las interrupciones no son el final del propósito, sino parte del proceso que Dios utiliza para formar el carácter, fortalecer la fe y dirigirnos hacia Su voluntad perfecta. Un libro para quienes necesitan confiar en Dios aun cuando no entienden el camino que están recorriendo.",
    cover: "IMG/cambia_planes.jpg",
  },
];

const salesManager = {
  name: "Malaquias Belen",
  phoneDisplay: "+1 (849) 542-7575",
  phone: "18495427575",
};

const iconPaths = {
  "book-open": '<path d="M12 7v14"/><path d="M3 5.5A2.5 2.5 0 0 1 5.5 3H12v18H5.5A2.5 2.5 0 0 1 3 18.5z"/><path d="M21 5.5A2.5 2.5 0 0 0 18.5 3H12v18h6.5a2.5 2.5 0 0 0 2.5-2.5z"/>',
  headphones: '<path d="M3 14v-3a9 9 0 0 1 18 0v3"/><path d="M21 19a2 2 0 0 1-2 2h-1v-7h3z"/><path d="M3 19a2 2 0 0 0 2 2h1v-7H3z"/>',
  "log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><path d="M10 17l5-5-5-5"/><path d="M15 12H3"/>',
  "message-circle": '<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7A8.4 8.4 0 0 1 4 11.5a8.5 8.5 0 0 1 17 0z"/><path d="M8.5 10.5c.4 2.1 2 3.7 4 4.4l1.4-1.1c.3-.2.7-.2 1 .1l1.1.8"/>',
  search: '<path d="m21 21-4.3-4.3"/><circle cx="11" cy="11" r="8"/>',
  "edit-3": '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  "file-check": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="m9 15 2 2 4-4"/>',
  "globe-2": '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 0 20"/><path d="M12 2a15.3 15.3 0 0 0 0 20"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>',
  megaphone: '<path d="m3 11 18-5v12L3 14z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/><path d="M7 10v8"/>',
  "panel-top": '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>',
  printer: '<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/>',
  "shield-check": '<path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3z"/><path d="m9 12 2 2 4-4"/>',
  sparkles: '<path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7z"/><path d="M5 3v4"/><path d="M3 5h4"/><path d="M19 17v4"/><path d="M17 19h4"/>',
  star: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.2L5.8 21 7 14.2 2 9.3l6.9-1z"/>',
  truck: '<path d="M14 18V6a2 2 0 0 0-2-2H3v14z"/><path d="M14 9h4l3 3v6h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
  "user-round": '<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
};

const state = {
  category: "Todos",
  search: "",
  sort: "featured",
  expandedBooks: new Set(),
  user: localStorage.getItem("bv_user") || "",
};

const formatter = new Intl.NumberFormat("es-DO", {
  style: "currency",
  currency: "DOP",
});

const bookGrid = document.querySelector("#bookGrid");
const categoryTabs = document.querySelector("#categoryTabs");
const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const toast = document.querySelector("#toast");
const loginModal = document.querySelector("#loginModal");

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function whatsappLink(book) {
  const message = book
    ? `Hola ${salesManager.name}, quiero comprar el libro "${book.title}" de ${book.author}. Precio visto: ${formatter.format(book.price)}. ¿Está disponible?`
    : `Hola ${salesManager.name}, quiero informacion para publicar mis libros en la Casa Editorial Belen Relator.`;
  return `https://wa.me/${salesManager.phone}?text=${encodeURIComponent(message)}`;
}

function setupContactLinks() {
  const managerName = document.querySelector("#managerName");
  const managerPhone = document.querySelector("#managerPhone");
  if (managerName) managerName.textContent = salesManager.name;
  if (managerPhone) managerPhone.textContent = `WhatsApp: ${salesManager.phoneDisplay}`;
  document.querySelectorAll("#headerWhatsapp, #heroWhatsapp, #managerWhatsapp").forEach((link) => {
    link.href = whatsappLink();
  });
}

function renderCategories() {
  if (!categoryTabs) return;
  const categories = ["Todos", ...new Set(books.map((book) => book.category))];
  categoryTabs.innerHTML = categories
    .map((category) => `<button class="${category === state.category ? "active" : ""}" type="button" data-category="${category}">${category}</button>`)
    .join("");
}

function filteredBooks() {
  const query = state.search.trim().toLowerCase();
  let result = books.filter((book) => {
    const inCategory = state.category === "Todos" || book.category === state.category;
    const inSearch = [book.title, book.author, book.category, book.description].join(" ").toLowerCase().includes(query);
    return inCategory && inSearch;
  });

  if (state.sort === "priceAsc") result = [...result].sort((a, b) => a.price - b.price);
  if (state.sort === "priceDesc") result = [...result].sort((a, b) => b.price - a.price);
  if (state.sort === "rating") result = [...result].sort((a, b) => b.rating - a.rating);
  return result;
}

function renderDescription(book) {
  const isExpanded = state.expandedBooks.has(book.id);
  const needsToggle = book.description.length > 210;
  const text = !needsToggle || isExpanded ? book.description : `${book.description.slice(0, 210).trim()}...`;
  const toggle = needsToggle
    ? `<button class="read-more" type="button" data-toggle-description="${book.id}">${isExpanded ? "Ver menos" : "Ver mas"}</button>`
    : "";

  return `
    <div class="description-block">
      <p>${text}</p>
      ${toggle}
    </div>
  `;
}

function renderBooks() {
  if (!bookGrid) return;
  const result = filteredBooks();
  bookGrid.innerHTML = result.length
    ? result
        .map(
          (book) => `
          <article class="book-card" id="${book.id}">
            <div class="book-cover">
              <img src="${book.cover}" alt="Portada del libro ${book.title}" loading="lazy" />
            </div>
            <div class="book-body">
              <div class="meta-row">
                <span class="pill">${book.category}</span>
                <span class="rating"><span data-lucide="star"></span>${book.rating}</span>
              </div>
              <h3>${book.title}</h3>
              <p class="book-author">${book.author}</p>
              ${renderDescription(book)}
              <div class="price-row">
                <span class="price">${formatter.format(book.price)}</span>
              </div>
              <a class="add-button whatsapp-buy" href="${whatsappLink(book)}" target="_blank" rel="noopener" data-book="${book.id}">
                <span data-lucide="message-circle"></span>
                Comprar por WhatsApp
              </a>
            </div>
          </article>
        `,
        )
        .join("")
    : `<div class="cart-empty">No encontramos libros con esos filtros.</div>`;
  refreshIcons();
}

function refreshIcons() {
  document.querySelectorAll("[data-lucide]").forEach((node) => {
    const name = node.dataset.lucide;
    if (!iconPaths[name] || node.querySelector("svg")) return;
    node.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name]}</svg>`;
  });
}

// === FUNCIONES PARA WHATSAPP EN SERVICIOS ===
function getServiceMessage(type) {
  const base = `Hola ${salesManager.name}, `;
  
  switch(type) {
    case 'consulta':
      return base + "quiero agendar una consulta para hablar sobre mi proyecto editorial.";
    
    case 'basico':
      return base + "estoy interesado en el **Plan Básico** (Revisión y orientación). ¿Podemos hablar sobre mi manuscrito?";
    
    case 'editorial':
      return base + "estoy interesado en el **Plan Editorial** (Redacción y Diagramación). Me gustaría más información y una propuesta personalizada.";
    
    case 'completo':
      return base + "estoy interesado en el **Plan Completo** (Publicación de libros). Quiero que me acompañen desde la idea hasta la publicación.";
    
    case 'general':
    default:
      return base + "quiero información sobre los servicios editoriales de Casa Belen Relator.";
  }
}

function whatsappServiceLink(type) {
  const message = getServiceMessage(type);
  return `https://wa.me/${salesManager.phone}?text=${encodeURIComponent(message)}`;
}

// === Configurar todos los botones de servicios ===
function setupServiceLinks() {
  document.querySelectorAll('[data-whatsapp]').forEach(link => {
    const type = link.getAttribute('data-whatsapp');
    link.href = whatsappServiceLink(type);
    
    // Opcional: mensaje toast al hacer clic
    link.addEventListener('click', () => {
      showToast(`Abriendo WhatsApp con ${salesManager.name}...`);
    });
  });
}

setupServiceLinks();

document.querySelectorAll(".menu-toggle").forEach((button) => {
  const topbar = button.closest(".topbar");
  button.addEventListener("click", () => {
    const isOpen = topbar.classList.toggle("menu-open");
    button.setAttribute("aria-expanded", String(isOpen));
    button.setAttribute("aria-label", isOpen ? "Cerrar menu" : "Abrir menu");
  });
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    const topbar = link.closest(".topbar");
    const button = topbar ? topbar.querySelector(".menu-toggle") : null;
    if (!topbar || !button) return;
    topbar.classList.remove("menu-open");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Abrir menu");
  });
});

if (categoryTabs) {
  categoryTabs.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-category]");
    if (!button) return;
    state.category = button.dataset.category;
    renderCategories();
    renderBooks();
  });
}

if (bookGrid) {
  bookGrid.addEventListener("click", (event) => {
    const toggleButton = event.target.closest("button[data-toggle-description]");
    if (toggleButton) {
      const bookId = toggleButton.dataset.toggleDescription;
      if (state.expandedBooks.has(bookId)) {
        state.expandedBooks.delete(bookId);
      } else {
        state.expandedBooks.add(bookId);
      }
      renderBooks();
      return;
    }

    const link = event.target.closest("a[data-book]");
    if (link) showToast(`Te estamos conectando con ${salesManager.name} por WhatsApp.`);
  });
}

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderBooks();
  });
}

if (sortSelect) {
  sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderBooks();
  });
}

function openLogin() {
  loginModal.showModal();
}

const loginOpen = document.querySelector("#loginOpen");
const heroLogin = document.querySelector("#heroLogin");
if (loginOpen) loginOpen.addEventListener("click", openLogin);
if (heroLogin) heroLogin.addEventListener("click", openLogin);

const loginSubmit = document.querySelector("#loginSubmit");
if (loginSubmit) {
  loginSubmit.addEventListener("click", () => {
    const email = document.querySelector("#loginEmail").value.trim();
    if (!email) return;
    state.user = email;
    localStorage.setItem("bv_user", email);
    showToast(`Sesion iniciada como ${email}.`);
  });
}

renderCategories();
setupContactLinks();
renderBooks();
refreshIcons();
