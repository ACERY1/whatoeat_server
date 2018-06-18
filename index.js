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
const CORS = require('./middlewares/CORS')

const app = express()
const PORT = process.env.PORT || 4000

app.use(logger("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(CORS)
app.use(responseFormat)
app.use(expressValidator())
app.use('',index)
useDB()

app.listen(PORT, () => {
	console.log(`server listen at ${PORT}`);
});