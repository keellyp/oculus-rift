export default class Hero {
  // Translate background on mousemove
  translate() {
    const hero = document.querySelector('.hero')    
    const hero_image = document.querySelector('.hero__image--background')
    const hero_eyes = document.querySelector('.hero__image--eyes')

    function moveBackground(e) {
      let x = e.clientX
      let y = e.clientY
      hero_image.style.transform = `translate(${x/30}px,${y/10}px)`
      hero_eyes.style.transform = `translate(${x/130}px,${y/40}px)`
    }

    // Listen to mousemove event and run moveBackground function
    hero.addEventListener('mousemove', (e) => moveBackground(e))
  }

}