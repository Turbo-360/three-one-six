// var Post = require('../models/Post');
const pkg_json = require('../package.json')
const turbo = require('turbo360')({site_id:pkg_json.app})
const RESOURCE_NAME = 'post' 

module.exports = {
	post: function(params, completion){
		turbo.create(RESOURCE_NAME, params)
		.then(function(data){
			completion(null, data)
		})
		.catch(function(err){
			completion(err, null)
		})

		// Post.create(params, function(err, post){
		// 	if (err){
		// 		completion(err, null)
		// 		return
		// 	}
		// 	if (!post){
		// 		completion('Error', null)
		// 		return
		// 	}
		// 	completion(null, post.summary())
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

		// Post.find(params, function(err, posts){
		// 	if (err){
		// 		completion(err, null);
		// 		return;
		// 	}

		// 	var list = [];
		// 	for (var i=0; i<posts.length;i++){
		// 		list.push(posts[i].summary());
		// 	}
		// 	completion(null, list);
		// 	return;
		// });
		// return;
	},

	put: function(params, completion){
		// Post.findByIdAndUpdate(params.id, params, {new: true}, function(err, post){
		// 	if (err){
		// 		completion(err, null);
		// 		return;
		// 	}
		// 	completion(null, post.summary())
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

		// Post.findById(params, function(err, post){
		// 	if (err){
		// 		completion(err.message, null);
		// 		return;
		// 	}

		// 	if (post==null){
		// 		completion('Weird MongoDB error srry my bad', null);
		// 		return;
		// 	}

		// 	completion(null, post.summary());
		// 	return;
		// });
		// return;
	}
}