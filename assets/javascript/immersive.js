export default class Immersive {
  // Translate background on mousemove
  translate() {
    const immersive = document.querySelector('.immersive')
    const turtle = document.querySelector('.turtle')
    const gesture = document.querySelector('.gesture')
    const gestureOffset = gesture.offsetTop
    const immersiveOffset = immersive.offsetTop

    // Stocks the turtle translate value
    let y = 0

    // Stocks the last scroll position to compare it to the next
    // and see if the user is scrolling up or down
    let lastScroll = 0

    function moveTurtle(e) {
      // Get the current scrollPosition value
      let z = window.pageYOffset

      // If user is scrolling down, move turtle to bottom on scroll
      if ( z > lastScroll ) {
        if( window.pageYOffset > immersiveOffset && y <= 260 ) {
          y += 10
          turtle.style.transform = `translateY(${y/10}%)`
        } 
      } else {
        if( y > 0 && window.pageYOffset < gestureOffset ){
          y -= 10
          turtle.style.transform = `translateY(${y/10}%)`
        }
      }
      // Stock the last scroll value
      lastScroll = z
    }

    // Listen to mousemove event and run moveBackground function
    window.addEventListener('scroll', (e) => moveTurtle(e))
  }
}