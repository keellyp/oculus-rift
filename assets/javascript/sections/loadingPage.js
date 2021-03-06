//Loading 
import Loader from '../components/loading'
const loadingPage = new Loader()

loadingPage.on('progress', value => {
  document.querySelector('.loading__percent').innerHTML = `${value}%`
  document.querySelector('.loading__progress--fill').style.transform = `scaleX(${value / 100})`
  const caption = document.querySelector('.loading__caption')
  switch (value) {
    case 0:
      caption.innerHTML = 'Génération de l\'espace virtuel...'
      break
    case 40:
      caption.innerHTML = 'Ajout de l\'environnement et des décors'
      break
    case 80:
      caption.innerHTML = 'Le chargement est bientôt terminé'
      break
    case 100:
      caption.innerHTML = 'Tout est prêt, bienvenue'
      break
    default:
      break
  }
})

loadingPage.on('complete', () => {
  const loadingEl = document.querySelector('.loading')
  setTimeout(() => {
    loadingEl.classList.add('loading--complete')
  }, 1000)
  setTimeout(() => {
    loadingEl.remove()
  }, 1400)

})
