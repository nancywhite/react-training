import React from 'react';
import PropTypes from 'prop-types';

class RadioButton extends React.Component {

    handleChange() {
        console.log('handling change for: ' + this.props.name + " " + this.props.value);
        this.props.onChange(this.props.name, this.props.value);
    }
    render() {
        return (
            <div className="radio">
                <label>
                    <input
                        type='radio'
                        name={this.props.name}
                        value={this.props.value}
                        checked={this.props.checkedValues}
                        onChange={this.handleChange.bind(this)}

                    />
                    <span>{this.props.label}</span>
                </label>
            </div>
        );
    }
}

RadioButton.propTypes = {
    name: PropTypes.number,
    value: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func
};

export default RadioButton;