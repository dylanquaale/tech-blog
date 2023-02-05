
// const sequelize = require('../config/connection');
// const { User, Post, Comment } = require('../models');

// const postData = require('./postData.json');
// const commentData = require('./commentData.json');
// const userData = require('./userData.json');

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   for (const post of postData) {
//     await post.create({
//       ...post,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }

//   const comments = await Comment.bulkCreate(commentData, {
//     returning: true,
//   });

//   process.exit(0);
// };

// seedDatabase();

const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
  
  await seedPosts();
    console.log('\n----- POSTS SEEDED -----\n');

  await seedComments();
    console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();