
const db= require('../util/db');
const client= require('../util/twitter');

exports.results = function(req, response){
    var query = req.query.q;
    if (query){
        db.getCollection('search').insert({term: query});
        db.saveDatabase();

        client.get('search/tweets', {q:query}, function(error, tweets, response){
            response.json(tweets);
        })
    } else {
        response.send('error');
    }
}