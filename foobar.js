
// retro: Lange vor 2015

var foobar = (function () {

    // private

    var _something = 0;

    // public

    var foo = function () {
        _something;
    };

    var bar = function () {
        _something;
    };

    return {
        foo,
        bar
    };

})();

/**
 * Somewhere else
 */

foobar.foo()
foobar.bar()