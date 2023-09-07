const navigationSwap = () => {
  document.addEventListener("keydown", function(event) {
    if (event.key === "1") {
      const projectsSection = document.getElementById("home");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (event.key === "2") {
      const projectsSection = document.getElementById("aboutme");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (event.key === "3") {
      const projectsSection = document.getElementById("experiences");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (event.key === "4") {
      const projectsSection = document.getElementById("skills");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (event.key === "5") {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
}
navigationSwap()

document.addEventListener('astro:after-swap', navigationSwap)