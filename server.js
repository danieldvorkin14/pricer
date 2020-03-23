//Express
var express = require('express');
var server = express();

var app = express();

app.use(express.static('./dist/pricer'));

app.get('/*', function(req, res) {
        res.sendFile('index.html', {root: 'dist/pricer/'}
    );
});
console.log("Server running at http://localhost:8080")
app.listen(process.env.PORT || 8080);