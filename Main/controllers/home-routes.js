const router = require("express").Router();
// const sequelize = require('../config/connection')
// const { Post, User, } = require('../models');


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
