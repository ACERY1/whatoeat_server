const mongoose  = require('mongoose')
const uuidV1 = require('uuid/v1')
const foodSchema = mongoose.Schema({
	name: {type: String, default: 'No Name'},
	desc: {type: String, default: 'No Desc'},
	imgUrl: {type: String, default: 'No ImgUrl'},
	id: {type: String, default: uuidV1},
	date: {type: String, default: Date.now}
})

module.exports = mongoose.model('Food', foodSchema)
