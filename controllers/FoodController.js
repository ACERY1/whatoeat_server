const Food = require('../models/Food')

/**
 * Get A Random Food Object
 * @param req
 * @param res
 */
const getFoodHandler = (req, res) => {

}

/**
 * Handle User Post Food Object
 * @param req
 * @param res
 */
const postFoodHandler = (req, res) => {
	if (!req.body.name || ! req.body.desc || !req.body.imgUrl) {
		res.resError('Error Params!')
	}
	const food = new Food({name,desc,imgUrl} = req.body)
	food.save(err => {
		if (err) res.resError('Save Food Error!')
		res.resSuccess('Save Food Success!')
	})

}


module.exports = {
	getFoodHandler,
	postFoodHandler
}