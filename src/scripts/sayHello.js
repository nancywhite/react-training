exports.greet = function greet(user, theDateTime) {

    if (!user) {
        return 'Please login';
    }
    let greeting = user.preferredLanguage.greeting[0];

    if (theDateTime) {

        let hour = theDateTime.getHours();

        if (hour > 0 && hour < 12) {
            greeting = user.preferredLanguage.greeting[1];
        }
        else if (hour >= 12 && hour < 17) {
            greeting = user.preferredLanguage.greeting[2];
        } else if (hour >=17 && hour <= 24) {
            greeting = user.preferredLanguage.greeting[3];
        }
    }

    return `${greeting} ${user.name}`;
};
