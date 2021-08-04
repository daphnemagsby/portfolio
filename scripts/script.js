const toggleButton = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav');

/*toggle hamburger menu and nav links*/
toggleButton.addEventListener('click', function(){
  toggleButton.classList.toggle('is-active');
  navLinks.classList.toggle('active');
})