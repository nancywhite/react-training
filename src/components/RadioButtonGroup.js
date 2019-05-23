import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from './RadioButton';

class RadioButtonGroup extends React.Component{
    render(){
        const radioButtons = this.props.choices.map(choice => {
            const{value, label} = choice;
            const checked = (value === this.props.checkedValue);

            return(
                <RadioButton
                    key = {`radio-button-${value}`}
                    label = {label}
                    name = {this.props.name}
                    value = {value}
                    checked = {checked}
                    changeHandler = {this.props.changeHandler}
                />
            );
        });

        return (
            <div>
                {radioButtons}
            </div>
        );
    }
}

RadioButtonGroup.propTypes = {
    name: PropTypes.string,
    checkedValue: PropTypes.string,
    choices: PropTypes.array,
    onChange: PropTypes.string
};

export default RadioButtonGroup;