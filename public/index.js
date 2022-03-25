//---------navbar
//selectors
const navbarSection = document.querySelector('.navbar-section');
const clickedHamburgerElement = document.querySelector("a");


function toggleMobileMenu(menu){
  menu.classList.toggle('open');
  console.log(menu)
  if(menu.className == "open"){
    navbarSection.style.height = "220px";
    clickedHamburgerElement.style.transition = "all 5s"
  } else navbarSection.style.height = "100px";
}