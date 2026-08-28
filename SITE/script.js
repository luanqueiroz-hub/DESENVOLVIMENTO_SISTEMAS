/* =========================================================
   ARCHITECTURE PORTFOLIO — INTERACTIONS + CONTENT

   QUICK EDIT:
   1) Change SITE.brand + SITE.brandLines below.
   2) Change project names/text/images in PROJECTS.
   3) For local images, use paths such as:
      "assets/images/casa-01.jpg"
   ========================================================= */

const SITE = {
  brand: "NOME DO ESCRITÓRIO",
  brandLines: ["NOME", "ESCRITÓRIO"]
};

const PROJECTS = [
  {
    id: 1,
    name: "Casa Horizonte",
    location: "Curitiba, Brasil",
    year: "2026",
    type: "Residencial",
    area: "420 m²",
    status: "Construído",
    concept: "Uma casa desenhada como uma sequência de enquadramentos. O concreto contém; a luz dissolve. Entre pátios, planos e vazios, o cotidiano acontece como uma sucessão lenta de cenas.",
    quote: "A matéria pesa. A luz faz o espaço respirar.",
    images: [
      "https://images.unsplash.com/photo-1780303063301-97c03c636e96?auto=format&fit=crop&w=2200&q=88",
      "https://images.unsplash.com/photo-1780303135920-fad6d41796c3?auto=format&fit=crop&w=1800&q=88",
      "https://images.unsplash.com/photo-1784131718597-79f188ea973f?auto=format&fit=crop&w=1800&q=88",
      "https://images.unsplash.com/photo-1782129497992-b4997b80e3ad?auto=format&fit=crop&w=2200&q=88",
      "https://images.unsplash.com/photo-1781524391270-063167ee17f4?auto=format&fit=crop&w=1800&q=88"
    ]
  },
  {
    id: 2,
    name: "Pavilhão Araucária",
    location: "São Luiz do Purunã, Brasil",
    year: "2025",
    type: "Cultural",
    area: "680 m²",
    status: "Construído",
    concept: "Um pavilhão baixo, quase horizontal, que se posiciona no terreno sem competir com a paisagem. Estrutura, sombra e horizonte formam uma única composição.",
    quote: "Construir menos para perceber mais.",
    images: [
      "https://images.unsplash.com/photo-1785589579582-9b02c9fbbf68?auto=format&fit=crop&w=2200&q=88",
      "https://images.unsplash.com/photo-1772877353868-e2c2f4059202?auto=format&fit=crop&w=1800&q=88",
      "https://images.unsplash.com/photo-1776851629268-c878a7978c61?auto=format&fit=crop&w=1800&q=88",
      "https://images.unsplash.com/photo-1784131718597-79f188ea973f?auto=format&fit=crop&w=2200&q=88",
      "https://images.unsplash.com/photo-1780303063301-97c03c636e96?auto=format&fit=crop&w=1800&q=88"
    ]
  },
  {
    id: 3,
    name: "Casa Pátio",
    location: "Curitiba, Brasil",
    year: "2024",
    type: "Residencial",
    area: "310 m²",
    status: "Construído",
    concept: "A residência se organiza em torno de um vazio central. O pátio não é intervalo: é o cômodo principal, responsável por luz, ventilação, orientação e intimidade.",
    quote: "O centro da casa é um pedaço de céu.",
    images: [
      "https://images.unsplash.com/photo-1784131718597-79f188ea973f?auto=format&fit=crop&w=2200&q=88",
      "https://images.unsplash.com/photo-1782129497992-b4997b80e3ad?auto=format&fit=crop&w=1800&q=88",
      "https://images.unsplash.com/photo-1781524391270-063167ee17f4?auto=format&fit=crop&w=1800&q=88",
      "https://images.unsplash.com/photo-1780303135920-fad6d41796c3?auto=format&fit=crop&w=2200&q=88",
      "https://images.unsplash.com/photo-1772877353868-e2c2f4059202?auto=format&fit=crop&w=1800&q=88"
    ]
  },
  {
    id: 4,
    name: "Edifício Fenda",
    location: "São Paulo, Brasil",
    year: "2024",
    type: "Comercial",
    area: "2.140 m²",
    status: "Construído",
    concept: "Uma massa mineral é cortada por uma fenda vertical. O gesto organiza acessos, ilumina circulações e transforma uma fachada silenciosa em um marcador urbano preciso.",
    quote: "Um corte de luz em uma massa escura.",
    images: [
      "https://images.unsplash.com/photo-1781524391270-063167ee17f4?auto=format&fit=crop&w=2200&q=88",
      "https://images.unsplash.com/photo-1776851629268-c878a7978c61?auto=format&fit=crop&w=1800&q=88",
      "https://images.unsplash.com/photo-1785589579582-9b02c9fbbf68?auto=format&fit=crop&w=1800&q=88",
      "https://images.unsplash.com/photo-1780303063301-97c03c636e96?auto=format&fit=crop&w=2200&q=88",
      "https://images.unsplash.com/photo-1782129497992-b4997b80e3ad?auto=format&fit=crop&w=1800&q=88"
    ]
  },
  {
    id: 5,
    name: "Refúgio Serra",
    location: "Quatro Barras, Brasil",
    year: "2023",
    type: "Residencial",
    area: "190 m²",
    status: "Construído",
    concept: "Uma linha habitável entre mata e montanha. A arquitetura comprime a chegada e expande a vista, criando uma experiência feita mais de horizonte do que de objeto.",
    quote: "A casa é uma câmera apontada para a paisagem.",
    images: [
      "https://images.unsplash.com/photo-1776851629268-c878a7978c61?auto=format&fit=crop&w=2200&q=88",
      "https://images.unsplash.com/photo-1785589579582-9b02c9fbbf68?auto=format&fit=crop&w=1800&q=88",
      "https://images.unsplash.com/photo-1780303135920-fad6d41796c3?auto=format&fit=crop&w=1800&q=88",
      "https://images.unsplash.com/photo-1772877353868-e2c2f4059202?auto=format&fit=crop&w=2200&q=88",
      "https://images.unsplash.com/photo-1781524391270-063167ee17f4?auto=format&fit=crop&w=1800&q=88"
    ]
  },
  {
    id: 6,
    name: "Casa Monólito",
    location: "Florianópolis, Brasil",
    year: "2022",
    type: "Residencial",
    area: "355 m²",
    status: "Construído",
    concept: "Um volume aparentemente monolítico se abre em planos profundos, pátios protegidos e grandes sombras. A experiência alterna peso e transparência, abrigo e horizonte.",
    quote: "Por fora, massa. Por dentro, ar.",
    images: [
      "https://images.unsplash.com/photo-1772877353868-e2c2f4059202?auto=format&fit=crop&w=2200&q=88",
      "https://images.unsplash.com/photo-1780303063301-97c03c636e96?auto=format&fit=crop&w=1800&q=88",
      "https://images.unsplash.com/photo-1782129497992-b4997b80e3ad?auto=format&fit=crop&w=1800&q=88",
      "https://images.unsplash.com/photo-1784131718597-79f188ea973f?auto=format&fit=crop&w=2200&q=88",
      "https://images.unsplash.com/photo-1785589579582-9b02c9fbbf68?auto=format&fit=crop&w=1800&q=88"
    ]
  }
];

