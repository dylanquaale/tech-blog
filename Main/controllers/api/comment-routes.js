const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
        // post_id: req.params.id,
      });
      if (!newComment) {
        res.status(404).json({ message: "No Comment Found" });
        return;
      }
      res.status(200).json(newComment);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;