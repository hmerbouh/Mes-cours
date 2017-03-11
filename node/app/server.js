const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('view', __dirname + '/../public/views');

app.use(express.static(__dirname + '/../public'));

require('./route')(app);

module.exports = app;