const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

tl.to('.title', { duration: 4, opacity: 1, stagger: { each: 1, from: 'start' } });
tl.to('.arrow.down', { duration: 2, opacity: 1 }, '-=1.5');