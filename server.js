var express = require('express'),
    api     = require('./api'),
    app     = express();

app
    .use(express.static('./public'))
    .use('/api', api)
    .get('*', function(req, res) {
        // if (!req.user) {
            // res.redirect('/login');
        // } else {
            res.sendFile('public/main.html', {"root": "."});
        // }
    })
    .listen(3000);
