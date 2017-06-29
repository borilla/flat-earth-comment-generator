var N_GRAM_LENGTH = 8;
var MAX_LENGTH = 1000;
var TERMINAL_STRING = 'END';

function CommentGenerator() {
	this._starts = [];
	this._ngrams = {};
}

CommentGenerator.prototype.feed = function (comment) {
	var i, l, ngram, next, arr;

	comment = comment.trim();

	for (i = 0, l = comment.length - N_GRAM_LENGTH; i <= l; ++i) {
		ngram = comment.slice(i, i + N_GRAM_LENGTH);

		if (i === 0) {
			this._starts.push(ngram);
		}

		if (i === l) {
			next = TERMINAL_STRING;
		}
		else {
			next = comment.slice(i + N_GRAM_LENGTH, i + N_GRAM_LENGTH + 1);
		}

		arr = this._getNgramArray(ngram);
		arr.push(next);
	}
}

CommentGenerator.prototype.generate = function () {
	var comment = getRandomItem(this._starts);
	var ngram, arr, next;

	while (comment.length < MAX_LENGTH) {
		ngram = comment.slice(-N_GRAM_LENGTH);
		arr = this._getNgramArray(ngram);
		next = getRandomItem(arr);

		if (next === TERMINAL_STRING) {
			break;
		}

		comment += next;
	}

	return comment;
}

CommentGenerator.prototype._getNgramArray = function (ngram) {
	var arr = this._ngrams[ngram];

	if (!arr) {
		arr = [];
		this._ngrams[ngram] = arr;
	}

	return arr;
}

function getRandomItem(arr) {
	var index = Math.floor(Math.random() * arr.length);

	return arr[index];
}

module.exports = CommentGenerator;
