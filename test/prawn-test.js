const assert = require('chai').assert;

const Prawn = require('../lib/prawn');


describe('Prawn', function() {
    context('with default attributes', function() {
        var prawn = new Prawn({});

        it('should be a function', function() {
            assert.isFunction(Prawn);
        });

        it('has default x, y, and direction values', function() {
            assert.equal(prawn.x, 5);
            assert.equal(prawn.y, 5);
        });
    });


    context('with given attributes', function() {

        var prawn = new Prawn({})

        describe('moveRight', function() {
            it('should increment the x position by 1 and set the direction to right', function() {
                var xValue = prawn.x;
                prawn.moveRight();
                assert.equal(prawn.x, xValue + 1);
                assert.equal(prawn.dir, 'right');
            });
        });

        describe('moveLeft', function() {
            it('should decrement the x position by 1 and set direction to left', function() {
                var xValue = prawn.x;
                prawn.moveLeft();
                assert.equal(prawn.x, xValue - 1);
                assert.equal(prawn.dir, 'left');
            });
        });

        describe('moveUp', function() {
            it('should decrement the y position by 1 and set direction to up', function() {
                var yValue = prawn.y;
                prawn.moveUp();
                assert.equal(prawn.y, yValue - 1);
                assert.equal(prawn.dir, 'up');
            });
        });

        describe('moveDown', function() {
            it('should increment the y position by 1 and set direction to down', function() {
                var yValue = prawn.y;
                prawn.moveDown();
                assert.equal(prawn.y, yValue + 1);
                assert.equal(prawn.dir, 'down');

            });
        });

        describe('move', function() {
          it('should change x or y depending on direction', function() {
            var prawn = new Prawn({});
            var xValue = prawn.x;
            prawn.move();
            assert.equal(prawn.x, xValue - 1)
          });
        });

        describe('changeDirectionRight', function() {
          it('should moveRight if direction is up or down otherwise it should continue in same direction', function() {
            var prawn = new Prawn({});
            prawn.dir = 'up';
            prawn.changeDirectionRight();

            prawn.dir = 'left';
            prawn.changeDirectionRight();
            assert.equal(prawn.dir, 'left')
          })
        })

        describe('changeDirectionLeft', function() {
          it('should moveLeft if direction is up or down, otherwise it should continue in same direction', function() {
            var prawn = new Prawn({});
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
            prawn.dir = 'right';
            prawn.changeDirectionDown();
            assert.equal(prawn.dir, 'down');

            prawn.dir = 'up';
            prawn.changeDirectionDown();
            assert.equal(prawn.dir, 'up');
        });
      });




    });
});
