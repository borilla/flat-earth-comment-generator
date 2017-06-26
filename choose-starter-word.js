function getFirstWord(comment) {
	return comment.slice(0, comment.indexOf(' '));
}

function selectRandomFromArray(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function chooseStarterWord(comments) {
	return getFirstWord(selectRandomFromArray(comments));
}

module.exports = chooseStarterWord;