// Images used by non-project-specific moments on the home page.
const VISUAL_POOL = [
  PROJECTS[0].images[0], PROJECTS[1].images[0], PROJECTS[2].images[0], PROJECTS[3].images[0],
  PROJECTS[4].images[0], PROJECTS[5].images[1], PROJECTS[0].images[3], PROJECTS[2].images[1],
  PROJECTS[5].images[0], PROJECTS[3].images[2], PROJECTS[1].images[3], PROJECTS[2].images[4]
];

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isProjectPage = document.body.dataset.page === "project";

function resolveAsset(url) {
  if (!url || /^https?:\/\//i.test(url) || url.startsWith("data:")) return url;
  if (isProjectPage && url.startsWith("assets/")) return `../${url}`;
  return url;
}

function fillBrand() {
  document.querySelectorAll("[data-brand]").forEach((el) => { el.textContent = SITE.brand; });
  document.querySelectorAll("[data-brand-line]").forEach((el) => {
    const index = Number(el.dataset.brandLine || 0);
    el.textContent = SITE.brandLines[index] || SITE.brand;
  });
}

function applyVisualPool() {
  document.querySelectorAll("[data-project-image]").forEach((el) => {
    const index = Number(el.dataset.projectImage || 0) % VISUAL_POOL.length;
    const src = resolveAsset(VISUAL_POOL[index]);
    if (el.tagName === "IMG") el.src = src;
    else el.style.backgroundImage = `url("${src}")`;
  });
}

function setupSmoothScroll() {
  if (reducedMotion || typeof Lenis === "undefined") return null;
  const lenis = new Lenis({
    duration: 1.15,
    smoothWheel: true,
    wheelMultiplier: .92,
    touchMultiplier: 1.1
  });
  const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);

  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    lenis.on("scroll", ScrollTrigger.update);
  }
  return lenis;
}

