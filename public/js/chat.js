const socket = io()

socket.on('message', message => {
	console.log(message)
})
let message = ''
document.getElementById('message').addEventListener('change', e => {
	message = e.target.value
})
document.getElementById('submit').addEventListener('click', e => {
	e.preventDefault()
	socket.emit('sendMessage', message)
	document.getElementById('message').value = ''
})
