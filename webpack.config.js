var path = require("path");

module.exports = {
	entry: {"chinese-traditional-color" : "./build/js.js"},
	output: {
		path:path.resolve(__dirname ,"dist"),
		filename:"[name].js"
	},
	mode:"development"
};

