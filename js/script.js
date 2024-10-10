document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');
  const pathname = window.location.pathname;
  let section;
  let sectionPosition;

  if (pathname.includes('index.html') || pathname === '/') {
      section = document.getElementById('sejarah-desa');
  } else if (pathname.includes('pemerintah.html')) {
      section = document.getElementById('struktur-pemerintahan');
  } else if (pathname.includes('produkdesa.html')){
    section = document.getElementById('produk-desa')
  } else if (pathname.includes('potensidesa.html')) {
    section = document.getElementById('potensi-desa')
  }

  if (section) {
      window.addEventListener('scroll', function () {
          sectionPosition = section.offsetTop;
          const scrollPosition = window.scrollY;

          if (scrollPosition >= sectionPosition) {
              navbar.classList.add('scrolled');
          } else {
              navbar.classList.remove('scrolled');
          }
      });
  }
});

document.querySelector('.toggle-link').addEventListener('click', function() {
  this.parentElement.classList.toggle('active');
});

const dropdownHeaders = document.querySelectorAll('.dropdown-header');

dropdownHeaders.forEach ( header => {
  header.addEventListener('click', function () {
    const dropdownContent = this.nextElementSibling;
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block'
  })
})

const navbarLinks = document.querySelector('.navbar-links');
const burgerIcon = document.querySelector('.burger-icon');

function toggleMenu() {
  navbarLinks.classList.toggle('active');
  burgerIcon.classList.toggle('active');
}


function closeMenu() {
  burgerIcon.classList.remove('active');
  navbarLinks.classList.remove('active');
}

burgerIcon.addEventListener('click', toggleMenu);

window.addEventListener('scroll', function() {
  if (burgerIcon.classList.contains('active')) {
    closeMenu();
  }
});
