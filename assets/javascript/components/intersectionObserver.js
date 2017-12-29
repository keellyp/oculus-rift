/**
 * Function that observes changes in the intersection of an element with a 0.3 ratio
 * 
 * @param {string} el 
 * @param {function} callback 
 */
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