// Import
import Menu from './components/menu'
import Slider from './components/slider'
import Move from './components/move'

// Menu.js
const menu = new Menu()
menu.show()

// Slider.js
const slider = new Slider('.accessories__wrapper')
slider.arrows(
  `<img src='img/icon_back.svg' alt='Back' class='arrow arrow-left'>`,
  `<img src='img/icon_next.svg' alt='Next' class='arrow arrow-right'>`
)
slider.touchmoves()
slider.dots()

// Hero.js
const moveHero = new Move('.hero__image--eyes')
moveHero.translate()

// // Scroll.js
// // import RevealOnSroll from './scroll'
// const reveal = new RevealOnSroll()
// reveal.magic()
// reveal.gesture()
// reveal.conception()

// // Immersive.js
// import Immersive from './immersive'
// const immersive = new Immersive()
// immersive.translate()

// // Landing
// import OculusAnim from './landing'
// const oculus = new OculusAnim()
// oculus.autoplayAnim()

// //Loading 
// import Loader from './loading'
// const loadingPage = new Loader()

// loadingPage.on('progress', value => {
//   document.querySelector('.loading__percent').innerHTML = `${value}%`
//   document.querySelector('.loading__progress--fill').style.transform = `scaleX(${value/100})`
//   const caption = document.querySelector('.loading__caption')
//   switch (value) {
//   case 0:
//     caption.innerHTML = 'Génération de l\'espace virtuel...'
//     break
//   case 40:
//     caption.innerHTML = 'Ajout de l\'environnement et des décors'
//     break
//   case 80:
//     caption.innerHTML = 'C\'est bientôt terminé'
//     break
//   case 100:
//     caption.innerHTML = 'Bienvenue'
//     break
//   default:
//     break
//   }
// })

// loadingPage.on('complete', () => {
//   const loadingEl = document.querySelector('.loading')
//   setTimeout(() => {
//     loadingEl.classList.add('loading--complete')
//   }, 1000)
//   setTimeout(() => {
//     loadingEl.remove()
//   }, 1400)

// })
