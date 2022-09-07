import PhotoSwipeLightbox from '/assets/js/photoswipe-lightbox.esm.min.js'

const options = {
  gallerySelector: '.photoswipe-gallery',
  childSelector: '.photoswipe',
  pswpModule: '/assets/js/photoswipe.esm.min.js',
  pswpCSS: '/assets/css/photoswipe.css'
}

const lightbox = new PhotoSwipeLightbox(options)

lightbox.on('uiRegister', function () {
  lightbox.pswp.ui.registerElement({
    name: 'custom-caption',
    order: 9,
    isButton: false,
    appendTo: 'root',
    html: 'Caption Text',
    onInit: (el, pswp) => {
      lightbox.pswp.on('change', () => {
        const currentSlideElement = lightbox.pswp.currSlide.data.element
        const hiddenCaption = currentSlideElement.querySelector('.caption')
        const customCaptionElements = document.getElementsByClassName('pswp__custom-caption')
        let captionHTML = ''

        if (hiddenCaption === '' || hiddenCaption === null) {
          for (let counter = 0; counter < customCaptionElements.length; counter++) {
            customCaptionElements[counter].classList.add('invisible')
          }
        } else {
          for (let counter = 0; counter < customCaptionElements.length; counter++) {
            customCaptionElements[counter].classList.remove('invisible')
          }

          if (currentSlideElement) {
            captionHTML = hiddenCaption.innerHTML
          }
        }

        el.innerHTML = captionHTML
      })
    }
  })
})

lightbox.init()
