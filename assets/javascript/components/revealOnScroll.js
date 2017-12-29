/**
 * Scroll reveal parameters to animate the site
 */

import ScrollReveal from 'scrollreveal'

const sr = window.sr = ScrollReveal()

const reveal = {}
reveal.top = {
  scale: 1,
  distance: '20rem',
  origin: 'bottom',
  viewFactor: 0.5,
  reset: true,
  duration: 1000
}
reveal.left = {
  scale: 1,
  distance: '100%',
  opacity: 100,
  origin: 'left',
  reset: true,
  duration: 300,
}
reveal.right = {
  scale: 1,
  distance: '100%',
  opacity: 100,
  origin: 'right',
  reset: true,
  duration: 300,
}
reveal.opacity = {
  scale: 1,
  opacity: 0,
  distance: 'Opx',
  reset: true,
}

export {reveal}