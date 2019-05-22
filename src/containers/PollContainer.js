import React from 'react';
import PollHeader from '../components/PollHeader.js';
import PollQuestion from '../components/PollQuestion.js';
import PollSubmitButton from '../components/PollSubmitButton.js';
import RadioButtonGroup from '../components/RadioButtonGroup.js';
import CurrentChoice from '../components/CurrentChoice.js';
import AnswerStatus from '../components/AnswerStatus.js';
import $ from 'jquery';

class PollContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            header: '',
            question: '',
            correctAnswer: '',
            choices: [],
            checkedValue: '',
            answerStatus: ''
        };
        this.setCheckedValue = this.setCheckedValue.bind(this);
        this.setAnswerStatus = this.setAnswerStatus.bind(this);
    }

    setAnswerStatus(value) {
        this.setState({
            answerStatus: value
        });
    }

    setCheckedValue(value){
        this.setState({
            checkedValue: value
        });
        let status = (value === this.state.correctAnswer) ? 'correct' : 'incorrect'
        this.setAnswerStatus(`Your answer is ${status}`);
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.serverRequest = $.get('http://localhost:8080/data/data.json', function(result) {
            var data = result;
            this.setState({
                header: data.poll.header,
                question: data.poll.questions[0].question,
                choices: data.poll.questions[0].choices,
                correctAnswer: data.poll.questions[0].correctAnswer
            });
        }.bind(this));
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate()');
        return true;
    }

    componentDidUpdate() {
        console.log('componentDidUpdate()');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount()');
    }

    render() {
        const rowStyle = {
            backgroundColor: '#dadada',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '10px'
        };

        return (
            <div className="container">
                <div className="jumbotron">
                    <PollHeader text={this.state.header} />
                </div>
                <div className="row" style={rowStyle}>
                    <div className="col-sm-4 col-sm-offset-4">
                        <form>
                            <PollQuestion text={this.state.question} />
                            <RadioButtonGroup
                                name = 'answer'
                                checkedValue = {this.state.checkedValue}
                                choices = {this.state.choices}
                                changeHandler = {this.setCheckedValue}
                            />
                            <CurrentChoice checked = {this.state.checkedValue} chosenMessage = {this.state.chosenMessage}/>
                            <AnswerStatus text={this.state.answerStatus}/>
                            <PollSubmitButton />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default PollContainer;