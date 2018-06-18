const express = require('express')
const router = express.Router()
const FoodController = require('../controllers/FoodController')


router.get('/food', FoodController.getFoodHandler)
router.post('/food', FoodController.postFoodHandler)
router.put('/food', FoodController.updateFoodHandler)
router.delete('/food', FoodController.deleteFoodHandler)

router.get('*', (req, res) => {
	res.resError('Request Path Wrong! Check If Necessary！')
})
module.exports = router