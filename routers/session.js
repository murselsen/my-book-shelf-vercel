const express = require('express');
const router = express.Router();

const { getUsers } = require('../controllers/users');

router.get('/login', (req, res) => {
  res.render('login');
});
router.post('/login', (req, res) => {
  const users = getUsers();
  console.log('users', users);
  console.log('Request:', req);
  console.log(req.query);
});

// Register
router.get('/register', (req, res) => {
  res.render('register');
});

module.exports = router;
