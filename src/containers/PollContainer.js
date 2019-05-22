import React from 'react';
import PollHeader from '../components/PollHeader.js';
import PollQuestion from '../components/PollQuestion.js';
import PollRadioButton from '../components/PollRadioButton.js';
import PollSubmitButton from '../components/PollSubmitButton.js';

class PollContainer extends React.Component {
    render() {
        return (
            <div className="container" align="center">
                <div className="col-sm-4 col-sm-offset-4">
                    <PollHeader/>
                    <form>
                        <PollQuestion/>
                        <PollRadioButton/>
                        <PollRadioButton/>
                        <PollRadioButton/>
                        <PollSubmitButton/>
                    </form>
                </div>
            </div>
        );
    }
}

export default PollContainer;