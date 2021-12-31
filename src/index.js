import React from "react";
import ReactDOM from 'react-dom'
import './index.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sessionLength: 25,
            breakLength: 5,
            isBreak: false,
            isPaused: true,
            currentTimerLength : '',
        }
    }

    increment(type){
        if(type === 'session' && this.state.sessionLength<60){
            this.setState((state) => ({
                sessionLength : state.sessionLength + 1
            }));
        } else if(type === 'break' && this.state.breakLength<60){
            this.setState((state) => ({
                breakLength : state.breakLength + 1
            }));
        }

    }

    decrement(type){
        if(type === 'session' && this.state.sessionLength>1){
            this.setState((state) => ({
                sessionLength : state.sessionLength - 1
            }));
        } else if(type === 'break' && this.state.breakLength>1){
            this.setState((state) => ({
                breakLength : state.breakLength - 1
            }));
        }
    }

    render() {
        return (
            <div id='wrapper'>
                <h1> 25/5 Timer </h1>
                <h2> Session Length: {this.state.sessionLength} </h2>
                <button onClick={() => this.increment('session')}> inc </button> <button onClick={() => this.decrement('session')}> dec </button>
                <h2> Break Length: {this.state.breakLength} </h2>
                <button onClick={() => this.increment('break')}> inc </button> <button onClick={() => this.decrement('break')}> dec </button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));