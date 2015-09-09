	
	module.exports = function(appl){
		appl.get('/hello', function (req, res, next) { 
	   		res.send(' Hello World');
		})

	}