import revealOnScroll from '../components/intersectionObserver'

const $section = document.querySelector('.magic__image')

revealOnScroll($section, () => {
  console.log('ok')
})
