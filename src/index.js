const header = document.querySelector('#header')

// Change header style when scroll down
window.addEventListener('scroll', () => {
  let scrollD = window.scrollY
  if (scrollD >= 1) {
    header.classList.add('header-bg')
  } else {
    header.classList.remove('header-bg')
  }
})