var MarkovGen = require('markov-generator');

function CommentGenerator() {
	this.comments = [];
}

CommentGenerator.prototype.train = function (comment) {
	this.comments.push(comment);
}

CommentGenerator.prototype.generate = function () {
	var markov = new MarkovGen({
		input: this.comments,
		minLength: 40
	});

	return markov.makeChain();
}

module.exports = CommentGenerator;
