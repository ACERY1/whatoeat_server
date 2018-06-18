const Food = require('../models/Food')

/**
 * Get A Random Food Object
 * @param req
 * @param res
 */
const getFoodHandler = (req, res) => {
	Food
		.aggregate()
		.sample(1)
		.exec((err, data) => {
			if (err) res.resError('Search Food Error!')
			data = JSON.parse(JSON.stringify(data))[0]
			res.resBody.data.name = data.name
			res.resBody.data.imgUrl = data.imgUrl
			res.resBody.data.id = data.id
			res.resBody.data.desc = data.desc
			res.json(res.resBody)
		})
}

/**
 * Handle User Post Food Object
 * @param req
 * @param res
 */
const postFoodHandler = (req, res) => {
	if (!req.body.name || !req.body.desc || !req.body.imgUrl) {
		res.resError('Error Params!')
	}
	const food = new Food({name, desc, imgUrl} = req.body)
	food.save(err => {
		if (err) res.resError('Save Food Error!')
		res.resSuccess('Save Food Success!')
	})
	
}

/**
 * Modify The Food Info
 * @param req
 * @param res
 */
const updateFoodHandler = (req, res) => {
	if (!res.body.id) res.resError('Lack Of ID')
	let config = {}
	Object.keys(res.body).forEach(item => {
		if (item !== 'id') {
			config[item] = res.body[item]
		}
	})
	
	Food.findOneAndUpdate({id: res.body.id}, {$set: config}, (err,res) =>{
		if (err) res.resError('Update Food Error')
		res.resSuccess(res.toString())
	})
}

/**
 * Delete THe Food By ID
 * @param req
 * @param res
 */
const deleteFoodHandler = (req, res) => {

}

module.exports = {
	getFoodHandler,
	postFoodHandler,
	updateFoodHandler
}