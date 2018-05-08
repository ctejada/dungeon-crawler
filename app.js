const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const static = express.static(__dirname + '/public');

console.log(__dirname);

const configRoutes = require('./routes');
const expressHandlebars = require('express-handlebars');

app.use('/public', static);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

configRoutes(app);

app.listen(3001, () => {
    console.log('We have got a server running on http://localhost:3001');
});