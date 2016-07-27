const assert = require('chai').assert;

const World = require('../lib/world')


// describe('World', function() {
//   it('should be a function', function() {
//     var worldy = new World({});
//     assert.isFunction(World);
//   });
// });

describe('World', function() {

  it('should have width, height, and prawns', function() {
    var world = new World(100, 100);
    assert.equal(world.width, 100, world.height, 100, world.prawns, [])
  });

  // describe('addPrawn', function() {
  //   var world = new World(100, 100);
  //   var prawn = new Prawn({});
  //   world.addPrawn(prawn);
  //   assert.equal(world.prawns.length, 1);
  // it('should')
// })



//   it('should have the canvas size from html', function() {
//     var canvas = document.getElementById('trawn');
//     var world = new World({});
//     assert.equal(canvas.width, 500);
//     assert.equal(canvas.height, 500);
//   })
});
