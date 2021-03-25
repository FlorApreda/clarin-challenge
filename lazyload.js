document.addEventListener('DOMContentLoaded', function () {
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

	document.addEventListener('scroll', lazyload)
	window.addEventListener('resize', lazyload)
	window.addEventListener('orientationChange', lazyload)
})
