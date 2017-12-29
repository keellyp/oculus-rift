import Move from '../components/move'
import { intersectionObserver } from '../components/intersectionObserver'
import * as Scrolling from '../components/revealOnScroll'
import * as lazyload from '../components/lazyLoad'

const leftPad = new Move('.gesture__images--left')
const rightPad = new Move('.gesture__images--right')
leftPad.rotate(6)
rightPad.rotate(6)

sr.reveal('.gesture__content', Scrolling.reveal.opacity);
sr.reveal('.gesture__images--left', Scrolling.reveal.left);
sr.reveal('.gesture__images--right', Scrolling.reveal.right);

intersectionObserver(document.querySelector('.gesture'), () => {
  lazyload.observer.triggerLoad(document.querySelector('.gesture__images img'))
})
