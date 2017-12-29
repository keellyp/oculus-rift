/**
 * Use Lozad to load ressources depending on intersection observer
*/

import lozad from 'lozad'

const observer = lozad('.lozad', {
  rootMargin: '300px 0px', 
  threshold: 0.1
})
observer.observe()

export { observer }