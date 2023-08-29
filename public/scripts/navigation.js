document.addEventListener("keydown", function(event) {
  if (event.key === "h") {
    const projectsSection = document.getElementById("home");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  if (event.key === "a") {
    const projectsSection = document.getElementById("aboutme");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  if (event.key === "e") {
    const projectsSection = document.getElementById("experiences");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  if (event.key === "s") {
    const projectsSection = document.getElementById("skills");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  if (event.key === "p") {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  }
});
