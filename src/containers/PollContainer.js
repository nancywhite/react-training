import React from 'react';
import PollHeader from '../components/PollHeader';
import PollQuestion from '../components/PollQuestion';
import RadioButtonGroup from '../components/RadioButtonGroup';
import PollSubmitButton from '../components/PollSubmitButton.js';
import $ from 'jQuery';

class PollContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            header: '',
            checkedValues: [],
            questions: []
        };

        this.setCheckedValue = this.setCheckedValue.bind(this);
        this.checkAnswers = this.checkAnswers.bind(this);
    }

    setCheckedValue(name, value){
        let newChecked = this.state.checkedValues;
        newChecked[name] = value;

        this.setState({
            checkedValues: newChecked
        });
        console.log("checkedValues is now : " + this.state.checkedValues)
    }

    checkAnswers(event){
        event.preventDefault();
        let correctAnswers = 0;
        let totalAnswers = this.state.questions.length;
        this.state.questions.forEach((question, index) => {
            const chosenAnswer = this.state.checkedValues[index];
            const correctAnswer = question['correctAnswer'];
            console.log(`The chosen answer is ${chosenAnswer}. The correct answer is ${correctAnswer}`);
            if (chosenAnswer === correctAnswer) {
                correctAnswers++;
            }
        });
        console.log(`You got ${correctAnswers} correct answers.  That is ${correctAnswers/totalAnswers*100}%`)
    }

    componentDidMount(){
        console.log('componentDidMount');
        this.serverRequest = $.get('http://localhost:8080/data/data.json', function (result) {
            this.setState({
                header: result.poll.header,
                questions: result.poll.questions
            });
        }.bind(this));
    }

    render(){
        let rowStyle = {
            backgroundColor: '#dadada',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '10px'
        };

        let {questions, checkedValues, header} = this.state;
        let questionsOutput = questions.map(function(aQuestion, questionNumber){
            return (
                <div key={`question-number-${questionNumber}`}>
                    <PollQuestion text={aQuestion.question} />
                    <RadioButtonGroup
                        name={questionNumber}
                        checkedValues={[checkedValues[questionNumber]]}
                        choices={aQuestion.choices}
                        onChange = {this.setCheckedValue} />
                </div>
            );

        }.bind(this));

        return (
            <div className="container">
                <div className="jumbotron">
                    <PollHeader text={header} />
                </div>
                <div className="row" style={rowStyle}>
                    <div className="col-sm-4 col-sm-offset-4">
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