// var Profile = require('../models/Profile');
// var bcrypt = require('bcryptjs')

const pkg_json = require('../package.json')
const turbo = require('turbo360')({site_id:pkg_json.app})
const RESOURCE_NAME = 'user'


module.exports = {

	post: function(params, completion){
		turbo.createUser(params)
		.then(function(data){
			completion(null, data)
		})
		.catch(function(err){
			completion(err, null)
		})

		// completion('Account creation is handled by another route. Good try!', null)
		// return
	},

	get: function(params, completion){
		turbo.fetch(RESOURCE_NAME, params)
		.then(function(data){
			completion(null, data)
		})
		.catch(function(err){
			completion(err, null)
		})

		// Profile.find(params, function(err, profiles){
		// 	if (err){
		// 		completion(err, null);
		// 		return;
		// 	}

		// 	var list = [];
		// 	for (var i=0; i<profiles.length;i++){
		// 		list.push(profiles[i].summary());
		// 	}
		// 	completion(null, list);
		// 	return;
		// });
		// return;
	},

	put: function(params, completion){
		// Profile.findByIdAndUpdate(params.id, 
		// 	{$set: {"local.email": params.local.email, 
		// 			"local.birthday": params.local.birthday, 
		// 			"local.name": params.local.name,
		// 			"local.tags": params.local.tags,
		// 			"local.image": params.local.image,
		// 			"local.brandName": params.local.brandName,
		// 			"local.brandEmail": params.local.brandEmail,
		// 			"local.brandPhone": params.local.brandPhone,
		// 			}
		// 	}, 
		// 	{new: true}, function(err, profile){
		// 		if (err){
		// 			completion(err, null);
		// 			return;
		// 		}
		// 		completion(null, profile.summary())
		// 	})
	},

	putWithPass: function(params, completion){
		// Profile.findByIdAndUpdate(params.id, 
		// 	{$set: {"local.email": params.local.email, 
		// 			"local.birthday": params.local.birthday, 
		// 			"local.name": params.local.name, 
		// 			"local.tags": params.local.tags,
		// 			"local.image": params.local.image,
		// 			"local.brandName": params.local.brandName,
		// 			"local.brandEmail": params.local.brandEmail,
		// 			"local.brandPhone": params.local.brandPhone,
		// 			"local.password": bcrypt.hashSync(params.local.password, 8)
		// 			}
		// 	}, 
		// 	{new: true}, function(err, profile){
		// 		if (err){
		// 			completion(err, null);
		// 			return;
		// 		}
		// 		completion(null, profile.summary())
		// 	})
	},

	getById: function(params, completion){
		turbo.fetchOne(RESOURCE_NAME, params)
		.then(function(data){
			completion(null, data)
		})
		.catch(function(err){
			completion(err, null)
		})
				
		// Profile.findById(params, function(err, profile){
		// 	if (err){
		// 		completion(err.message, null);
		// 		return;
		// 	}

		// 	if (profile==null){
		// 		completion('Weird MongoDB error srry my bad', null);
		// 		return;
		// 	}

		// 	completion(null, profile.summary());
		// 	return;
		// });
		// return;
	}
}