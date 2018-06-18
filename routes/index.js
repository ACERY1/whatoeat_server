const express = require('express')
const router = express.Router()
const FoodController = require('../controllers/FoodController')


router.get('/food', FoodController.getFoodHandler)

router.post('/food', FoodController.postFoodHandler)

router.get('*', (req, res) => {
	res.resError('Request Path Wrong! Check If Necessary！')
})
module.exports = router