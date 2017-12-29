import { intersectionObserver } from '../components/intersectionObserver'
import * as Scrolling from '../components/revealOnScroll'

const $section = document.querySelector('.magic')

sr.reveal('.magic__image', Scrolling.reveal.top);
sr.reveal('.magic__content', Scrolling.reveal.opacity);
