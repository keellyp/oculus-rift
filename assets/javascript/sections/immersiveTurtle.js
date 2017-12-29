import Rellax from 'rellax'
import * as lazyload from '../components/lazyLoad'
import { intersectionObserver } from '../components/intersectionObserver'

const rellax = new Rellax('.rellax')

const $section = document.querySelector('.immersive')

intersectionObserver($section, () => {
  lazyload.observer.triggerLoad(document.querySelector('.immersive__turtle'))
})
