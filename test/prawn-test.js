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

        describe('moveRight', function() {
            it('should increment the x position by 1', function() {
                var xValue = prawn.x;
                prawn.moveRight();
                assert.equal(prawn.x, xValue + 1);
            });
        });

        describe('moveLeft', function() {
            it('should decrement the x position by 1', function() {});
        });

        describe('moveUp', function() {
            it('should decrement the y position by 1', function() {});
        });

        describe('moveDown', function() {
            it('should increment the y position by 1', function() {});
        });
    // context('with given attributes', function() {
    //   var xValue

    });
});
