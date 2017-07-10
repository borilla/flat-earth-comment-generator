function fixComment(comment) {

	comment = comment.trim();

	var original = comment;

	comment = fixBrokenLines(comment);
	comment = fixWhitespace(comment);
	comment = removeWeirdChars(comment);
	comment = fixSpaceBeforePunctuation(comment);
	comment = fixSpaceAfterPunctuation(comment);
	comment = fixColons(comment);
	comment = comment.trim();

	// if (comment !== original) {
	// 	console.log(original)
	// 	console.log('--------')
	// 	console.log(comment)
	// 	console.log('--------')
	// }

	return comment;
}

function fixBrokenLines(comment) {
	var regex = /(\w)\n([a-z])/g;
	var fixed = comment.replace(regex, '$1 $2');

	return fixed;
}

function fixWhitespace(comment) {
	comment = comment.trim();

	// split comment into lines
	var lines = comment.split(/\s*[\r\n]\s*/);

	// within each line, normalise all spaces to single space char
	lines = lines.map(function (line) {
		return line.replace(/\s+/g, ' ');
	});

	// join lines back up (with double-linebreak)
	return lines.join('\n\n');
}

function fixSpaceBeforePunctuation(comment) {
	var regex = / +([,.!?])/g;
	var fixed = comment.replace(regex, '$1');

	return fixed;
}

function fixSpaceAfterPunctuation(comment) {
	var regex = /([a-z]{2,}[,.!?]+)([a-z])/gi;
	var fixed = comment.replace(regex, '$1 $2');

	return fixed;
}

function fixColons(comment) {
	var regex = / (:|;) /g;
	var fixed = comment.replace(regex, '$1 ');

	return fixed;
}

function removeWeirdChars(comment) {
	// limit chars to the ones in this regex
	var regex = /[^\w \n,.!?_\-+*/\\"':;=~#$£&%@{}()[\]]/g;
	var fixed = comment.replace(regex, '');

	return fixed;
}

module.exports = fixComment;
