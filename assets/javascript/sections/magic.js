import { intersectionObserver } from '../components/intersectionObserver'
import * as Scrolling from '../components/revealOnScroll'
import * as lazyload from '../components/lazyLoad'

sr.reveal('.magic__image', Scrolling.reveal.top)
sr.reveal('.magic__content', Scrolling.reveal.opacity)