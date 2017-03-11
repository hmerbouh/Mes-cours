require('dotenv').config();
const app = require('./app/server');
const port = '8080';

app.listen(port, function(){
    console.log('Le serveur écoute sur le port : '+ port);
});