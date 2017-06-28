var fetchYouTubeComments = require('./fetch-youtube-comments');
var CommentGenerator = require('./comment-generator');

var VIDEO_ID = 'ksSZPNQaFP8';
var MAX_COMMENT_PAGES = 10;
var MIN_COMMENT_LENGTH = 10;
var COMMENTS_TO_GENERATE = 10;

fetchYouTubeComments(VIDEO_ID, MAX_COMMENT_PAGES).then(function (comments) {
	var generator = new CommentGenerator();
	var i;

	comments.forEach(function (comment) {
		if (comment.length >= MIN_COMMENT_LENGTH) {
			generator.feed(comment);
		}
	});

	for (i = 0; i < COMMENTS_TO_GENERATE; ++i) {
		console.log(generator.generate(), '\n\n--------\n');
	}
});
