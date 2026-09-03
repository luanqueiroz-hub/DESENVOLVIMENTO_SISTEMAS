/* =========================================================
   ARCHITECTURE PORTFOLIO — LANDING PAGE

   IMAGENS:
   SITE_FINAL/assets/images/1.jpg
   SITE_FINAL/assets/images/2.jpg
   ...
   SITE_FINAL/assets/images/30.jpg

   A ordem foi pensada para criar uma narrativa visual:
   entrada > exposição > detalhe > interlúdio > filme > estúdio.
   ========================================================= */


/* =========================================================
   CONFIGURAÇÕES GERAIS
   ========================================================= */

const SITE = {
  brand: "STUDIO 13.1",
  brandLines: ["13.1", "STUDIO"]
};


/* =========================================================
   IMAGENS
   ========================================================= */

const IMAGE_EXTENSION = "jpg";

const image = (number) =>
  `assets/images/${number}.${IMAGE_EXTENSION}`;


/* =========================================================
   PROJETOS
   ========================================================= */

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


/* =========================================================
   CURADORIA PRINCIPAL

   Cada posição corresponde aos data-project-image do HTML.

   0  HERO / PROJETO 01
   1  PROJETO 02
   2  PROJETO 03
   3  PROJETO 04
   4  PROJETO 05
   5  DETALHE PEQUENO
   6  FRAME GRANDE
   7  FRAME MÉDIO
   8  PROJETO FINAL
   9  INTERLÚDIO
   10 FILM
   11 STUDIO
   ========================================================= */

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


/* =========================================================
   SEQUÊNCIAS CINEMATOGRÁFICAS

   As imagens mudam lentamente em alguns momentos específicos.
   ========================================================= */

const IMAGE_SEQUENCES = {

  // Entrada do site
  hero: [
    image(1),
    image(2),
    image(3),
    image(4)
  ],

  // Momento mais experimental
  interlude: [
    image(13),
    image(14),
    image(15),
    image(16)
  ],

  // Linguagem cinematográfica
  film: [
    image(17),
    image(18),
    image(19),
    image(20)
  ],

  // Atmosfera do escritório
  studio: [
    image(21),
    image(22),
    image(23),
    image(24)
  ],

  // Menu fullscreen
  menu: [
    image(25),
    image(26),
    image(27),
    image(28),
    image(29),
    image(30)
  ]
};


/* =========================================================
   ACESSIBILIDADE / MOTION
   ========================================================= */

const reducedMotion = window
  .matchMedia("(prefers-reduced-motion: reduce)")
  .matches;


/* =========================================================
   AUXILIARES
   ========================================================= */

function resolveAsset(url) {
  if (
    !url ||
    /^https?:\/\//i.test(url) ||
    url.startsWith("data:")
  ) {
    return url;
  }

  return url;
}


/* =========================================================
   MARCA
   ========================================================= */

function fillBrand() {

  document
    .querySelectorAll("[data-brand]")
    .forEach((element) => {
      element.textContent = SITE.brand;
    });

  document
    .querySelectorAll("[data-brand-line]")
    .forEach((element) => {

      const index =
        Number(element.dataset.brandLine || 0);

      element.textContent =
        SITE.brandLines[index] || SITE.brand;
    });
}


/* =========================================================
   DISTRIBUIÇÃO DAS IMAGENS
   ========================================================= */

function applyVisualPool() {

  document
    .querySelectorAll("[data-project-image]")
    .forEach((element) => {

      const index =
        Number(element.dataset.projectImage || 0)
        % VISUAL_POOL.length;

      const src =
        resolveAsset(VISUAL_POOL[index]);

      if (element.tagName === "IMG") {
        element.src = src;
      } else {
        element.style.backgroundImage =
          `url("${src}")`;
      }
    });
}


/* =========================================================
   SMOOTH SCROLL
   ========================================================= */

function setupSmoothScroll() {

  if (
    reducedMotion ||
    typeof Lenis === "undefined"
  ) {
    return null;
  }

  const lenis = new Lenis({
    duration: 1.15,
    smoothWheel: true,
    wheelMultiplier: 0.92,
    touchMultiplier: 1.1
  });


  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);


  if (
    typeof gsap !== "undefined" &&
    typeof ScrollTrigger !== "undefined"
  ) {
    lenis.on(
      "scroll",
      ScrollTrigger.update
    );
  }

  return lenis;
}


/* =========================================================
   CURSOR
   ========================================================= */

