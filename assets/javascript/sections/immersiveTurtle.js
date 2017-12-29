import Rellax from 'rellax'
import * as lazyload from '../components/lazyLoad'
import { intersectionObserver } from '../components/intersectionObserver'

/**
 * Use rellax for content and turtle
 */
const rellax = new Rellax('.rellax')

/**
 * Intersection observer
 */
const $section = document.querySelector('.immersive')
intersectionObserver($section, () => {
  lazyload.observer.triggerLoad(document.querySelector('.immersive__turtle'))
})
