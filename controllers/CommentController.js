// var Comment = require('../models/Comment');
const pkg_json = require('../package.json')
const turbo = require('turbo360')({site_id:pkg_json.app})
const RESOURCE_NAME = 'comment' 


module.exports = {

	post: function(params, completion){
		turbo.create(RESOURCE_NAME, params)
		.then(function(data){
			completion(null, data)
		})
		.catch(function(err){
			completion(err, null)
		})

		// Comment.create(params, function(err, comment){
		// 	if (err){
		// 		completion(err, null)
		// 		return
		// 	}
		// 	if (!comment){
		// 		completion('Error', null)
		// 		return
		// 	}
		// 	completion(null, comment.summary())
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
		
		// Comment.find(params, function(err, comments){
		// 	if (err){
		// 		completion(err, null);
		// 		return;
		// 	}

		// 	var list = [];
		// 	for (var i=0; i<comments.length;i++){
		// 		list.push(comments[i].summary());
		// 	}
		// 	completion(null, list);
		// 	return;
		// });
		// return;
	},

	put: function(params, completion){
		// Comment.findByIdAndUpdate(params.id, params, {new: true}, function(err, comment){
		// 	if (err){
		// 		completion(err, null);
		// 		return;
		// 	}
		// 	completion(null, comment.summary())
		// })
	},

	getById: function(params, completion){
		turbo.fetchOne(RESOURCE_NAME, params)
		.then(function(data){
			completion(null, data)
		})
		.catch(function(err){
			completion(err, null)
		})
		
		// Comment.findById(params, function(err, comment){
		// 	if (err){
		// 		completion(err.message, null);
		// 		return;
		// 	}
		// 	if (!comment){
		// 		completion('Error', null);
		// 		return;
		// 	}

		// 	completion(null, comment.summary());
		// 	return;
		// });
		// return;
	},
}