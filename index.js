var MarkovChain = require('markovchain');
var fetchYouTubeComments = require('./fetch-youtube-comments');
var chooseStarterWord = require('./choose-starter-word');

var chain = new MarkovChain();
var videoId = 'VNqNnUJVcVs';

fetchYouTubeComments(videoId, 5).then(function (comments) {
	var starterWord = chooseStarterWord(comments);

	// train the generator
	comments.forEach(function (comment) {
		chain.parse(comment);
	});

	for (var i = 0; i < 10; ++i) {
		// generate some text
		console.log(chain.start(starterWord).end(50).process() + '\n');
	}
});
