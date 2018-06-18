const ResponseBody = require('../classes/ResponseBody')

module.exports = (req, res, next) => {
	res.resBody = new ResponseBody({}, 0, '')
	res.resError = (msg) => {
		res.json(res.resBody.responseError(msg))
	}
	next()
}