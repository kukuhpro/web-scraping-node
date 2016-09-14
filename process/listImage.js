'use strict';

var cheerio  = require('../node_modules/cheerio/lib/cheerio');
var downloadimage = require('./downloadImage');

var listImage = function(html) {
	console.log(html);
	this.html   = html;
	this.$      = cheerio.load(html);
	this.images = [];
	var obj     = this;


	listImage.prototype.process = function() {
		obj.$('.image-from-not-that-simple').each((index, element) => {
			var img = obj.$(element).find('a').find('img');
			var imageUrl = img.attr('data-zoom');
			console.log(imageUrl);
			obj.images.push(new downloadimage(imageUrl));
		});
	};

	this.process();
}; 

module.exports = listImage;