import React from 'react'
import JQuery from "jquery";
import InputSearchComponent from './InputSearchComponent.jsx';
import ResultListComponent from './ResultListComponent.jsx';
import {filterTweets} from '../modules/SearchParser.js';

class AppComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			tweets: []
		};
	}

	componentWillMount() {
	    this.twitterToken = this.getTwitterToken();
	}

	onSearch(searchString) {
		/*let query = this.parseSearch(searchString);*/
		let tweets = filterTweets(example1.statuses, searchString);

		this.setState({
			tweets: tweets
		});
	}

	/*parseSearch(searchString) {
		let query = '';
		let parsedString = searchString.split(' ');
		parsedString.forEach((item) => {
			if (item[0] === '@') {
				let parsedItem = item.split(':');
				if (parsedItem[0] === '@hashtag') {
					query += ` #${parsedItem[1]}`;
				}
				else if(parsedItem[0] === '@user') {
					query += ` from:${parsedItem[1]}`;
				}
			}
			else {
				query += ` ${item}`;
			}
		});

		query = query.substring(1);
		query = encodeURIComponent(query);
		return query;
	}*/
 
	getTwitterToken() {
		/*let consumerKey = 'XwmxAWZWpqX2VoIOMh1TbAYbT';
		let consumerSecret = 'MWIhMHGDm7bMyu2FhqggyOJ9yUVolgzzgNi2nkTml1eE8cOWQK';
		let encodedValue = window.btoa(encodeURIComponent(consumerKey) + ':' + encodeURIComponent(consumerSecret));
		
		JQuery.ajax({
			url: 'https://api.twitter.com/oauth2/token',
			type: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
				'Authorization': `Basic ${encodedValue}`
			},
			data: {
				grant_type: 'client_credentials'
			}
		})*/

		//return 'AAAAAAAAAAAAAAAAAAAAAPS5wgAAAAAAmC8gJ4wZx%2FTOZL5kr9TSNoXYom4%3DvawKXP1cXzxsqXOzIDS4IQJy1o0LlOJ39QzGoBI4e5UHOJgYyF';
	}

	findTweets(query) {
		/*JQuery.ajax({
			url: `https://api.twitter.com/1.1/search/tweets.json?q=${query}`,
			type: 'GET',
			dataType: 'json',
			headers: {
				'Authorization': 'Bearer ' + this.state.twitterToken
			}
		});*/
		let result = example1;
		return result.statuses
	}

	onTweetsReceived(result) {

	}

	render() {
		return(
			<div>
				<InputSearchComponent onSearch={this.onSearch.bind(this)}/>
				<ResultListComponent tweets={this.state.tweets} />
			</div>
		);
	}
}