function setupCursor() {
  const cursor = document.querySelector(".cursor");
  if (!cursor || reducedMotion || window.matchMedia("(pointer: coarse)").matches) return;
  const label = cursor.querySelector(".cursor__label");
  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let tx = x;
  let ty = y;

  window.addEventListener("pointermove", (event) => { tx = event.clientX; ty = event.clientY; }, { passive: true });
  const tick = () => {
    x += (tx - x) * .18;
    y += (ty - y) * .18;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
    requestAnimationFrame(tick);
  };
  tick();

  document.querySelectorAll("[data-cursor]").forEach((target) => {
    target.addEventListener("pointerenter", () => {
      label.textContent = target.dataset.cursor || "VIEW";
      cursor.classList.add("is-active");
    });
    target.addEventListener("pointerleave", () => cursor.classList.remove("is-active"));
  });
}

function setupMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu-overlay");
  const menuImage = document.querySelector(".menu-overlay__image");
  if (!toggle || !menu) return;

  const openMenu = () => {
    document.body.classList.add("menu-open");
    toggle.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-hidden", "false");
  };
  const closeMenu = () => {
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
  };
  toggle.addEventListener("click", () => document.body.classList.contains("menu-open") ? closeMenu() : openMenu());
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });

  if (menuImage) menuImage.style.backgroundImage = `url("${resolveAsset(VISUAL_POOL[0])}")`;
  menu.querySelectorAll("[data-menu-image]").forEach((link) => {
    link.addEventListener("mouseenter", () => {
      if (!menuImage) return;
      const i = Number(link.dataset.menuImage || 0) % VISUAL_POOL.length;
      menuImage.style.backgroundImage = `url("${resolveAsset(VISUAL_POOL[i])}")`;
    });
    link.addEventListener("click", closeMenu);
  });
}

function setupDistortionZones() {
  if (reducedMotion || window.matchMedia("(pointer: coarse)").matches) return;
  document.querySelectorAll(".distortion-zone").forEach((zone) => {
    const visual = zone.querySelector("img") || zone;
    zone.addEventListener("pointermove", (event) => {
      const r = zone.getBoundingClientRect();
      const nx = ((event.clientX - r.left) / r.width) - .5;
      const ny = ((event.clientY - r.top) / r.height) - .5;
      visual.style.transform = `scale(1.025) translate(${nx * 8}px, ${ny * 8}px) skew(${nx * -.45}deg, ${ny * .22}deg)`;
      visual.style.filter = `saturate(${1 + Math.abs(nx) * .08}) contrast(1.03)`;
    });
    zone.addEventListener("pointerleave", () => {
      visual.style.transform = "";
      visual.style.filter = "";
    });
  });
}

