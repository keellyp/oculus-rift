// Scroll reveal
window.sr = ScrollReveal()
sr.reveal('.magic__image', { duration: 1000, origin: 'bottom', viewFactor: 0.4, reset: true })
sr.reveal('.gesture__image--left', { duration: 2000, origin: 'bottom', viewFactor: 0.5, reset: true, rotate: { x: 0, y: 0, z: 45 }, opacity: 1, scale: 0.9})
sr.reveal('.gesture__image--right', { duration: 2000, origin: 'bottom', viewFactor: 0.5, reset: true, rotate: { x: 0, y: 0, z: -45 }, opacity: 1,scale: 0.9})