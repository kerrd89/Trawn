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
    });
});
