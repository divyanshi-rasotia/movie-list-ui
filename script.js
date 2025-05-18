const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Scroll buttons
prevBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -250, behavior: "smooth" });
});

nextBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: 250, behavior: "smooth" });
});

// Drag-to-scroll
let isDown = false;
let startX, scrollLeft;

carousel.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("mouseleave", () => {
  isDown = false;
});

carousel.addEventListener("mouseup", () => {
  isDown = false;
});

carousel.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2;
  carousel.scrollLeft = scrollLeft - walk;
});

// Like toggle
document.querySelectorAll('.like-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    btn.classList.toggle('liked');
  });
});