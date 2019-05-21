const language = require('../models/language.json');


module.exports = class User {
    constructor(name) {
        this.name = name;
        this.preferredLanguage = language.English;
    }
    setPreferredLanguage(language) {
        this.preferredLanguage = language;
    }
};