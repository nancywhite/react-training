import React from 'react';
import PropTypes from 'prop-types';

class RadioButton extends React.Component{

    render(){
        return (
            <div className="radio">
                <label>
                    <input type="radio"
                        name = {this.props.name}
                        value = {this.props.value}
                        checked = {this.props.checked}
                        onChange = { () => {this.props.changeHandler(this.props.value);} }
                    />
                    <span>{this.props.label}</span>
                </label>
            </div>
        );
    }
}

RadioButton.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func
};

export default RadioButton;