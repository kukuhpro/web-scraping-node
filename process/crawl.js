'use strict';

var sync        = require('synchronize');
var load        = require('./load');
var cheerio     = require('../node_modules/cheerio/lib/cheerio');
var selector    = require('./selector');
var CrawlDetail = require('./crawlDetail');

var crawl = function(item) {
	var Url       = 'http://www.fjallraven.com/search/?limit=all&q=' + encodeURI(item['TYPE']);
	this.load     = new load(Url);
	this.selector = new selector(this.load);
	this.details  = [];
	var obj       = this;

	crawl.prototype.resultSearch = function() {
		obj.selector.$('li.type-configurable').each((index, elemen) => {
			var href = obj.selector.$(elemen).find('a').attr('href');
			obj.details.push(new CrawlDetail(href));
		});
	};

	this.resultSearch();
};

module.exports = crawl;