function setupTransitions() {
  document.querySelectorAll("a.transition-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || link.target === "_blank") return;
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#")) return;
      event.preventDefault();

      const sourceImage = link.querySelector("img");
      if (!reducedMotion && sourceImage && typeof gsap !== "undefined") {
        const rect = sourceImage.getBoundingClientRect();
        const clone = sourceImage.cloneNode(true);
        Object.assign(clone.style, {
          position: "fixed", left: `${rect.left}px`, top: `${rect.top}px`, width: `${rect.width}px`, height: `${rect.height}px`,
          objectFit: "cover", zIndex: 390, margin: 0, pointerEvents: "none", transform: "none"
        });
        document.body.appendChild(clone);
        document.body.classList.add("is-leaving");
        gsap.to(clone, { left: 0, top: 0, width: "100vw", height: "100vh", duration: .85, ease: "expo.inOut" });
        gsap.to(".site-header", { opacity: 0, duration: .3 });
        window.setTimeout(() => { window.location.href = href; }, 760);
      } else {
        document.body.classList.add("is-leaving");
        window.setTimeout(() => { window.location.href = href; }, 520);
      }
    });
  });
}

function setupFilmModal() {
  const trigger = document.querySelector(".film-frame");
  const modal = document.getElementById("filmModal");
  if (!trigger || !modal) return;
  const close = modal.querySelector(".film-modal__close");
  trigger.addEventListener("click", () => {
    if (typeof modal.showModal === "function") modal.showModal();
    else modal.setAttribute("open", "");
  });
  close?.addEventListener("click", () => modal.close ? modal.close() : modal.removeAttribute("open"));
  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.close ? modal.close() : modal.removeAttribute("open");
  });
}

function setupGalleryIndex() {
  const gallery = document.getElementById("galleryView");
  const index = document.getElementById("indexView");
  const list = document.getElementById("indexList");
  const preview = document.querySelector(".index-preview");
  const buttons = document.querySelectorAll("[data-view]");
  if (!gallery || !index || !list || !buttons.length) return;

  list.innerHTML = PROJECTS.map((project) => `
    <a class="index-row transition-link" href="pages/project.html?id=${project.id}" data-preview="${project.id - 1}" data-cursor="VIEW">
      <span class="index-row__meta">${String(project.id).padStart(2, "0")}</span>
      <span class="index-row__title">${project.name}</span>
      <span class="index-row__meta index-row__place">${project.location}</span>
      <span class="index-row__meta">${project.year}</span>
    </a>
  `).join("");

  const setView = (view) => {
    const showIndex = view === "index";
    gallery.hidden = showIndex;
    index.hidden = !showIndex;
    buttons.forEach((btn) => btn.classList.toggle("is-active", btn.dataset.view === view));
    if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
  };
  buttons.forEach((btn) => btn.addEventListener("click", () => setView(btn.dataset.view)));

  if (preview) {
    const previewImg = preview.querySelector("img");
    list.querySelectorAll(".index-row").forEach((row) => {
      row.addEventListener("pointerenter", () => {
        const project = PROJECTS[Number(row.dataset.preview)];
        previewImg.src = resolveAsset(project.images[0]);
        preview.classList.add("is-visible");
      });
      row.addEventListener("pointerleave", () => preview.classList.remove("is-visible"));
    });
    window.addEventListener("pointermove", (event) => {
      preview.style.left = `${event.clientX + 10}px`;
      preview.style.top = `${event.clientY + 10}px`;
    }, { passive: true });
  }

}

function setupActiveProjectCounter() {
  const current = document.getElementById("activeProject");
  const total = document.getElementById("totalProjects");
  const articles = document.querySelectorAll("[data-project]");
  if (!current || !articles.length) return;
  if (total) total.textContent = String(PROJECTS.length).padStart(2, "0");

  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) current.textContent = String(visible.target.dataset.project).padStart(2, "0");
  }, { threshold: [.2, .45, .7] });
  articles.forEach((el) => observer.observe(el));
}

function splitWords(element) {
  if (!element || element.dataset.split === "true") return;
  const words = element.textContent.trim().split(/\s+/);
  element.innerHTML = words.map((word) => `<span class="word-mask"><span>${word}&nbsp;</span></span>`).join("");
  element.dataset.split = "true";
}

