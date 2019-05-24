import React from 'react';
import PollHeader from '../components/PollHeader';
import PollQuestion from '../components/PollQuestion';
import RadioButtonGroup from '../components/RadioButtonGroup';
import PollSubmitButton from '../components/PollSubmitButton.js';

class PollContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            header: '',
            checkedValue: [],
            questions: []
        };

    }

    render(){
        let rowStyle = {
            backgroundColor: '#dadada',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '10px'
        };

        let questions = this.props.questions;
        let questionsOutput = questions.map(function(aQuestion, questionNumber){
            return (
                <div key={`question-number-${questionNumber}`}>
                    <PollQuestion text={aQuestion.question} />
                    <RadioButtonGroup
                        name={questionNumber}
                        checkedValue={this.props.checkedValue[questionNumber]}
                        choices={aQuestion.choices}
                        onChange = {this.props.selectAnswer} />
                </div>
            );

        }.bind(this));

        return (
            <div className="container">
                <div className="jumbotron">
                    <PollHeader text="Bienvendio a la prueba" />
                </div>
                <div className="row" style={rowStyle}>
                    <div>
                        <form>
                            {questionsOutput}
                            <PollSubmitButton handleClick={this.checkAnswers}/>
                        </form>
                    </div>
                </div>

            </div>
        );
    }

}


export default PollContainer;