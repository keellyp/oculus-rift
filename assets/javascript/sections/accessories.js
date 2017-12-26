import Slider from '../components/slider'

const slider = new Slider('.accessories__wrapper')
slider.arrows(
  `<img src='img/icon_back.svg' alt='Back' class='arrow arrow-left'>`,
  `<img src='img/icon_next.svg' alt='Next' class='arrow arrow-right'>`
)
slider.touchmoves()
slider.dots()
