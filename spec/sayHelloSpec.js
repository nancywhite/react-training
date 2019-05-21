import * as sayHello from '../src/scripts/sayHello.js';
import User from '../src/models/user.js';
import Language from '../src/models/language.json';

describe('Greet', function() {
    it('concats Hello and a name when a name is given', function() {
        const actual = sayHello.greet(new User('Nancy'));
        const expected = 'Hello Nancy';
        expect(actual).toEqual(expected);
    });

    it('concats Hola and a name for Spanish speakers when a user with preferred language of Spanish is given', function() {
        const user = new User('Maria');
        user.setPreferredLanguage(Language.Spanish);
        const actual = sayHello.greet(user);
        const expected = 'Hola Maria';
        expect(actual).toEqual(expected);
    });

    it('uses the morning greeting when the time of day is morning', function() {
        let morningTime = new Date('December 17, 1995 03:24:00');
        const actual = sayHello.greet(new User('Nancy'), morningTime);
        const expected = 'Good morning Nancy';
        expect(actual).toEqual(expected);
    });

    it('uses the afternoon Spanish greeting when the time of day is afternoon and preferred language is Spanish', function() {
        let afternoon = new Date('December 17, 1995 13:24:00');
        const user = new User('Felipe');
        user.setPreferredLanguage(Language.Spanish);

        const actual = sayHello.greet(user, afternoon);
        const expected = 'Buenos tardes Felipe';
        expect(actual).toEqual(expected);
    });

    it('uses the evening French greeting when the time of day is evening and preferred language is French', function() {
        let afternoon = new Date('December 17, 1995 18:24:00');
        const user = new User('Pierre');
        user.setPreferredLanguage(Language.French);

        const actual = sayHello.greet(user, afternoon);
        const expected = 'Bon nuit Pierre';
        expect(actual).toEqual(expected);
    });

    it('says please login when no user is given', function() {
        const actual = sayHello.greet();
        const expected = 'Please login';
        expect(actual).toEqual(expected);
    });
});