'use strict';

// var fs              = require('fs');
// var fjallfarenexcel = require('./excel/fjallfarenexcel');
// var fjallfaren      = new fjallfarenexcel();
// var crawl           = require('./process/crawl');
// var cheerio  = require('./node_modules/cheerio/lib/cheerio');


// var $ = cheerio.load('<ul id="fruits">kukuh</ul>');

// fjallfaren.setup(function(err, values) {
// 	var crawler = [];
// 	values.forEach((item, index) => {
// 		crawler.push(new crawl(item));
// 	});
// 	console.log(crawler);
// });



var Browser = require('zombie');

// // Wait until page is loaded
var browser = Browser.create();

browser.visit('http://www.fjallraven.com/barents-parka', function() {
	function pageLoaded(window) {
	    return window.document.querySelector('.image-from-not-that-simple');
	}
    browser.wait(pageLoaded, function() {
	    // console.log(browser);
	    var htmls = browser.html();
	 	console.log(htmls);
	    // console.log(browser.resources);
    });
});
// 
// browser.visit('http://www.fjallraven.com/barents-parka', function() {
// 	function pageLoaded(window) {
// 	    return window.document.querySelector('.image-from-not-that-simple');
// 	}
//     browser.wait(pageLoaded, function() {
// 		var htmls = browser.html();
// 		var $     = cheerio.load(htmls);
// 		console.log(htmls);
// 		console.log($('.image-from-not-that-simple'));
// 	 	$('.image-from-not-that-simple').each((index, element) => {
// 			var img = obj.$(element).find('a').find('img');
// 			var imageUrl = img.attr('data-zoom');
// 			console.log(imageUrl);
// 		});
//     });
// });