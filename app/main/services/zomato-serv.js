/* global $ */
'use strict';
angular.module('main')
	.service('Zomato', function ($log, $http) {
		this.readUrl = function (id, url) {
			var result = {};
			$http.get(url + '/menu#daily')
				.then(function (response) {
					var parseRes = parseResponse(id, response.data, true);
					result = { success: true, result: parseRes };
				},
					function (error) {
						$log.log(error);
						result = { success: false, error: error };
					});

			return result;
		};

		this.searchAsync = function (searchTerm, callback) {
			var url = 'https://www.zomato.com/cs/praha/restaurace?q=' + encodeURIComponent(searchTerm);
			$http.get(url)
				.then(function (response) {
					var searchRes = parseSearch(response.data);
					callback({ success: true, result: searchRes });
				},
					function (error) {
						$log.log(error);
						callback({ success: false, error: error });
					});
		};

		function parseResponse(id, data, parseItems) {
			if (parseItems === undefined || parseItems === null) {
				parseItems = false;
			}
			var items = [];
			var name = $(data).find('.res-name a span').text();
			var container = $(data).find('#daily-menu-container');
			var today = $(container).find('.tmi-group')[0];

			if (today && parseItems) {
				var itemselms = $(today).find('.tmi-daily');
				if (itemselms.length) {
					$.each(itemselms, function (index, item) {
						var text = $(item).find('.tmi-text-group').text().trim();
						var price = $(item).find('.tmi-price').text().trim();

						items.push({
							text: text,
							price: price
						});
					});
				}
			}

			return { id: id, name: name, menu: items };
		}

		function parseSearch(data) {
			var searchResults = $(data).find('a.result-title');
			var toReturn = [];
			for (var i in searchResults) {
				if (searchResults.hasOwnProperty(i)) {
					var element = searchResults[i];
					var name = $(element).text();
					var id = name.replace(' ', '').toLowerCase();
					var url = $(element).attr('href');
					if (name && id && url) {
						toReturn.push({ id: id, name: name, url: url });
					}
				}
			}

			return toReturn;
		}
	});
