//js landing package

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const nav = document.querySelector(".nav");
const navBar = document.querySelector(".nav__bar");
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav__links a");
const logo = document.querySelector(".logo img");

function updateLogo() {
  if (window.innerWidth <= 768) {
    // Untuk tampilan mobile
    if (navLinks.classList.contains("open")) {
      logo.src = "assets/logo.png";
    }
  } else {
    // Untuk tampilan desktop
    if (window.scrollY > 50) {
      logo.src = "assets/logo.png";
    }
  }
}

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  updateLogo();
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
  updateLogo();
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }

  updateLogo();

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href").slice(1) === current) {
      item.classList.add("active");
    }
  });
});

window.addEventListener("resize", updateLogo);

// Panggil updateLogo saat halaman dimuat
updateLogo();

document.addEventListener('DOMContentLoaded', function() {
  const checkInInput = document.getElementById('check-in');
  const checkOutInput = document.getElementById('check-out');
  const checkInIcon = document.getElementById('check-in-icon');
  const checkOutIcon = document.getElementById('check-out-icon');
  const guestInput = document.getElementById('guest');
  const roomsSelect = document.getElementById('rooms');

  // Initialize Flatpickr for check-in
  const checkInPicker = flatpickr(checkInInput, {
    altInput: true,
    altFormat: "F j",
    dateFormat: "Y-m-d",
    minDate: "today",
    locale: 'id',
    theme: "dark",
    onChange: function(selectedDates, dateStr) {
      const checkInDate = selectedDates[0];
      checkOutPicker.set('minDate', new Date(checkInDate).fp_incr(1));
    }
  });

  // Initialize Flatpickr for check-out
  const checkOutPicker = flatpickr(checkOutInput, {
    altInput: true,
    altFormat: "F j",
    dateFormat: "Y-m-d",
    minDate: checkInInput.value ? new Date(checkInInput.value) : "today",
    locale: 'id',
    theme: "dark"
  });

  // Open calendar when clicking on the icon
  checkInIcon.addEventListener('click', () => checkInPicker.open());
  checkOutIcon.addEventListener('click', () => checkOutPicker.open());

  // Validate guest input
  guestInput.addEventListener('input', function() {
    if (this.value < 1) this.value = 1;
    if (this.value > 10) this.value = 10;
  });

  // Handle room selection
  roomsSelect.addEventListener('change', function() {
    console.log('Selected rooms:', this.value);
    // You can add additional logic here if needed
  });
});

function checkout() {
  const checkIn = document.getElementById('check-in').value;
  const checkOut = document.getElementById('check-out').value;
  const guests = document.getElementById('guest').value;
  const rooms = document.getElementById('rooms').value;

  if (!checkIn || !checkOut || !guests || !rooms) {
    alert("Harap isi semua field sebelum melanjutkan.");
    return;
  }

  alert("Anda belum login dengan akun anda untuk CHECK-OUT pada tanggal yang Anda inginkan. Login terlebih dahulu untuk melanjutkan.");
  window.location.href = "login/index.html";
}

// ... rest of your existing JavaScript ...

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  delay: 200,
  reset: true
};

// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".room__container .section__subheader", {
  ...scrollRevealOption,
  delay: 250,
});

ScrollReveal().reveal(".room__container .section__header", {
  ...scrollRevealOption,
  delay: 500,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  delay: 750,
  interval: 500,
});

ScrollReveal().reveal(".service__content .section__subheader", {
  ...scrollRevealOption,
  delay: 250,
  interval: 500,
  origin: "right",
});

ScrollReveal().reveal(".service__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
  interval: 1000,
  origin: "right",
});

// service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  delay: 750,
  interval: 500,
  origin: "right",
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".facilities .section__subheader", {
  ...scrollRevealOption,
  delay: 250,
});

ScrollReveal().reveal(".facilities .section__header", {
  ...scrollRevealOption,
  delay: 750,
});

