function toggleMenu() {
  const overlay = document.getElementById('menuOverlay');
  overlay.classList.toggle('active');
}

  
  

  
const container = document.getElementById("carouselContainer");
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;
let index = 0;

document.getElementById("nextBtn").addEventListener("click", () => {
  index = (index + 1) % totalSlides;
  container.style.transform = `translateX(-${index * 100}%)`;
});

document.getElementById("prevBtn").addEventListener("click", () => {
  index = (index - 1 + totalSlides) % totalSlides;
  container.style.transform = `translateX(-${index * 100}%)`;
});

  

document.getElementById("subscribe-form").addEventListener("submit", function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(() => {
    location.reload();
  }, 800);
});


function validateForm() {
  const phone = document.getElementById('phone').value;
  const phoneError = document.getElementById('phoneError');
  const phonePattern = /^\+?\d{1,4}[\s\-]?\(?\d{1,3}?\)?[\s\-]?\d{1,3}[\s\-]?\d{1,4}$/;
  if (!phonePattern.test(phone)) {
    phoneError.textContent = 'Please enter a valid phone number.';
    return false;
  } else {
    phoneError.textContent = '';
  }

  const email = document.getElementById('email').value;
  const emailError = document.getElementById('emailError');
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = 'Please enter a valid email address.';
    return false;
  } else {
    emailError.textContent = '';
  }

  return true;
}

  

  