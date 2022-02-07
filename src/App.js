import React from "react";
import ReactDOM from 'react-dom'
import Display from "./Components/Display";
import Timer from "./Components/Timer";
import './index.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sessionLength: 25,
            breakLength: 5,
        }
        this.incrementLength = this.incrementLength.bind(this);
        this.decrementLength = this.decrementLength.bind(this);
    }

    incrementLength(type) {
        if (type === 'session' && this.state.sessionLength < 60) {
            this.setState((state) => ({
                sessionLength: state.sessionLength + 1,
            }));
        } else if (type === 'break' && this.state.breakLength < 60) {
            this.setState((state) => ({
                breakLength: state.breakLength + 1
            }));
        }
    }

    decrementLength(type){
        if (type === 'session' && this.state.sessionLength > 0) {
            this.setState((state) => ({
                sessionLength: state.sessionLength - 1,
            }));
        } else if (type === 'break' && this.state.breakLength > 0) {
            this.setState((state) => ({
                breakLength: state.breakLength - 1
            }));
        }
    }

    render() {
        return (
            <div id='wrapper'>
                <h1> 25/5 Timer </h1>
                <Display label='session' length={this.state.sessionLength} incrementor={this.incrementLength} decrementor={this.decrementLength}/>
                <Display label='break' length={this.state.breakLength} incrementor={this.incrementLength} decrementor={this.decrementLength}/>
                <Timer /> 
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));