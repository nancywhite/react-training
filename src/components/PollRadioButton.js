import React from 'react';

class PollRadioButton extends React.Component {
    render() {
        return (
            <div>
                <label>
                    <input type="radio" name="answer" value="Answer1"/>Answer 1
                </label>
            </div>
        );
    }
}

export default PollRadioButton;