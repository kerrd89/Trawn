const assert = require('chai').assert;

const Rectangle = require('../lib/rectangle');

describe('Rectangle', function() {
    context('with default attributes', function() {
        var rectangle = new Rectangle({});

        it('should be a function', function() {
            assert.isFunction(Rectangle);
        });
        it('has default x, y, width, height', function() {
            assert.equal(rectangle.x, 5, rectangle.y, 5, rectangle.width, 5, rectangle.height, 5);
        });
        it('can find its own corners', function() {
          rectangle.checkRectangle();
          assert.deepEqual(rectangle.topRightCorner, {x: 10, y: 5});
        });
    });
});
