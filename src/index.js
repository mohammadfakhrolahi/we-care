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

// Generate randome color
let rendomeBg = document.querySelectorAll('.rendome-bg')
const colorList = ['#E4C1F9', '#FF99C8', '#FCF6BD', '#A9DEF9', '#A1FCDF', '#ffcfd2', '#8eecf5', '#ffccd5']

const getRandomColor = () => {
  const getColor = colorList[Math.floor(Math.random() * colorList.length)]
  return getColor
}

const bgColor = getRandomColor()

rendomeBg.forEach((item) => {
  item.style.background = getRandomColor()
})