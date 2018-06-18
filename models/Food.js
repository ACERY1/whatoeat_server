const mongoose  = require('mongoose')

let foodSchema = mongoose.Schema({
	name: String,
	desc: String,
	imgUrl: String
})

foodSchema.methods.test = () => {
	console.log('hello i am lily')
}

foodSchema.methods.addFood = () => {

}

module.exports = mongoose.model('Food', foodSchema)
