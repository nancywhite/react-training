import Language from './language.json';

export default class {
    constructor(name) {
        this.name = name;
        this.preferredLanguage = Language.English;
    }
    setPreferredLanguage(language) {
        this.preferredLanguage = language;
    }
}