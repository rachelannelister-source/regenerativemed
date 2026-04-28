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