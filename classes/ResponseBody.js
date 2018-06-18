class	ResponseBody {
	constructor(data,code,msg){
		this.data = data
		this.code = code
		this.msg = msg
	}
	
	responseError (msg) {
		this.code = 1
		this.data = {}
		this.msg = msg
		return JSON.parse(JSON.stringify(this))
	}
	
	responseSuccess (msg) {
		this.code = 0
		this.data = {}
		this.msg = msg
		return JSON.parse(JSON.stringify(this))
	}
}

module.exports = ResponseBody