function setupHomeMotion() {
  if (reducedMotion || typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".hero-title__word", { yPercent: 110, rotate: 1.2, duration: 1.35, stagger: .08, ease: "expo.out", delay: .12 });
  gsap.from(".hero__meta, .hero__scroll", { opacity: 0, y: 16, duration: .9, stagger: .08, delay: .55, ease: "power3.out" });

  gsap.to(".hero__media", {
    yPercent: 10,
    scale: 1.12,
    ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
  });
  gsap.to(".hero-title__clip--top .hero-title__word", {
    xPercent: -6,
    ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
  });
  gsap.to(".hero-title__clip--bottom .hero-title__word", {
    xPercent: 8,
    ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
  });

  document.querySelectorAll(".reveal-words").forEach((element) => {
    splitWords(element);
    gsap.from(element.querySelectorAll(".word-mask > span"), {
      yPercent: 110,
      rotate: 2,
      stagger: .022,
      duration: .75,
      ease: "expo.out",
      scrollTrigger: { trigger: element, start: "top 82%" }
    });
  });

  document.querySelectorAll(".parallax-image").forEach((img) => {
    gsap.fromTo(img, { yPercent: -5 }, {
      yPercent: 5,
      ease: "none",
      scrollTrigger: { trigger: img.closest(".project__image-wrap"), start: "top bottom", end: "bottom top", scrub: .7 }
    });
  });

  const chapter = document.querySelector(".horizontal-chapter");
  const track = document.querySelector(".horizontal-chapter__track");
  if (chapter && track && window.innerWidth > 900) {
    const getDistance = () => Math.max(0, track.scrollWidth - window.innerWidth + window.innerWidth * .2);
    gsap.to(track, {
      x: () => -getDistance(),
      ease: "none",
      scrollTrigger: { trigger: chapter, start: "top top", end: "bottom bottom", scrub: .8, invalidateOnRefresh: true }
    });
  }

  gsap.to(".interlude__media", {
    scale: 1,
    rotation: .6,
    clipPath: "polygon(0% 0%, 100% 4%, 95% 100%, 0% 92%)",
    filter: "grayscale(0) contrast(1.08)",
    ease: "none",
    scrollTrigger: { trigger: ".interlude", start: "top bottom", end: "bottom top", scrub: 1 }
  });
  gsap.to(".interlude__type span:nth-child(1)", { xPercent: -12, scrollTrigger: { trigger: ".interlude", start: "top bottom", end: "bottom top", scrub: true } });
  gsap.to(".interlude__type span:nth-child(2)", { xPercent: 16, scrollTrigger: { trigger: ".interlude", start: "top bottom", end: "bottom top", scrub: true } });
  gsap.to(".interlude__type span:nth-child(3)", { xPercent: -7, scrollTrigger: { trigger: ".interlude", start: "top bottom", end: "bottom top", scrub: true } });

  gsap.to(".studio__image-wrap img", {
    yPercent: 8,
    ease: "none",
    scrollTrigger: { trigger: ".studio__image-wrap", start: "top bottom", end: "bottom top", scrub: .7 }
  });
}

