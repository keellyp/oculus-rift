export default class Move {

  constructor($_el) {
    this.$el = document.querySelector($_el)
    this.$parent = this.$el.parentElement
  }

  translate(speed) {
    this.$parent.addEventListener('mousemove', (e) => {
      let posX = (e.clientX) - (this.$parent.clientWidth/2)
      let posY = (e.clientY) - (this.$parent.clientHeight/2)
      this.$el.style.transform = `translate( ${posX/speed}px, ${posY/speed}px )`
    })
  }

  rotate(speed) {
    this.$parent.addEventListener('mousemove', (e) => {
      let posX = (e.clientX - this.$parent.offsetLeft - this.$parent.clientWidth / 2) / 3.31
      this.$el.style.transform = `rotate( ${posX/speed}deg )`
    })
  }
}