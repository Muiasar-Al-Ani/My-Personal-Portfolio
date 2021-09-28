gsap.from(".elem-1", { opacity: 0, duration: 1, x: -50, stagger: 0.6 });
gsap.from(".my-image", { opacity: 0, duration: 2, x: 50, stagger: 0.6 });
gsap.registerPlugin(ScrollTrigger);

gsap.to(".html", {
  scrollTrigger: {
    trigger: ".html",
    toggleActions: "play none none none",
  },
  width: "100%",
  duration: 3,
});

gsap.to(".css", {
  scrollTrigger: {
    trigger: ".css",
    toggleActions: "play none none none",
  },
  width: "95%",
  duration: 3,
});

gsap.to(".js", {
  scrollTrigger: {
    trigger: ".js",
    toggleActions: "play none none none",
  },
  width: "95%",
  duration: 3,
});

gsap.to(".react", {
  scrollTrigger: {
    trigger: ".react",
    toggleActions: "play none none none",
  },
  width: "95%",
  duration: 3,
});

gsap.to(".jquery", {
  scrollTrigger: {
    trigger: ".jquery",
    toggleActions: "play none none none",
  },
  width: "90%",
  duration: 3,
});

gsap.to(".node", {
  scrollTrigger: {
    trigger: ".node",
    toggleActions: "play none none none",
  },
  width: "90%",
  duration: 3,
});

gsap.to(".express", {
  scrollTrigger: {
    trigger: ".express",
    toggleActions: "play none none none",
  },
  width: "90%",
  duration: 3,
});

gsap.to(".sql", {
  scrollTrigger: {
    trigger: ".sql",
    toggleActions: "play none none none",
  },
  width: "90%",
  duration: 3,
});

gsap.to(".mysql", {
  scrollTrigger: {
    trigger: ".mysql",
    toggleActions: "play none none none",
  },
  width: "90%",
  duration: 3,
});

gsap.to(".git", {
  scrollTrigger: {
    trigger: ".git",
    toggleActions: "play none none none",
  },
  width: "90%",
  duration: 3,
});

gsap.to(".mongo", {
  scrollTrigger: {
    trigger: ".mongo",
    toggleActions: "play none none none",
  },
  width: "80%",
  duration: 3,
});

gsap.to(".boot", {
  scrollTrigger: {
    trigger: ".boot",
    toggleActions: "play none none none",
  },
  width: "90%",
  duration: 3,
});

gsap.to(".mater", {
  scrollTrigger: {
    trigger: ".mater",
    toggleActions: "play none none none",
  },
  width: "85%",
  duration: 3,
});

gsap.to(".vue", {
  scrollTrigger: {
    trigger: ".vue",
    toggleActions: "play none none none",
  },
  width: "70%",
  duration: 3,
});

gsap.to(".php", {
  scrollTrigger: {
    trigger: ".php",
    toggleActions: "play none none none",
  },
  width: "70%",
  duration: 3,
});
