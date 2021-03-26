function trackingUsuarios() {
	function isIncognito() {
		// La API FileSystem esta deshabilitada en incognito, si no existe asumo que esta en modo incognito.
		const fs = window.RequestFileSystem || window.webkitRequestFileSystem
		return !fs ? true : false
	}

	function createFingerprint() {
		let ip
		fetch('https://api.ipify.org/?format=json')
			.then((response) => response.json())
			.then((data) => {
				if (data.ip !== undefined) {
					ip = data.ip
					const alreadyExist = localStorage.getItem('fingerPrintUID')
					if (alreadyExist && alreadyExist === ip) {
						console.log('user already exists')
					} else {
						localStorage.setItem('fingerPrintUID', ip)
					}
				}
			})
			.catch((err) => console.error(err))
		return ip
	}

	function sendUserData(data) {
		fetch('http://localhost/', {
			method: 'POST',
			body: data,
		})
			.then((response) => response.json())
			.then((data) => console.log('La peticion se realizo exitosamente.', data))
			.catch((err) => console.error(err))
	}

	const userAgent = window.navigator.userAgent
	const incognito = isIncognito()
	const referrer = document.referrer
	const fingerprint = createFingerprint()

	sendUserData({
		userAgent,
		incognito,
		referrer,
		fingerprint,
	})
}
trackingUsuarios()
