exports.greet = function greet(name, preferredLanguage = 'English') {
    let greeting = 'Hello';
    let friend = 'friend';

    switch (preferredLanguage) {
    case 'Spanish':
        greeting = 'Hola';
        friend = 'amigo';
        break;
    default:
        break;
    }

    let who = name ? name: friend;
    return `${greeting} ${who}`;
};