gsap.registerPlugin(ScrollTrigger);

// Hero
const tlHero = gsap.timeline();

tlHero.from(".hero-info h4", {
  y: 60,
  opacity: 0,
  duration: 0.5,
  ease: "power3.out",
});

tlHero.from(".hero-info h1", {
  y: 60,
  opacity: 0,
  duration: 0.4,
  ease: "power3.out",
});

tlHero.from(".hero-info p", {
  y: 60,
  opacity: 0,
  duration: 0.4,
  ease: "power3.out",
});

tlHero.from(".hero-info a", {
  y: 60,
  opacity: 0,
  duration: 0.4,
  ease: "power3.out",
});

tlHero.from(".hero-img img", {
  x: 30,
  opacity: 0,
  duration: 0.2,
  ease: "power1.out",
});

// Nosso impacto
gsap.from(".titulo-cards", {
  scrollTrigger: {
    trigger: ".section-cards",
    start: "top 90%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  y: 60,
  opacity: 0,
  duration: 0.6,
  ease: "power3.out",
});

gsap.from(".card", {
  scrollTrigger: {
    trigger: ".cards",
    start: "top 80%",
    toggleActions: "restart none none none",
  },
  y: 60,
  opacity: 0,
  duration: 0.6,
  ease: "power2.out",
  stagger: 0.9,
});

// Nossos cartões
const tlCartoes = gsap.timeline({
  scrollTrigger: {
    trigger: ".nossos-cartoes-info",
    start: "top 85%",
    toggleActions: "play none none reverse",
  },
});

tlCartoes.from(".nossos-cartoes-info h4", {
  y: 60,
  opacity: 0,
  duration: 0.5,
  ease: "power3.out",
});

tlCartoes.from(".nossos-cartoes-info h1", {
  y: 60,
  opacity: 0,
  duration: 0.4,
  ease: "power3.out",
});

tlCartoes.from(".nossos-cartoes-info p", {
  y: 60,
  opacity: 0,
  duration: 0.4,
  ease: "power3.out",
});

tlCartoes.from(".nossos-cartoes-info a", {
  y: 60,
  opacity: 0,
  duration: 0.4,
  ease: "power3.out",
});

gsap.from(".nossos-cartoes-img img", {
  scrollTrigger: {
    trigger: ".nossos-cartoes-img",
    start: "top 85%",
    toggleActions: "play none none reverse",
  },
  x: 30,
  opacity: 0,
  duration: 0.2,
  ease: "power1.out",
});

// Benefícios
gsap.from(".beneficios", {
  scrollTrigger: {
    trigger: ".section-beneficios",
    start: "top 85%",
    toggleActions: "restart none none none",
  },
  y: 60,
  opacity: 0,
  duration: 0.6,
  ease: "power2.out",
  stagger: 0.9,
});

// App
const tlApp = gsap.timeline({
  scrollTrigger: {
    trigger: ".app-info",
    start: "top 85%",
    toggleActions: "play none none reverse",
  },
});

tlApp.from(".app-info h4", {
  y: 60,
  opacity: 0,
  duration: 0.5,
  ease: "power3.out",
});

tlApp.from(".app-info h1", {
  y: 60,
  opacity: 0,
  duration: 0.4,
  ease: "power3.out",
});

tlApp.from(".app-info p", {
  y: 60,
  opacity: 0,
  duration: 0.4,
  ease: "power3.out",
});

tlApp.from(".app-info a", {
  y: 60,
  opacity: 0,
  duration: 0.4,
  ease: "power3.out",
});

gsap.from(".app-img img", {
  scrollTrigger: {
    trigger: ".app-img",
    start: "top 85%",
    toggleActions: "play none none reverse",
  },
  x: -30,
  opacity: 0,
  duration: 0.6,
  ease: "power2.out",
});

// Seção final
const tlFinal = gsap.timeline({
  scrollTrigger: {
    trigger: ".final-info",
    start: "top 85%",
    toggleActions: "play none none reverse",
  },
});

tlFinal.from(".final-info h4", {
  y: 60,
  opacity: 0,
  duration: 0.5,
  ease: "power3.out",
});

tlFinal.from(".final-info h1", {
  y: 60,
  opacity: 0,
  duration: 0.4,
  ease: "power3.out",
});

tlFinal.from(".final-info p", {
  y: 60,
  opacity: 0,
  duration: 0.4,
  ease: "power3.out",
});

tlFinal.from(".final-info a", {
  y: 60,
  opacity: 0,
  duration: 0.4,
  ease: "power3.out",
});

gsap.from(".final-img img", {
  scrollTrigger: {
    trigger: ".final-img",
    start: "top 85%",
    toggleActions: "play none none reverse",
  },
  x: 30,
  opacity: 0,
  duration: 0.6,
  ease: "power2.out",
});

// Footer
gsap.from(".footer > div", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 95%",
    toggleActions: "play none none reverse",
  },
  y: 24,
  opacity: 0,
  duration: 0.6,
  stagger: 0.15,
  ease: "power2.out",
});

// Recalcula os gatilhos depois de carregar imagens e fontes.
window.addEventListener("load", () => ScrollTrigger.refresh());
document.fonts.ready.then(() => ScrollTrigger.refresh());
