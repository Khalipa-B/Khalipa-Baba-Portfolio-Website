// Mobile menu toggle
document.querySelectorAll(".mobile-menu-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const navLinks = btn.parentElement.querySelector(".nav-links");
    navLinks.classList.toggle("active");
  });
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    link.closest(".nav-links").classList.remove("active");
  });
});

// Form submission
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    this.reset();
  });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Header shadow on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.style.boxShadow =
    window.scrollY > 50
      ? "0 4px 10px rgba(0,0,0,0.1)"
      : "0 4px 6px rgba(0,0,0,0.1)";
});