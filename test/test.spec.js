"use strict";
import expect from 'expect';
//var expect = require('expect');

describe("tests", function() {
	it("should test", function(){
		expect(1).toBe(1);
	});

	it("should be able to write to console", function() {
		expect(console).toNotBe(null);
		console.log("ConsoleTest", "Hello World!");
	});
});
//
//describe("JavaScript", function() {
//	it("should be able to write to typed Arrays given by val", function() {
//		function changeArray(buffer){
//			buffer[0] = 1;
//			buffer[1] = 2;
//			buffer[2] = 3;
//		}
//		var buf = new Uint32Array(3);
//		changeArray(buf);
//
//		var one = buf[0];
//		var two = buf[1];
//		var three = buf[2];
//
//		expect(buf).to.have.length(3);
//		expect(one).to.be(1);
//		expect(two).to.be(2);
//		expect(three).to.be(3);
//
//
//	});
//});