function setupCursor() {

  const cursor =
    document.querySelector(".cursor");

  if (
    !cursor ||
    reducedMotion ||
    window
      .matchMedia("(pointer: coarse)")
      .matches
  ) {
    return;
  }


  const label =
    cursor.querySelector(".cursor__label");


  let x =
    window.innerWidth / 2;

  let y =
    window.innerHeight / 2;

  let targetX = x;
  let targetY = y;


  window.addEventListener(
    "pointermove",
    (event) => {

      targetX =
        event.clientX;

      targetY =
        event.clientY;
    },
    {
      passive: true
    }
  );


  function tick() {

    x +=
      (targetX - x) * 0.18;

    y +=
      (targetY - y) * 0.18;


    cursor.style.left =
      `${x}px`;

    cursor.style.top =
      `${y}px`;


    requestAnimationFrame(tick);
  }

  tick();


  document
    .querySelectorAll("[data-cursor]")
    .forEach((target) => {

      target.addEventListener(
        "pointerenter",
        () => {

          label.textContent =
            target.dataset.cursor || "VIEW";

          cursor
            .classList
            .add("is-active");
        }
      );


      target.addEventListener(
        "pointerleave",
        () => {

          cursor
            .classList
            .remove("is-active");
        }
      );
    });
}


/* =========================================================
   MENU FULLSCREEN
   ========================================================= */

function setupMenu() {

  const toggle =
    document.querySelector(".menu-toggle");

  const menu =
    document.querySelector(".menu-overlay");

  const menuImage =
    document.querySelector(
      ".menu-overlay__image"
    );


  if (!toggle || !menu) {
    return;
  }


  const defaultMenuImage =
    IMAGE_SEQUENCES.menu[4];


  function changeMenuImage(source) {

    if (!menuImage) {
      return;
    }

    menuImage.style.backgroundImage =
      `url("${resolveAsset(source)}")`;
  }


  function openMenu() {

    document.body
      .classList
      .add("menu-open");


    toggle.setAttribute(
      "aria-expanded",
      "true"
    );


    menu.setAttribute(
      "aria-hidden",
      "false"
    );


    changeMenuImage(
      defaultMenuImage
    );
  }


  function closeMenu() {

    document.body
      .classList
      .remove("menu-open");


    toggle.setAttribute(
      "aria-expanded",
      "false"
    );


    menu.setAttribute(
      "aria-hidden",
      "true"
    );
  }


  toggle.addEventListener(
    "click",
    () => {

      if (
        document.body
          .classList
          .contains("menu-open")
      ) {
        closeMenu();
      } else {
        openMenu();
      }
    }
  );


  document.addEventListener(
    "keydown",
    (event) => {

      if (event.key === "Escape") {
        closeMenu();
      }
    }
  );


  changeMenuImage(
    defaultMenuImage
  );


  menu
    .querySelectorAll(
      "[data-menu-image]"
    )
    .forEach((link) => {

      link.addEventListener(
        "mouseenter",
        () => {

          const index =
            Number(
              link.dataset.menuImage || 0
            )
            %
            IMAGE_SEQUENCES.menu.length;


          changeMenuImage(
            IMAGE_SEQUENCES.menu[index]
          );
        }
      );


      link.addEventListener(
        "mouseleave",
        () => {

          changeMenuImage(
            defaultMenuImage
          );
        }
      );


      link.addEventListener(
        "click",
        closeMenu
      );
    });
}


/* =========================================================
   DISTORÇÃO SUAVE
   ========================================================= */

function setupDistortionZones() {

  if (
    reducedMotion ||
    window
      .matchMedia("(pointer: coarse)")
      .matches
  ) {
    return;
  }


  document
    .querySelectorAll(
      ".distortion-zone"
    )
    .forEach((zone) => {

      const visual =
        zone.querySelector("img")
        || zone;


      zone.addEventListener(
        "pointermove",
        (event) => {

          const rect =
            zone.getBoundingClientRect();


          const x =
            (
              (event.clientX - rect.left)
              /
              rect.width
            )
            - 0.5;


          const y =
            (
              (event.clientY - rect.top)
              /
              rect.height
            )
            - 0.5;


          visual.style.transform =
            `
            scale(1.025)
            translate(
              ${x * 8}px,
              ${y * 8}px
            )
            skew(
              ${x * -0.45}deg,
              ${y * 0.22}deg
            )
            `;


          visual.style.filter =
            `
            saturate(
              ${1 + Math.abs(x) * 0.08}
            )
            contrast(1.03)
            `;
        }
      );


      zone.addEventListener(
        "pointerleave",
        () => {

          visual.style.transform = "";
          visual.style.filter = "";
        }
      );
    });
}


