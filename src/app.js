require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')

const notesRouter = require('./notes/notes-router')
const foldersRouter = require('./folders/folders-router')

const app = express()

var corsOptions = {
	origin: 'http://localhost:3000',
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(morgan((NODE_ENV === 'production') ? 'tiny' : 'common'))
app.use(cors(corsOptions))
app.use(helmet())

app.use('/api/notes', notesRouter)
app.use('/api/folders', foldersRouter)

app.get('/', (req, res) => {
	res.send('Hello, world!')
})

app.use(function errorHandler(error, req, res, next) {
	let response
	if (NODE_ENV === 'production') {
		response = { error: 'Server error' }
	} else {
		console.error(error)
		response = { message: error.message, error }
	}
	res.status(500).json(response)
})

module.exports = app