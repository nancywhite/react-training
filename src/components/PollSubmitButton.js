import React from 'react';

function PollSubmitButton(props) {
    return (
        <button className="btn btn-success" onClick= { (event) => {props.handleClick(event);} }>Choose</button>
    );
}
export default PollSubmitButton;
