let toggleNav = document.querySelector('.page-nav__toggle');
let navMobile = document.querySelector('.page-nav--mobile');
let body = document.querySelector('body');

toggleNav.addEventListener('click', (e) => {
  toggleNav.classList.toggle('page-nav__toggle--active');
  navMobile.style.display = 'flex';
  body.style.overflow = 'hidden';

  if(toggleNav.classList.contains('page-nav__toggle--active')) {
    navMobile.style.display = 'flex';
    body.style.overflow = 'hidden';

  } else {
    navMobile.style.display = 'none';
    body.style.overflow = '';
  }
})