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
      duration: 1000, 
      origin: 'bottom', 
      viewFactor: 0.3, 
      reset: true, 
      rotate: { x: 0, y: 0, z: 45 }, 
      opacity: 1, 
      scale: 0.9
    })
    sr.reveal('.gesture__images--right', { 
      duration: 1000, 
      origin: 'bottom', 
      viewFactor: 0.3, 
      reset: true, 
      rotate: { x: 0, y: 0, z: -45 }, 
      opacity: 1,
      scale: 0.9
    })
  }
  conception() {
    sr.reveal('.conception__gradient', {
      duration: 1000,
      origin: 'left',
      viewFactor: 0.4,
      reset: true
    })
    sr.reveal('.conception__image1', {
      duration: 1000,
      origin: 'left',
      distance: '10rem',
      viewFactor: 0.4,
      reset: true
    })
    sr.reveal('.conception__image2', {
      duration: 1000,
      origin: 'left',
      distance: '7rem',
      viewFactor: 0.4,
      reset: true
    })
    sr.reveal('.conception__image3', {
      duration: 1000,
      origin: 'left',
      distance: '5rem',
      viewFactor: 0.4,
      reset: true
    })
    sr.reveal('.conception__image4', {
      duration: 1000,
      origin: 'left',
      distance: '3rem',
      viewFactor: 0.4,
      reset: true
    })
    sr.reveal('.conception__image5', {
      duration: 1000,
      origin: 'left',
      distance: '2rem',
      viewFactor: 0.4,
      reset: true
    })
    sr.reveal('.conception__image6', {
      duration: 1000,
      origin: 'left',
      distance: '2rem',
      viewFactor: 0.4,
      reset: true
    })
    sr.reveal('.conception__image7', {
      duration: 1000,
      origin: 'left',
      distance: 'left',
      viewFactor: 0.4,
      reset: true
    })
    sr.reveal('.conception__image8', {
      duration: 1000,
      origin: 'left',
      distance: '2rem',
      viewFactor: 0.4,
      reset: true
    })
    sr.reveal('.conception__image9', {
      duration: 1000,
      origin: 'left',
      distance: '2rem',
      viewFactor: 0.4,
      reset: true
    })
  }
}