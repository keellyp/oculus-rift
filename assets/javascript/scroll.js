const ScrollReveal = require('scrollreveal')

export default class RevealOnSroll {
  constructor() {
    window.sr = ScrollReveal()
  }
  magic() {
    sr.reveal('.magic__image', {
      duration: 1000,
      origin: 'bottom',
      viewFactor: 0.4,
      reset: true
    })
  }
  gesture() {
    sr.reveal('.gesture__images--left', { 
      duration: 2000, 
      origin: 'bottom', 
      viewFactor: 0.5, 
      reset: true, 
      rotate: { x: 0, y: 0, z: 45 }, 
      opacity: 1, 
      scale: 0.9
    })
    sr.reveal('.gesture__images--right', { 
      duration: 2000, 
      origin: 'bottom', 
      viewFactor: 0.5, 
      reset: true, 
      rotate: { x: 0, y: 0, z: -45 }, 
      opacity: 1,
      scale: 0.9
    })
  }
}