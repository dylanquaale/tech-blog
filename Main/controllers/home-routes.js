const router = require("express").Router();
// const sequelize = require('../config/connection')
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
//homeroutes

// homepage
router.get('/', async (req, res) => {
	try {
		const postData = await Post.findAll({
			include: [{
				model: User, 
				attributes: ['username'],
			},],
		});

		const posts = postData.map((post) => post.get({
			plain: true
		}));

		res.render('homepage', {
			posts,
			loggedIn: req.session.loggedIn
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

// post by id 
router.get('/post/:id', async (req, res) => {
	console.log(req.params.id)
	try {
		const postData = await Post.findByPk(req.params.id, {
			include: [
				{
					model: User,
					attributes: ['username'],
				}, {
					model: Comment,
					include: [User]
				}
			],
		});

    const post = postData.get({
			plain: true
		});
  console.log(req.session.loggedIn,"HOME  route",post)
		res.render('post', {
			...post,
			loggedIn: req.session.loggedIn
		});
	} catch (err) {
		console.log(err)
		res.status(500).json(err);
	}
});

// dashboard route
router.get('/dashboard', withAuth, async (req, res) => {
	try {
		const userData = await User.findByPk(req.session.user_id, {
			attributes: {
				exclude: ['password']
			},
			include: [{
				model: Post
			}],
		});

		const user = userData.get({
			plain: true
		});

		res.render('dashboard', {
			...user,
			loggedIn: true
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

// login 
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// sign up
router.get("/signup", async (req, res) => {
 
  res.render("signup");
});

module.exports = router;
