const express = require('express')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const logger = require('morgan')

/* DB */
const useDB = require('./dbConnection')

/* Router */
const index = require('./routes/index')

/* MiddleWare */
const responseFormat = require('./middlewares/responseFormat')

const app = express()
const PORT = process.env.PORT || 3000

app.use(logger("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(responseFormat)
app.use(expressValidator())
app.use('',index)
useDB()

app.listen(PORT, () => {
	console.log(`server listen at ${PORT}`);
});