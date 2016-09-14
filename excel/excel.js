'use strict';

var ExcelJs = require('exceljs');
var workbook = new ExcelJs.Workbook();

var excel = function(filename, sheetname) {
	this.filename  = filename;
	this.sheetname = sheetname;
	this.rows      = [];
	var obj        = this;

	excel.prototype.workbook = function(callback) {
		obj.callback = callback
		workbook.xlsx.readFile(this.filename).then(this.handleWorkBook);
	};

	excel.prototype.handleWorkBook = function(workbook) {
		workbook.eachSheet(obj.handleEachSheet);
	};

	excel.prototype.handleEachSheet = function(worksheet, sheetId) {
		if (worksheet.id == 1 && obj.sheetname == undefined) {
			obj.rows = worksheet._rows;
			obj.callback(null, obj.rows);
		} else if (worksheet.name == obj.sheetname) {
			obj.rows = worksheet._rows;
			obj.callback(null, obj.rows);
		}
	};
};

module.exports = excel;

// var e = new excel('./files/STOCK_OPNAME_SAGARMATHA_GEAR_OK.xlsx');
// e.workbook(function(err, rows) {
// 	console.log(rows);
// });

// console.log(e.getRows());
// var e = new excel('./files/STOCK_OPNAME_SAGARMATHA_GEAR_OK.xlsx');
// var wk = e.workbook(function(err, rows) {
// 	rows.forEach((itm, index) => {
// 		itm._cells.forEach((item, index) => {
// 			console.log(item._value.model);
// 		});
// 		if (index > 0) {
// 			throw 'exit';
// 		}
// 	});
// });

