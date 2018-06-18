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
	console.log(req.body)
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
	if (!req.body.id) res.resError('Lack Of ID')
	let config = {}
	Object.keys(req.body).forEach(item => {
		if (item !== 'id') {
			config[item] = req.body[item]
		}
	})
	
	Food.findOneAndUpdate({id: req.body.id}, {$set: config}, (err, data) =>{
		if (err) res.resError('Update Food Error')
		data = JSON.parse(JSON.stringify(data))
		res.resBody.data.name = data.name
		res.resBody.data.imgUrl = data.imgUrl
		res.resBody.data.id = data.id
		res.resBody.data.desc = data.desc
		res.resBody.msg = 'Update Success'
		res.json(res.resBody)
	})
}

/**
 * Delete THe Food By ID
 * @param req
 * @param res
 */
const deleteFoodHandler = (req, res) => {
	if (!req.body.id) res.resError('Lack Of ID')
	Food.findOneAndDelete({id:req.body.id}, (err)=>{
		if (err) res.resError('Delete Fail')
		res.resSuccess('Delete Success!')
	})
}

module.exports = {
	getFoodHandler,
	postFoodHandler,
	updateFoodHandler,
	deleteFoodHandler
}