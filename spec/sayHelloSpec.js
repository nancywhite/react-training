let sayHello = require('../src/sayHello.js');

describe('Greet', function() {
    it('concats Hello and a name', function() {
        const actual = sayHello.greet('Nancy');
        const expected = 'Hello Nancy!';
        expect(actual).toEqual(expected);
    });

    it('says Hello whoever you are! when no name is given', function() {
        const actual = sayHello.greet();
        const expected = 'Hello whoever you are!';
        expect(actual).toEqual(expected);
    });
});