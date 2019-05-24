
export function selectAnswer(index, value) {
    return {
        type: 'SELECT_ANSWER',
        index,
        value
    };
}

export function calculateGrade(e) {
    e.preventDefault();
    return {
        type: 'CALCULATE_GRADE'
    };
}