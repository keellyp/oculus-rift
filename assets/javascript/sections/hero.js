import { intersectionObserver } from '../components/intersectionObserver'
import Move from '../components/move'
import * as Scrolling from '../components/revealOnScroll'
import * as lazyload from '../components/lazyLoad'

/**
 * Allows to translate background on mouse move
 */
const moveHero = new Move('.hero__images--background')
moveHero.translate(5)

/**
 * Intersection observer 
 */
const $section = document.querySelector('.hero')
intersectionObserver($section, () => {
  sr.reveal(document.querySelector('.hero__content'), Scrolling.reveal.opacity)
  lazyload.observer.triggerLoad(document.querySelector('.hero__images--eyes'))
})
