const test = require('tape');

const {
    numbers,
    operations,
} = require('../');

const {
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    zero,
} = numbers;

const {
    plus,
    minus,
    times,
    dividedBy,
} = operations;

test('calculate', function (t) {
    t.equal(seven(times(five())), 35, 'seven times five === 7 * 5 === 35');
    t.equal(four(plus(nine())), 13, 'four plus nine === 4 + 9 === 13');
    t.equal(eight(minus(three())), 5, 'eight minus three === 8 - 3 === 5');
    t.equal(six(dividedBy(two())), 3, 'six dividedBy two === 6 / 2 === 3');
    
    t.end();
});

test('divide by zero', function (t) {
    t.throws(() => {
        one(dividedBy(zero()));
    }, 'Should throw RangeError');
    
    t.end();
});