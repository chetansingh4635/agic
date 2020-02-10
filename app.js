//Install express server
const express = require('express');
const path = require('path');
var favicon = require('serve-favicon')
const app = express();
app.use(favicon(path.join(__dirname, 'public/images', 'loc.png')))
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/public'));

app.get('/*', function(req,res) {
    
res.send(path.join(__dirname+'/public/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8081);