function checkedValue(stateCheckedValue = [], action) {
    console.log(stateCheckedValue, action);
    switch (action.type) {
    case 'SELECT_ANSWER':
        return stateCheckedValue
            .slice(0,action.index)
            .concat([action.value])
            .concat(stateCheckedValue.slice(action.index+1));
    default:
        return stateCheckedValue;
    }
}

export default checkedValue;