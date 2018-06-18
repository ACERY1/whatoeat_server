const mongoose  = require('mongoose')

mongoose.connect('mongodb://localhost:27017/food')

let foodSchema = mongoose.Schema({
	name: String,
	desc: String,
	imgUrl: String
})

foodSchema.methods.test = () => {
	console.log('hello i am lily')
}


let Food = mongoose.model('Food', foodSchema)

module.exports = Food
