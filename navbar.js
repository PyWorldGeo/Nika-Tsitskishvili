
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navLinks  = document.getElementById("navLinks");

  if (!navToggle) {
    console.warn("navToggle button not found (id='navToggle'). Check your HTML.");
    return;
  }
  if (!navLinks) {
    console.warn("navLinks container not found (id='navLinks'). Check your HTML.");
    return;
  }

  // Accessibility
  navToggle.setAttribute("aria-controls", "navLinks");
  if (!navToggle.hasAttribute("aria-expanded")) navToggle.setAttribute("aria-expanded", "false");

  function openMenu() {
    navLinks.classList.add("show");
    navToggle.setAttribute("aria-expanded", "true");
    // prevent background from stealing clicks on mobile
    document.body.classList.add("nav-open");
  }
  function closeMenu() {
    navLinks.classList.remove("show");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  }
  function toggleMenu() {
    if (navLinks.classList.contains("show")) closeMenu();
    else openMenu();
  }

  navToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // close when clicking outside the menu (mobile)
  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
      closeMenu();
    }
  });

  // close on Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // optional: close menu when a link is clicked (mobile)
  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => closeMenu());
  });
});

