const assert = require('assert');
const firstTest = require('./nodefarmTests.js');
describe('Test', function () {
  describe('#testMocha', function () {
    it("should return string 'It's alive!!!'", function () {
      assert.equal(firstTest._test.testMocha(), "It's alive!!!");
    });
  });
});
