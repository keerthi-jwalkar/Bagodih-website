// Image Slideshow
const images = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg"];
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change every 3 seconds
}

showSlides();

// Google Sheets Form Submission
const form = document.getElementById("contact-form");
form.addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(form);
  fetch("https://script.google.com/macros/s/AKfycby82BaWH7pOAHzz0tBEhU83e7GqlS2ef-Pccfu-vfLURPj9dHQD8ZIoUvatXMqTlUzV/exec", {
    method: "POST",
    body: data
  })
  .then(res => res.text())
  .then(txt => {
    document.getElementById("response").innerText = "Thank you! Message sent.";
    form.reset();
  });
});