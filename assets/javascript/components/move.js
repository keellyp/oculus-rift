export default class Move {

  
  constructor($_el) {
    this.$el = document.querySelector($_el)
  }
  translate() {
    const hero = document.querySelector('.hero')    
    const hero_image = document.querySelector('.hero__image--background')

    function moveBackground(e) {
      let x = e.clientX
      let y = e.clientY
      hero_image.style.transform = `translate(${x/30}px,${y/10}px)`
    }
    
    // Listen to mousemove event and run moveBackground function
    hero.addEventListener('mousemove', (e) => moveBackground(e))
  }

}