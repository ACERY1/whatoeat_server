const express = require('express')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const logger = require('morgan')

const Food  = require('./models/Food')



const app = express()
const PORT = process.env.PORT || 3000

app.use(logger("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(expressValidator())

let food = new Food({
	name:'d',
	desc: '2',
	imgUrl: '3'
})

food.test()

app.listen(PORT, () => {
	console.log(`server listen at ${PORT}`);
});