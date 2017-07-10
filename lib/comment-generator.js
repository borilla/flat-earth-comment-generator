var DEFAULT_N_GRAM_LENGTH = 8;
var DEFAULT_MAX_LENGTH = 2000;
var TERMINAL_STRING = 'END';

function CommentGenerator(nGramLength, maxLength) {
	this.nGramLength = nGramLength || DEFAULT_N_GRAM_LENGTH;
	this.maxLength = maxLength || DEFAULT_MAX_LENGTH;
	this._starts = [];
	this._ngrams = {};
}

CommentGenerator.prototype.feed = function (comment) {
	var nGramLength = this.nGramLength;
	var i, l, ngram, next, arr;

	comment = comment.trim();

	for (i = 0, l = comment.length - nGramLength; i <= l; ++i) {
		ngram = comment.slice(i, i + nGramLength);

		if (i === 0) {
			this._starts.push(ngram);
		}

		if (i === l) {
			next = TERMINAL_STRING;
		}
		else {
			next = comment.slice(i + nGramLength, i + nGramLength + 1);
		}

		arr = this._getNgramArray(ngram);
		arr.push(next);
	}
}

CommentGenerator.prototype.generate = function () {
	var comment = getRandomItem(this._starts);
	var ngram, arr, next;

	while (comment.length < this.maxLength) {
		ngram = comment.slice(-this.nGramLength);
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