function renderProjectPage() {
  if (!isProjectPage) return;
  const id = Math.max(1, Math.min(PROJECTS.length, Number(new URLSearchParams(window.location.search).get("id")) || 1));
  const project = PROJECTS[id - 1];
  const next = PROJECTS[id % PROJECTS.length];

  document.title = `${project.name} — ${SITE.brand}`;
  const hero = document.getElementById("projectHeroImage");
  hero.src = resolveAsset(project.images[0]);
  hero.alt = `${project.name}, ${project.location} — imagem de abertura`;
  document.getElementById("projectNumber").textContent = `PROJECT ${String(project.id).padStart(2, "0")}`;
  document.getElementById("projectTitle").textContent = project.name;
  document.getElementById("projectLocation").textContent = project.location.toUpperCase();
  document.getElementById("projectType").textContent = project.type.toUpperCase();
  document.getElementById("projectYear").textContent = project.year;
  document.getElementById("projectConcept").textContent = project.concept;
  document.getElementById("projectData").innerHTML = `
    <div><dt>TYPE</dt><dd>${project.type}</dd></div>
    <div><dt>AREA</dt><dd>${project.area}</dd></div>
    <div><dt>STATUS</dt><dd>${project.status}</dd></div>
    <div><dt>YEAR</dt><dd>${project.year}</dd></div>
  `;

  const imgs = project.images;
  document.getElementById("projectEssay").innerHTML = `
    <figure class="essay-block essay-block--full">
      <img src="${resolveAsset(imgs[1])}" alt="${project.name} — enquadramento geral" loading="eager">
      <figcaption class="section-pad">FRAME 01 / APPROACH</figcaption>
    </figure>
    <figure class="essay-block essay-block--portrait distortion-zone">
      <img src="${resolveAsset(imgs[2])}" alt="${project.name} — relação entre matéria e luz" loading="lazy">
      <figcaption>FRAME 02 / LIGHT</figcaption>
    </figure>
    <div class="essay-text"><p>${project.quote}</p></div>
    <figure class="essay-block essay-block--small">
      <img src="${resolveAsset(imgs[3])}" alt="${project.name} — detalhe arquitetônico" loading="lazy">
      <figcaption>FRAME 03 / DETAIL</figcaption>
    </figure>
    <div class="essay-pair">
      <figure class="essay-block distortion-zone">
        <img src="${resolveAsset(imgs[4])}" alt="${project.name} — espaço interior" loading="lazy">
        <figcaption>FRAME 04 / INTERIOR</figcaption>
      </figure>
      <figure class="essay-block">
        <img src="${resolveAsset(imgs[0])}" alt="${project.name} — vista complementar" loading="lazy">
        <figcaption>FRAME 05 / RETURN</figcaption>
      </figure>
    </div>
    <figure class="essay-block essay-block--full">
      <img src="${resolveAsset(imgs[1])}" alt="${project.name} — imagem final" loading="lazy">
      <figcaption class="section-pad">FRAME 06 / END</figcaption>
    </figure>
  `;

  document.getElementById("creditsProject").textContent = `PROJECT ${String(project.id).padStart(2, "0")} / ${project.name.toUpperCase()}`;
  document.getElementById("creditsLocation").textContent = project.location.toUpperCase().replace(",", " —");
  document.getElementById("creditsYear").textContent = project.year;
  const nextLink = document.getElementById("nextProject");
  nextLink.href = `project.html?id=${next.id}`;
  document.getElementById("nextProjectTitle").textContent = next.name;
  const nextImg = document.getElementById("nextProjectImage");
  nextImg.src = resolveAsset(next.images[0]);
  nextImg.alt = `Próximo projeto: ${next.name}`;
}

function setupProjectMotion() {
  if (!isProjectPage || reducedMotion || typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".project-hero__title", { yPercent: 120, duration: 1.15, ease: "expo.out", delay: .15 });
  gsap.from(".project-hero__number, .project-hero__meta", { opacity: 0, y: 14, duration: .8, delay: .55, stagger: .08 });
  gsap.to(".project-hero__image", {
    yPercent: 9,
    scale: 1.06,
    ease: "none",
    scrollTrigger: { trigger: ".project-hero", start: "top top", end: "bottom top", scrub: true }
  });
  gsap.from(".project-intro__text", {
    y: 70,
    clipPath: "inset(0 0 100% 0)",
    duration: 1.2,
    ease: "expo.out",
    scrollTrigger: { trigger: ".project-intro", start: "top 72%" }
  });
  document.querySelectorAll(".essay-block img").forEach((img) => {
    gsap.fromTo(img, { yPercent: -4 }, { yPercent: 4, ease: "none", scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: .6 } });
  });
}

function addMotionUtilityStyles() {
  const style = document.createElement("style");
  style.textContent = `
    .word-mask{display:inline-block;overflow:hidden;vertical-align:top}.word-mask>span{display:inline-block}
  `;
  document.head.appendChild(style);
}

function init() {
  fillBrand();
  applyVisualPool();
  renderProjectPage();
  addMotionUtilityStyles();
  setupSmoothScroll();
  setupMenu();
  setupFilmModal();

  if (!isProjectPage) setupGalleryIndex();

  setupCursor();
  setupDistortionZones();
  setupTransitions();

  if (isProjectPage) {
    setupProjectMotion();
  } else {
    setupActiveProjectCounter();
    setupHomeMotion();
  }

  window.addEventListener("load", () => {
    if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
  });
}

document.addEventListener("DOMContentLoaded", init);