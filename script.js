// Navbar Scroll Effect
window.addEventListener("scroll", function () {
  const nav = document.querySelector(".nav-bar");

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Sliding Changing Text Effect
const textArray = [
  "AI as a Partner for Humanity",
  "AI as Green Intelligence for the Planet",
  "AI as a Global Engine for Progress",
  "AI for Healthcare, Education & Safety",
  "Building Ethical and Responsible AI"
];

let index = 0;
const changingText = document.getElementById("changingText");

function changeText() {
  changingText.style.opacity = 0;

  setTimeout(() => {
    changingText.textContent = textArray[index];
    changingText.style.opacity = 1;
    index = (index + 1) % textArray.length;
  }, 500);
}

if (changingText) {
  setInterval(changeText, 2500);
  changeText();
}

// ===============================
// Impact Counter Animation
// ===============================
const counters = document.querySelectorAll(".counter");

function startCounting() {
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const updateCount = () => {
      const increment = target / 100;

      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
}

// Run counter only once
let counted = false;

window.addEventListener("scroll", () => {
  const statsSection = document.querySelector(".impact-stats");

  if (!counted && statsSection.getBoundingClientRect().top < window.innerHeight) {
    startCounting();
    counted = true;
  }
});

// ===============================
// Back To Top Button
// ===============================
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (topBtn) {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
  }
});

if (topBtn) {
  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ===============================
// Filter Solution Cards
// ===============================
function filterCards(category) {
  const cards = document.querySelectorAll(".menu-lists");

  cards.forEach(card => {
    const cardCategory = card.getAttribute("data-category");

    card.style.display =
      category === "all" || cardCategory === category ? "flex" : "none";
  });
}
// ===============================
// FAQ Accordion Feature
// ===============================
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    // Close other open FAQs
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    // Toggle current FAQ
    item.classList.toggle("active");
  });
});
// ===============================
// Testimonial Slider
// ===============================

const testimonials = document.querySelectorAll(".testimonial");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentSlide = 0;

// Function to show slide
function showSlide(index) {
  testimonials.forEach((slide) => {
    slide.classList.remove("active");
  });

  testimonials[index].classList.add("active");
}

// Next Button Click
nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % testimonials.length;
  showSlide(currentSlide);
});

// Previous Button Click
prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
  showSlide(currentSlide);
});

// Auto Slide Change Every 5 Seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % testimonials.length;
  showSlide(currentSlide);
}, 5000);
// ===============================
// Gallery Lightbox Popup
// ===============================

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

// Open Lightbox
galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

// Close Lightbox
closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Close when clicking outside image
lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = "none";
  }
});


