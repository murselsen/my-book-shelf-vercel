const users = require('../db/users.json');

const getUsers = () => {
  return users;
};

module.exports = {
  getUsers,
};
