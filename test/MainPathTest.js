const request = require("request");
const romanApi = require("../lib/romanApi");
const endPoint = require("../config/env.json").endPoint;
const assert = require('assert');
const debug = require('../lib/options')

describe.only(`Exercise 1 Testing Roman numeral api`, function () {
	let expectedRoman, actualRoman;
	let value = '1'
	beforeEach(function (done) {
		this.timeout(550);
		request(endPoint + '3', function (error, response, body) {
			expectedRoman = romanApi.data.intToRoman(value);
			actualRoman = body;
		});
		setTimeout(done, 350);
	});

	it(`Input ${value}  should return   ${romanApi.data.intToRoman(value)}`, function (yes) {
		assert(expectedRoman == actualRoman, expectedRoman + " != " + actualRoman);
		setTimeout(yes, 400);
	})
})

describe(`Exercise 2 Checking regular expression pattern`, function () {
	let expectedRoman, actualRoman;

	let value = '1'

	beforeEach(function (done) {
		this.timeout(550);
		request(endPoint + value.toString(), function (error, response, body) {
			expectedRoman = romanApi.data.intToRoman(value);
			actualRoman = body;
		});
		setTimeout(done, 350);
	});

	it(` ${romanApi.data.intToRoman(value)} is a Roman Numeral`, function (yes) {
		assert(romanApi.data.patternMatch(actualRoman), "returned isn't a roman");
		setTimeout(yes, 400);
	})

})

describe(`Exercise 3 Adding debugging`, function () {
	let expectedRoman, actualRoman;
	let value = '3'
	beforeEach(function (done) {
		this.timeout(550);
		request(endPoint + value.toString(), function (error, response, body) {
			expectedRoman = romanApi.data.intToRoman(value);
			actualRoman = body;
		});
		setTimeout(done, 350);
	});

	it(`Input ${value}  should return   ${romanApi.data.intToRoman(value)}`, function (yes) {
		assert(expectedRoman == actualRoman, expectedRoman + " != " + actualRoman);
		setTimeout(yes, 400);
	})
})