// facility container: Menampilkan setiap facility-card satu per satu
ScrollReveal().reveal(".facility-card", {
  ...scrollRevealOption,
  interval: 200,
});

function chechout() {
  alert("Anda belum login dengan akun anda untuk CHECK-IN pada tanggal yang Anda inginkan, login terlebih dahulu untuk melanjutkan");
  window.location.href = "index.html";
}

function kamar() {
  alert("Anda belum login dengan akun anda untuk memilih kamar yang Anda inginkan, login terlebih dahulu untuk melakukan pemilihan kamar");
  window.location.href = "index.html";
}

function login() {
  alert("Anda belum login dengan akun anda harap login terlebih dahulu dengan akun anda");
  window.location.href = "index.html";
}

document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.testimonials-track');
  const container = document.querySelector('.testimonials-container');
  let trackWidth = 0;
  let animationSpeed = 2;
  let animationPaused = false;
  let animationFrame;

  // Clone cards and append to track for seamless loop
  const originalCards = track.innerHTML;
  track.innerHTML += originalCards;

  const cards = document.querySelectorAll('.testimonial-card');

  // Calculate total width of all cards
  cards.forEach(card => {
      trackWidth += card.offsetWidth + parseInt(getComputedStyle(card).marginRight);
  });

  // Set track width
  track.style.width = `${trackWidth}px`;

  function animate() {
      if (!animationPaused) {
          // Move the track to the left
          let currentPosition = parseFloat(getComputedStyle(track).transform.split(',')[4]) || 0;
          track.style.transform = `translateX(${currentPosition - animationSpeed}px)`;

          // Reset position when all original cards have scrolled
          if (Math.abs(currentPosition) >= trackWidth / 2) {
              track.style.transform = 'translateX(0)';
          }
      }

      animationFrame = requestAnimationFrame(animate);
  }

  // Start animation
  animate();

  // Function to center a card
  function centerCard(card) {
      const cardRect = card.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const offset = cardRect.left + cardRect.width / 2 - containerRect.left - containerRect.width / 2;
      
      let currentPosition = parseFloat(getComputedStyle(track).transform.split(',')[4]) || 0;
      track.style.transform = `translateX(${currentPosition - offset}px)`;
  }

  // Add click event listener to each card
  cards.forEach(card => {
      card.addEventListener('click', function() {
          animationPaused = true;
          centerCard(this);
          
          setTimeout(() => {
              animationPaused = false;
          }, 3000); // Resume animation after 3 seconds
      });
  });

  // Add event listener to adjust animation speed
  document.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowUp') {
          animationSpeed += 0.5;
      } else if (event.key === 'ArrowDown') {
          animationSpeed = Math.max(0.5, animationSpeed - 0.5);
      }
  });
});

function updateTrackWidth() {
  const isMobile = window.innerWidth <= 768;
  trackWidth = 0;
  cards.forEach(card => {
      trackWidth += card.offsetWidth + parseInt(getComputedStyle(card).marginRight);
  });
  if (isMobile) {
      trackWidth *= 2;  // Menggandakan lebar track untuk mode mobile
  }
  track.style.width = `${trackWidth}px`;
}

// Panggil saat halaman dimuat
updateTrackWidth();

// Tambahkan event listener untuk resize window
window.addEventListener('resize', updateTrackWidth);

// Sesuaikan fungsi animate
function animate() {
  if (!animationPaused) {
      let currentPosition = parseFloat(getComputedStyle(track).transform.split(',')[4]) || 0;
      const isMobile = window.innerWidth <= 768;
      const moveAmount = isMobile ? animationSpeed / 2 : animationSpeed;
      track.style.transform = `translateX(${currentPosition - moveAmount}px)`;

      if (Math.abs(currentPosition) >= trackWidth / 2) {
          track.style.transform = 'translateX(0)';
      }
  }
  animationFrame = requestAnimationFrame(animate);
}