var example1 = {
  "statuses": [
    {
      "created_at": "Thu Aug 25 12:40:34 +0000 2016",
      "id": 768790167826030592,
      "id_str": "768790167826030592",
      "text": "A parent's biggest goal should be to not raise the kind of person who believes their bag deserves a seat on the bus.",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [],
        "urls": []
      },
      "metadata": {
        "iso_language_code": "en",
        "result_type": "recent"
      },
      "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 21688192,
        "id_str": "21688192",
        "name": "Lexa Lemieux",
        "screen_name": "Lemmonex",
        "location": "The District",
        "description": "Uncensored and unapologetic.  Preacher in the Church of Feminism. Wearer of leather, leopard and a skeptical side eye.",
        "url": null,
        "entities": {
          "description": { 
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 2417,
        "friends_count": 2186,
        "listed_count": 146,
        "created_at": "Mon Feb 23 20:13:31 +0000 2009",
        "favourites_count": 3476,
        "utc_offset": -14400,
        "time_zone": "Eastern Time (US & Canada)",
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 49152,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "022330",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme15/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme15/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/494552045139918851/IgIwdlD3_normal.jpeg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/494552045139918851/IgIwdlD3_normal.jpeg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/21688192/1373735593",
        "profile_link_color": "0084B4",
        "profile_sidebar_border_color": "A8C7F7",
        "profile_sidebar_fill_color": "C0DFEC",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 0,
      "favorite_count": 0,
      "favorited": false,
      "retweeted": false,
      "lang": "en"
    },
    {
      "created_at": "Thu Aug 25 12:40:32 +0000 2016",
      "id": 768790160855015424,
      "id_str": "768790160855015424",
      "text": "RT @ChampionsLeague: 🏆 WINNER! 🏆\nCongratulations Leo Messi, winner of the UEFAcom fan vote for #GoalOfTheSeason!\nhttps://t.co/ZNnlHs3ihq ht…",
      "truncated": false,
      "entities": {
        "hashtags": [
          {
            "text": "GoalOfTheSeason",
            "indices": [
              95,
              111
            ]
          }
        ],
        "symbols": [],
        "user_mentions": [
          {
            "screen_name": "ChampionsLeague",
            "name": "Champions League",
            "id": 627673190,
            "id_str": "627673190",
            "indices": [
              3,
              19
            ]
          }
        ],
        "urls": [
          {
            "url": "https://t.co/ZNnlHs3ihq",
            "expanded_url": "http://uefa.to/2bIiFhX",
            "display_url": "uefa.to/2bIiFhX",
            "indices": [
              113,
              136
            ]
          }
        ],
        "media": [
          {
            "id": 768763176947183616,
            "id_str": "768763176947183616",
            "indices": [
              139,
              140
            ],
            "media_url": "http://pbs.twimg.com/media/CqsyCU5WcAACNXL.jpg",
            "media_url_https": "https://pbs.twimg.com/media/CqsyCU5WcAACNXL.jpg",
            "url": "https://t.co/UdQXv90KFp",
            "display_url": "pic.twitter.com/UdQXv90KFp",
            "expanded_url": "https://twitter.com/ChampionsLeague/status/768763995792769024/photo/1",
            "type": "photo",
            "sizes": {
              "medium": {
                "w": 1200,
                "h": 675,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "large": {
                "w": 1200,
                "h": 675,
                "resize": "fit"
              },
              "small": {
                "w": 680,
                "h": 383,
                "resize": "fit"
              }
            },
            "source_status_id": 768763995792769024,
            "source_status_id_str": "768763995792769024",
            "source_user_id": 627673190,
            "source_user_id_str": "627673190"
          }
        ]
      },
      "extended_entities": {
        "media": [
          {
            "id": 768763176947183616,
            "id_str": "768763176947183616",
            "indices": [
              139,
              140
            ],
            "media_url": "http://pbs.twimg.com/media/CqsyCU5WcAACNXL.jpg",
            "media_url_https": "https://pbs.twimg.com/media/CqsyCU5WcAACNXL.jpg",
            "url": "https://t.co/UdQXv90KFp",
            "display_url": "pic.twitter.com/UdQXv90KFp",
            "expanded_url": "https://twitter.com/ChampionsLeague/status/768763995792769024/photo/1",
            "type": "photo",
            "sizes": {
              "medium": {
                "w": 1200,
                "h": 675,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "large": {
                "w": 1200,
                "h": 675,
                "resize": "fit"
              },
              "small": {
                "w": 680,
                "h": 383,
                "resize": "fit"
              }
            },
            "source_status_id": 768763995792769024,
            "source_status_id_str": "768763995792769024",
            "source_user_id": 627673190,
            "source_user_id_str": "627673190"
          }
        ]
      },
      "metadata": {
        "iso_language_code": "en",
        "result_type": "recent"
      },
      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 87914859,
        "id_str": "87914859",
        "name": "Ignatius Galih A",
        "screen_name": "IgnatiusEga",
        "location": "Camp Nou",
        "description": "kadang bener kadang nggak. kadang gila kadang waras. dinikmati saja tweet saya. #fcbk #indobarca #photography #trisaktilaw09 #uinotary2015",
        "url": "http://www.ariputra.com",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "http://www.ariputra.com",
                "expanded_url": null,
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 927,
        "friends_count": 1019,
        "listed_count": 30,
        "created_at": "Fri Nov 06 10:52:31 +0000 2009",
        "favourites_count": 262,
        "utc_offset": 25200,
        "time_zone": "Jakarta",
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 45974,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "1A1B1F",
        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/310540986/FC-barcelona-camp-nou.jpg",
        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/310540986/FC-barcelona-camp-nou.jpg",
        "profile_background_tile": true,
        "profile_image_url": "http://pbs.twimg.com/profile_images/378800000598534760/14913f792602fcc57fda70dd87c33b9d_normal.jpeg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/378800000598534760/14913f792602fcc57fda70dd87c33b9d_normal.jpeg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/87914859/1460655839",
        "profile_link_color": "2FC2EF",
        "profile_sidebar_border_color": "181A1E",
        "profile_sidebar_fill_color": "252429",
        "profile_text_color": "666666",
        "profile_use_background_image": true,
        "has_extended_profile": true,
        "default_profile": false,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "retweeted_status": {
        "created_at": "Thu Aug 25 10:56:34 +0000 2016",
        "id": 768763995792769024,
        "id_str": "768763995792769024",
        "text": "🏆 WINNER! 🏆\nCongratulations Leo Messi, winner of the UEFAcom fan vote for #GoalOfTheSeason!\nhttps://t.co/ZNnlHs3ihq https://t.co/UdQXv90KFp",
        "truncated": false,
        "entities": {
          "hashtags": [
            {
              "text": "GoalOfTheSeason",
              "indices": [
                74,
                90
              ]
            }
          ],
          "symbols": [],
          "user_mentions": [],
          "urls": [
            {
              "url": "https://t.co/ZNnlHs3ihq",
              "expanded_url": "http://uefa.to/2bIiFhX",
              "display_url": "uefa.to/2bIiFhX",
              "indices": [
                92,
                115
              ]
            }
          ],
          "media": [
            {
              "id": 768763176947183616,
              "id_str": "768763176947183616",
              "indices": [
                116,
                139
              ],
              "media_url": "http://pbs.twimg.com/media/CqsyCU5WcAACNXL.jpg",
              "media_url_https": "https://pbs.twimg.com/media/CqsyCU5WcAACNXL.jpg",
              "url": "https://t.co/UdQXv90KFp",
              "display_url": "pic.twitter.com/UdQXv90KFp",
              "expanded_url": "https://twitter.com/ChampionsLeague/status/768763995792769024/photo/1",
              "type": "photo",
              "sizes": {
                "medium": {
                  "w": 1200,
                  "h": 675,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "large": {
                  "w": 1200,
                  "h": 675,
                  "resize": "fit"
                },
                "small": {
                  "w": 680,
                  "h": 383,
                  "resize": "fit"
                }
              }
            }
          ]
        },
        "extended_entities": {
          "media": [
            {
              "id": 768763176947183616,
              "id_str": "768763176947183616",
              "indices": [
                116,
                139
              ],
              "media_url": "http://pbs.twimg.com/media/CqsyCU5WcAACNXL.jpg",
              "media_url_https": "https://pbs.twimg.com/media/CqsyCU5WcAACNXL.jpg",
              "url": "https://t.co/UdQXv90KFp",
              "display_url": "pic.twitter.com/UdQXv90KFp",
              "expanded_url": "https://twitter.com/ChampionsLeague/status/768763995792769024/photo/1",
              "type": "photo",
              "sizes": {
                "medium": {
                  "w": 1200,
                  "h": 675,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "large": {
                  "w": 1200,
                  "h": 675,
                  "resize": "fit"
                },
                "small": {
                  "w": 680,
                  "h": 383,
                  "resize": "fit"
                }
              }
            }
          ]
        },
        "metadata": {
          "iso_language_code": "en",
          "result_type": "recent"
        },
        "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
          "id": 627673190,
          "id_str": "627673190",
          "name": "Champions League",
          "screen_name": "ChampionsLeague",
          "location": "Nyon, Vaud",
          "description": "The official home of the UEFA Champions League on Twitter.     Spanish account: @LigadeCampeones U19: @UEFAYouthLeague",
          "url": "http://t.co/SaEqJzcLkT",
          "entities": {
            "url": {
              "urls": [
                {
                  "url": "http://t.co/SaEqJzcLkT",
                  "expanded_url": "http://uefa.to/qK4PqI",
                  "display_url": "uefa.to/qK4PqI",
                  "indices": [
                    0,
                    22
                  ]
                }
              ]
            },
            "description": {
              "urls": []
            }
          },
          "protected": false,
          "followers_count": 12325092,
          "friends_count": 639,
          "listed_count": 14980,
          "created_at": "Thu Jul 05 19:43:40 +0000 2012",
          "favourites_count": 768,
          "utc_offset": 7200,
          "time_zone": "Amsterdam",
          "geo_enabled": false,
          "verified": true,
          "statuses_count": 41704,
          "lang": "en",
          "contributors_enabled": false,
          "is_translator": false,
          "is_translation_enabled": true,
          "profile_background_color": "022330",
          "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/616679637687648258/trkDBuou.jpg",
          "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/616679637687648258/trkDBuou.jpg",
          "profile_background_tile": false,
          "profile_image_url": "http://pbs.twimg.com/profile_images/616969183948054528/mF1Oxcly_normal.jpg",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/616969183948054528/mF1Oxcly_normal.jpg",
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/627673190/1470389010",
          "profile_link_color": "3B94D9",
          "profile_sidebar_border_color": "FFFFFF",
          "profile_sidebar_fill_color": "DDEEF6",
          "profile_text_color": "333333",
          "profile_use_background_image": true,
          "has_extended_profile": false,
          "default_profile": false,
          "default_profile_image": false,
          "following": null,
          "follow_request_sent": null,
          "notifications": null
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 3082,
        "favorite_count": 2464,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
      },
      "is_quote_status": false,
      "retweet_count": 3082,
      "favorite_count": 0,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
    {
      "created_at": "Thu Aug 25 12:40:32 +0000 2016",
      "id": 768790159261372420,
      "id_str": "768790159261372420",
      "text": "RT @UEFAcom_pt: Messi vence Golo da Época com 34% dos votos, @ricardinho10ofi em 2º com 13% #GoalOfTheSeason https://t.co/pH61N28Svd https:…",
      "truncated": false,
      "entities": {
        "hashtags": [
          {
            "text": "GoalOfTheSeason",
            "indices": [
              92,
              108
            ]
          }
        ],
        "symbols": [],
        "user_mentions": [
          {
            "screen_name": "UEFAcom_pt",
            "name": "UEFA.com português",
            "id": 74426840,
            "id_str": "74426840",
            "indices": [
              3,
              14
            ]
          },
          {
            "screen_name": "ricardinho10ofi",
            "name": "ricardinho10",
            "id": 1895388408,
            "id_str": "1895388408",
            "indices": [
              61,
              77
            ]
          }
        ],
        "urls": [
          {
            "url": "https://t.co/pH61N28Svd",
            "expanded_url": "http://spr.ly/6016BNWma",
            "display_url": "spr.ly/6016BNWma",
            "indices": [
              109,
              132
            ]
          }
        ],
        "media": [
          {
            "id": 768763319247368192,
            "id_str": "768763319247368192",
            "indices": [
              139,
              140
            ],
            "media_url": "http://pbs.twimg.com/media/CqsyKnAW8AAc6Iw.jpg",
            "media_url_https": "https://pbs.twimg.com/media/CqsyKnAW8AAc6Iw.jpg",
            "url": "https://t.co/l4tDAE8zmq",
            "display_url": "pic.twitter.com/l4tDAE8zmq",
            "expanded_url": "https://twitter.com/UEFAcom_pt/status/768763321315160064/photo/1",
            "type": "photo",
            "sizes": {
              "small": {
                "w": 680,
                "h": 383,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "large": {
                "w": 1024,
                "h": 576,
                "resize": "fit"
              },
              "medium": {
                "w": 1024,
                "h": 576,
                "resize": "fit"
              }
            },
            "source_status_id": 768763321315160064,
            "source_status_id_str": "768763321315160064",
            "source_user_id": 74426840,
            "source_user_id_str": "74426840"
          }
        ]
      },
      "extended_entities": {
        "media": [
          {
            "id": 768763319247368192,
            "id_str": "768763319247368192",
            "indices": [
              139,
              140
            ],
            "media_url": "http://pbs.twimg.com/media/CqsyKnAW8AAc6Iw.jpg",
            "media_url_https": "https://pbs.twimg.com/media/CqsyKnAW8AAc6Iw.jpg",
            "url": "https://t.co/l4tDAE8zmq",
            "display_url": "pic.twitter.com/l4tDAE8zmq",
            "expanded_url": "https://twitter.com/UEFAcom_pt/status/768763321315160064/photo/1",
            "type": "photo",
            "sizes": {
              "small": {
                "w": 680,
                "h": 383,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "large": {
                "w": 1024,
                "h": 576,
                "resize": "fit"
              },
              "medium": {
                "w": 1024,
                "h": 576,
                "resize": "fit"
              }
            },
            "source_status_id": 768763321315160064,
            "source_status_id_str": "768763321315160064",
            "source_user_id": 74426840,
            "source_user_id_str": "74426840"
          }
        ]
      },
      "metadata": {
        "iso_language_code": "pt",
        "result_type": "recent"
      },
      "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 101505372,
        "id_str": "101505372",
        "name": "Francisco Tortosa",
        "screen_name": "bipancho",
        "location": "",
        "description": "Colaboro con @VpSotodelReal y ahora escribo un blog. Se hace lo que se puede…",
        "url": "https://t.co/KhgyVKDMps",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "https://t.co/KhgyVKDMps",
                "expanded_url": "http://bipanchoyelmundo.blogspot.com.es",
                "display_url": "bipanchoyelmundo.blogspot.com.es",
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 584,
        "friends_count": 1058,
        "listed_count": 26,
        "created_at": "Sun Jan 03 15:44:58 +0000 2010",
        "favourites_count": 3069,
        "utc_offset": 7200,
        "time_zone": "Madrid",
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 36372,
        "lang": "es",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "3B94D9",
        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/689897278371405825/Yub6euNE.jpg",
        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/689897278371405825/Yub6euNE.jpg",
        "profile_background_tile": true,
        "profile_image_url": "http://pbs.twimg.com/profile_images/595351884715679744/M8w1sw-x_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/595351884715679744/M8w1sw-x_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/101505372/1358977480",
        "profile_link_color": "3B94D9",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "retweeted_status": {
        "created_at": "Thu Aug 25 10:53:53 +0000 2016",
        "id": 768763321315160064,
        "id_str": "768763321315160064",
        "text": "Messi vence Golo da Época com 34% dos votos, @ricardinho10ofi em 2º com 13% #GoalOfTheSeason https://t.co/pH61N28Svd https://t.co/l4tDAE8zmq",
        "truncated": false,
        "entities": {
          "hashtags": [
            {
              "text": "GoalOfTheSeason",
              "indices": [
                76,
                92
              ]
            }
          ],
          "symbols": [],
          "user_mentions": [
            {
              "screen_name": "ricardinho10ofi",
              "name": "ricardinho10",
              "id": 1895388408,
              "id_str": "1895388408",
              "indices": [
                45,
                61
              ]
            }
          ],
          "urls": [
            {
              "url": "https://t.co/pH61N28Svd",
              "expanded_url": "http://spr.ly/6016BNWma",
              "display_url": "spr.ly/6016BNWma",
              "indices": [
                93,
                116
              ]
            }
          ],
          "media": [
            {
              "id": 768763319247368192,
              "id_str": "768763319247368192",
              "indices": [
                117,
                140
              ],
              "media_url": "http://pbs.twimg.com/media/CqsyKnAW8AAc6Iw.jpg",
              "media_url_https": "https://pbs.twimg.com/media/CqsyKnAW8AAc6Iw.jpg",
              "url": "https://t.co/l4tDAE8zmq",
              "display_url": "pic.twitter.com/l4tDAE8zmq",
              "expanded_url": "https://twitter.com/UEFAcom_pt/status/768763321315160064/photo/1",
              "type": "photo",
              "sizes": {
                "small": {
                  "w": 680,
                  "h": 383,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "large": {
                  "w": 1024,
                  "h": 576,
                  "resize": "fit"
                },
                "medium": {
                  "w": 1024,
                  "h": 576,
                  "resize": "fit"
                }
              }
            }
          ]
        },
        "extended_entities": {
          "media": [
            {
              "id": 768763319247368192,
              "id_str": "768763319247368192",
              "indices": [
                117,
                140
              ],
              "media_url": "http://pbs.twimg.com/media/CqsyKnAW8AAc6Iw.jpg",
              "media_url_https": "https://pbs.twimg.com/media/CqsyKnAW8AAc6Iw.jpg",
              "url": "https://t.co/l4tDAE8zmq",
              "display_url": "pic.twitter.com/l4tDAE8zmq",
              "expanded_url": "https://twitter.com/UEFAcom_pt/status/768763321315160064/photo/1",
              "type": "photo",
              "sizes": {
                "small": {
                  "w": 680,
                  "h": 383,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "large": {
                  "w": 1024,
                  "h": 576,
                  "resize": "fit"
                },
                "medium": {
                  "w": 1024,
                  "h": 576,
                  "resize": "fit"
                }
              }
            }
          ]
        },
        "metadata": {
          "iso_language_code": "pt",
          "result_type": "recent"
        },
        "source": "<a href=\"http://www.sprinklr.com\" rel=\"nofollow\">Sprinklr</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
          "id": 74426840,
          "id_str": "74426840",
          "name": "UEFA.com português",
          "screen_name": "UEFAcom_pt",
          "location": "Nyon, Suíça",
          "description": "http://t.co/EJw4M0skDS - o site do futebol europeu. Aceda às mais recentes notícias das provas nacionais, da UEFA e muito mais.",
          "url": "http://t.co/y8k8ACdKsi",
          "entities": {
            "url": {
              "urls": [
                {
                  "url": "http://t.co/y8k8ACdKsi",
                  "expanded_url": "http://pt.uefa.com",
                  "display_url": "pt.uefa.com",
                  "indices": [
                    0,
                    22
                  ]
                }
              ]
            },
            "description": {
              "urls": [
                {
                  "url": "http://t.co/EJw4M0skDS",
                  "expanded_url": "http://UEFA.com",
                  "display_url": "UEFA.com",
                  "indices": [
                    0,
                    22
                  ]
                }
              ]
            }
          },
          "protected": false,
          "followers_count": 21262,
          "friends_count": 337,
          "listed_count": 148,
          "created_at": "Tue Sep 15 11:46:13 +0000 2009",
          "favourites_count": 358,
          "utc_offset": 7200,
          "time_zone": "Bern",
          "geo_enabled": false,
          "verified": true,
          "statuses_count": 37989,
          "lang": "en",
          "contributors_enabled": false,
          "is_translator": false,
          "is_translation_enabled": false,
          "profile_background_color": "757575",
          "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/645991406/l7lchmt752npd6bu6x95.jpeg",
          "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/645991406/l7lchmt752npd6bu6x95.jpeg",
          "profile_background_tile": false,
          "profile_image_url": "http://pbs.twimg.com/profile_images/2513830189/94v8gwo3ja768qrnuwpr_normal.jpeg",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/2513830189/94v8gwo3ja768qrnuwpr_normal.jpeg",
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/74426840/1425384288",
          "profile_link_color": "0084B4",
          "profile_sidebar_border_color": "000000",
          "profile_sidebar_fill_color": "000000",
          "profile_text_color": "6B6B6B",
          "profile_use_background_image": true,
          "has_extended_profile": false,
          "default_profile": false,
          "default_profile_image": false,
          "following": null,
          "follow_request_sent": null,
          "notifications": null
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 13,
        "favorite_count": 9,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "pt"
      },
      "is_quote_status": false,
      "retweet_count": 13,
      "favorite_count": 0,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "pt"
    },
    {
      "created_at": "Thu Aug 25 12:40:31 +0000 2016",
      "id": 768790157902446592,
      "id_str": "768790157902446592",
      "text": "RT @FCBarcelona: Leo Messi wins UEFA goal of the season award for #UCL goal against Roma https://t.co/FC5sTMA6wg https://t.co/6S9fDSR9nH",
      "truncated": false,
      "entities": {
        "hashtags": [
          {
            "text": "UCL",
            "indices": [
              66,
              70
            ]
          }
        ],
        "symbols": [],
        "user_mentions": [
          {
            "screen_name": "FCBarcelona",
            "name": "FC Barcelona",
            "id": 96951800,
            "id_str": "96951800",
            "indices": [
              3,
              15
            ]
          }
        ],
        "urls": [
          {
            "url": "https://t.co/FC5sTMA6wg",
            "expanded_url": "http://ow.ly/cNm8303zx63",
            "display_url": "ow.ly/cNm8303zx63",
            "indices": [
              89,
              112
            ]
          }
        ],
        "media": [
          {
            "id": 768784248065097728,
            "id_str": "768784248065097728",
            "indices": [
              113,
              136
            ],
            "media_url": "http://pbs.twimg.com/media/CqtFM07WAAAuJSd.jpg",
            "media_url_https": "https://pbs.twimg.com/media/CqtFM07WAAAuJSd.jpg",
            "url": "https://t.co/6S9fDSR9nH",
            "display_url": "pic.twitter.com/6S9fDSR9nH",
            "expanded_url": "https://twitter.com/FCBarcelona/status/768784249977761792/photo/1",
            "type": "photo",
            "sizes": {
              "medium": {
                "w": 960,
                "h": 540,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "small": {
                "w": 680,
                "h": 383,
                "resize": "fit"
              },
              "large": {
                "w": 960,
                "h": 540,
                "resize": "fit"
              }
            },
            "source_status_id": 768784249977761792,
            "source_status_id_str": "768784249977761792",
            "source_user_id": 96951800,
            "source_user_id_str": "96951800"
          }
        ]
      },
      "extended_entities": {
        "media": [
          {
            "id": 768784248065097728,
            "id_str": "768784248065097728",
            "indices": [
              113,
              136
            ],
            "media_url": "http://pbs.twimg.com/media/CqtFM07WAAAuJSd.jpg",
            "media_url_https": "https://pbs.twimg.com/media/CqtFM07WAAAuJSd.jpg",
            "url": "https://t.co/6S9fDSR9nH",
            "display_url": "pic.twitter.com/6S9fDSR9nH",
            "expanded_url": "https://twitter.com/FCBarcelona/status/768784249977761792/photo/1",
            "type": "photo",
            "sizes": {
              "medium": {
                "w": 960,
                "h": 540,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "small": {
                "w": 680,
                "h": 383,
                "resize": "fit"
              },
              "large": {
                "w": 960,
                "h": 540,
                "resize": "fit"
              }
            },
            "source_status_id": 768784249977761792,
            "source_status_id_str": "768784249977761792",
            "source_user_id": 96951800,
            "source_user_id_str": "96951800"
          }
        ]
      },
      "metadata": {
        "iso_language_code": "en",
        "result_type": "recent"
      },
      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 81802700,
        "id_str": "81802700",
        "name": "Tomisin",
        "screen_name": "Mz_Tomiee",
        "location": "The Maldives ;)",
        "description": "25 Chelsea Fan Instagram: @mz_tomie",
        "url": null,
        "entities": {
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 607,
        "friends_count": 401,
        "listed_count": 14,
        "created_at": "Mon Oct 12 09:23:17 +0000 2009",
        "favourites_count": 3349,
        "utc_offset": 3600,
        "time_zone": "London",
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 70735,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "FFF04D",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme19/bg.gif",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme19/bg.gif",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/740169083170230273/rVPz1wOe_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/740169083170230273/rVPz1wOe_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/81802700/1399849281",
        "profile_link_color": "94168C",
        "profile_sidebar_border_color": "FFF8AD",
        "profile_sidebar_fill_color": "F6FFD1",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": true,
        "default_profile": false,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "retweeted_status": {
        "created_at": "Thu Aug 25 12:17:03 +0000 2016",
        "id": 768784249977761792,
        "id_str": "768784249977761792",
        "text": "Leo Messi wins UEFA goal of the season award for #UCL goal against Roma https://t.co/FC5sTMA6wg https://t.co/6S9fDSR9nH",
        "truncated": false,
        "entities": {
          "hashtags": [
            {
              "text": "UCL",
              "indices": [
                49,
                53
              ]
            }
          ],
          "symbols": [],
          "user_mentions": [],
          "urls": [
            {
              "url": "https://t.co/FC5sTMA6wg",
              "expanded_url": "http://ow.ly/cNm8303zx63",
              "display_url": "ow.ly/cNm8303zx63",
              "indices": [
                72,
                95
              ]
            }
          ],
          "media": [
            {
              "id": 768784248065097728,
              "id_str": "768784248065097728",
              "indices": [
                96,
                119
              ],
              "media_url": "http://pbs.twimg.com/media/CqtFM07WAAAuJSd.jpg",
              "media_url_https": "https://pbs.twimg.com/media/CqtFM07WAAAuJSd.jpg",
              "url": "https://t.co/6S9fDSR9nH",
              "display_url": "pic.twitter.com/6S9fDSR9nH",
              "expanded_url": "https://twitter.com/FCBarcelona/status/768784249977761792/photo/1",
              "type": "photo",
              "sizes": {
                "medium": {
                  "w": 960,
                  "h": 540,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "small": {
                  "w": 680,
                  "h": 383,
                  "resize": "fit"
                },
                "large": {
                  "w": 960,
                  "h": 540,
                  "resize": "fit"
                }
              }
            }
          ]
        },
        "extended_entities": {
          "media": [
            {
              "id": 768784248065097728,
              "id_str": "768784248065097728",
              "indices": [
                96,
                119
              ],
              "media_url": "http://pbs.twimg.com/media/CqtFM07WAAAuJSd.jpg",
              "media_url_https": "https://pbs.twimg.com/media/CqtFM07WAAAuJSd.jpg",
              "url": "https://t.co/6S9fDSR9nH",
              "display_url": "pic.twitter.com/6S9fDSR9nH",
              "expanded_url": "https://twitter.com/FCBarcelona/status/768784249977761792/photo/1",
              "type": "photo",
              "sizes": {
                "medium": {
                  "w": 960,
                  "h": 540,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "small": {
                  "w": 680,
                  "h": 383,
                  "resize": "fit"
                },
                "large": {
                  "w": 960,
                  "h": 540,
                  "resize": "fit"
                }
              }
            }
          ]
        },
        "metadata": {
          "iso_language_code": "en",
          "result_type": "recent"
        },
        "source": "<a href=\"http://www.hootsuite.com\" rel=\"nofollow\">Hootsuite</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
          "id": 96951800,
          "id_str": "96951800",
          "name": "FC Barcelona",
          "screen_name": "FCBarcelona",
          "location": "Barcelona",
          "description": "More official accounts @fcbarcelona_cat @fcbarcelona_es @fcbarcelona_br @fcbarcelona_jp @fcbarcelona_id, @fcbarcelona_ara @fcbarcelona_fra @fcbarcelona_tr",
          "url": "https://t.co/tLKuK0LpM4",
          "entities": {
            "url": {
              "urls": [
                {
                  "url": "https://t.co/tLKuK0LpM4",
                  "expanded_url": "http://www.fcbarcelona.com",
                  "display_url": "fcbarcelona.com",
                  "indices": [
                    0,
                    23
                  ]
                }
              ]
            },
            "description": {
              "urls": []
            }
          },
          "protected": false,
          "followers_count": 18389017,
          "friends_count": 61,
          "listed_count": 28340,
          "created_at": "Tue Dec 15 09:53:50 +0000 2009",
          "favourites_count": 99,
          "utc_offset": 7200,
          "time_zone": "Paris",
          "geo_enabled": false,
          "verified": true,
          "statuses_count": 78777,
          "lang": "en",
          "contributors_enabled": false,
          "is_translator": false,
          "is_translation_enabled": true,
          "profile_background_color": "000000",
          "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/533286076765306881/Bh7wB5M8.jpeg",
          "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/533286076765306881/Bh7wB5M8.jpeg",
          "profile_background_tile": false,
          "profile_image_url": "http://pbs.twimg.com/profile_images/716628251062509568/NsKY1Nxf_normal.jpg",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/716628251062509568/NsKY1Nxf_normal.jpg",
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/96951800/1464900257",
          "profile_link_color": "9B0034",
          "profile_sidebar_border_color": "FFFFFF",
          "profile_sidebar_fill_color": "CBC9C4",
          "profile_text_color": "333333",
          "profile_use_background_image": false,
          "has_extended_profile": false,
          "default_profile": false,
          "default_profile_image": false,
          "following": null,
          "follow_request_sent": null,
          "notifications": null
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 380,
        "favorite_count": 583,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
      },
      "is_quote_status": false,
      "retweet_count": 380,
      "favorite_count": 0,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
    {
      "created_at": "Thu Aug 25 12:40:31 +0000 2016",
      "id": 768790157814276096,
      "id_str": "768790157814276096",
      "text": "RT @FCBarcelona: Leo Messi wins UEFA goal of the season award for #UCL goal against Roma https://t.co/FC5sTMA6wg https://t.co/6S9fDSR9nH",
      "truncated": false,
      "entities": {
        "hashtags": [
          {
            "text": "UCL",
            "indices": [
              66,
              70
            ]
          }
        ],
        "symbols": [],
        "user_mentions": [
          {
            "screen_name": "FCBarcelona",
            "name": "FC Barcelona",
            "id": 96951800,
            "id_str": "96951800",
            "indices": [
              3,
              15
            ]
          }
        ],
        "urls": [
          {
            "url": "https://t.co/FC5sTMA6wg",
            "expanded_url": "http://ow.ly/cNm8303zx63",
            "display_url": "ow.ly/cNm8303zx63",
            "indices": [
              89,
              112
            ]
          }
        ],
        "media": [
          {
            "id": 768784248065097728,
            "id_str": "768784248065097728",
            "indices": [
              113,
              136
            ],
            "media_url": "http://pbs.twimg.com/media/CqtFM07WAAAuJSd.jpg",
            "media_url_https": "https://pbs.twimg.com/media/CqtFM07WAAAuJSd.jpg",
            "url": "https://t.co/6S9fDSR9nH",
            "display_url": "pic.twitter.com/6S9fDSR9nH",
            "expanded_url": "https://twitter.com/FCBarcelona/status/768784249977761792/photo/1",
            "type": "photo",
            "sizes": {
              "medium": {
                "w": 960,
                "h": 540,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "small": {
                "w": 680,
                "h": 383,
                "resize": "fit"
              },
              "large": {
                "w": 960,
                "h": 540,
                "resize": "fit"
              }
            },
            "source_status_id": 768784249977761792,
            "source_status_id_str": "768784249977761792",
            "source_user_id": 96951800,
            "source_user_id_str": "96951800"
          }
        ]
      },
      "extended_entities": {
        "media": [
          {
            "id": 768784248065097728,
            "id_str": "768784248065097728",
            "indices": [
              113,
              136
            ],
            "media_url": "http://pbs.twimg.com/media/CqtFM07WAAAuJSd.jpg",
            "media_url_https": "https://pbs.twimg.com/media/CqtFM07WAAAuJSd.jpg",
            "url": "https://t.co/6S9fDSR9nH",
            "display_url": "pic.twitter.com/6S9fDSR9nH",
            "expanded_url": "https://twitter.com/FCBarcelona/status/768784249977761792/photo/1",
            "type": "photo",
            "sizes": {
              "medium": {
                "w": 960,
                "h": 540,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "small": {
                "w": 680,
                "h": 383,
                "resize": "fit"
              },
              "large": {
                "w": 960,
                "h": 540,
                "resize": "fit"
              }
            },
            "source_status_id": 768784249977761792,
            "source_status_id_str": "768784249977761792",
            "source_user_id": 96951800,
            "source_user_id_str": "96951800"
          }
        ]
      },
      "metadata": {
        "iso_language_code": "en",
        "result_type": "recent"
      },
      "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 1162928154,
        "id_str": "1162928154",
        "name": "Matt",
        "screen_name": "MattYekane",
        "location": "",
        "description": "Ngwana wa Modimo | Rap\n\nBarcelona FC\n \nArsenal\n\nKaizer Chiefs \n\nIG: Mattyekane",
        "url": null,
        "entities": {
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 214,
        "friends_count": 288,
        "listed_count": 7,
        "created_at": "Sat Feb 09 13:18:01 +0000 2013",
        "favourites_count": 1877,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 3247,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/766739543475314688/-6B8mIr3_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/766739543475314688/-6B8mIr3_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/1162928154/1471640109",
        "profile_link_color": "0084B4",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "retweeted_status": {
        "created_at": "Thu Aug 25 12:17:03 +0000 2016",
        "id": 768784249977761792,
        "id_str": "768784249977761792",
        "text": "Leo Messi wins UEFA goal of the season award for #UCL goal against Roma https://t.co/FC5sTMA6wg https://t.co/6S9fDSR9nH",
        "truncated": false,
        "entities": {
          "hashtags": [
            {
              "text": "UCL",
              "indices": [
                49,
                53
              ]
            }
          ],
          "symbols": [],
          "user_mentions": [],
          "urls": [
            {
              "url": "https://t.co/FC5sTMA6wg",
              "expanded_url": "http://ow.ly/cNm8303zx63",
              "display_url": "ow.ly/cNm8303zx63",
              "indices": [
                72,
                95
              ]
            }
          ],
          "media": [
            {
              "id": 768784248065097728,
              "id_str": "768784248065097728",
              "indices": [
                96,
                119
              ],
              "media_url": "http://pbs.twimg.com/media/CqtFM07WAAAuJSd.jpg",
              "media_url_https": "https://pbs.twimg.com/media/CqtFM07WAAAuJSd.jpg",
              "url": "https://t.co/6S9fDSR9nH",
              "display_url": "pic.twitter.com/6S9fDSR9nH",
              "expanded_url": "https://twitter.com/FCBarcelona/status/768784249977761792/photo/1",
              "type": "photo",
              "sizes": {
                "medium": {
                  "w": 960,
                  "h": 540,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "small": {
                  "w": 680,
                  "h": 383,
                  "resize": "fit"
                },
                "large": {
                  "w": 960,
                  "h": 540,
                  "resize": "fit"
                }
              }
            }
          ]
        },
        "extended_entities": {
          "media": [
            {
              "id": 768784248065097728,
              "id_str": "768784248065097728",
              "indices": [
                96,
                119
              ],
              "media_url": "http://pbs.twimg.com/media/CqtFM07WAAAuJSd.jpg",
              "media_url_https": "https://pbs.twimg.com/media/CqtFM07WAAAuJSd.jpg",
              "url": "https://t.co/6S9fDSR9nH",
              "display_url": "pic.twitter.com/6S9fDSR9nH",
              "expanded_url": "https://twitter.com/FCBarcelona/status/768784249977761792/photo/1",
              "type": "photo",
              "sizes": {
                "medium": {
                  "w": 960,
                  "h": 540,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "small": {
                  "w": 680,
                  "h": 383,
                  "resize": "fit"
                },
                "large": {
                  "w": 960,
                  "h": 540,
                  "resize": "fit"
                }
              }
            }
          ]
        },
        "metadata": {
          "iso_language_code": "en",
          "result_type": "recent"
        },
        "source": "<a href=\"http://www.hootsuite.com\" rel=\"nofollow\">Hootsuite</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
          "id": 96951800,
          "id_str": "96951800",
          "name": "FC Barcelona",
          "screen_name": "FCBarcelona",
          "location": "Barcelona",
          "description": "More official accounts @fcbarcelona_cat @fcbarcelona_es @fcbarcelona_br @fcbarcelona_jp @fcbarcelona_id, @fcbarcelona_ara @fcbarcelona_fra @fcbarcelona_tr",
          "url": "https://t.co/tLKuK0LpM4",
          "entities": {
            "url": {
              "urls": [
                {
                  "url": "https://t.co/tLKuK0LpM4",
                  "expanded_url": "http://www.fcbarcelona.com",
                  "display_url": "fcbarcelona.com",
                  "indices": [
                    0,
                    23
                  ]
                }
              ]
            },
            "description": {
              "urls": []
            }
          },
          "protected": false,
          "followers_count": 18389017,
          "friends_count": 61,
          "listed_count": 28340,
          "created_at": "Tue Dec 15 09:53:50 +0000 2009",
          "favourites_count": 99,
          "utc_offset": 7200,
          "time_zone": "Paris",
          "geo_enabled": false,
          "verified": true,
          "statuses_count": 78777,
          "lang": "en",
          "contributors_enabled": false,
          "is_translator": false,
          "is_translation_enabled": true,
          "profile_background_color": "000000",
          "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/533286076765306881/Bh7wB5M8.jpeg",
          "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/533286076765306881/Bh7wB5M8.jpeg",
          "profile_background_tile": false,
          "profile_image_url": "http://pbs.twimg.com/profile_images/716628251062509568/NsKY1Nxf_normal.jpg",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/716628251062509568/NsKY1Nxf_normal.jpg",
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/96951800/1464900257",
          "profile_link_color": "9B0034",
          "profile_sidebar_border_color": "FFFFFF",
          "profile_sidebar_fill_color": "CBC9C4",
          "profile_text_color": "333333",
          "profile_use_background_image": false,
          "has_extended_profile": false,
          "default_profile": false,
          "default_profile_image": false,
          "following": null,
          "follow_request_sent": null,
          "notifications": null
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 380,
        "favorite_count": 583,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
      },
      "is_quote_status": false,
      "retweet_count": 380,
      "favorite_count": 0,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
    {
      "created_at": "Thu Aug 25 12:40:31 +0000 2016",
      "id": 768790156644065280,
      "id_str": "768790156644065280",
      "text": "RT @adnanjanuzaj: Happy to get my first goal for the club and through to the next round 🙌 #SAFC https://t.co/dQOUkXJZSX",
      "truncated": false,
      "entities": {
        "hashtags": [
          {
            "text": "SAFC",
            "indices": [
              90,
              95
            ]
          }
        ],
        "symbols": [],
        "user_mentions": [
          {
            "screen_name": "adnanjanuzaj",
            "name": "Adnan Januzaj",
            "id": 3092818390,
            "id_str": "3092818390",
            "indices": [
              3,
              16
            ]
          }
        ],
        "urls": [],
        "media": [
          {
            "id": 768563288061935616,
            "id_str": "768563288061935616",
            "indices": [
              96,
              119
            ],
            "media_url": "http://pbs.twimg.com/media/Cqp8PQxWgAALDMA.jpg",
            "media_url_https": "https://pbs.twimg.com/media/Cqp8PQxWgAALDMA.jpg",
            "url": "https://t.co/dQOUkXJZSX",
            "display_url": "pic.twitter.com/dQOUkXJZSX",
            "expanded_url": "https://twitter.com/adnanjanuzaj/status/768563298841354240/photo/1",
            "type": "photo",
            "sizes": {
              "large": {
                "w": 742,
                "h": 698,
                "resize": "fit"
              },
              "medium": {
                "w": 742,
                "h": 698,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "small": {
                "w": 680,
                "h": 640,
                "resize": "fit"
              }
            },
            "source_status_id": 768563298841354240,
            "source_status_id_str": "768563298841354240",
            "source_user_id": 3092818390,
            "source_user_id_str": "3092818390"
          }
        ]
      },
      "extended_entities": {
        "media": [
          {
            "id": 768563288061935616,
            "id_str": "768563288061935616",
            "indices": [
              96,
              119
            ],
            "media_url": "http://pbs.twimg.com/media/Cqp8PQxWgAALDMA.jpg",
            "media_url_https": "https://pbs.twimg.com/media/Cqp8PQxWgAALDMA.jpg",
            "url": "https://t.co/dQOUkXJZSX",
            "display_url": "pic.twitter.com/dQOUkXJZSX",
            "expanded_url": "https://twitter.com/adnanjanuzaj/status/768563298841354240/photo/1",
            "type": "photo",
            "sizes": {
              "large": {
                "w": 742,
                "h": 698,
                "resize": "fit"
              },
              "medium": {
                "w": 742,
                "h": 698,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "small": {
                "w": 680,
                "h": 640,
                "resize": "fit"
              }
            },
            "source_status_id": 768563298841354240,
            "source_status_id_str": "768563298841354240",
            "source_user_id": 3092818390,
            "source_user_id_str": "3092818390"
          }
        ]
      },
      "metadata": {
        "iso_language_code": "en",
        "result_type": "recent"
      },
      "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 564971176,
        "id_str": "564971176",
        "name": "John Dammy",
        "screen_name": "johndami14",
        "location": "",
        "description": "Don't trust anyone #MUFC",
        "url": null,
        "entities": {
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 3018,
        "friends_count": 2961,
        "listed_count": 173,
        "created_at": "Fri Apr 27 22:37:04 +0000 2012",
        "favourites_count": 30714,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 35359,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/667455399407304704/Bbb3DFCL_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/667455399407304704/Bbb3DFCL_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/564971176/1451479295",
        "profile_link_color": "0084B4",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "retweeted_status": {
        "created_at": "Wed Aug 24 21:39:04 +0000 2016",
        "id": 768563298841354240,
        "id_str": "768563298841354240",
        "text": "Happy to get my first goal for the club and through to the next round 🙌 #SAFC https://t.co/dQOUkXJZSX",
        "truncated": false,
        "entities": {
          "hashtags": [
            {
              "text": "SAFC",
              "indices": [
                72,
                77
              ]
            }
          ],
          "symbols": [],
          "user_mentions": [],
          "urls": [],
          "media": [
            {
              "id": 768563288061935616,
              "id_str": "768563288061935616",
              "indices": [
                78,
                101
              ],
              "media_url": "http://pbs.twimg.com/media/Cqp8PQxWgAALDMA.jpg",
              "media_url_https": "https://pbs.twimg.com/media/Cqp8PQxWgAALDMA.jpg",
              "url": "https://t.co/dQOUkXJZSX",
              "display_url": "pic.twitter.com/dQOUkXJZSX",
              "expanded_url": "https://twitter.com/adnanjanuzaj/status/768563298841354240/photo/1",
              "type": "photo",
              "sizes": {
                "large": {
                  "w": 742,
                  "h": 698,
                  "resize": "fit"
                },
                "medium": {
                  "w": 742,
                  "h": 698,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "small": {
                  "w": 680,
                  "h": 640,
                  "resize": "fit"
                }
              }
            }
          ]
        },
        "extended_entities": {
          "media": [
            {
              "id": 768563288061935616,
              "id_str": "768563288061935616",
              "indices": [
                78,
                101
              ],
              "media_url": "http://pbs.twimg.com/media/Cqp8PQxWgAALDMA.jpg",
              "media_url_https": "https://pbs.twimg.com/media/Cqp8PQxWgAALDMA.jpg",
              "url": "https://t.co/dQOUkXJZSX",
              "display_url": "pic.twitter.com/dQOUkXJZSX",
              "expanded_url": "https://twitter.com/adnanjanuzaj/status/768563298841354240/photo/1",
              "type": "photo",
              "sizes": {
                "large": {
                  "w": 742,
                  "h": 698,
                  "resize": "fit"
                },
                "medium": {
                  "w": 742,
                  "h": 698,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "small": {
                  "w": 680,
                  "h": 640,
                  "resize": "fit"
                }
              }
            }
          ]
        },
        "metadata": {
          "iso_language_code": "en",
          "result_type": "recent"
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
          "id": 3092818390,
          "id_str": "3092818390",
          "name": "Adnan Januzaj",
          "screen_name": "adnanjanuzaj",
          "location": "",
          "description": "Official Twitter of Adnan Januzaj. @ManUtd & @BelRedDevils. On loan at @Sunderlandafc  https://t.co/RuifdjUvJW",
          "url": "https://t.co/aFZBkUWZVv",
          "entities": {
            "url": {
              "urls": [
                {
                  "url": "https://t.co/aFZBkUWZVv",
                  "expanded_url": "https://www.facebook.com/AdnanJanuzaj",
                  "display_url": "facebook.com/AdnanJanuzaj",
                  "indices": [
                    0,
                    23
                  ]
                }
              ]
            },
            "description": {
              "urls": [
                {
                  "url": "https://t.co/RuifdjUvJW",
                  "expanded_url": "https://Instagram.com/adnanjanuzaj",
                  "display_url": "Instagram.com/adnanjanuzaj",
                  "indices": [
                    87,
                    110
                  ]
                }
              ]
            }
          },
          "protected": false,
          "followers_count": 479976,
          "friends_count": 63,
          "listed_count": 1231,
          "created_at": "Tue Mar 17 14:29:21 +0000 2015",
          "favourites_count": 85,
          "utc_offset": null,
          "time_zone": null,
          "geo_enabled": false,
          "verified": true,
          "statuses_count": 164,
          "lang": "en-gb",
          "contributors_enabled": false,
          "is_translator": false,
          "is_translation_enabled": false,
          "profile_background_color": "C0DEED",
          "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/578940171275497472/OfQEY_mY.jpeg",
          "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/578940171275497472/OfQEY_mY.jpeg",
          "profile_background_tile": true,
          "profile_image_url": "http://pbs.twimg.com/profile_images/747833057869180929/-8ExRbRx_normal.jpg",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/747833057869180929/-8ExRbRx_normal.jpg",
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/3092818390/1471262065",
          "profile_link_color": "0084B4",
          "profile_sidebar_border_color": "C0DEED",
          "profile_sidebar_fill_color": "DDEEF6",
          "profile_text_color": "333333",
          "profile_use_background_image": true,
          "has_extended_profile": false,
          "default_profile": false,
          "default_profile_image": false,
          "following": null,
          "follow_request_sent": null,
          "notifications": null
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 1973,
        "favorite_count": 5094,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
      },
      "is_quote_status": false,
      "retweet_count": 1973,
      "favorite_count": 0,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
    {
      "created_at": "Thu Aug 25 12:40:30 +0000 2016",
      "id": 768790154525888516,
      "id_str": "768790154525888516",
      "text": "#LiputanBola:  PSM Makassar Resmi Coret Sembilan Pemain https://t.co/xehUENjsPw Bola Itu Bundar",
      "truncated": false,
      "entities": {
        "hashtags": [
          {
            "text": "LiputanBola",
            "indices": [
              0,
              12
            ]
          }
        ],
        "symbols": [],
        "user_mentions": [],
        "urls": [
          {
            "url": "https://t.co/xehUENjsPw",
            "expanded_url": "http://dlvr.it/M6SWrg",
            "display_url": "dlvr.it/M6SWrg",
            "indices": [
              56,
              79
            ]
          }
        ]
      },
      "metadata": {
        "iso_language_code": "in",
        "result_type": "recent"
      },
      "source": "<a href=\"http://dlvr.it\" rel=\"nofollow\">dlvr.it</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 1324552584,
        "id_str": "1324552584",
        "name": "kapalperang",
        "screen_name": "KapalPerang",
        "location": "belahan perairan bumi",
        "description": "Tak seperti yang kau pikirkan :))",
        "url": "https://t.co/5XjZpyXa7Z",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "https://t.co/5XjZpyXa7Z",
                "expanded_url": "http://www.world.com",
                "display_url": "world.com",
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 577,
        "friends_count": 166,
        "listed_count": 8,
        "created_at": "Wed Apr 03 13:12:58 +0000 2013",
        "favourites_count": 7,
        "utc_offset": 28800,
        "time_zone": "Beijing",
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 79507,
        "lang": "id",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/3471059476/91fd3f0fe5612dc6fc27ec59fadf379d_normal.png",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/3471059476/91fd3f0fe5612dc6fc27ec59fadf379d_normal.png",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/1324552584/1364995286",
        "profile_link_color": "0084B4",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 0,
      "favorite_count": 0,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "in"
    },
    {
      "created_at": "Thu Aug 25 12:40:30 +0000 2016",
      "id": 768790153733214210,
      "id_str": "768790153733214210",
      "text": "RT @TheRaceDraft: You can't show up to the gym for a month after getting dunked on like that  https://t.co/XfH8T9AH8P &lt;nigga that goal 4 ft",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [
          {
            "screen_name": "TheRaceDraft",
            "name": "Racial Draft",
            "id": 750773413,
            "id_str": "750773413",
            "indices": [
              3,
              16
            ]
          }
        ],
        "urls": [],
        "media": [
          {
            "id": 768617550473297920,
            "id_str": "768617550473297920",
            "indices": [
              94,
              117
            ],
            "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/768617550473297920/pu/img/EX5ralk2JGF-rHlT.jpg",
            "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/768617550473297920/pu/img/EX5ralk2JGF-rHlT.jpg",
            "url": "https://t.co/XfH8T9AH8P",
            "display_url": "pic.twitter.com/XfH8T9AH8P",
            "expanded_url": "https://twitter.com/jordynadams10/status/768617625068920838/video/1",
            "type": "photo",
            "sizes": {
              "small": {
                "w": 340,
                "h": 604,
                "resize": "fit"
              },
              "large": {
                "w": 720,
                "h": 1280,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "medium": {
                "w": 600,
                "h": 1067,
                "resize": "fit"
              }
            },
            "source_status_id": 768617625068920838,
            "source_status_id_str": "768617625068920838",
            "source_user_id": 3100663377,
            "source_user_id_str": "3100663377"
          }
        ]
      },
      "extended_entities": {
        "media": [
          {
            "id": 768617550473297920,
            "id_str": "768617550473297920",
            "indices": [
              94,
              117
            ],
            "media_url": "http://pbs.twimg.com/ext_tw_video_thumb/768617550473297920/pu/img/EX5ralk2JGF-rHlT.jpg",
            "media_url_https": "https://pbs.twimg.com/ext_tw_video_thumb/768617550473297920/pu/img/EX5ralk2JGF-rHlT.jpg",
            "url": "https://t.co/XfH8T9AH8P",
            "display_url": "pic.twitter.com/XfH8T9AH8P",
            "expanded_url": "https://twitter.com/jordynadams10/status/768617625068920838/video/1",
            "type": "video",
            "sizes": {
              "small": {
                "w": 340,
                "h": 604,
                "resize": "fit"
              },
              "large": {
                "w": 720,
                "h": 1280,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "medium": {
                "w": 600,
                "h": 1067,
                "resize": "fit"
              }
            },
            "source_status_id": 768617625068920838,
            "source_status_id_str": "768617625068920838",
            "source_user_id": 3100663377,
            "source_user_id_str": "3100663377",
            "video_info": {
              "aspect_ratio": [
                9,
                16
              ],
              "duration_millis": 15200,
              "variants": [
                {
                  "bitrate": 320000,
                  "content_type": "video/mp4",
                  "url": "https://video.twimg.com/ext_tw_video/768617550473297920/pu/vid/180x320/z6AstK7DB-xZqagd.mp4"
                },
                {
                  "bitrate": 832000,
                  "content_type": "video/mp4",
                  "url": "https://video.twimg.com/ext_tw_video/768617550473297920/pu/vid/360x640/4agJXd4rI6TV7Gft.mp4"
                },
                {
                  "bitrate": 2176000,
                  "content_type": "video/mp4",
                  "url": "https://video.twimg.com/ext_tw_video/768617550473297920/pu/vid/720x1280/Om4L3m-9IfJXpERJ.mp4"
                },
                {
                  "content_type": "application/x-mpegURL",
                  "url": "https://video.twimg.com/ext_tw_video/768617550473297920/pu/pl/u12HwQ693Hlqpkuy.m3u8"
                },
                {
                  "content_type": "application/dash+xml",
                  "url": "https://video.twimg.com/ext_tw_video/768617550473297920/pu/pl/u12HwQ693Hlqpkuy.mpd"
                }
              ]
            },
            "additional_media_info": {
              "monetizable": false
            }
          }
        ]
      },
      "metadata": {
        "iso_language_code": "en",
        "result_type": "recent"
      },
      "source": "<a href=\"http://www.echofon.com/\" rel=\"nofollow\">Echofon</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 28794636,
        "id_str": "28794636",
        "name": "SheSaidMe",
        "screen_name": "SheSaidMe",
        "location": "H2⃣o",
        "description": "The type of Dick that make a white girl say I love that nigger!",
        "url": null,
        "entities": {
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 1101,
        "friends_count": 228,
        "listed_count": 26,
        "created_at": "Sat Apr 04 13:44:46 +0000 2009",
        "favourites_count": 0,
        "utc_offset": -14400,
        "time_zone": "Eastern Time (US & Canada)",
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 167832,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "1A1B1F",
        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/391984663/bottle.jpg",
        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/391984663/bottle.jpg",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/737693995703275520/fB1ndaen_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/737693995703275520/fB1ndaen_normal.jpg",
        "profile_link_color": "2FC2EF",
        "profile_sidebar_border_color": "181A1E",
        "profile_sidebar_fill_color": "252429",
        "profile_text_color": "666666",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": false,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 0,
      "favorite_count": 0,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
    {
      "created_at": "Thu Aug 25 12:40:30 +0000 2016",
      "id": 768790152764358657,
      "id_str": "768790152764358657",
      "text": "There are 4 players in a team – 2 forwards, 1 pivot position and 1 goal defender. #PoloFacts https://t.co/ETHqskJcY8",
      "truncated": false,
      "entities": {
        "hashtags": [
          {
            "text": "PoloFacts",
            "indices": [
              82,
              92
            ]
          }
        ],
        "symbols": [],
        "user_mentions": [],
        "urls": [],
        "media": [
          {
            "id": 768790150755258368,
            "id_str": "768790150755258368",
            "indices": [
              93,
              116
            ],
            "media_url": "http://pbs.twimg.com/media/CqtKkaKWEAAJQtv.jpg",
            "media_url_https": "https://pbs.twimg.com/media/CqtKkaKWEAAJQtv.jpg",
            "url": "https://t.co/ETHqskJcY8",
            "display_url": "pic.twitter.com/ETHqskJcY8",
            "expanded_url": "https://twitter.com/PoloForHeroes/status/768790152764358657/photo/1",
            "type": "photo",
            "sizes": {
              "medium": {
                "w": 1163,
                "h": 599,
                "resize": "fit"
              },
              "large": {
                "w": 1163,
                "h": 599,
                "resize": "fit"
              },
              "small": {
                "w": 680,
                "h": 350,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              }
            }
          }
        ]
      },
      "extended_entities": {
        "media": [
          {
            "id": 768790150755258368,
            "id_str": "768790150755258368",
            "indices": [
              93,
              116
            ],
            "media_url": "http://pbs.twimg.com/media/CqtKkaKWEAAJQtv.jpg",
            "media_url_https": "https://pbs.twimg.com/media/CqtKkaKWEAAJQtv.jpg",
            "url": "https://t.co/ETHqskJcY8",
            "display_url": "pic.twitter.com/ETHqskJcY8",
            "expanded_url": "https://twitter.com/PoloForHeroes/status/768790152764358657/photo/1",
            "type": "photo",
            "sizes": {
              "medium": {
                "w": 1163,
                "h": 599,
                "resize": "fit"
              },
              "large": {
                "w": 1163,
                "h": 599,
                "resize": "fit"
              },
              "small": {
                "w": 680,
                "h": 350,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              }
            }
          }
        ]
      },
      "metadata": {
        "iso_language_code": "en",
        "result_type": "recent"
      },
      "source": "<a href=\"http://www.hootsuite.com\" rel=\"nofollow\">Hootsuite</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 2789297167,
        "id_str": "2789297167",
        "name": "Polo For Heroes UK",
        "screen_name": "PoloForHeroes",
        "location": "Windsor ",
        "description": "‘‘Our mission is to share with you our passion for polo and food by providing the ultimate sporting experience’’",
        "url": "http://t.co/FbZTBy925I",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "http://t.co/FbZTBy925I",
                "expanded_url": "http://www.poloforheroes.co.uk",
                "display_url": "poloforheroes.co.uk",
                "indices": [
                  0,
                  22
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 2863,
        "friends_count": 2610,
        "listed_count": 22,
        "created_at": "Thu Sep 04 06:39:25 +0000 2014",
        "favourites_count": 256,
        "utc_offset": 3600,
        "time_zone": "London",
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 4794,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/575600741311610880/rrTcdwL9_normal.jpeg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/575600741311610880/rrTcdwL9_normal.jpeg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/2789297167/1461830785",
        "profile_link_color": "0084B4",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 0,
      "favorite_count": 0,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
    {
      "created_at": "Thu Aug 25 12:40:30 +0000 2016",
      "id": 768790152411910144,
      "id_str": "768790152411910144",
      "text": "#LiputanBola:  Timnas Thailand U-19 Libas Klub Jepang https://t.co/htosQNbuI6 Bola Itu Bundar",
      "truncated": false,
      "entities": {
        "hashtags": [
          {
            "text": "LiputanBola",
            "indices": [
              0,
              12
            ]
          }
        ],
        "symbols": [],
        "user_mentions": [],
        "urls": [
          {
            "url": "https://t.co/htosQNbuI6",
            "expanded_url": "http://dlvr.it/M6SWqf",
            "display_url": "dlvr.it/M6SWqf",
            "indices": [
              54,
              77
            ]
          }
        ]
      },
      "metadata": {
        "iso_language_code": "in",
        "result_type": "recent"
      },
      "source": "<a href=\"http://dlvr.it\" rel=\"nofollow\">dlvr.it</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 1324552584,
        "id_str": "1324552584",
        "name": "kapalperang",
        "screen_name": "KapalPerang",
        "location": "belahan perairan bumi",
        "description": "Tak seperti yang kau pikirkan :))",
        "url": "https://t.co/5XjZpyXa7Z",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "https://t.co/5XjZpyXa7Z",
                "expanded_url": "http://www.world.com",
                "display_url": "world.com",
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 577,
        "friends_count": 166,
        "listed_count": 8,
        "created_at": "Wed Apr 03 13:12:58 +0000 2013",
        "favourites_count": 7,
        "utc_offset": 28800,
        "time_zone": "Beijing",
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 79507,
        "lang": "id",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/3471059476/91fd3f0fe5612dc6fc27ec59fadf379d_normal.png",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/3471059476/91fd3f0fe5612dc6fc27ec59fadf379d_normal.png",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/1324552584/1364995286",
        "profile_link_color": "0084B4",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 0,
      "favorite_count": 0,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "in"
    },
    {
      "created_at": "Thu Aug 25 12:40:30 +0000 2016",
      "id": 768790151950639104,
      "id_str": "768790151950639104",
      "text": "Proudest fucking goal. Hope I don't get exposed https://t.co/U8iaI66nsh",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [],
        "urls": [],
        "media": [
          {
            "id": 768790147810885632,
            "id_str": "768790147810885632",
            "indices": [
              48,
              71
            ],
            "media_url": "http://pbs.twimg.com/media/CqtKkPMWgAAiqfo.jpg",
            "media_url_https": "https://pbs.twimg.com/media/CqtKkPMWgAAiqfo.jpg",
            "url": "https://t.co/U8iaI66nsh",
            "display_url": "pic.twitter.com/U8iaI66nsh",
            "expanded_url": "https://twitter.com/Tacocow17/status/768790151950639104/photo/1",
            "type": "photo",
            "sizes": {
              "small": {
                "w": 382,
                "h": 680,
                "resize": "fit"
              },
              "medium": {
                "w": 675,
                "h": 1200,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "large": {
                "w": 750,
                "h": 1334,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "extended_entities": {
        "media": [
          {
            "id": 768790147810885632,
            "id_str": "768790147810885632",
            "indices": [
              48,
              71
            ],
            "media_url": "http://pbs.twimg.com/media/CqtKkPMWgAAiqfo.jpg",
            "media_url_https": "https://pbs.twimg.com/media/CqtKkPMWgAAiqfo.jpg",
            "url": "https://t.co/U8iaI66nsh",
            "display_url": "pic.twitter.com/U8iaI66nsh",
            "expanded_url": "https://twitter.com/Tacocow17/status/768790151950639104/photo/1",
            "type": "photo",
            "sizes": {
              "small": {
                "w": 382,
                "h": 680,
                "resize": "fit"
              },
              "medium": {
                "w": 675,
                "h": 1200,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "large": {
                "w": 750,
                "h": 1334,
                "resize": "fit"
              }
            }
          }
        ]
      },
      "metadata": {
        "iso_language_code": "en",
        "result_type": "recent"
      },
      "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 3381059387,
        "id_str": "3381059387",
        "name": "----------",
        "screen_name": "Tacocow17",
        "location": "alcatraz island",
        "description": "yt:Tacocow",
        "url": "https://t.co/VFaFTyg7cD",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "https://t.co/VFaFTyg7cD",
                "expanded_url": "https://www.nps.gov/alca/",
                "display_url": "nps.gov/alca/",
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 75,
        "friends_count": 88,
        "listed_count": 1,
        "created_at": "Sat Jul 18 00:11:59 +0000 2015",
        "favourites_count": 3085,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 880,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/762021054143401985/ML6HIyUS_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/762021054143401985/ML6HIyUS_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/3381059387/1465433303",
        "profile_link_color": "0084B4",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": true,
        "default_profile": true,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 0,
      "favorite_count": 0,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    },
    {
      "created_at": "Thu Aug 25 12:40:29 +0000 2016",
      "id": 768790149572419584,
      "id_str": "768790149572419584",
      "text": "#LiputanBola:  Alfred Riedl Bakal Manfaatkan Jeda ISC Saat PON https://t.co/TErbob0A9J Bola Itu Bundar",
      "truncated": false,
      "entities": {
        "hashtags": [
          {
            "text": "LiputanBola",
            "indices": [
              0,
              12
            ]
          }
        ],
        "symbols": [],
        "user_mentions": [],
        "urls": [
          {
            "url": "https://t.co/TErbob0A9J",
            "expanded_url": "http://dlvr.it/M6SWpK",
            "display_url": "dlvr.it/M6SWpK",
            "indices": [
              63,
              86
            ]
          }
        ]
      },
      "metadata": {
        "iso_language_code": "in",
        "result_type": "recent"
      },
      "source": "<a href=\"http://dlvr.it\" rel=\"nofollow\">dlvr.it</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 1324552584,
        "id_str": "1324552584",
        "name": "kapalperang",
        "screen_name": "KapalPerang",
        "location": "belahan perairan bumi",
        "description": "Tak seperti yang kau pikirkan :))",
        "url": "https://t.co/5XjZpyXa7Z",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "https://t.co/5XjZpyXa7Z",
                "expanded_url": "http://www.world.com",
                "display_url": "world.com",
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 577,
        "friends_count": 166,
        "listed_count": 8,
        "created_at": "Wed Apr 03 13:12:58 +0000 2013",
        "favourites_count": 7,
        "utc_offset": 28800,
        "time_zone": "Beijing",
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 79507,
        "lang": "id",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/3471059476/91fd3f0fe5612dc6fc27ec59fadf379d_normal.png",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/3471059476/91fd3f0fe5612dc6fc27ec59fadf379d_normal.png",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/1324552584/1364995286",
        "profile_link_color": "0084B4",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 0,
      "favorite_count": 0,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "in"
    },
    {
      "created_at": "Thu Aug 25 12:40:28 +0000 2016",
      "id": 768790145852071936,
      "id_str": "768790145852071936",
      "text": "#LiputanBola:  Jan Saragih Janji Persija Jakarta Akan Mati-Matian Hadapi Bali United https://t.co/tGdnySXz0V Bola Itu Bundar",
      "truncated": false,
      "entities": {
        "hashtags": [
          {
            "text": "LiputanBola",
            "indices": [
              0,
              12
            ]
          }
        ],
        "symbols": [],
        "user_mentions": [],
        "urls": [
          {
            "url": "https://t.co/tGdnySXz0V",
            "expanded_url": "http://dlvr.it/M6SWmb",
            "display_url": "dlvr.it/M6SWmb",
            "indices": [
              85,
              108
            ]
          }
        ]
      },
      "metadata": {
        "iso_language_code": "in",
        "result_type": "recent"
      },
      "source": "<a href=\"http://dlvr.it\" rel=\"nofollow\">dlvr.it</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 1324552584,
        "id_str": "1324552584",
        "name": "kapalperang",
        "screen_name": "KapalPerang",
        "location": "belahan perairan bumi",
        "description": "Tak seperti yang kau pikirkan :))",
        "url": "https://t.co/5XjZpyXa7Z",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "https://t.co/5XjZpyXa7Z",
                "expanded_url": "http://www.world.com",
                "display_url": "world.com",
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 577,
        "friends_count": 166,
        "listed_count": 8,
        "created_at": "Wed Apr 03 13:12:58 +0000 2013",
        "favourites_count": 7,
        "utc_offset": 28800,
        "time_zone": "Beijing",
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 79507,
        "lang": "id",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/3471059476/91fd3f0fe5612dc6fc27ec59fadf379d_normal.png",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/3471059476/91fd3f0fe5612dc6fc27ec59fadf379d_normal.png",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/1324552584/1364995286",
        "profile_link_color": "0084B4",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 0,
      "favorite_count": 0,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "in"
    },
    {
      "created_at": "Thu Aug 25 12:40:27 +0000 2016",
      "id": 768790139594084353,
      "id_str": "768790139594084353",
      "text": "#LiputanBola:  Zeyar Shwe Myay Perpanjang Kontrak Dedi Gusmawan https://t.co/O9yfe7kEAw Bola Itu Bundar",
      "truncated": false,
      "entities": {
        "hashtags": [
          {
            "text": "LiputanBola",
            "indices": [
              0,
              12
            ]
          }
        ],
        "symbols": [],
        "user_mentions": [],
        "urls": [
          {
            "url": "https://t.co/O9yfe7kEAw",
            "expanded_url": "http://dlvr.it/M6SWjm",
            "display_url": "dlvr.it/M6SWjm",
            "indices": [
              64,
              87
            ]
          }
        ]
      },
      "metadata": {
        "iso_language_code": "in",
        "result_type": "recent"
      },
      "source": "<a href=\"http://dlvr.it\" rel=\"nofollow\">dlvr.it</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 1324552584,
        "id_str": "1324552584",
        "name": "kapalperang",
        "screen_name": "KapalPerang",
        "location": "belahan perairan bumi",
        "description": "Tak seperti yang kau pikirkan :))",
        "url": "https://t.co/5XjZpyXa7Z",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "https://t.co/5XjZpyXa7Z",
                "expanded_url": "http://www.world.com",
                "display_url": "world.com",
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 577,
        "friends_count": 166,
        "listed_count": 8,
        "created_at": "Wed Apr 03 13:12:58 +0000 2013",
        "favourites_count": 7,
        "utc_offset": 28800,
        "time_zone": "Beijing",
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 79507,
        "lang": "id",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/3471059476/91fd3f0fe5612dc6fc27ec59fadf379d_normal.png",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/3471059476/91fd3f0fe5612dc6fc27ec59fadf379d_normal.png",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/1324552584/1364995286",
        "profile_link_color": "0084B4",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "is_quote_status": false,
      "retweet_count": 0,
      "favorite_count": 0,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "in"
    },
    {
      "created_at": "Thu Aug 25 12:40:27 +0000 2016",
      "id": 768790138595872768,
      "id_str": "768790138595872768",
      "text": "RT @SkolBros: Hey Wild fans, Are you ready for the new goal song?\n\n#LetsGoalCrazy\n\nOrder Here \nhttps://t.co/DKEWM11igb https://t.co/5KLTdoI…",
      "truncated": false,
      "entities": {
        "hashtags": [
          {
            "text": "LetsGoalCrazy",
            "indices": [
              67,
              81
            ]
          }
        ],
        "symbols": [],
        "user_mentions": [
          {
            "screen_name": "SkolBros",
            "name": "Skol Bros",
            "id": 4847435888,
            "id_str": "4847435888",
            "indices": [
              3,
              12
            ]
          }
        ],
        "urls": [
          {
            "url": "https://t.co/DKEWM11igb",
            "expanded_url": "https://teechip.com/letsgoalcrazy",
            "display_url": "teechip.com/letsgoalcrazy",
            "indices": [
              95,
              118
            ]
          }
        ],
        "media": [
          {
            "id": 768585831795666944,
            "id_str": "768585831795666944",
            "indices": [
              119,
              140
            ],
            "media_url": "http://pbs.twimg.com/media/CqqQveuUMAAaaXW.jpg",
            "media_url_https": "https://pbs.twimg.com/media/CqqQveuUMAAaaXW.jpg",
            "url": "https://t.co/5KLTdoICte",
            "display_url": "pic.twitter.com/5KLTdoICte",
            "expanded_url": "https://twitter.com/SkolBros/status/768585844034641921/photo/1",
            "type": "photo",
            "sizes": {
              "medium": {
                "w": 750,
                "h": 959,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "small": {
                "w": 532,
                "h": 680,
                "resize": "fit"
              },
              "large": {
                "w": 750,
                "h": 959,
                "resize": "fit"
              }
            },
            "source_status_id": 768585844034641921,
            "source_status_id_str": "768585844034641921",
            "source_user_id": 4847435888,
            "source_user_id_str": "4847435888"
          }
        ]
      },
      "extended_entities": {
        "media": [
          {
            "id": 768585831795666944,
            "id_str": "768585831795666944",
            "indices": [
              119,
              140
            ],
            "media_url": "http://pbs.twimg.com/media/CqqQveuUMAAaaXW.jpg",
            "media_url_https": "https://pbs.twimg.com/media/CqqQveuUMAAaaXW.jpg",
            "url": "https://t.co/5KLTdoICte",
            "display_url": "pic.twitter.com/5KLTdoICte",
            "expanded_url": "https://twitter.com/SkolBros/status/768585844034641921/photo/1",
            "type": "photo",
            "sizes": {
              "medium": {
                "w": 750,
                "h": 959,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "small": {
                "w": 532,
                "h": 680,
                "resize": "fit"
              },
              "large": {
                "w": 750,
                "h": 959,
                "resize": "fit"
              }
            },
            "source_status_id": 768585844034641921,
            "source_status_id_str": "768585844034641921",
            "source_user_id": 4847435888,
            "source_user_id_str": "4847435888"
          },
          {
            "id": 768585831804055552,
            "id_str": "768585831804055552",
            "indices": [
              119,
              140
            ],
            "media_url": "http://pbs.twimg.com/media/CqqQvewUMAAGe-A.jpg",
            "media_url_https": "https://pbs.twimg.com/media/CqqQvewUMAAGe-A.jpg",
            "url": "https://t.co/5KLTdoICte",
            "display_url": "pic.twitter.com/5KLTdoICte",
            "expanded_url": "https://twitter.com/SkolBros/status/768585844034641921/photo/1",
            "type": "photo",
            "sizes": {
              "small": {
                "w": 503,
                "h": 680,
                "resize": "fit"
              },
              "thumb": {
                "w": 150,
                "h": 150,
                "resize": "crop"
              },
              "medium": {
                "w": 750,
                "h": 1014,
                "resize": "fit"
              },
              "large": {
                "w": 750,
                "h": 1014,
                "resize": "fit"
              }
            },
            "source_status_id": 768585844034641921,
            "source_status_id_str": "768585844034641921",
            "source_user_id": 4847435888,
            "source_user_id_str": "4847435888"
          }
        ]
      },
      "metadata": {
        "iso_language_code": "en",
        "result_type": "recent"
      },
      "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "user": {
        "id": 264953609,
        "id_str": "264953609",
        "name": "Kyle Thorsen™",
        "screen_name": "KyleThorsen",
        "location": "Live in CHI roots in MN",
        "description": "#DesignThinking #DataScience #ProductDesign #Golf #Hockey #Vikings #Whisky | Founder: @productfc @FlourishData & @WhiskyWorks",
        "url": "https://t.co/usKeJWHqcH",
        "entities": {
          "url": {
            "urls": [
              {
                "url": "https://t.co/usKeJWHqcH",
                "expanded_url": "http://productfight.club",
                "display_url": "productfight.club",
                "indices": [
                  0,
                  23
                ]
              }
            ]
          },
          "description": {
            "urls": []
          }
        },
        "protected": false,
        "followers_count": 846,
        "friends_count": 1954,
        "listed_count": 139,
        "created_at": "Sat Mar 12 18:57:30 +0000 2011",
        "favourites_count": 885,
        "utc_offset": -18000,
        "time_zone": "Central Time (US & Canada)",
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 4853,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "1A1B1F",
        "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/436894733915275266/j6hVgSlH.jpeg",
        "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/436894733915275266/j6hVgSlH.jpeg",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/587279042149228545/ISisIJNa_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/587279042149228545/ISisIJNa_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/264953609/1398195986",
        "profile_link_color": "3B94D9",
        "profile_sidebar_border_color": "FFFFFF",
        "profile_sidebar_fill_color": "C0DFEC",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": true,
        "default_profile": false,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null
      },
      "geo": null,
      "coordinates": null,
      "place": null,
      "contributors": null,
      "retweeted_status": {
        "created_at": "Wed Aug 24 23:08:39 +0000 2016",
        "id": 768585844034641921,
        "id_str": "768585844034641921",
        "text": "Hey Wild fans, Are you ready for the new goal song?\n\n#LetsGoalCrazy\n\nOrder Here \nhttps://t.co/DKEWM11igb https://t.co/5KLTdoICte",
        "truncated": false,
        "entities": {
          "hashtags": [
            {
              "text": "LetsGoalCrazy",
              "indices": [
                53,
                67
              ]
            }
          ],
          "symbols": [],
          "user_mentions": [],
          "urls": [
            {
              "url": "https://t.co/DKEWM11igb",
              "expanded_url": "https://teechip.com/letsgoalcrazy",
              "display_url": "teechip.com/letsgoalcrazy",
              "indices": [
                81,
                104
              ]
            }
          ],
          "media": [
            {
              "id": 768585831795666944,
              "id_str": "768585831795666944",
              "indices": [
                105,
                128
              ],
              "media_url": "http://pbs.twimg.com/media/CqqQveuUMAAaaXW.jpg",
              "media_url_https": "https://pbs.twimg.com/media/CqqQveuUMAAaaXW.jpg",
              "url": "https://t.co/5KLTdoICte",
              "display_url": "pic.twitter.com/5KLTdoICte",
              "expanded_url": "https://twitter.com/SkolBros/status/768585844034641921/photo/1",
              "type": "photo",
              "sizes": {
                "medium": {
                  "w": 750,
                  "h": 959,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "small": {
                  "w": 532,
                  "h": 680,
                  "resize": "fit"
                },
                "large": {
                  "w": 750,
                  "h": 959,
                  "resize": "fit"
                }
              }
            }
          ]
        },
        "extended_entities": {
          "media": [
            {
              "id": 768585831795666944,
              "id_str": "768585831795666944",
              "indices": [
                105,
                128
              ],
              "media_url": "http://pbs.twimg.com/media/CqqQveuUMAAaaXW.jpg",
              "media_url_https": "https://pbs.twimg.com/media/CqqQveuUMAAaaXW.jpg",
              "url": "https://t.co/5KLTdoICte",
              "display_url": "pic.twitter.com/5KLTdoICte",
              "expanded_url": "https://twitter.com/SkolBros/status/768585844034641921/photo/1",
              "type": "photo",
              "sizes": {
                "medium": {
                  "w": 750,
                  "h": 959,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "small": {
                  "w": 532,
                  "h": 680,
                  "resize": "fit"
                },
                "large": {
                  "w": 750,
                  "h": 959,
                  "resize": "fit"
                }
              }
            },
            {
              "id": 768585831804055552,
              "id_str": "768585831804055552",
              "indices": [
                105,
                128
              ],
              "media_url": "http://pbs.twimg.com/media/CqqQvewUMAAGe-A.jpg",
              "media_url_https": "https://pbs.twimg.com/media/CqqQvewUMAAGe-A.jpg",
              "url": "https://t.co/5KLTdoICte",
              "display_url": "pic.twitter.com/5KLTdoICte",
              "expanded_url": "https://twitter.com/SkolBros/status/768585844034641921/photo/1",
              "type": "photo",
              "sizes": {
                "small": {
                  "w": 503,
                  "h": 680,
                  "resize": "fit"
                },
                "thumb": {
                  "w": 150,
                  "h": 150,
                  "resize": "crop"
                },
                "medium": {
                  "w": 750,
                  "h": 1014,
                  "resize": "fit"
                },
                "large": {
                  "w": 750,
                  "h": 1014,
                  "resize": "fit"
                }
              }
            }
          ]
        },
        "metadata": {
          "iso_language_code": "en",
          "result_type": "recent"
        },
        "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
          "id": 4847435888,
          "id_str": "4847435888",
          "name": "Skol Bros",
          "screen_name": "SkolBros",
          "location": "Minneapolis, MN",
          "description": "Just a bunch of bros that love football, tailgating and the Minnesota Vikings.",
          "url": null,
          "entities": {
            "description": {
              "urls": []
            }
          },
          "protected": false,
          "followers_count": 3352,
          "friends_count": 4136,
          "listed_count": 24,
          "created_at": "Tue Feb 02 03:29:42 +0000 2016",
          "favourites_count": 2283,
          "utc_offset": null,
          "time_zone": null,
          "geo_enabled": false,
          "verified": false,
          "statuses_count": 2364,
          "lang": "en",
          "contributors_enabled": false,
          "is_translator": false,
          "is_translation_enabled": false,
          "profile_background_color": "F5F8FA",
          "profile_background_image_url": null,
          "profile_background_image_url_https": null,
          "profile_background_tile": false,
          "profile_image_url": "http://pbs.twimg.com/profile_images/762814454161604608/JRT2Qjwv_normal.jpg",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/762814454161604608/JRT2Qjwv_normal.jpg",
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/4847435888/1470432851",
          "profile_link_color": "2B7BB9",
          "profile_sidebar_border_color": "C0DEED",
          "profile_sidebar_fill_color": "DDEEF6",
          "profile_text_color": "333333",
          "profile_use_background_image": true,
          "has_extended_profile": false,
          "default_profile": true,
          "default_profile_image": false,
          "following": null,
          "follow_request_sent": null,
          "notifications": null
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 3,
        "favorite_count": 4,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
      },
      "is_quote_status": false,
      "retweet_count": 3,
      "favorite_count": 0,
      "favorited": false,
      "retweeted": false,
      "possibly_sensitive": false,
      "lang": "en"
    }
  ],
  "search_metadata": {
    "completed_in": 0.15,
    "max_id": 768790167826030592,
    "max_id_str": "768790167826030592",
    "next_results": "?max_id=768790138595872767&q=goal&include_entities=1",
    "query": "goal",
    "refresh_url": "?since_id=768790167826030592&q=goal&include_entities=1",
    "count": 15,
    "since_id": 0,
    "since_id_str": "0"
  }
};

export default AppComponent;