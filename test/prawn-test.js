const assert = require('chai').assert;

const Prawn = require('../lib/prawn');

const World = require('../lib/world');



describe('Prawn', function() {
    context('with default attributes', function() {
        var prawn = new Prawn({});

        it('should be a function', function() {
            assert.isFunction(Prawn);
        });

        it('has default x, y, width, height, direction, world, pastLocation values, speed', function() {
            assert.equal(prawn.x, 5);
            assert.equal(prawn.y, 5);
            assert.equal(prawn.width, 5);
            assert.equal(prawn.height, 5);
            assert.equal(prawn.dir, 'right');
            assert.deepEqual(prawn.world, {worldWidth: 100, worldHeight: 100});
            assert.deepEqual(prawn.pastLocations, []);
            assert.equal(prawn.speed, 3);
        });
    });

    context('with given attributes', function() {

        var prawn = new Prawn({});
        var world = new World(200, 200);
        world.addPrawn(prawn);

        describe('moveRight', function() {
            it('should increment the x position by prawn.speed and set the direction to right', function() {
                var xValue = prawn.x;
                prawn.moveRight();
                assert.equal(prawn.x,  xValue + prawn.speed);
                assert.equal(prawn.dir, 'right');
            });
        });

        describe('moveLeft', function() {
            it('should decrement the x position by 1 and set direction to left', function() {
                var xValue = prawn.x;
                prawn.moveLeft();
                assert.equal(prawn.x, xValue - prawn.speed);
                assert.equal(prawn.dir, 'left');
            });
        });

        describe('moveUp', function() {
            it('should decrement the y position by 1 and set direction to up', function() {
                var yValue = prawn.y;
                prawn.moveUp();
                assert.equal(prawn.y, yValue - prawn.speed);
                assert.equal(prawn.dir, 'up');
            });
        });

        describe('moveDown', function() {
            it('should increment the y position by 1 and set direction to down', function() {
                var yValue = prawn.y;
                prawn.moveDown();
                assert.equal(prawn.y, yValue + prawn.speed);
                assert.equal(prawn.dir, 'down');
            });
        });

        describe('move', function() {
          it('should change x or y depending on direction', function() {
            var prawn = new Prawn({});
            var world = new World(200, 200);
            world.addPrawn(prawn);
            prawn.x = 10;
            var xValue = prawn.x;
            prawn.dir = 'right';
            prawn.move();
            assert.equal(prawn.x, xValue + prawn.speed);
          });
        });

        describe('changeDirectionRight', function() {
          it('should moveRight if direction is up or down otherwise it should continue in same direction', function() {
            var prawn = new Prawn({});
            var world = new World(200, 200);
            world.addPrawn(prawn);
            prawn.dir = 'up';
            prawn.changeDirectionRight();
            prawn.dir = 'left';
            prawn.changeDirectionRight();
            assert.equal(prawn.dir, 'left');
          });
        });

        describe('changeDirectionLeft', function() {
          it('should moveLeft if direction is up or down, otherwise it should continue in same direction', function() {
            var prawn = new Prawn({});
            var world = new World(200, 200);
            world.addPrawn(prawn);
            prawn.dir = 'down';
            prawn.changeDirectionLeft();
            assert.equal(prawn.dir, 'left');

            prawn.dir = 'right';
            prawn.changeDirectionLeft();
            assert.equal(prawn.dir, 'right');
          });
        });

      describe('changeDirectionUp', function() {
        it('should moveUp if direction is left or right, else continue in same direction', function() {
            var prawn = new Prawn({});
            var world = new World(200, 200);
            world.addPrawn(prawn);
            prawn.dir = 'left';
            prawn.changeDirectionUp();
            assert.equal(prawn.dir, 'up');
            prawn.dir = 'down';
            prawn.changeDirectionUp();
            assert.equal(prawn.dir, 'down');
        });
      });

      describe('changeDirectionDown', function() {
        it('should moveDown if direction is left or right, else continue in same direction', function() {
            var prawn = new Prawn({});
            var world = new World(200, 200);
            world.addPrawn(prawn);
            prawn.dir = 'right';
            prawn.changeDirectionDown();
            assert.equal(prawn.dir, 'down');
            prawn.dir = 'up';
            prawn.changeDirectionDown();
            assert.equal(prawn.dir, 'up');
        });
      });
    });

    // describe('update list of pastLocation property with poop', function() {
    //   // it('should update pastLocations array with its current location', function() {
    //   //   var prawn = new Prawn({});
    //   //   var world = new World(200, 200);
    //   //   world.addPrawn(prawn);
    //   //   prawn.x = 15;
    //   //   prawn.y = 15;
    //   //   prawn.width = 10;
    //   //   prawn.height = 10;
    //   //   prawn.poop();
    //   //   assert.deepEqual(world.allPrawnLocations, [{x: 15, y: 15}, {x: 25, y: 15}, {x: 25, y: 25}, {x: 15, y: 25}]);
    //   // });

      it('should update add to pastLocations array each time the prawn moves', function() {
        var prawn = new Prawn({});
        var world = new World(200, 200);
        world.addPrawn(prawn);
        prawn.x = 15;
        prawn.y = 15;
        prawn.moveLeft();
        prawn.moveUp();
        assert.equal(world.allPrawnLocations.length, 8);
      });
});
