/**
 * Burger menu
 */

class Menu {
  show() {
    const burgerButton = document.querySelector('.burger__button')
    const burgerMenu = document.querySelector('.menu__burger')
    const burgerLinks = document.querySelectorAll('.menu__link')
    let isShown = false

    burgerButton.addEventListener('mousedown', () => {
      let translate 
      let buttonSrc
      !isShown ? translate = `translateY(0%)` : translate = `translateY(-120%)`
      !isShown ? buttonSrc = `img/icon_cancel.svg` : buttonSrc = `img/icon-bugermenu.svg`
      burgerMenu.style.transform = translate
      burgerButton.src = buttonSrc
      isShown = !isShown
    }, false)

    burgerLinks.forEach( burgerLink => {
      burgerLink.addEventListener('click', () => {
        burgerMenu.style.transform = `translateY(-120%)`
        burgerButton.src = `img/icon-bugermenu.svg`
        isShown = false
      })
    }, false) 
  }
}

const menu = new Menu()
menu.show()
