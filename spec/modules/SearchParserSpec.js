import filterTweets from '../../app/src/modules/SearchParser';

describe("SearchParser", function() {
	//var filterTweets = require('../../app/src/modules/SearchParser');
	var tweets = tweets = [{
		id: 12,
		text: 'foo bar',
		user: {
			id: 456,
			name: 'john'
		},
		entities: {
			hashtags: [{
				id: 54,
				text: 'example'
			}, {
				id: 55,
				text: 'toto'
			}]
		}
	}, {
		id: 15,
		text: 'hello, world',
		user: {
			id: 524,
			name: 'jack'
		},
		entities: {
			hashtags: []
		}
	}];

 	beforeEach(function() {
 	});

 	describe('filterTweets', function() {
	 	it('If an empty string is specified, all the tweets should be retrieved', function() {
	 		var returnedTweets = filterTweets(tweets, '');
	 		expect(returnedTweets).toEqual(tweets);
	 	});
	 });
});