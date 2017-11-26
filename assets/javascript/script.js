// Slider.js
// import SwiperSlider from './slider'
// const slider = new SwiperSlider()
// slider.init()

// Scroll.js
import RevealOnSroll from './scroll'
const reveal = new RevealOnSroll()
reveal.magic()
reveal.gesture()

// Hero.js
import Hero from './hero'
const hero = new Hero()
hero.translate()
hero.accelerometer()

// Landing
import OculusAnim from './landing'
const oculus = new OculusAnim()
oculus.anim()

// Aframe
require('./set-image')

//Loading 
import Loader from './loading';
const loadingPage = new Loader();

loadingPage.on('progress', value => {
  document.querySelector('.loading__percent').innerHTML = `${value}%`
  document.querySelector('.loading__progress--fill').style.transform = `scaleX(${value/100})`
  const caption = document.querySelector('.loading__caption')
  switch (value) {
  case 0:
    caption.innerHTML = `Génération de l'espace virtuel...`
    break;
  case 40:
    caption.innerHTML = `Ajout de l'environnement et des décors`
    break;
  case 80:
    caption.innerHTML = `C'est bientôt terminé`
    break;
  case 100:
  caption.innerHTML = `Bienvenue`
  break;
  default:
    break;
}
})

loadingPage.on('complete', () => {
  const loadingEl = document.querySelector('.loading')
  setTimeout(() => {
    loadingEl.classList.add('loading--complete')
  }, 1000)
  setTimeout(() => {
    loadingEl.remove()
  }, 3000)
  
})