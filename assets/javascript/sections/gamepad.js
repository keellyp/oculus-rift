import Move from '../components/move'
import { intersectionObserver } from '../components/intersectionObserver'
import * as Scrolling from '../components/revealOnScroll'
import * as lazyload from '../components/lazyLoad'

/**
 * Move elements on mousemove event
 */
const leftPad = new Move('.gesture__images--left')
const rightPad = new Move('.gesture__images--right')
leftPad.rotate(5)
rightPad.rotate(5)

/**
 * Scroll reveal animations
 */
sr.reveal('.gesture__content', Scrolling.reveal.opacity)

/**
 * Intersection observer
 */
intersectionObserver(document.querySelector('.gesture'), () => {
  lazyload.observer.triggerLoad(document.querySelector('.gesture__images img'))
})
