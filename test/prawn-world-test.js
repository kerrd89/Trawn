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
    it('should know about the blocks added to the world', function() {
        var world = new World(200, 200);
        var prawn = new Prawn({});
        world.addPrawn(prawn);
        assert.include(world.prawns, prawn);
    });
})
