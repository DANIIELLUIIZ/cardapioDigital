// =============== declarations ===============\\
const menuBtn = document.querySelector('#menu-btn')
const cartBtn = document.querySelector('#cart-btn')
const asideMenu = document.querySelector('.aside-menu')
const mainSection = document.querySelector('.main-section')
const foodContainer = document.querySelector('.food-container')
const foodTitle = document.querySelector('.title-item')
const description = document.querySelector('.description')

// =============== Functions ===============\\

function showMenuList(e) {
  const allFoods = document.querySelectorAll('.food-container')

  allFoods.forEach(item => {
    const parentEl = item.children[1]
    if (item === e.target) {
      parentEl.classList.toggle('hide')
    } else {
      parentEl.classList.add('hide')
      item.classList.toggle('hide')
    }
  })
}
function returnMenuList() {
  const allList = document.querySelectorAll('.food-list')

  allList.forEach(item => {
    if (!item.classList.contains('hide')) {
      item.classList.add('hide')
    }
  })
}
function returMenuOptions() {
  const allOptions = document.querySelectorAll('.food-container')

  allOptions.forEach(item => {
    if (item.classList.contains('hide')) {
      item.classList.remove('hide')
    }
  })
}
function selectItem(e) {
  const title = e.target
  foodTitle.innerHTML = title.innerHTML
}
// function changeBG(e) {
//   const element = e.target
//   const parentEl = element.children[0]
//   console.log(parentEl)
// }
// =============== Events ===============\\

menuBtn.addEventListener('click', () => {
  asideMenu.classList.toggle('hide')
  mainSection.classList.toggle('hide')
  returnMenuList()
  returMenuOptions()
})

asideMenu.addEventListener('click', e => {
  const element = e.target
  if (element.classList.contains('food-container')) {
    showMenuList(e)
    // changeBG(e)

    foodTitle.innerHTML = ''
  }
  if (element.classList.contains('item-food')) {
    selectItem(e)
  }
})
