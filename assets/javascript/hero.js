export default class Hero {
  // Translate background on mousemove
  translate() {
    const hero = document.querySelector('.hero')    
    const hero_image = document.querySelector('.hero__image--background')
    const hero_eyes = document.querySelector('.hero__image--eyes')

    function moveBackground(e) {
      let x = e.clientX
      let y = e.clientY
      hero_image.style.transform = `translate(${x/30}px,${y/10}px)`
      hero_eyes.style.transform = `translate(${x/130}px,${y/40}px)`
    }

    // Listen to mousemove event and run moveBackground function
    hero.addEventListener('mousemove', (e) => moveBackground(e))
  }

  // Fallback on mobile using accelerometer
  accelerometer() {
    const hero_image = document.querySelector('.hero__image--background')
    const hero_image_container = document.querySelector('.hero__containerImages')

    let maxX = hero_image_container.clientWidth - hero_image.clientWidth
    let maxY = hero_image_container.clientHeight - hero_image.clientHeight

    function handleAccelerometer(event) {
      let x = event.beta // In degree in the range [-180,180]
      let y = event.gamma // In degree in the range [-90,90]

      // Constrain the x value to the range [-90,90] to don't have the device upside down
      if (x > 90) {
        x = 90
      }
      if (x < -90) {
        x = -90
      }

      // To make computation easier, shift the range of 
      // x and y to [0,180]
      x += 90
      y += 90

      // Define half of the width and height of the image to move
      // It center the positioning point to the center of the ball
      // hero_image.style.top = `${maxX * x / 180 - 500}px`
      // hero_image.style.left = `${maxY * y / 180 - 250}px`
      console.log(`(${maxY * y / 180 - 250})px`)
      console.log(`(${maxX * x / 180 - 500})px`)
    }

    // Listen to deviceOrientation event
    window.addEventListener('deviceorientation', (e) => {handleAccelerometer(e)} )
  }
}