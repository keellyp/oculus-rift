import { intersectionObserver } from '../components/intersectionObserver'
import * as Scrolling from '../components/revealOnScroll'
import * as lazyload from '../components/lazyLoad'

sr.reveal('.conception__part--1', {
  delay: 200,
  duration: 1000,
  origin: 'left',
  distance: '16rem',
  reset: true
})
sr.reveal('.conception__part--2', {
  delay: 200,
  duration: 1000,
  origin: 'left',
  distance: '12rem',
  reset: true
})
sr.reveal('.conception__part--3', {
  delay: 200,
  duration: 1000,
  origin: 'left',
  distance: '8rem',
  reset: true
})
sr.reveal('.conception__part--4', {
  delay: 200,
  duration: 1000,
  origin: 'left',
  distance: '4rem',
  reset: true
})
sr.reveal('.conception__part--5', {
  delay: 200,
  duration: 1000,
  origin: 'right',
  distance: '0rem',
  reset: true
})
sr.reveal('.conception__part--6', {
  delay: 200,
  duration: 1000,
  origin: 'right',
  distance: '4rem',
  reset: true
})
sr.reveal('.conception__part--7', {
  delay: 200,
  duration: 1000,
  origin: 'right',
  distance: '8rem',
  reset: true
})
sr.reveal('.conception__part--8', {
  delay: 200,
  duration: 1000,
  origin: 'right',
  distance: '12rem',
  reset: true
})
sr.reveal('.conception__part--9', {
  delay: 200,
  duration: 1000,
  origin: 'right',
  distance: '16rem',
  reset: true
})

sr.reveal('.conception__words', Scrolling.reveal.top)
sr.reveal('.conception__image', Scrolling.reveal.opacity)
sr.reveal('.conception__content', Scrolling.reveal.opacity)

intersectionObserver(document.querySelector('.conception__image'), () => {
  lazyload.observer.triggerLoad(document.querySelector('.conception__image img'))
})
