'use strict';

var cheerio = require('../node_modules/cheerio/lib/cheerio');
var load = require

var selector = function(obj) {
	this.body = obj.body;
	this.$    = cheerio.load(this.body);
	var obj   = this;

	return obj;
};

module.exports = selector;