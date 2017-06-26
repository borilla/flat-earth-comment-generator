var MarkovChain = require('markovchain');
var MAX_LENGTH = 40;

function getFirstWord(comment) {
	return comment.slice(0, comment.indexOf(' '));
}

function selectRandomFromArray(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function CommentGenerator() {
	this.markovChain = new MarkovChain();
	this.starterWords = [];
}

CommentGenerator.prototype.train = function (comment) {
	this.markovChain.parse(comment);
	this.starterWords.push(getFirstWord(comment));
}

CommentGenerator.prototype.generate = function () {
	var starterWord = selectRandomFromArray(this.starterWords);

	return this.markovChain.start(starterWord).end(MAX_LENGTH).process();
}

module.exports = CommentGenerator;
