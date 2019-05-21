let sayHello = require('../src/scripts/sayHello.js');

describe('Greet', function() {
    it('concats Hello and a name when a name is given', function() {
        const actual = sayHello.greet('Nancy');
        const expected = 'Hello Nancy';
        expect(actual).toEqual(expected);
    });

    it('concats Hola and a name for Spanish speakers when a name is given', function() {
        const actual = sayHello.greet('Maria', 'Spanish');
        const expected = 'Hola Maria';
        expect(actual).toEqual(expected);
    });

    it('says Hello friend when no name is given', function() {
        const actual = sayHello.greet();
        const expected = 'Hello friend';
        expect(actual).toEqual(expected);
    });

    it('says Hola amigo when no name is given and preferred language is Spanish', function() {
        const actual = sayHello.greet(undefined, 'Spanish');
        const expected = 'Hola amigo';
        expect(actual).toEqual(expected);
    });
});