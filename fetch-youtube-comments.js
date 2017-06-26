var fetchCommentPage = require('youtube-comment-api');
var DEFAULT_MAX_PAGES = 10;

function fetchYouTubeComments(videoId, maxPages) {
	maxPages = maxPages || DEFAULT_MAX_PAGES;

	var resolve, reject;
	var promise = new Promise(function (_resolve, _reject) {
		resolve = _resolve;
		reject = _reject;
	});
	var comments = [];
	var pageNumber = 1;

	function extractCommentText(comment) {
		return comment.text;
	}

	function fetchNextPage(nextPageToken) {
		console.info('Fetching page ' + pageNumber);

		fetchCommentPage(videoId, nextPageToken).then(function (commentPage) {
			var pageComments = commentPage.comments.map(extractCommentText);

			console.info('Fetched page ' + pageNumber);
			comments = comments.concat(pageComments);

			if (commentPage.nextPageToken && pageNumber < maxPages) {
				pageNumber += 1;
				fetchNextPage(commentPage.nextPageToken);
			}
			else {
				console.info('Fetched ' + pageNumber + ' pages');
				resolve(comments);
			}
		}).catch(function (error) {
			console.error('Failed to fetch page ' + pageNumber);

			reject(error);
		});
	}

	fetchNextPage();

	return promise;
}

module.exports = fetchYouTubeComments;
