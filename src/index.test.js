import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
import data from './index.js';

describe('The first test', () => {
	it('should pass', () => {
		expect(true).to.equal(true);
	});
});

describe('index.html', () => {
	it('should say hello', (done) => {
		const index = fs.readFileSync('./src/index.html', 'utf-8');
		jsdom.env(index, function(err, window) {
			const h1 = window.document.getElementsByTagName('h1')[0];
			expect(h1.innerHTML).to.equal('Hello World');

			done();
			window.close();
		});
	});
});

describe('index.js', () => {
	it('envStuff', (done) => {
		expect(data).to.not.be.null;
		expect(data).to.not.be.undefined;
		expect(data.courseValue).to.equal('$1,000.00');
		expect(data.anArray[0]).to.equal(1);
		expect(data.anObject.val1).to.equal(1);
		expect(data.aFunction()).to.equal(data.courseValue);

		done();
	});
});