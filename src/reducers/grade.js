function grade(state, action) {
    console.log("in grade: " + state, action);
    switch (action.type) {
        case 'CALCULATE_GRADE':
            return 100;
        default:
            return 0;
    }
}

export default grade;