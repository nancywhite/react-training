import React from 'react';

class PollSubmitButton extends React.Component{
    checkAnswers(e){
        e.preventDefault();
        console.log('checking');

    }

    render() {
        return (
            <button onClick={this.checkAnswers(event)} className="btn btn-success">Submit</button>
        );
    }
}

export default PollSubmitButton;