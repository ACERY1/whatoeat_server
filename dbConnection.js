const dbConfig = require('./config/dbconfig')
const mongoose  = require('mongoose')

module.exports = () => {
	mongoose.connect(dbConfig)
	let db = mongoose.connection
	db.on('error', () => {console.error('Connecting To DataBase Fail!')})
	db.once('open', () => {console.log('Connecting TO DataBase Success!')})
	return db
}


