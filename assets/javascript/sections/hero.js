import {intersectionObserver} from '../components/intersectionObserver'
import Reveal from '../components/scrolling'
import Move from '../components/move'

const $heroImages = document.querySelector('.hero__images')
intersectionObserver($heroImages, () => {
  sr.reveal('.animation-opacity', Reveal.opacity)
})

const moveHero = new Move('.hero__image--background')
moveHero.translate(5)