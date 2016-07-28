const assert = require('chai').assert;

const World = require('../lib/world');

const Prawn = require('../lib/prawn');

describe('Prawn-world relationship', function() {
    it('prawns can recognize the world', function() {
        var world = new World(200, 200);
        var prawn = new Prawn({
            world: world
        });
        assert.equal(prawn.world, world);
    })

    it('prawns created with addPrawn should recognize the world', function() {
        var world = new World(200, 200);
        var prawn = new Prawn({});
        world.addPrawn(prawn);
        assert.equal(prawn.world, world);
        // assert.include(world.prawns, prawn);
    })
});

describe('World in relation to Prawns', function() {
    it('should recognize prawns added to the world', function() {
        var world = new World(200, 200);
        var prawn = new Prawn({});
        world.addPrawn(prawn);
        assert.include(world.prawns, prawn);
    });
})

describe('Prawns scootin their little prawn behinds around', function() {

  it('should move up when upArrow is called', function() {
    var world = new World(200, 200);
    var prawn = new Prawn({});
    prawn.dir = 'right';
    prawn.y = 10;
    world.addPrawn(prawn);
    world.upArrow();
    assert.equal(prawn.y, 9)
  });

  it('should move down when downArrow is called', function() {
    var world = new World(200, 200);
    var prawn = new Prawn({});
    prawn.y = 10;
    prawn.dir = 'right';
    world.addPrawn(prawn);
    world.downArrow();
    assert.equal(prawn.y, 11)
  });

  it('should move right when rightArrow is called', function() {
    var world = new World(200, 200);
    var prawn = new Prawn({});
    prawn.x = 10;
    prawn.dir = 'up';
    world.addPrawn(prawn);
    world.rightArrow();
    assert.equal(prawn.x, 11)
  });

  it('should move left when leftArrow is called', function() {
    var world = new World(200, 200);
    var prawn = new Prawn({});
    prawn.x = 10;
    prawn.dir = 'up'
    world.addPrawn(prawn);
    world.leftArrow();
    assert.equal(prawn.x, 9)
  });
});

describe('collision testing', function() {
  it('world should send alert when prawn hits edges', function() {
    var world = new World(200, 200);
    var prawn = new Prawn({});
    prawn.x = 0;
    world.checkEdges();
  })
})

describe('recognizing own poop', function() {
  it('the prawn should not be able to step in its own poop', function() {
  var world = new World(200, 200);
     var prawn = new Prawn({});
     prawn.x = 15;
     prawn.y = 15;
     prawn.move();
     prawn.pastLocations = {x: 16, y: 15};
     world.checkPoop();
     assert.deepEqual(prawn.pastLocations, {x: prawn.x, y: prawn.y});
  });
});
