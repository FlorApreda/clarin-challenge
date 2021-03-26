document.addEventListener('DOMContentLoaded', function () {
	document.addEventListener('scroll', lazyload)
	window.addEventListener('resize', lazyload)
	window.addEventListener('orientationChange', lazyload)

	const lazyImages = document.querySelectorAll('img.lazy')
	let lazyTimer
	function lazyload() {
		if (lazyTimer) {
			clearTimeout(lazyTimer)
		}

		lazyTimer = setTimeout(function () {
			const scrollTop = window.pageYOffset
			lazyImages.forEach(function (img) {
				if (img.offsetTop < window.innerHeight + scrollTop) {
					img.src = img.dataset.imagen
					img.classList.remove('lazy')
				}
			})
			if (lazyImages.length == 0) {
				document.removeEventListener('scroll', lazyload)
				window.removeEventListener('resize', lazyload)
				window.removeEventListener('orientationChange', lazyload)
			}
		}, 5)
	}

	const verVideo = document.querySelector('.contenedor-vista-previa')
	verVideo.addEventListener('click', function () {
		verVideo.remove()
		const reproductorVideo = document.createElement('video')
		reproductorVideo.setAttribute('src', './img/videoplayback.mp4')
		reproductorVideo.setAttribute('controls', 'true')
		reproductorVideo.setAttribute('autoplay', 'true')
		reproductorVideo.setAttribute('poster', './img/video-preview.png')
		reproductorVideo.classList.add('reproductor-video')

		document.querySelector('.video').appendChild(reproductorVideo)
	})
})
