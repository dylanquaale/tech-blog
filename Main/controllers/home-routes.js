const router = require("express").Router();
// const sequelize = require('../config/connection')
// const { Post, User, } = require('../models');

// //23-Ins_Auth Controllers where I took this from
router.get("/", async (req, res) => {
  res.render("homepage");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

//login page
router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  console.log(req.session.loggedIn);
  if (req.session.loggedIn) {
    
    res.redirect("/homepage");
    return;
  }

  res.render("login");
});

//dashboard

router.get("/dashboard", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

module.exports = router;


