const express = require('express')
const router = express.Router()


router.get('/food', (req,res) => {
	console.log(req.body)
	res.resError('fuck this')
	// res.json({'you': 'sb'})
})

router.post('/food', (req,res) => {
	console.log(req.body)
	res.json({'you': 'sb'})
})
module.exports = router