const assert = require('chai').assert;

const Prawn = require('../lib/prawn')


describe('Prawn', function() {
    context('with default attributes', function() {
        var prawn = new Prawn({});

        it('should be a function', function() {
            assert.isFunction(Prawn);
        });

        it('has default x, y, and direction values', function() {
            assert.equal(prawn.x, 5);
            assert.equal(prawn.y, 5);
            // assert.equal(prawn.direction, 'left');
        });
    });


    context('with given attributes', function() {
        // var xValue = 7;
        // var yValue = 7;
        // var direction = 'left';
        // var options = {x: xValue, y: yValue, dir: direction}

        describe('moveRight', function() {
            it('should increment the x position by 1', function() {
                var prawn = new Prawn({})
                var xValue = prawn.x;
                prawn.moveRight();
                assert.equal(prawn.x, xValue + 1);
            });
        });

        describe('moveLeft', function() {
            it('should decrement the x position by 1', function() {
                var prawn = new Prawn({})
                var xValue = prawn.x;
                prawn.moveLeft();
                assert.equal(prawn.x, xValue - 1);
            });
        });

        describe('moveUp', function() {
            it('should decrement the y position by 1', function() {
                var prawn = new Prawn({})
                var yValue = prawn.y;
                prawn.moveUp();
                assert.equal(prawn.y, yValue - 1);
            });
        });

        describe('moveDown', function() {
            it('should increment the y position by 1', function() {
                var prawn = new Prawn({})
                var yValue = prawn.y;
                prawn.moveDown();
                assert.equal(prawn.y, yValue + 1);
            });
        });

        describe('move', function() {
          it('should change x or y depending on direction', function() {
            debugger;
            var prawn = new Prawn({});
            var xValue = prawn.x;
            prawn.move();
            assert.equal(prawn.x, xValue - 1)
          });
        });
    });
});
