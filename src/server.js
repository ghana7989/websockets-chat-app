const path = require('path')
const http = require('http')
const express = require('express')

const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)

const port = process.env.PORT || 3000
const publicDir = path.join(__dirname, '../public')

app.use(express.static(publicDir))

io.on('connection', socket => {
	console.log('New Socket Connection')
	socket.emit('message', 'Welcome!!')

	socket.on('sendMessage', message => {
		io.emit('message', message)
	})
})

server.listen(3000, 'localhost', () => {
	console.log('server listening on port 3000')
})
