const express = require('express');
const Spinner = require('cli-spinner').Spinner;
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('index');
})

app.listen(port, () => {
	
	spinner = new Spinner(`app listening on port ${port} %s `);
	spinner.setSpinnerString(21);
	spinner.start();
});
