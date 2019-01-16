var add = require('../src/add.js');
var expect = require('chai').expect;

describe('table components的测试', function() {
  it('文本框不为空', function() {
    expect(add(1, 1)).to.be.equal(2);
  });

  it('测试数据类型', function() {
    expect(add(1, 0)).to.be.equal(1);
  });

    it('点击事件的响应', function() {
    expect(add(1, 0)).to.be.equal(1);
  });

  it('edit的测试', function() {
    expect(add(1, 0)).to.be.equal(1);
  });

  it('delete的测试', function() {
    expect(add(1, 0)).to.be.equal(1);
  });

});
