var fetchYouTubeComments = require('./fetch-youtube-comments');
var fetchSampleComments = require('./fetch-sample-comments');
var fixComment = require('./fix-comment');
var CommentGenerator = require('./comment-generator');

var VIDEO_ID = 'ksSZPNQaFP8';
var MAX_COMMENT_PAGES = 10;
var MIN_COMMENT_LENGTH = 10;
var COMMENTS_TO_GENERATE = 10;

function generateComments(sourceComments) {
	var generator = new CommentGenerator();
	var i;

	sourceComments.forEach(function (comment) {
		comment = fixComment(comment);

		if (comment.length >= MIN_COMMENT_LENGTH) {
			generator.feed(comment);
		}
	});

	for (i = 0; i < COMMENTS_TO_GENERATE; ++i) {
		console.log(generator.generate(), '\n\n--------\n');
	}
}

// fetchYouTubeComments(VIDEO_ID, MAX_COMMENT_PAGES).then(generateComments);
fetchSampleComments().then(generateComments);
