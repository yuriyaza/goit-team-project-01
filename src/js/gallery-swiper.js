var swiper = new Swiper('.gallery-swiper', {
  // pagination: {
  //   el: '.swiper-pagination',
  // },
  // grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  spaceBetween: 30,
  mousewheel: true,
  autoplay: {
    delay: 5000,
  },
  loop: true,
});