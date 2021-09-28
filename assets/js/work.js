gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".right-animation").forEach(elem => {
  let tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: elem,
      },
    })
    .from(elem, { opacity: 0, duration: 1, x: -250 });
});

gsap.utils.toArray(".left-animation").forEach(elem => {
  let tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: elem,
      },
    })
    .from(elem, { opacity: 0, duration: 1, x: 250 });
});
