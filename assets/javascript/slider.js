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
      if (this.constructor.isDots) {
        Slider.moveDots(this.constructor.currentView)
      }
    })
  
    $leftArrow.addEventListener('mousedown', () => {
      if (this.constructor.currentView > 0) {
        this.constructor.currentView--
      }
      else {
        this.constructor.currentView = this.constructor.viewsNumber - 1
      }
      Slider.move(this.constructor.currentView)
      if (this.constructor.isDots) {
        Slider.moveDots(this.constructor.currentView)
      }
    })
  }
  
  /* MOVES */
  
  static move(currentView) {
    this.$viewContainer.style.transform = `translateX(${currentView * -100}vw)`
  }
  
  static moveDots(currentView) {
    for (const $dot of this.$dots) {
      $dot.classList.remove('current-dot')
    }
    this.$dots[currentView].classList.add('current-dot')
  }
}



// const Swiper = require('swiper')

// export default class SwiperSlider {
//   init() {
//     new Swiper('.swiper-container', {
//       // Optional parameters
//       direction: 'horizontal',
//       loop: true,
    
//       // If we need pagination
//       pagination: {
//         el: '.swiper-pagination',
//       },
    
//       // Navigation arrows
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     })
//   }
// }