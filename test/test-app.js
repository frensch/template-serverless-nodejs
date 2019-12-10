var app = require('../app/app.js');
var tools = require('../app/tools.js');
var assert = require('assert');
var sinon = require('sinon');


describe('Test App', function () {
    describe('Test SampleApp', function () {

        beforeEach('create before each App', function() {
            this.sampleToolFake = sinon.fake();
            sinon.replace(tools, 'sampleTool', this.sampleToolFake)
        });

        afterEach('remove before each App', function() {
            sinon.restore();
        });

        it('single test SampleApp', function () {

            let ret = app.sampleApp({body: "{'param1': 'value1'}"}, (p1, p2)=> {return p2;});

            assert.equal(this.sampleToolFake.callCount, 1);
            assert.deepEqual(this.sampleToolFake.firstCall.args[0], "input value");
            assert.deepEqual(ret.statusCode, 200);
        });

        it('another test SampleApp', function (done) {
            done();
        });
    });
});