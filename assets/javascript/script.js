// Scroll.js
import RevealOnSroll from './scroll'
const reveal = new RevealOnSroll()
reveal.magic()
reveal.gesture()
reveal.immersive()
reveal.conception()

// Hero.js
import Hero from './hero'
const hero = new Hero()
hero.translate()
hero.accelerometer()

// Immersive.js
import Immersive from './immersive'
const immersive = new Immersive()
immersive.translate()

// Menu.js
import Menu from './menu'
const menu = new Menu()
menu.show()
menu.link()

// Landing
// import OculusAnim from './landing'
// const oculus = new OculusAnim()
// oculus.autoplayAnim()

// Slider.js
import Slider from './slider'
const slider = new Slider('.accessories__wrapper')
slider.arrows(
  '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
  '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
)
slider.touchmoves()
slider.dots()

//Loading 
import Loader from './loading'
const loadingPage = new Loader()

loadingPage.on('progress', value => {
  document.querySelector('.loading__percent').innerHTML = `${value}%`
  document.querySelector('.loading__progress--fill').style.transform = `scaleX(${value/100})`
  const caption = document.querySelector('.loading__caption')
  switch (value) {
  case 0:
    caption.innerHTML = 'Génération de l\'espace virtuel...'
    break
  case 40:
    caption.innerHTML = 'Ajout de l\'environnement et des décors'
    break
  case 80:
    caption.innerHTML = 'C\'est bientôt terminé'
    break
  case 100:
    caption.innerHTML = 'Bienvenue'
    break
  default:
    break
  }
})

loadingPage.on('complete', () => {
  const loadingEl = document.querySelector('.loading')
  setTimeout(() => {
    loadingEl.classList.add('loading--complete')
  }, 1000)
  setTimeout(() => {
    loadingEl.remove()
  }, 1400)

})
