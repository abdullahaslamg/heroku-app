const express = require('express');
const ejs = require('ejs');

const app = express();

require('./startup/db')();
require('./startup/routes')(app);
require('./startup/pages')(app);

app.set('view engine', 'ejs');



// Listening Server
const port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`App is listening on port ${ port}`);
});
