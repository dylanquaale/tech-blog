const router = require("express").Router();
// const sequelize = require('../config/connection')
const { Post, User, Comment } = require('../models');

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

router.get('/post/:id', async (req, res) => {
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

		res.render('blog', {
			...post,
			loggedIn: req.session.loggedIn
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/", async (req, res) => {
  res.render("homepage", { loggedIn: req.session.loggedIn }); //using template literal
});

router.get("/dashboard", async (req, res) => {
  res.render("dashboard", { loggedIn: req.session.loggedIn });// template literal
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

module.exports = router;
