const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const routes = require("./routes/controllers/app");
const port = process.env.PORT || 7000;

app.use('/', routes);
//setting template engine
app.set('view engine', 'ejs');

//setting bodyparser
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));


app.listen(port, function (err, conn) {
	if (err) {
		console.log('error');
	} else {
		console.log('Connected to port ' + port)
	}
});