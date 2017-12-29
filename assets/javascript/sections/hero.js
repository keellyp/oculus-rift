import { intersectionObserver } from '../components/intersectionObserver'
import * as Scrolling from '../components/revealOnScroll'
import Move from '../components/move'

const moveHero = new Move('.hero__image--background')
moveHero.translate(5)

const $section = document.querySelector('.hero')
const $sectionTitle = document.querySelector('.hero__content')

intersectionObserver($section, () => {
  sr.reveal($section, Scrolling.reveal.opacity)
})
