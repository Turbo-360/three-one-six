const pkg_json = require('../package.json')
const turbo = require('turbo360')({site_id:pkg_json.app})
const vertex = require('vertex360')({site_id:pkg_json.app})
const router = vertex.router()

/*  This is the home route. It renders the index.mustache page from the views directory.
	Data is rendered using the Mustache templating engine. For more
	information, view here: https://mustache.github.io/#demo */
// router.get('/', function(req, res){
// 	res.render('index', {text: 'This is the dynamic data. Open index.js from the routes directory to see.'})
// })

// /*  This route render json data */
// router.get('/json', function(req, res){
// 	res.json({
// 		confirmation: 'success',
// 		app: pkg_json.app,
// 		data: 'this is a sample json route.'
// 	})
// })

// /*  This route sends text back as plain text. */
// router.get('/send', function(req, res){
// 	res.send('This is the Send Route')
// })

// /*  This route redirects requests to Turbo360. */
// router.get('/redirect', function(req, res){
// 	res.redirect('https://www.turbo360.co/landing')
// })

// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated())
//         return next()
//     res.json(createError('Not logged in'))
// }

function createError(err){
	return {
		confirmation:'fail',
		message:err.message
	}
    
	// return error
}

function createResult(data){
	var result = {
		confirmation:'success',
		results:data
	}
	return result
}

var options = {
	facebook: {scope: 'email'}
}


router.get('/', function(req, res) {
  res.render('index');
});

router.get('/index.html', function(req, res) {
  res.render('index');
});

router.get('/index', function(req, res) {
  res.render('index');
});

router.get('/join', function(req, res) {
  res.render('join');
});


router.get('/admin', function(req, res) {
  res.render('admin');
});

router.get('/profile', function(req, res) {
    res.render('profile')
});

router.get('/products', function(req, res) {
  res.render('products');
});

router.get('/blog', function(req, res) {
  res.render('blog');
});

router.get('/blog-single-slider.html', function(req, res) {
  res.render('blog-single-slider');
});

// router.get('/', function(req, res) {
//     res.render('home')
// });

router.get('/lookbook', function(req, res) {
    res.render('blog-masonry')
});

router.get('/brand', function(req, res) {
    res.render('signup')
});

// router.get('/brand-profile', isLoggedIn, function(req, res) {
//     res.render('brand-profile')
// });

router.get('/brand-profile', function(req, res) {
    res.render('brand-profile')
});

router.get('/feed', function(req, res) {
    res.render('blog-simple-feed')
});

router.get('/post', function(req, res) {
    res.render('blog-single-no-sidebar')
});

router.get('/newpost', function(req, res) {
    res.render('newpost')
});

// router.get('/currentuser', isLoggedIn, function(req, res){
// 	res.json(createResult(req.user.summary()))
// 	return
// })

router.get('/currentuser', function(req, res){
    // res.json(createResult(req.user.summary()))
    return
})

router.get('/logout', function(req, res) {
    // req.logout()
    
    req.vertexSession.logout()
    res.redirect('/')
});

/* - - -  - - - - - - - - - - - PASSPORT STUFF - - - - - - - - - - - - 
router.post('/login', function(req, res){
    passport.authenticate('local-login', function(err, user, info) {
        if (err) { 
            res.json(createError(err))
            return
        }
        if (!user) { 
            res.json(createError(info)) 
            return
        }
        req.logIn(user, function(err) {
            if (err) { 
                res.json(createError(err)) 
                return
            }
            res.json(createResult(user.summary()))
            return
        })
    })(req, res)
});

router.post('/signup', function(req, res){
    passport.authenticate('local-signup', function(err, user, info) {
        if (err) { 
            res.json(createError(err))
            return
        }
        if (!user) { 
            res.json(createError(info)) 
            return
        }
        req.logIn(user, function(err) {
            if (err) { 
                res.json(createError(err)) 
                return
            }
            res.json(createResult(user.summary()))
            return
        })
    })(req, res)
});

router.post('/signup-brand', function(req, res){
    passport.authenticate('brand-signup', function(err, user, info) {
        if (err) { 
            res.json(createError(err))
            return
        }
        if (!user) { 
            res.json(createError(info)) 
            return
        }
        req.logIn(user, function(err) {
            if (err) { 
                res.json(createError(err)) 
                return
            }
            res.json(createResult(user.summary()))
            return
        })
    })(req, res)
});

router.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

router.get('/auth/facebook/callback', function(req, res){
    passport.authenticate('facebook', function(err, user, info) {
        if (err) { 
            res.json(createError(err))
            return
        }
        if (!user) { 
            res.json(createError(info)) 
            return
        }
        req.logIn(user, function(err) {
            if (err) { 
                res.json(createError(err)) 
                return
            }
            res.redirect('/')
            return
        })
    })(req, res)
});

router.get('/auth/instagram',
      passport.authenticate('instagram'));

router.get('/auth/instagram/callback', function(req, res){
    passport.authenticate('instagram', function(err, user, info) {
        if (err) { 
            res.json(createError(err))
            return
        }
        if (!user) { 
            res.json(createError(info)) 
            return
        }
        req.logIn(user, function(err) {
            if (err) { 
                res.json(createError(err)) 
                return
            }
            res.redirect('/')
            return
        })
    })(req, res)
});

router.post('/connect/local', passport.authenticate('local-signup', {}), function(req, res){
    res.json(createResult(req.user.summary()))
});

router.get('/connect/facebook', passport.authorize('facebook', { scope : 'email' }));

router.get('/connect/facebook/callback', passport.authorize('facebook', {}), function(req, res){
    res.redirect('/profile')
});

router.get('/connect/instagram', passport.authorize('instagram'));

// handle the callback after facebook has authorized the user
router.get('/connect/instagram/callback', passport.authorize('instagram', {}), function(req, res){
    res.redirect('/profile')
});

router.get('/unlink/local', function(req, res) {
    var user = req.user
    user.local.email = undefined
    user.local.password = undefined
    user.save(function(err) {
    	if (user.local.email.length==0 && user.facebook.token.length==0 && user.instagram.token.length==0){
    		req.logout() //account practically dead, logout
    		res.redirect('/')
    		return
    	}
        res.redirect('/profile')
    });
});

// facebook -------------------------------
router.get('/unlink/facebook', function(req, res) {
    var user = req.user
    user.facebook.token = undefined
    user.save(function(err) {
    	if (user.local.email.length==0 && user.facebook.token.length==0 && user.instagram.token.length==0){
    		req.logout() //account practically dead, logout
    		res.redirect('/')
    		return
    	}
        res.redirect('/profile')
    });
});

// instagram -------------------------------
router.get('/unlink/instagram', function(req, res) {
    var user  = req.user
    user.instagram.token = undefined
    user.save(function(err) {
    	if (user.local.email.length==0 && user.facebook.token.length==0 && user.instagram.token.length==0){
    		req.logout() //account practically dead, logout
    		res.redirect('/')
    		return
    	}
        res.redirect('/profile')
    });
});

*/

module.exports = router
