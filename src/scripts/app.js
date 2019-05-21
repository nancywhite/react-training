import * as sayHello from './sayHello.js';
import User from '../models/user.js';

window.addEventListener('load', () => {
    document.getElementById('welcome-message').innerHTML = sayHello.greet(new User('Nancy'));
});