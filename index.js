const express = require('express');
const app = express();
const path = require('path');
const port = 5500;

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});
app.use(require('./routers/session'));
app.use(require('./routers/main'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
