export default class FallbackBrowser {
  constructor(){
    this.chrome   = navigator.userAgent.indexOf('Chrome') > -1
    this.firefox  = navigator.userAgent.indexOf('Firefox') > -1
    this.safari   = navigator.userAgent.indexOf('Safari') > -1
  }
}