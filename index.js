const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
	res.header
	res.render('index');
})

app.listen(port, () => {
	
	console.log('app listening on port: ', port);
});
