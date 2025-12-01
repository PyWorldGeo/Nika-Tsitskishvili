fetch("base.html")
.then(r => r.text())
.then(html => {
    document.getElementById("shared-background").innerHTML = html;

    // Re-initialize seasonal background after HTML is inserted
    if (typeof initSeasons === "function") {
        initSeasons();
    }

    // 🔥 Navbar toggle MUST be initialized after base.html loads
    const navToggle = document.getElementById("navToggle");
    const navLinks  = document.getElementById("navLinks");

    if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
            navLinks.classList.toggle("show");
        });
    } else {
        console.warn("Navbar elements not found: #navToggle or #navLinks");
    }
});
document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
        navLinks.classList.remove("show");
    }
});
