const commentsStream = require('youtube-comments-stream');
const sampleComments = require('./data/sample-comments');
var fixComment = require('./lib/fix-comment');
var CommentGenerator = require('./lib/comment-generator');

var VIDEO_ID = 'ksSZPNQaFP8';
var MIN_SOURCE_COMMENT_LENGTH = 60;
var COMMENTS_TO_GENERATE = 20;
var N_GRAM_LENGTH = 12;
var exitCode;

function initGenerator(onReady) {
	var stream = commentsStream.get(VIDEO_ID);
	var generator = new CommentGenerator(N_GRAM_LENGTH);
	var count = 0;

	console.log('Loading comments. Please wait...');

	stream.on('data', function (comment) {
		var text = fixComment(comment.text);

		if (text.length >= MIN_SOURCE_COMMENT_LENGTH) {
//			console.log('feeding...', ++count);
			generator.feed(text);
		}
	});

	stream.on('error', function (err) {
		console.error(err);
		exitCode = 1;
	});

	stream.on('end', function () {
		onReady(generator);
	});
}

// feed comments into generator then generate some comments
initGenerator(function (generator) {
	var i;

	for (i = 0; i < COMMENTS_TO_GENERATE; ++i) {
		console.log('\n--------\n');
		console.log(generator.generate());
	}

	exitCode = 0;
});

// prevent script from exiting while we're waiting for async events
(function waitForCompletion() {
	if (exitCode === undefined) {
		setTimeout(waitForCompletion, 250);
	}
	else {
		process.exitCode = exitCode;
	}
})();
