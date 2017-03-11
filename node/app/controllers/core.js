const db= require('../../util/db');
const client= require('../../util/twitter');

exports.home = function(req, response){
    db.loadDatabase({}, function(){
        res.render('index',{searches:db.getCollection('searches').data});
    })
};

exports.top = function(req, response){
    db.loadDatabase({}, function(){
        res.render('top',{terms:db.getCollection('top').data});
    })
};

exports.results = function(req, response){
    var query = req.query.q;
    if (query){
        db.getCollection('search').insert({term: query});
        db.saveDatabase();

        client.get('search/tweets', {q:query}, function(error, tweets, response){
            res.render('results', {query: query, tweets: tweets.statuses})
        })
    } else {
        response.send('error');
    }
}