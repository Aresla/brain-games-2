import React from "react";
import {Button, Typography} from 'antd';
import { UndoOutlined, ArrowRightOutlined } from '@ant-design/icons';


export class GameYesNo extends React.Component {
    state = {
        isAnswered: false,
        isCorrect: null,
        question: '',
        rightAnswer: null,
    };

    componentDidMount() {
        const task = this.props.taskGenerator();
        this.setState({
            rightAnswer: task.rightAnswer,
            question: task.question,
        })
    }

    handleButtonClick = (e, answer) => {
        e.preventDefault();
        this.setState({
            isAnswered: true,
            isCorrect: answer === this.state.rightAnswer,
        });
    };

    handleGameRepeat = (e) => {
        e.preventDefault();
        this.setState({
            isAnswered: false,
            isCorrect: null,
        });
    };

    handleGameRestart = (e) => {
        e.preventDefault();
        const task = this.props.taskGenerator();
        this.setState({
            isAnswered: false,
            isCorrect: null,
            rightAnswer: task.rightAnswer,
            question: task.question,
        });
    };

    render(){
        const { isAnswered, isCorrect, question } = this.state;
        const { gameDescription } = this.props;
        return (
            <>
                <br />
                <br />
                <Typography.Title level={3}>{gameDescription}</Typography.Title>
                {!isAnswered && (
                    <>
                        <Typography.Title level={2}>{question}</Typography.Title>
                        <br />
                        <div>
                            <Button type="primary" size='large' shape="round" className="yesNoButton" onClick={(e) => this.handleButtonClick(e, true)}>YES</Button>
                            <Button type="primary" size='large' shape="round"  className="yesNoButton" onClick={(e) => this.handleButtonClick(e, false)}>NO</Button>
                        </div>
                    </>

                )}
                {isAnswered && (
                    <>
                        <br />
                        <Typography.Title level={2}>{`Your answer is ${isCorrect ? 'RIGHT' : 'WRONG' }`}</Typography.Title>
                        <br />
                        <br />
                        <div>
                            <Button type="primary" size='large' shape="round" icon={<UndoOutlined />} onClick={(e) => this.handleGameRepeat(e)}>ONCE AGAIN</Button>
                            <br />
                            <br />
                            <Button type="primary" size='large' shape="round" icon={<ArrowRightOutlined />} onClick={(e) => this.handleGameRestart(e)}>NEW ROUND</Button>
                        </div>
                    </>
                )}
            </>
        );
    };
}