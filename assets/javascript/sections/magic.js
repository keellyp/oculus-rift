import revealOnScroll from '../components/intersectionObserver'

const $section = document.querySelector('.magic')

revealOnScroll($section, () => {
  console.log('ok')
})
