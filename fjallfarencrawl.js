'use strict';

var fs              = require('fs');
var fjallfarenexcel = require('./excel/fjallfarenexcel');
var fjallfaren      = new fjallfarenexcel();
var crawl           = require('./process/crawl');
var cheerio  = require('./node_modules/cheerio/lib/cheerio');


var $ = cheerio.load('<ul id="fruits">kukuh</ul>');

fjallfaren.setup(function(err, values) {
	var crawler = [];
	values.forEach((item, index) => {
		crawler.push(new crawl(item));
	});
});
