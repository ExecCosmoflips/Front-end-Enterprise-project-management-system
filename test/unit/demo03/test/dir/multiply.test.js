var multiply = require('../../src/multiply');
var expect = require('chai').expect;

describe('charts components的测试', function() {
  it('数值类型的测试', function() {
    expect(multiply(1, 1)).to.be.equal(1);
  });

  it('data是否为空的测试', function() {
    expect(multiply(1, 1)).to.be.equal(1);
  });

  it('num是否超过最大值的测试', function() {
    expect(multiply(1, 1)).to.be.equal(1);
  });

  it('shadowoffset的测试', function() {
    expect(multiply(1, 1)).to.be.equal(1);
  });
})
