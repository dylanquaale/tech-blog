const {User} = require('..models');

const userData = [{
    username: 'Tom',
    password: 'Tom'
},
{
    username: 'Bill',
    password: 'Bill'
},
{
    username: 'Ted',
    password: 'Ted'
},]
const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;