/* =========================================================
   TROCA DE IMAGEM
   ========================================================= */

function setVisualSource(
  element,
  source
) {

  if (
    !element ||
    !source
  ) {
    return;
  }


  const resolved =
    resolveAsset(source);


  if (
    element.tagName === "IMG"
  ) {

    element.src =
      resolved;

  } else {

    element.style.backgroundImage =
      `url("${resolved}")`;
  }
}


/* =========================================================
   SEQUÊNCIAS DE IMAGENS
   ========================================================= */

function startVisualSequence(
  selector,
  sequence,
  interval = 5200
) {

  const element =
    document.querySelector(
      selector
    );


  if (
    !element ||
    !sequence ||
    sequence.length === 0
  ) {
    return;
  }


  setVisualSource(
    element,
    sequence[0]
  );


  if (
    reducedMotion ||
    sequence.length < 2
  ) {
    return;
  }


  element.style.transition =
    "opacity 0.9s ease";


  let index = 0;


  setInterval(
    () => {

      element.style.opacity =
        "0.82";


      setTimeout(
        () => {

          index =
            (index + 1)
            %
            sequence.length;


          setVisualSource(
            element,
            sequence[index]
          );


          element.style.opacity =
            "1";

        },
        320
      );

    },
    interval
  );
}


/* =========================================================
   GALERIAS AMBIENTAIS
   ========================================================= */

function setupAmbientGalleries() {

  startVisualSequence(
    ".hero__media",
    IMAGE_SEQUENCES.hero,
    6200
  );


  startVisualSequence(
    ".interlude__media",
    IMAGE_SEQUENCES.interlude,
    5400
  );


  startVisualSequence(
    ".film-frame img",
    IMAGE_SEQUENCES.film,
    5000
  );


  startVisualSequence(
    ".film-modal__placeholder",
    IMAGE_SEQUENCES.film,
    5000
  );


  startVisualSequence(
    ".studio__image-wrap img",
    IMAGE_SEQUENCES.studio,
    6800
  );
}


/* =========================================================
   MODAL FILM
   ========================================================= */

function setupFilmModal() {

  const trigger =
    document.querySelector(
      ".film-frame"
    );

  const modal =
    document.getElementById(
      "filmModal"
    );


  if (
    !trigger ||
    !modal
  ) {
    return;
  }


  const close =
    modal.querySelector(
      ".film-modal__close"
    );


  trigger.addEventListener(
    "click",
    () => {

      if (
        typeof modal.showModal
        ===
        "function"
      ) {

        modal.showModal();

      } else {

        modal.setAttribute(
          "open",
          ""
        );
      }
    }
  );


  if (close) {

    close.addEventListener(
      "click",
      () => {

        if (modal.close) {
          modal.close();
        } else {
          modal.removeAttribute(
            "open"
          );
        }
      }
    );
  }


  modal.addEventListener(
    "click",
    (event) => {

      if (
        event.target === modal
      ) {

        if (modal.close) {
          modal.close();
        } else {
          modal.removeAttribute(
            "open"
          );
        }
      }
    }
  );
}


/* =========================================================
   GALLERY / INDEX
   ========================================================= */

