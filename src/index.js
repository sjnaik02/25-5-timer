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
            currentTimerLength: 1500,
            interval: '',
        }
        this.playPause = this.playPause.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment(type) {
        if (type === 'session' && this.state.sessionLength < 60) {
            this.setState((state) => ({
                sessionLength: state.sessionLength + 1,
                currentTimerLength : (state.sessionLength+1)*60,
            }));
        } else if (type === 'break' && this.state.breakLength < 60) {
            this.setState((state) => ({
                breakLength: state.breakLength + 1
            }));
        }

    }

    decrement(type) {
        if (type === 'session' && this.state.sessionLength > 1) {
            this.setState((state) => ({
                sessionLength: state.sessionLength - 1,
                currentTimerLength : (state.sessionLength-1)*60,
            }));
        } else if (type === 'break' && this.state.breakLength > 1) {
            this.setState((state) => ({
                breakLength: state.breakLength - 1
            }));
        }
    }

    playPause() {
        if (this.state.isPaused) {
            const intervalId = setInterval(this.timer.bind(this), 1000);
            this.setState(() => ({
                interval: intervalId,
                isPaused: false,
            }));
        } else {
            clearInterval(this.state.interval);
            this.setState(() => ({ isPaused: true }));
        }
    }

    timer() {
        if (this.state.currentTimerLength > 0) {
            this.setState((state) => ({ currentTimerLength: state.currentTimerLength - 1 }));
        } else {
            if (this.state.isBreak) {
                this.setState((state) => ({
                    currentTimerLength: state.sessionLength * 60,
                    isBreak: false,
                }));
            } else {
                this.setState((state) => ({
                    currentTimerLength: state.breakLength * 60,
                    isBreak: true,
                }));
            }
        }
    }

    reset() {
        this.setState(() => ({
            sessionLength: 25,
            breakLength: 5,
            isBreak: false,
            isPaused: true,
            currentTimerLength: 1500,
            interval: '',
        }));

        if(this.state.interval){
            clearInterval(this.state.interval);
        }
    }

    render() {
        return (
            <div id='wrapper'>
                <h1> 25/5 Timer </h1>
                <h2 id="session-label"> Session Length:  </h2> 
                <h3 id = "session-length"> {this.state.sessionLength} </h3>
                <button id="session-increment" onClick={() => this.increment('session')}> inc </button> <button id="session-decrement" onClick={() => this.decrement('session')}> dec </button>
                <h2 id="break-label"> Break Length: </h2>
                <h3 id="break-length"> {this.state.breakLength} </h3>
                <button id="break-increment" onClick={() => this.increment('break')}> inc </button> <button id="break-decrement" onClick={() => this.decrement('break')}> dec </button>
                <h2 id="timer-label"> {this.state.isBreak ? 'Break' : 'Session'} </h2>
                <h3 id="time-left"> {String(Math.floor(this.state.currentTimerLength / 60)).padStart(2,'0')} : {String(this.state.currentTimerLength % 60).padStart(2, '0')} </h3>
                <button id="start_stop" onClick={this.playPause}> play-pause </button> <button id="reset" onClick={this.reset}> reset </button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));