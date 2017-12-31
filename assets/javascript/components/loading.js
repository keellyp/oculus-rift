import axios from 'axios'

export default class Loader {
  // Create every variable needed
  constructor() {
    this.srcElements = [].slice.call(document.querySelectorAll('[data-load]'))
    this.eventsList = ['progress', 'complete']
    this.progressEvents = []
    this.completeEvents = []
    this.totalProgress = 0
    this.requests = []
    this.init()
    console.log(this.srcElements)
  }

  // Init elements
  init() {
    this.srcElements.forEach(element => {
      this.requests.push({
        element,
        type: 'data-src',
        typeSrc: 'src',
        progress: 0
      })
    })
    console.log(this.requests)

    // For each element, calculate the loaded percentage
    this.requests.forEach((request, index) => {
      axios.get(request.element.getAttribute(request.type) || request.element.getAttribute(request.typeSrc), {
        onDownloadProgress: e => {
          const percent = Math.floor(e.loaded / e.total * 100)
          this.updateRequest(index, percent)
        }
      })
    })
  }

  // If all element are loaded, it call the callCompleteEvents() 
  updateRequest(index, percent) {
    this.requests[index].progress = percent
    const total = this.requests.reduce((value, request) => value + request.progress, 0)

    this.totalProgress = Math.floor(total / this.requests.length)

    if (this.totalProgress === 100) {
      this.callProgress()
      this.callComplete()
    } else {
      this.callProgress()
    }
  }

  callProgress() {
    this.progressEvents.forEach(({
      callback
    }) => {
      callback(this.totalProgress)
    })
  }

  callComplete() {
    this.completeEvents.forEach(({
      callback
    }) => {
      callback()
    })
  }

  on(event, callback) {
    switch (event) {
      case 'progress':
        this.progressEvents.push({
          callback
        })
        break

      case 'complete':
        this.completeEvents.push({
          callback
        })
        break

      default:
        break
    }
  }
}