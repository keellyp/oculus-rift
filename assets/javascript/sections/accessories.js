import Slider from '../components/slider'
import { intersectionObserver } from '../components/intersectionObserver'
import * as lazyload from '../components/lazyLoad'

/**
 * Slider
 */
const slider = new Slider('.accessories__wrapper')
slider.arrows(
  `<img src='img/icon_back.svg' alt='Back' class='arrow arrow-left'>`,
  `<img src='img/icon_next.svg' alt='Next' class='arrow arrow-right'>`
)
slider.touchmoves()
slider.dots()

/**
 * Intersection Observer
 */
intersectionObserver(document.querySelector('.accessories'), () => {
  lazyload.observer.triggerLoad(document.querySelector('.accessories__img img'))
})
