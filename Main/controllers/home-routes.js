const router = require('express').Router();
// const sequelize = require('../config/connection')
const { Post, User, } = require('../models');

//23-Ins_Auth Controllers where I took this from



router.get('/', async (req, res) => {
	try {
		const postData = awaitPost.findAll({
			include: [{
				model: User,
				attributes: ['username'],
			},],
		});

		const posts = postData.map((blog) => blog.get({
			plain: true
		}));

		res.render('homepage', {
			posts,
			logged_in: req.session.logged_in
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/blog/:id', async (req, res) => {
	try {
		const postData = await Post.findByPk(req.params.id, {
			include: [
				{
					model: User,
					attributes: ['username'],
				}, {
					model: Comment,
					include: [
						User
					]
				}
			],
		});

		const post = postData.get({
			plain: true
		});

		res.render('post', {
			...post,
			logged_in: req.session.logged_in
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/dashboard', withAuth, async (req, res) => {
	try {
		const userData = await User.findByPk(req.session.user_id, {
			attributes: {
				exclude: ['password']
			},
			include: [{
				model: Blog
			}],
		});

		const user = userData.get({
			plain: true
		});

		res.render('dashboard', {
			...user,
			logged_in: true
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

//homepage and signup

router.get('/', async (req, res) => {
    res.render('homepage');

       });

       router.get('/signup', (req, res) => {
        res.render('signup');
      });
   
   
       //login page
       router.get('/login', (req, res) => {
           // If the user is already logged in, redirect the request to another route
           if (req.session.loggedIn) {
             res.redirect('/profile');
             return;
           }
         
           res.render('login');
         });
   
   
   //dashboard
   
   router.get('/dashboard', (req, res) => {
       // If the user is already logged in, redirect the request to another route
       if (req.session.loggedIn) {
         res.redirect('/dashboard');
         return;
       }
     
       res.render('login');
     });


module.exports = router;

