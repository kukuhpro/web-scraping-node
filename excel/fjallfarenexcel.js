'use strict';

var path = require('path');
var root = path.resolve();

var excel = require('./excel');

var fjallfarenexcel = function() {
	this.filename = root + '/excel/files/STOCK_OPNAME_SAGARMATHA_GEAR_OK.xlsx';
	this.excel    = new excel(this.filename);
	this.heading  = ['NO'];
	this.values   = [];
	var obj       = this;

	fjallfarenexcel.prototype.setup = function(callback) {
		obj.callback = callback;
		obj.excel.workbook(this.handleWorkbook);
	};

	fjallfarenexcel.prototype.handleProcessHeadTitle = function(cells) {
		cells.forEach(function(cell, index) {
			var model = cell._value.model;
			obj.heading.push(model.value);
		});
	};

	fjallfarenexcel.prototype.handleProcessValues = function(cells) {
		var dta  = {};
		cells.forEach(function(cell, index) {
			var model = cell._value.model;
			dta[obj.heading[index]] = model.value;
		});
		obj.values.push(dta);
	};

	fjallfarenexcel.prototype.handleWorkbook = function(err, rows) {
		rows.forEach(function(row, index) {
			if (index <= 1) {
				obj.handleProcessHeadTitle(row._cells);
			} else {
				obj.handleProcessValues(row._cells);
			}
		});
		obj.callback(null, obj.values);
	};
};

module.exports = fjallfarenexcel;
	
