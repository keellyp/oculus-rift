export default class OculusAnim {
  constructor() {
    this.$el                 = {}
    this.$el.container       = document.querySelector('.oculusIntro')
    this.$el.scrollBox       = this.$el.container.querySelector('.oculusScrollbox')
    this.$el.oculusVid       = this.$el.scrollBox.querySelector('.oculusScrollbox video')
    this.$el.siteWrapper     = document.querySelector('.main__container')
    this.userAgent = navigator.userAgent.toLowerCase()
  }

  // Play the video on scroll
  scrollAnimChrome() {

    const maxScroll = this.$el.scrollBox.offsetHeight - this.$el.container.offsetHeight

    this.$el.container.addEventListener('scroll', () => {

      const relativeCurrentTime = this.$el.container.scrollTop / maxScroll
      this.$el.oculusVid.currentTime = relativeCurrentTime * this.$el.oculusVid.duration
      
      /* If the scroll >= 90% of the video, reduce opacity */
      relativeCurrentTime >= 0.9 ? this.$el.container.style.opacity = (relativeCurrentTime - .9 - .1) * -10 : this.$el.container.style.opacity = 1
      
      /* If the scroll is done, display none the video */
      if (relativeCurrentTime >= 0.98) {
        this.$el.container.style.display = 'none'
        this.$el.siteWrapper.style.position = 'fixed'
        setTimeout(() => {
          this.$el.siteWrapper.style.position = 'initial'
          document.querySelector('body').removeChild(this.$el.container)
        }, 1000)
      }
    })
  }

  scrollAnimElse() {
    this.$el.oculusVid.setAttribute('autoplay', 'true')
    this.$el.container.removeChild(document.querySelector('.landing__scrollText'))
    this.$el.oculusVid.addEventListener('timeupdate', () => {
      const relativeCurrentTime = this.$el.oculusVid.currentTime / this.$el.oculusVid.duration
      relativeCurrentTime >= 0.9 ? this.$el.container.style.opacity = (relativeCurrentTime - .9 - .1) * -10 : this.$el.container.style.opacity = 1

      /* If the scroll is done, display none the video */
      if (relativeCurrentTime >= 0.98) {
        this.$el.container.style.display = 'none'
        setTimeout(() => {
          this.$el.siteWrapper.style.position = 'initial'
          document.querySelector('body').removeChild(this.$el.container)
        }, 1000)
      }
      else {
        this.$el.siteWrapper.style.position = 'fixed'
      }
    })
  }

  autoplayAnim() {
    if (this.userAgent.indexOf('safari') != -1) {
      if (this.userAgent.indexOf('chrome') > -1) {
        this.scrollAnimChrome()
      } else {
        this.scrollAnimElse()
      }
    }

    if (this.userAgent.indexOf('firefox') > -1) {
      this.scrollAnimElse()
    }
  }
}