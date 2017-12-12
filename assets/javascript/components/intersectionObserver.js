const observer = new IntersectionObserver(observables => {
  observables.forEach(observable => {
    // L'élément devient visible
    if (observable.intersectionRatio > 0.5) {
      observable.target.classList.remove('not-visible')
      observer.unobserve(observable.target)
      console.log('visible')
    }
  })
}, {
  threshold: [0.5]
})

// On observe nos éléments
let items = document.querySelectorAll('.images')
items.forEach(item => {
  item.classList.add('not-visible')
  observer.observe(item)
})