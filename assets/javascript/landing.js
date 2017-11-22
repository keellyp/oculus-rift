// Landing scroll animation
var frameNumber = 0,
  playbackConst = 400,
  setHeight = document.querySelector('.set-height'),
  vid = document.querySelector('.v0')

vid.addEventListener('loadedmetadata', function () {

  setHeight.style.height = Math.floor(vid.duration) * playbackConst + 'px'

})

function scrollPlay() {

  var frameNumber = window.pageYOffset / playbackConst
  vid.currentTime = frameNumber
  if (vid.currentTime < 14.6) {
    vid.style.display = 'block'
  } else if (vid.currentTime == 14.6) {
    vid.style.display = 'none'
  }
  window.requestAnimationFrame(scrollPlay)
}

window.requestAnimationFrame(scrollPlay)