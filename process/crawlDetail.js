'use strict';

var Browser   = require('zombie');
var load      = require('./load');
var cheerio   = require('../node_modules/cheerio/lib/cheerio');
var listimage = require('./listImage');
var selector  = require('./selector');

var crawlDetail = function(href) {
	this.load       = new load(href);
	this.selector   = new selector(this.load);
	this.browser    = Browser.create();
	this.listsHtmls = [];
	var obj         = this;

	crawlDetail.prototype.waitSelector = function(window) {
		return window.document.querySelector('.image-from-not-that-simple');
	};

	crawlDetail.prototype.processing = function() {
		console.log(obj.load.Url);
		obj.browser.visit(obj.load.Url, function() {
			console.log(obj.load.Url);
			obj.browser.wait(obj.waitSelector, function() {
				console.log(obj.browser.html());
				obj.listsHtmls.push(new listimage(obj.browser.html()));
			});
		});
	};

	this.processing();
};

module.exports = crawlDetail;