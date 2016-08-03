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
    });

    it('prawns created with addPrawn should recognize the world', function() {
        var world = new World(200, 200);
        var prawn = new Prawn({});
        world.addPrawn(prawn);
        assert.equal(prawn.world, world);
        // assert.include(world.prawns, prawn);
    });
});

describe('World in relation to Prawns', function() {
    it('should recognize prawns added to the world', function() {
        var world = new World(200, 200);
        var prawn = new Prawn({});
        world.addPrawn(prawn);
        assert.include(world.prawns, prawn);
    });
});

describe('Prawns scootin their little prawn behinds around', function() {

  it('should move up when upArrow is called', function() {
    var world = new World(200, 200);
    var prawn = new Prawn({});
    prawn.dir = 'right';
    prawn.y = 10;
    var yValue = prawn.y;
    world.addPrawn(prawn);
    world.upArrow(0);
    assert.equal(prawn.y, yValue - prawn.speed);
  });

  it('should move down when downArrow is called', function() {
    var world = new World(200, 200);
    var prawn = new Prawn({});
    prawn.y = 10;
    prawn.dir = 'right';
    var yValue = prawn.y;
    world.addPrawn(prawn);
    world.downArrow(0);
    assert.equal(prawn.y, yValue + prawn.speed);
  });

  it('should move right when rightArrow is called', function() {
    var world = new World(200, 200);
    var prawn = new Prawn({});
    prawn.x = 10;
    var xValue = prawn.x;
    prawn.dir = 'up';
    world.addPrawn(prawn);
    world.rightArrow(0);
    assert.equal(prawn.x, xValue + prawn.speed);
  });

  it('should move left when leftArrow is called', function() {
    var world = new World(200, 200);
    var prawn = new Prawn({});
    prawn.x = 10;
    var xValue = prawn.x;
    prawn.dir = 'up';
    world.addPrawn(prawn);
    world.leftArrow(0);
    assert.equal(prawn.x, xValue - prawn.speed);
  });
});

describe('collision testing', function() {
  it('world should send alert when prawn hits edges', function() {
    var world = new World(200, 200);
    var prawn = new Prawn({});
    prawn.x = 0;
    world.checkEdges();
  });

  it('should know when it steps in poop', function() {
    var world = new World(200, 200);
    var prawn = new Prawn({});

    prawn.x = 15;
    prawn.y = 15;
    world.addPrawn(prawn);
    prawn.move();
    world.allPrawnLocations = [{x: 18, y: 15}];
    world.checkPoop();
    assert.deepEqual(world.allPrawnLocations, [{x: prawn.x, y: prawn.y}]);
  });
});
