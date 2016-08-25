function filterTweetsByHashTag(tweets, value) {
	return tweets.filter((tweet) => {
		return tweet.entities.hashtags.some((hashtag) => {
			return hashtag.text.toLowerCase().indexOf(value.toLowerCase()) !== -1;
		});
	});
}

function filterTweetsByUser(tweets, value) {
	return tweets.filter((tweet) => {
		return tweet.user.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
	});
}

function filterTweetsByText(tweets, value) {
	return tweets.filter((tweet) => {
		return tweet.text.toLowerCase().indexOf(value.toLowerCase()) !== -1;
	});
}

function filterTweets(tweets, search) {
	let results = tweets;
	let parsedSearch = search.split(' ');
	parsedSearch.forEach((item) => {
		if (item[0] === '@') {
			let parsedItem = item.split(':');
			if (parsedItem[0] === '@hashtag') {
				results = filterTweetsByHashTag(results, parsedItem[1]);
			}
			else if(parsedItem[0] === '@user') {
				results = filterTweetsByUser(results, parsedItem[1]);
			}
		}
		else {
			results = filterTweetsByText(results, item);
		}
	});

	return results;
}

export {
	filterTweetsByHashTag,
	filterTweetsByUser,
	filterTweetsByText,
	filterTweets
}