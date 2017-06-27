var fetchYouTubeComments = require('./fetch-youtube-comments');
var CommentGenerator = require('./comment-generator');
var videoId = 'ksSZPNQaFP8';
var MIN_COMMENT_LENGTH = 100;

fetchYouTubeComments(videoId).then(function (comments) {
	var generator = new CommentGenerator();
	var i;

	comments.forEach(function (comment) {
		if (comment.length >= MIN_COMMENT_LENGTH) {
			generator.train(comment);
		}
	});

	for (i = 0; i < 10; ++i) {
		console.log(generator.generate(), '\n');
	}
});
