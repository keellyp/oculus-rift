const intersectionObserver = (el, callback) => {
  const observer = new IntersectionObserver(observables => {
    observables.forEach(observable => {
      if (observable.intersectionRatio <= 0.3) return
      callback()
      observer.disconnect()
    })
  }, {
    threshold: [0.3]
  })
  observer.observe(el)
}

export { intersectionObserver }