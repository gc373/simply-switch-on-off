const bodyParser = require('body-parser');
const gpio = require("./gpio.js");
const express = require("express");
const app = express();

const server = app.listen(80, () => {
	console.log("Node.js is listening to PORT:" + server.address().port);
});
app.use(bodyParser());
app.use(express.static('public'));
app.use("/", require("./router.js"));
