import {intersectionObserver} from '../components/intersectionObserver'
import Reveal from '../components/scrolling'

intersectionObserver(document.querySelector('.magic__image'), () => {
  console.log('ok')
  sr.reveal('.animation-top', Reveal.top)
})