// require('aframe')
// require('aframe-layout-component')
// require('aframe-template-component')
// require('aframe-event-set-component')
// require('aframe-look-at-component')

AFRAME.registerComponent('set-image', {
  schema: {
    on: { type: 'string' },
    target: { type: 'selector' },
    src: { type: 'string' },
    dur: {
      type: 'number',
      default: 300
    }
  },

  init: function () {
    var data = this.data
    var el = this.el

    this.setupFadeAnimation()

    el.addEventListener(data.on, function () {
      // Fade out image.
      data.target.emit('set-image-fade')
      // Wait for fade to complete.
      setTimeout(function () {
        // Set image.
        data.target.setAttribute('material', 'src', data.src)
      }, data.dur)
    })
  },

  setupFadeAnimation: function () {
    var data = this.data
    var targetEl = this.data.target

    // Only set up once.
    if (targetEl.dataset.setImageFadeSetup) {
      return
    }
    targetEl.dataset.setImageFadeSetup = true

    // Create animation.
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

// const animStatus = (status) => {
    
//   const animation = document.querySelector('.animationRotation')

//   switch (status) {
//   case 'pause':
//     console.log('pause')
//     animation.emit('rotation-pause')
//     break
//   case 'resume':
//     console.log('resume')
//     animation.emit('rotation-resume')
//     break
//   }
// }


// document.addEventListener('mousedown', () => {
//   if (document.querySelector('body').classList.contains('a-grabbing')) {
//     console.log('grab')
//     animStatus('pause')
//   }
// })

// document.addEventListener('mouseup', () => {
//   animStatus('resume')
// })
