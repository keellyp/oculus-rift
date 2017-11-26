class OculusAnim {
  
  anim() {
    const $oculusIntro = document.querySelector('.oculusIntro')
    const $scrollBox = $oculusIntro.querySelector('.oculusScrollbox')
    const $oculus = $scrollBox.querySelector('.oculusScrollbox video')
    const $mainContainer = document.querySelector('.main__container')

    const maxScroll = $scrollBox.offsetHeight - $oculusIntro.offsetHeight

    $oculusIntro.addEventListener('scroll', () => {

      console.log('scroll')

      /* Get the current time in terms of scrolling, values between 0 and 1 */
      const relativeCurrentTime = $oculusIntro.scrollTop / maxScroll

      /* The more relativeCurrentTime is high, the more the scroll is longer */
      $oculus.currentTime = relativeCurrentTime * $oculus.duration
      
      /* If the scroll >= 90% of the video, reduce opacity */
      relativeCurrentTime >= 0.9 ? $oculusIntro.style.opacity = (relativeCurrentTime - .9 - .1) * -10 : $oculusIntro.style.opacity = 1

      /* If the scroll is done, display none the video */
      if (relativeCurrentTime >= 1) {
        $oculusIntro.style.display = 'none'
        $mainContainer.style.position = 'fixed'
        setTimeout(() => {
          $mainContainer.style.position = 'relative'
        }, 600)
      }
    })
  }
}
export default OculusAnim