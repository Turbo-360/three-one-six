const pkg_json = require('../package.json')
const turbo = require('turbo360')({site_id:pkg_json.app})
const vertex = require('vertex360')({site_id:pkg_json.app})
const router = vertex.router()

const ProfileController = require('../controllers/ProfileController')
const PostController = require('../controllers/PostController')
const CommentController = require('../controllers/CommentController')
const ProductController = require('../controllers/ProductController')
const controllers = {
	profile: ProfileController, 
	post: PostController,
	comment: CommentController,
	product: ProductController
}

// function isLoggedIn(req, res) {
// 	if (req.isAuthenticated())
// 	    return next()
// 	res.json(createError('Not logged in'))
// }

function createError(err){
	return {
		confirmation : 'fail',
		message : err.message
	}

}

function createResult(data){
	return {
		confirmation : 'success',
		result : data
	}
}


router.post('/:resource', function(req, res){
	var resource = req.params.resource;
	var controller = controllers[resource];
	if (controller==null){
		res.json(createError('Invalid resource'));
		return;
	}

	controller.post(req.body, function(err, results){
		if (err){
			res.json(createError(err));
			return;
		}

		res.json(createResult(results));
		return;
	})
	return;
});

router.get('/:resource', function(req, res){
	var resource = req.params.resource;
	var controller = controllers[resource];

	if (controller == null){
		res.json(createError('Invalid resource'));
		return;
	}
	if (req.query.tags){
		controller.getByTags(req.query, function(err, results){
			if (err){
				res.json(createError(err));
				return;
			}
			res.json(createResult(results));
			return;
		});
		return;
	}
	else{
		controller.get(req.query, function(err, results){
			if (err){
				res.json(createError(err));
				return;
			}
			res.json(createResult(results));
			return;
		});
		return;
	}
});

router.get('/:resource/:id', function(req, res){
	var resource = req.params.resource;
	var id = req.params.id;
	var controller = controllers[resource];
	if (controller == null){
		res.json(createError('Invalid resource'));
		return;
	}

	controller.getById(id, function(err, results){
		if (err){
			res.json(createError(err));
			return;
		}
		res.json(createResult(results));
		return;
	});
	return;
});

router.put('/:resource', function (req, res){
	var resource = req.params.resource;
	var controller = controllers[resource];
	if (controller==null){
		res.json(createError('Invalid resource'));
		return;
	}
	if (req.query.pass == 'true'){
		controller.putWithPass(req.body, function(err, results){
			if (err){
				res.json(createError(err));
				return;
			}
			res.json(createResult(results));
			return;
		})
	}
	else {
		controller.put(req.body, function(err, results){
			if (err){
				res.json(createError(err));
				return;
			}
			res.json(createResult(results));
			return;
		})
	}
	return;
});

router.delete('/:resource/:id', function(req, res){
	var resource = req.params.resource;
	var id = req.params.id;
	var controller = controllers[resource];
	if (controller==null){
		res.json(createError('Invalid resource'));
		return;
	}

	controller.delete(id, function(err, results){
		if (err){
			res.json(createError(err));
			return;
		}
		res.json(createResult(results));
		return;
	})
	return;
});



module.exports = router
