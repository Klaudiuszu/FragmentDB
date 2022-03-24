//---------navbar
//selectors
const navbarSection = document.querySelector('.navbar-section');
const clickedHamburgerElement = document.querySelector('#hamburger-icon');


function toggleMobileMenu(menu){
  menu.classList.toggle('open');
  console.log(menu)
  if(menu.className == "open"){
    navbarSection.style.height = "220px";
  } else navbarSection.style.height = "100px";
}