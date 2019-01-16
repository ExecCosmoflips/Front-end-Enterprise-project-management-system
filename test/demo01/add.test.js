var add = require('./add.js');
var expect = require('chai').expect;

describe('editor components的测试', function() {
  it('绑定值的类型的测试', function() {
    expect(add(1, 1)).to.be.equal(2);
  });

  it('设置change事件触发时间间隔的测试', function() {
    expect(add(1, 1)).to.be.equal(2);
  });

  it('是否开启本地存储的测试', function() {
    expect(add(1, 1)).to.be.equal(2);
  });

  it('create这个方法一定要在所有配置项之后调用的测试', function() {
    expect(add(1, 1)).to.be.equal(2);
  });
});
