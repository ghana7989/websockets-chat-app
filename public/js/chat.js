const socket = io()

socket.on('countUpdated', count => {
	console.log('Count updated', count)
})

document.getElementById('increment').addEventListener('click', e => {
	socket.emit('increment')
})
