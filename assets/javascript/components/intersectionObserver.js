const revealOnScroll = (element, callback) => {
  const observer = new IntersectionObserver( observables => {
    observables.forEach(observable => {
      if (observable.intersectionRatio <= 0.3) {
        return
      }
      else {
        callback()
        console.log('callback')
        observer.unobserve(observable.target)
      }
    })
  }, {
    threshold: [0.3]
  })
}

export {revealOnScroll}

// let items = document.querySelectorAll('.images')
// items.forEach(item => { 
//   item.classList.add('not-visible')
//   observer.observe(item)
// })
