var fs = require('fs');

var DEFAULT_FILENAME = './sample-comments.txt';
var DEFAULT_SEPARATOR = '\n--------\n';
var FILE_ENCODING = 'utf8';

function fetchSampleComments(filename, separator) {
	filename = filename || DEFAULT_FILENAME;
	separator = separator || DEFAULT_SEPARATOR;

	return new Promise(function (resolve, reject) {
		fs.readFile(filename, FILE_ENCODING, function (err, data) {
			if (err) {
				reject(err);
			}
			else {
				resolve(data.split(separator));
			}
		});
	});
}

module.exports = fetchSampleComments;
