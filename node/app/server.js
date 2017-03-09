const http = require('http');

const hostName = '127.0.0.1';
const port = '8080';

const server = http.createServer(function(requete, reponse){
    reponse.end('Bonjour du serveur node')
});

server.listen(port, hostName, function(){
    console.log('Le serveur écoute sur le port : '+ port)
     });