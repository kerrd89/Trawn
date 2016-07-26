const assert = require('chai').assert;

const World = require('../lib/world')

// describe('World', function() {
//   it('should be a function', function() {
//     var worldy = new World({});
//     assert.isFunction(World);
//   });
// });

describe('World', function() {

  it('should be a function', function() {
    var world = new World({});
    assert.isFunction(World);
  });


//   it('should have the canvas size from html', function() {
//     var canvas = document.getElementById('trawn');
//     var world = new World({});
//     assert.equal(canvas.width, 500);
//     assert.equal(canvas.height, 500);
//   })
});
