/* =========================================================
   ARCHITECTURE PORTFOLIO — LANDING PAGE

   QUICK EDIT:
   1) Change SITE.brand + SITE.brandLines below.
   2) Change each project's name, city, year and ONE image.
   3) For local images, use paths such as:
      "assets/images/casa-horizonte.jpg"

   The project cards are intentionally non-clickable: this version
   is a single-page portfolio and does not open project detail pages.
   ========================================================= */

const SITE = {
  brand: "NOME DO ESCRITÓRIO",
  brandLines: ["NOME", "ESCRITÓRIO"]
};

/*
  Se suas imagens estiverem em .png, troque para "png"
  Se estiverem em .jpg, troque para "jpg"
*/
const IMAGE_EXTENSION = "jpg";
const image = (number) => `assets/images/${number}.${IMAGE_EXTENSION}`;

const PROJECTS = [
  {
    id: 1,
    name: "Casa Horizonte",
    location: "Curitiba, Brasil",
    year: "2026",
    image: image(1)
  },
  {
    id: 2,
    name: "Pavilhão Araucária",
    location: "São Luiz do Purunã, Brasil",
    year: "2025",
    image: image(5)
  },
  {
    id: 3,
    name: "Casa Pátio",
    location: "Curitiba, Brasil",
    year: "2024",
    image: image(6)
  },
  {
    id: 4,
    name: "Edifício Fenda",
    location: "São Paulo, Brasil",
    year: "2024",
    image: image(7)
  },
  {
    id: 5,
    name: "Refúgio Serra",
    location: "Quatro Barras, Brasil",
    year: "2023",
    image: image(8)
  },
  {
    id: 6,
    name: "Casa Monólito",
    location: "Florianópolis, Brasil",
    year: "2022",
    image: image(12)
  }
];

/*
  CURADORIA VISUAL
  0  = hero + projeto 01
  1  = projeto 02
  2  = projeto 03
  3  = projeto 04
  4  = projeto 05
  5  = horizontal tiny
  6  = horizontal large
  7  = horizontal medium
  8  = projeto final
  9  = interlude
  10 = films
  11 = studio
*/
const VISUAL_POOL = [
  image(1),
  image(5),
  image(6),
  image(7),
  image(8),
  image(9),
  image(10),
  image(11),
  image(12),
  image(13),
  image(17),
  image(21)
];

/*
  Sequências lentas para deixar o site mais vivo e cinematográfico.
  Elas não quebram o layout: só fazem algumas áreas “respirarem”.
*/
const IMAGE_SEQUENCES = {
  hero: [image(1), image(2), image(3), image(4)],
  interlude: [image(13), image(14), image(15), image(16)],
  film: [image(17), image(18), image(19), image(20)],
  studio: [image(21), image(22), image(23), image(24)],
  menu: [image(25), image(26), image(27), image(28), image(29), image(30)]
};
const VISUAL_POOL = PROJECTS.map((project) => project.image);

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function resolveAsset(url) {
  if (!url || /^https?:\/\//i.test(url) || url.startsWith("data:")) return url;
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

  const defaultMenuImage = IMAGE_SEQUENCES.menu[4] || IMAGE_SEQUENCES.menu[0];

  const openMenu = () => {
    document.body.classList.add("menu-open");
    toggle.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-hidden", "false");

    if (menuImage) {
      menuImage.style.backgroundImage = `url("${resolveAsset(defaultMenuImage)}")`;
    }
  };

  const closeMenu = () => {
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
  };

  toggle.addEventListener("click", () => {
    document.body.classList.contains("menu-open") ? closeMenu() : openMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  if (menuImage) {
    menuImage.style.backgroundImage = `url("${resolveAsset(defaultMenuImage)}")`;
  }

  menu.querySelectorAll("[data-menu-image]").forEach((link) => {
    link.addEventListener("mouseenter", () => {
      if (!menuImage) return;
      const i = Number(link.dataset.menuImage || 0) % IMAGE_SEQUENCES.menu.length;
      menuImage.style.backgroundImage = `url("${resolveAsset(IMAGE_SEQUENCES.menu[i])}")`;
    });

    link.addEventListener("mouseleave", () => {
      if (!menuImage) return;
      menuImage.style.backgroundImage = `url("${resolveAsset(defaultMenuImage)}")`;
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

function setVisualSource(element, source) {
  if (!element || !source) return;
  const resolved = resolveAsset(source);

  if (element.tagName === "IMG") {
    element.src = resolved;
  } else {
    element.style.backgroundImage = `url("${resolved}")`;
  }
}

function startVisualSequence(selector, sequence, interval = 5200) {
  const element = document.querySelector(selector);
  if (!element || !sequence || !sequence.length) return;

  setVisualSource(element, sequence[0]);

  if (reducedMotion || sequence.length < 2) return;

  element.style.transition = "opacity 0.8s ease";
  let index = 0;

  setInterval(() => {
    element.style.opacity = "0.88";

    setTimeout(() => {
      index = (index + 1) % sequence.length;
      setVisualSource(element, sequence[index]);
      element.style.opacity = "1";
    }, 260);
  }, interval);
}

function setupAmbientGalleries() {
  startVisualSequence(".hero__media", IMAGE_SEQUENCES.hero, 5600);
  startVisualSequence(".interlude__media", IMAGE_SEQUENCES.interlude, 5000);
  startVisualSequence(".film-frame img", IMAGE_SEQUENCES.film, 4600);
  startVisualSequence(".film-modal__placeholder", IMAGE_SEQUENCES.film, 4600);
  startVisualSequence(".studio__image-wrap img", IMAGE_SEQUENCES.studio, 6200);
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
    <div class="index-row" data-preview="${project.id - 1}">
      <span class="index-row__meta">${String(project.id).padStart(2, "0")}</span>
      <span class="index-row__title">${project.name}</span>
      <span class="index-row__meta index-row__place">${project.location}</span>
      <span class="index-row__meta">${project.year}</span>
    </div>
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
        previewImg.src = resolveAsset(project.image);
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



function setupHeaderFooterBoundary() {
  const header = document.querySelector(".site-header");
  const footer = document.querySelector(".footer");
  if (!header || !footer) return;

  let ticking = false;

  const update = () => {
    const footerTop = footer.getBoundingClientRect().top;
    const boundary = header.offsetHeight;
    header.classList.toggle("is-before-footer", footerTop <= boundary);
    ticking = false;
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  update();
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
  setupAmbientGalleries();
  addMotionUtilityStyles();
  setupSmoothScroll();
  setupMenu();
  setupFilmModal();

  setupGalleryIndex();

  setupCursor();
  setupDistortionZones();

  setupHeaderFooterBoundary();
  setupActiveProjectCounter();
  setupHomeMotion();

  window.addEventListener("load", () => {
    if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
  });
}

document.addEventListener("DOMContentLoaded", init);
