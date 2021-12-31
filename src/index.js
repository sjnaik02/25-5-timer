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
            currentTimerLength : 1500,
            interval : '',
        }
        this.playPause = this.playPause.bind(this);
        this.reset = this.reset.bind(this);
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

    playPause(){
        if(this.state.isPaused){
            const intervalId = setInterval(this.timer.bind(this), 1000);
            this.setState(() => ({ 
                interval : intervalId,
                isPaused : false,
            }));
        } else {
            clearInterval(this.state.interval);
            this.setState(() => ({ isPaused : true }));
        }
    }

    timer(){
        this.setState((state) => ({ currentTimerLength : state.currentTimerLength - 1  }));
    }

    reset(){
        this.setState(() =>({
            sessionLength: 25,
            breakLength: 5,
            isBreak: false,
            isPaused: true,
            currentTimerLength : 1500,
            interval : '',
        }));
    }

    render() {
        return (
            <div id='wrapper'>
                <h1> 25/5 Timer </h1>
                <h2> Session Length: {this.state.sessionLength} </h2>
                <button onClick={() => this.increment('session')}> inc </button> <button onClick={() => this.decrement('session')}> dec </button>
                <h2> Break Length: {this.state.breakLength} </h2>
                <button onClick={() => this.increment('break')}> inc </button> <button onClick={() => this.decrement('break')}> dec </button>
                <h2> { this.state.isBreak ? 'Break': 'Session' } </h2>
                <h3> {Math.floor(this.state.currentTimerLength/60)} : {this.state.currentTimerLength%60} </h3>
                <button onClick={this.playPause}> play-pause </button> <button onClick={this.reset}> reset </button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));