// Get the element to move on mousemove
const hero_image = document.querySelector('.hero__image--background')

// Listen to mousemove event
window.addEventListener('mousemove', (event) => moveBackground(event))

// function to execute at mousemove
function moveBackground(e) {
  let x = e.clientX     // Get the horizontal coordinate
  let y = e.clientY
  hero_image.style.transform = 'translateX(' + x/100 + '%) ' + 'translateY(' + y/40 + '%)'
}