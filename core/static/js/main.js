document.addEventListener("DOMContentLoaded", () => {
  // === Mobile menu toggle ===
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // === Navbar background, blur, and shadow on scroll ===
  const navbar = document.querySelector("header");

  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add(
          "bg-gray-900",
          "bg-opacity-95",
          "shadow-xl",
          "backdrop-blur-lg"
        );
        navbar.classList.remove(
          "bg-opacity-40",
          "backdrop-blur-md",
          "shadow-none"
        );
      } else {
        navbar.classList.remove(
          "bg-opacity-95",
          "shadow-xl",
          "backdrop-blur-lg"
        );
        navbar.classList.add(
          "bg-opacity-40",
          "backdrop-blur-md",
          "shadow-none"
        );
      }
    });
  }

  // === Hero slider functionality ===
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let current = 0;

  if (slides.length && dots.length) {
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? "1" : "0";
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle("opacity-100", i === index);
        dot.classList.toggle("opacity-50", i !== index);
      });
    }

    function nextSlide() {
      current = (current + 1) % slides.length;
      showSlide(current);
    }

    // Auto slide every 5s
    setInterval(nextSlide, 5000);

    // Dots click
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        current = index;
        showSlide(current);
      });
    });

    // Initialize
    showSlide(current);
  }

  // === "See More" functionality ===
  const seeMoreBtn = document.getElementById("seeMoreBtn");
  const moreServices = document.getElementById("moreServices");

  if (seeMoreBtn && moreServices) {
    seeMoreBtn.addEventListener("click", () => {
      moreServices.classList.toggle("hidden");
      seeMoreBtn.textContent = moreServices.classList.contains("hidden")
        ? "See More"
        : "See Less";
    });
  }
});
