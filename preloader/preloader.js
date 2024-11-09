function showPreloader() {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "flex";
  preloader.classList.remove("slide-up");
}

function hidePreloader() {
  const preloader = document.getElementById("preloader");
  preloader.classList.add("slide-up");
  setTimeout(function() {
    preloader.style.display = "none";
  }, 2000);  // Delay untuk animasi slide-up
}

// Fungsi untuk memeriksa apakah suatu URL adalah tautan internal
function isInternalLink(url) {
  return url.startsWith('#') || url === '';
}

// Event listener untuk menangani klik pada tautan
document.addEventListener('click', function(event) {
  const target = event.target.closest('a');
  if (target && isInternalLink(target.getAttribute('href'))) {
    // Jika ini adalah tautan internal, jangan tampilkan preloader
    event.preventDefault();
    const targetId = target.getAttribute('href').slice(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
});

// Menyembunyikan preloader setelah seluruh halaman beserta sumber daya selesai dimuat
window.addEventListener('load', function() {
  hidePreloader();
});

// Menangani navigasi browser (back/forward)
window.onpopstate = function() {
  if (!isInternalLink(window.location.hash)) {
    showPreloader();
    hidePreloader();
  }
};

// Menampilkan preloader jika ada cache persisten
window.onpageshow = function(event) {
  if (event.persisted && !isInternalLink(window.location.hash)) {
    showPreloader();
    hidePreloader();
  }
};
