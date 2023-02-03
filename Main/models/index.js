const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');
// 11-Ins_Partials models

User.hasMany(Post, {
    foreignKey: 'user_id',
  });

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });

  


  module.exports = { User, Post, Comment};