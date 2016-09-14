'use strict';

var request = require('sync-request');

var load = function(Url) {
	this.Url  = Url;
	this.res  = request('GET', Url);
	this.body = this.res.getBody();
	var obj   = this;

	return obj;
};


module.exports = load;