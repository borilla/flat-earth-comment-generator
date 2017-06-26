var fetchYouTubeComments = require('./fetch-youtube-comments');
var CommentGenerator = require('./comment-generator');
var videoId = 'VNqNnUJVcVs';

fetchYouTubeComments(videoId).then(function (comments) {
	var generator = new CommentGenerator();
	var i;

	comments.forEach(function (comment) {
		generator.train(comment);
	});

	for (i = 0; i < 10; ++i) {
		console.log(generator.generate(), '\n');
	}
});
