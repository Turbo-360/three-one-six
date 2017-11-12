// var Product = require('../models/Product')
const pkg_json = require('../package.json')
const turbo = require('turbo360')({site_id:pkg_json.app})
const RESOURCE_NAME = 'product'

module.exports = {

	post: function(params, completion){
		turbo.create(RESOURCE_NAME, params)
		.then(function(data){
			completion(null, data)
		})
		.catch(function(err){
			completion(err, null)
		})

		// Product.create(params, function(err, product){
		// 	if (err){
		// 		completion(err, null)
		// 		return
		// 	}
		// 	if (!product){
		// 		completion('Error', null)
		// 		return
		// 	}
		// 	completion(null, product.summary())
		// })
	},

	get: function(params, completion){
		turbo.fetch(RESOURCE_NAME, params)
		.then(function(data){
			completion(null, data)
		})
		.catch(function(err){
			completion(err, null)
		})

		// console.log(params)
		// Product.find(params, function(err, product){
		// 	if (err){
		// 		completion(err, null);
		// 		return;
		// 	}

		// 	var list = [];
		// 	for (var i=0; i<product.length;i++){
		// 		list.push(product[i].summary());
		// 	}
		// 	completion(null, list);
		// 	return;
		// });
		// return;
	},

	put: function(params, completion){
		// Product.findByIdAndUpdate(params.id, params, {new: true}, function(err, product){
		// 	if (err){
		// 		completion(err, null);
		// 		return;
		// 	}
		// 	completion(null, product.summary())
		// })
	},

	getByTags: function(params, completion){
		// console.log(params)
		// Product.find({'tags': { "$in" : [params.tags]}}, function(err, product){
		// 	if (err){
		// 		completion(err, null);
		// 		return;
		// 	}

		// 	var list = [];
		// 	for (var i=0; i<product.length;i++){
		// 		list.push(product[i].summary());
		// 	}
		// 	completion(null, list);
		// 	return;
		// });
		// return;
	},

	getById: function(params, completion){
		turbo.fetchOne(RESOURCE_NAME, params)
		.then(function(data){
			completion(null, data)
		})
		.catch(function(err){
			completion(err, null)
		})
		
		// Product.findById(params, function(err, product){
		// 	if (err){
		// 		completion(err, null)
		// 		return
		// 	}
		// 	if (!product){
		// 		completion('Error', null)
		// 		return
		// 	}
		// 	completion(null, product.summary());
		// 	return;
		// });
		// return;
	},

	delete: function(params, completion){
		// Product.findByIdAndRemove(params, function(err, product){
		// 	if (err){
		// 		completion(err, null)
		// 		return
		// 	}
		// 	if (!product){
		// 		completion('Error', null)
		// 		return
		// 	}
		// 	completion(null, 'Successfully deleted product ' + product._id)
		// })
	},
}