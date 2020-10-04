window.onload = function() {
  let ham = document.querySelector(".hamburger");

  function toggleHamburger() {
    ham.classList.toggle("is-active")
  }

  ham.addEventListener("click", toggleHamburger);
  ham.addEventListener("click", toggleNav);
  window.addEventListener("resize", resetMobileMenu);
  
  function resetMobileMenu() {
    if (document.documentElement.clientWidth >= 1024) {
      hideNav();
      ham.classList.remove("is-active")
    }
  }

  function toggleNav() {
    ham.classList.contains("is-active") ? showNav() : hideNav();
  }

  function showNav() {
    document.getElementById("nav_mobile").style = 'display: flex';
    document.querySelectorAll('.main_wrapper div:not(:first-child)').forEach(el => el.style = 'display: none')
    document.getElementById("footer").style  = 'display: none';
    document.querySelector('header').style = 'display: none';
  }

  function hideNav() {
    document.getElementById("nav_mobile").style = 'display: none';
    document.querySelectorAll('.main_wrapper div:not(:first-child)').forEach(el => el.style = 'display: block')
    document.getElementById("footer").style  = 'display: block';
    document.querySelector('header').style = 'display: block';
  }
}