function setupGalleryIndex() {

  const gallery =
    document.getElementById(
      "galleryView"
    );

  const index =
    document.getElementById(
      "indexView"
    );

  const list =
    document.getElementById(
      "indexList"
    );

  const preview =
    document.querySelector(
      ".index-preview"
    );

  const buttons =
    document.querySelectorAll(
      "[data-view]"
    );


  if (
    !gallery ||
    !index ||
    !list ||
    !buttons.length
  ) {
    return;
  }


  list.innerHTML =
    PROJECTS
      .map(
        (project) => `
          <div
            class="index-row"
            data-preview="${project.id - 1}"
          >

            <span class="index-row__meta">
              ${String(project.id).padStart(2, "0")}
            </span>

            <span class="index-row__title">
              ${project.name}
            </span>

            <span class="index-row__meta index-row__place">
              ${project.location}
            </span>

            <span class="index-row__meta">
              ${project.year}
            </span>

          </div>
        `
      )
      .join("");


  function setView(view) {

    const showIndex =
      view === "index";


    gallery.hidden =
      showIndex;


    index.hidden =
      !showIndex;


    buttons.forEach(
      (button) => {

        button
          .classList
          .toggle(
            "is-active",
            button.dataset.view
              ===
              view
          );
      }
    );


    if (
      typeof ScrollTrigger
      !==
      "undefined"
    ) {

      ScrollTrigger.refresh();
    }
  }


  buttons.forEach(
    (button) => {

      button.addEventListener(
        "click",
        () => {

          setView(
            button.dataset.view
          );
        }
      );
    }
  );


  if (preview) {

    const previewImage =
      preview.querySelector("img");


    list
      .querySelectorAll(
        ".index-row"
      )
      .forEach((row) => {

        row.addEventListener(
          "pointerenter",
          () => {

            const project =
              PROJECTS[
                Number(
                  row.dataset.preview
                )
              ];


            previewImage.src =
              resolveAsset(
                project.image
              );


            preview
              .classList
              .add(
                "is-visible"
              );
          }
        );


        row.addEventListener(
          "pointerleave",
          () => {

            preview
              .classList
              .remove(
                "is-visible"
              );
          }
        );
      });


    window.addEventListener(
      "pointermove",
      (event) => {

        preview.style.left =
          `${event.clientX + 10}px`;

        preview.style.top =
          `${event.clientY + 10}px`;
      },
      {
        passive: true
      }
    );
  }
}


/* =========================================================
   CONTADOR DE PROJETOS
   ========================================================= */

function setupActiveProjectCounter() {

  const current =
    document.getElementById(
      "activeProject"
    );

  const total =
    document.getElementById(
      "totalProjects"
    );

  const articles =
    document.querySelectorAll(
      "[data-project]"
    );


  if (
    !current ||
    !articles.length
  ) {
    return;
  }


  if (total) {

    total.textContent =
      String(
        PROJECTS.length
      )
      .padStart(
        2,
        "0"
      );
  }


  const observer =
    new IntersectionObserver(

      (entries) => {

        const visible =
          entries
            .filter(
              (entry) =>
                entry.isIntersecting
            )
            .sort(
              (a, b) =>
                b.intersectionRatio
                -
                a.intersectionRatio
            )[0];


        if (visible) {

          current.textContent =
            String(
              visible
                .target
                .dataset
                .project
            )
            .padStart(
              2,
              "0"
            );
        }
      },

      {
        threshold: [
          0.2,
          0.45,
          0.7
        ]
      }
    );


  articles.forEach(
    (element) => {

      observer.observe(
        element
      );
    }
  );
}


/* =========================================================
   REVELAÇÃO DAS PALAVRAS
   ========================================================= */

function splitWords(element) {

  if (
    !element ||
    element.dataset.split
      ===
      "true"
  ) {
    return;
  }


  const words =
    element
      .textContent
      .trim()
      .split(/\s+/);


  element.innerHTML =
    words
      .map(
        (word) =>
          `
          <span class="word-mask">
            <span>${word}&nbsp;</span>
          </span>
          `
      )
      .join("");


  element.dataset.split =
    "true";
}


/* =========================================================
   ANIMAÇÕES PRINCIPAIS
   ========================================================= */

