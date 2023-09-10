const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("menu-btn");
const exitBtn = document.getElementById("close-menu-btn");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("open-nav");
  navMenu.setAttribute("aria-expanded", true);
});

exitBtn.addEventListener("click", () => {
  navMenu.classList.remove("open-nav");
  navMenu.setAttribute("aria-expanded", false);
});

gsap.from(".featured-cabins li", {
  duration: 1,
  y: -15,
  x: -50,
  stagger: {
    amount: 0.5,
    each: 0.5,
    from: "start",
  },
});
