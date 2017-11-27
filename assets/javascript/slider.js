export default class Slider {
  
  constructor($_slider) {
    /* this = const mais scope toute la classe */
    this.constructor.$slider = document.querySelector($_slider)
    this.constructor.$viewContainer = this.constructor.$slider.querySelector('ul')
    const $views = this.constructor.$slider.querySelectorAll('li')
    this.constructor.viewsNumber = $views.length
    this.constructor.$viewContainer.style.width = `${this.constructor.viewsNumber * 100}vw`
    this.constructor.currentView = 0
    this.constructor.$dots = null      
    this.constructor.isDots = false
  }
  
  /* DOTS */
  
  dots() {
    this.constructor.isDots = true

    const $dots = document.createElement('div')
    $dots.classList.add('dots')
    
    this.constructor.$slider.appendChild($dots)
  
    const $dotContainer = this.constructor.$slider.querySelector('.dots')
    for (let i = 0; i < this.constructor.viewsNumber; i++) {
      const $dot = document.createElement('div')
      $dot.classList.add('dot')
      if (i == this.constructor.currentView) {
        $dot.classList.add('current-dot')
      }
      $dot.dataset.view = i
      $dotContainer.appendChild($dot)
    }

    this.constructor.$dots = document.querySelectorAll('.dot')

    this.constructor.$dots.forEach(dot => {
      dot.addEventListener('click', () => {
        this.constructor.currentView = dot.dataset.view
        Slider.move(this.constructor.currentView )
        Slider.moveDots(this.constructor.currentView )
      })
    })
  }
   
  /* ARROWS */
  arrows(leftContent, rightContent) {
    const $leftArrow = document.createElement('div')
    $leftArrow.classList.add('arrow', 'arrow-left')
    $leftArrow.innerHTML = leftContent
    this.constructor.$slider.appendChild($leftArrow)
  
    const $rightArrow = document.createElement('div')
    $rightArrow.classList.add('arrow', 'arrow-right')
    $rightArrow.innerHTML = rightContent
    this.constructor.$slider.appendChild($rightArrow)
  
    $rightArrow.addEventListener('mousedown', () => {
      if (this.constructor.currentView < this.constructor.viewsNumber - 1) {
        this.constructor.currentView++
      }
      else {
        this.constructor.currentView = 0
      }
      Slider.move(this.constructor.currentView)
    })
  
    $leftArrow.addEventListener('mousedown', () => {
      if (this.constructor.currentView > 0) {
        this.constructor.currentView--
      }
      else {
        this.constructor.currentView = this.constructor.viewsNumber - 1
      }
      Slider.move(this.constructor.currentView)
    })
  }

  touchmoves() {
    let finger = { xStart: null, xMove: null, xEnd: null }

    this.constructor.$slider.addEventListener('touchstart', (e) => {
      finger.xStart = e.touches[0].clientX
      finger.xEnd = finger.xStart 
      this.constructor.$viewContainer.style.transition = 'transform 0s'

      this.constructor.$slider.addEventListener('touchmove', (e) => {
        finger.xMove = e.touches[0].clientX
        this.constructor.$viewContainer.style.transform = `translateX(calc(${this.constructor.currentView * -100}vw + ${+ finger.xMove - finger.xStart}px))`
        finger.xEnd = finger.xMove
      })
    })

    this.constructor.$slider.addEventListener('touchend', () => {
      this.constructor.$viewContainer.style.transition = 'transform .5s ease-in-out'
      if (finger.xEnd - finger.xStart >= 50) {
        if (this.constructor.currentView > 0) {
          this.constructor.currentView--
        }
      }
      else if (finger.xEnd - finger.xStart <= -50) {
        if (this.constructor.currentView < this.constructor.viewsNumber - 1) {
          this.constructor.currentView++
        }
      }
      Slider.move(this.constructor.currentView)
    })
  }
  
  /* MOVES */
  
  static move(currentView) {
    this.$viewContainer.style.transform = `translateX(${currentView * -100}vw)`
    this.currentView = currentView

    if (this.isDots) {
      Slider.moveDots(this.currentView)
    }
  }
  
  static moveDots(currentView) {
    for (const $dot of this.$dots) {
      $dot.classList.remove('current-dot')
    }
    this.$dots[currentView].classList.add('current-dot')
  }
}