function setupHomeMotion() {

  if (
    reducedMotion ||
    typeof gsap === "undefined" ||
    typeof ScrollTrigger === "undefined"
  ) {
    return;
  }


  gsap.registerPlugin(
    ScrollTrigger
  );


  /* HERO */

  gsap.from(
    ".hero-title__word",
    {
      yPercent: 110,
      rotate: 1.2,
      duration: 1.35,
      stagger: 0.08,
      ease: "expo.out",
      delay: 0.12
    }
  );


  gsap.from(
    ".hero__meta, .hero__scroll",
    {
      opacity: 0,
      y: 16,
      duration: 0.9,
      stagger: 0.08,
      delay: 0.55,
      ease: "power3.out"
    }
  );


  gsap.to(
    ".hero__media",
    {
      yPercent: 10,
      scale: 1.12,
      ease: "none",

      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    }
  );


  gsap.to(
    ".hero-title__clip--top .hero-title__word",
    {
      xPercent: -6,
      ease: "none",

      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    }
  );


  gsap.to(
    ".hero-title__clip--bottom .hero-title__word",
    {
      xPercent: 8,
      ease: "none",

      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    }
  );


  /* TEXTO */

  document
    .querySelectorAll(
      ".reveal-words"
    )
    .forEach((element) => {

      splitWords(
        element
      );


      gsap.from(
        element.querySelectorAll(
          ".word-mask > span"
        ),
        {
          yPercent: 110,
          rotate: 2,
          stagger: 0.022,
          duration: 0.75,
          ease: "expo.out",

          scrollTrigger: {
            trigger: element,
            start: "top 82%"
          }
        }
      );
    });


  /* PARALLAX */

  document
    .querySelectorAll(
      ".parallax-image"
    )
    .forEach((imageElement) => {

      const wrapper =
        imageElement.closest(
          ".project__image-wrap"
        );


      if (!wrapper) {
        return;
      }


      gsap.fromTo(
        imageElement,

        {
          yPercent: -5
        },

        {
          yPercent: 5,
          ease: "none",

          scrollTrigger: {
            trigger: wrapper,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.7
          }
        }
      );
    });


  /* CAPÍTULO HORIZONTAL */

  const chapter =
    document.querySelector(
      ".horizontal-chapter"
    );

  const track =
    document.querySelector(
      ".horizontal-chapter__track"
    );


  if (
    chapter &&
    track &&
    window.innerWidth > 900
  ) {

    const getDistance =
      () =>
        Math.max(
          0,

          track.scrollWidth
          -
          window.innerWidth
          +
          window.innerWidth
          *
          0.2
        );


    gsap.to(
      track,
      {
        x:
          () =>
            -getDistance(),

        ease: "none",

        scrollTrigger: {
          trigger: chapter,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
          invalidateOnRefresh: true
        }
      }
    );
  }


  /* INTERLÚDIO */

  const interlude =
    document.querySelector(
      ".interlude"
    );


  if (interlude) {

    gsap.to(
      ".interlude__media",
      {
        scale: 1,
        rotation: 0.6,

        clipPath:
          "polygon(0% 0%, 100% 4%, 95% 100%, 0% 92%)",

        filter:
          "grayscale(0) contrast(1.08)",

        ease: "none",

        scrollTrigger: {
          trigger: interlude,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      }
    );


    gsap.to(
      ".interlude__type span:nth-child(1)",
      {
        xPercent: -12,

        scrollTrigger: {
          trigger: interlude,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      }
    );


    gsap.to(
      ".interlude__type span:nth-child(2)",
      {
        xPercent: 16,

        scrollTrigger: {
          trigger: interlude,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      }
    );


    gsap.to(
      ".interlude__type span:nth-child(3)",
      {
        xPercent: -7,

        scrollTrigger: {
          trigger: interlude,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      }
    );
  }


  /* STUDIO */

  const studioImage =
    document.querySelector(
      ".studio__image-wrap img"
    );


  if (studioImage) {

    gsap.to(
      studioImage,
      {
        yPercent: 8,
        ease: "none",

        scrollTrigger: {
          trigger:
            ".studio__image-wrap",

          start:
            "top bottom",

          end:
            "bottom top",

          scrub:
            0.7
        }
      }
    );
  }
}


/* =========================================================
   MENU SOME AO CHEGAR NO RODAPÉ
   ========================================================= */

function setupHeaderFooterBoundary() {

  const header =
    document.querySelector(
      ".site-header"
    );

  const footer =
    document.querySelector(
      ".footer"
    );


  if (
    !header ||
    !footer
  ) {
    return;
  }


  let ticking =
    false;


  function update() {

    const footerTop =
      footer
        .getBoundingClientRect()
        .top;


    const boundary =
      header.offsetHeight;


    header
      .classList
      .toggle(
        "is-before-footer",
        footerTop <= boundary
      );


    ticking =
      false;
  }


  function requestUpdate() {

    if (ticking) {
      return;
    }


    ticking =
      true;


    requestAnimationFrame(
      update
    );
  }


  window.addEventListener(
    "scroll",
    requestUpdate,
    {
      passive: true
    }
  );


  window.addEventListener(
    "resize",
    requestUpdate
  );


  update();
}


/* =========================================================
   ESTILO AUXILIAR DAS PALAVRAS
   ========================================================= */

function addMotionUtilityStyles() {

  const style =
    document.createElement(
      "style"
    );


  style.textContent = `

    .word-mask {
      display: inline-block;
      overflow: hidden;
      vertical-align: top;
    }

    .word-mask > span {
      display: inline-block;
    }

  `;


  document.head.appendChild(
    style
  );
}


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

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


  window.addEventListener(
    "load",
    () => {

      if (
        typeof ScrollTrigger
        !==
        "undefined"
      ) {

        ScrollTrigger.refresh();
      }
    }
  );
}


/* =========================================================
   START
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  init
);