document.addEventListener("DOMContentLoaded", () => {
  const navHTML = `
    <nav class="navbar">
      <div class="logo">Ethan Sheridan-Smith</div>
      <button class="nav-toggle" aria-label="toggle navigation">
        <span class="hamburger"></span>
      </button>
      <ul class="nav-links">
        <li><a href="index.html"><i class="fas fa-house"></i> Home</a></li>
        <li><a href="projects.html"><i class="fas fa-folder-open"></i> Projects</a></li>
        <li><a href="resume.html"><i class="fas fa-file-lines"></i> Resume</a></li>
        <li><a href="about.html"><i class="fas fa-user"></i> About</a></li>
      </ul>
    </nav>
  `;

  const header = document.querySelector("header");
  if (header) header.innerHTML = navHTML;

  const toggleBtn = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");

  toggleBtn?.addEventListener("click", () => {
    navLinks?.classList.toggle("open");
    hamburger?.classList.toggle("is-active");
  });

  // Close menu on nav link click (mobile)
  navLinks?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      hamburger?.classList.remove("is-active");
    });
  });
});