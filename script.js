document.addEventListener("DOMContentLoaded", function () {

  const sections = document.querySelectorAll(".parallax");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const offset = section.offsetTop;
      const distance = scrollY - offset;

      // subtle movement (adjust 0.05 to taste)
      section.style.transform = `translateY(${distance * 0.05}px)`;
    });
  });

});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  const sections = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.15
  });

  sections.forEach(section => observer.observe(section));
});