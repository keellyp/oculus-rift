AFRAME.registerComponent('set-image', {
  schema: {
    on: { type: 'string' },
    target: { type: 'selector' },
    src: { type: 'string' },
    dur: {
      type: 'number',
      default: 0
    }
  },

  init: function () {
    let data = this.data
    let el = this.el

    this.setupFadeAnimation()
    el.addEventListener(data.on, () => {
      data.target.emit('set-image-fade')
      setTimeout(() => {
        data.target.setAttribute('material', 'src', data.src)
      }, data.dur)
    })
  },

  setupFadeAnimation: function () {
    let data = this.data
    let targetEl = this.data.target

    if (targetEl.dataset.setImageFadeSetup) {
      return
    }
    targetEl.dataset.setImageFadeSetup = true
    targetEl.setAttribute('animation__fade', {
      property: 'material.color',
      startEvents: 'set-image-fade',
      dir: 'alternate',
      dur: data.dur,
      from: '#FFF',
      to: '#000'
    })
  }
})