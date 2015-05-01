var validResponse = function(responseText) {
	return [
	  200,
	  {"Content-Type": "application/json"},
	  JSON.stringify(responseText)
	];
};

module.exports = validResponse;
