

let isActive = false;
function toggle() {
  if (isActive) {
    //disable active
    document.querySelector('.hamburger').className = 'hamburger';
    document.querySelector('.shadow').className = 'shadow';
    document.querySelector('.mobileNav').className = 'mobileNav';
    isActive = false;
  } else {
    //activate
    document.querySelector('.hamburger').className = 'hamburger active';
    document.querySelector('.shadow').className = 'shadow active';
    document.querySelector('.mobileNav').className = 'mobileNav active';
    isActive = true;
  }
}