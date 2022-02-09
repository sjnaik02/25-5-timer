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
        this.reset = this.reset.bind(this);
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
        if (type === 'session' && this.state.sessionLength > 1) {
            this.setState((state) => ({
                sessionLength: state.sessionLength - 1,
            }));
        } else if (type === 'break' && this.state.breakLength > 1) {
            this.setState((state) => ({
                breakLength: state.breakLength - 1
            }));
        }
    }

    reset(){
        console.log('bloop');
        this.setState(() => ({
            'sessionLength': 25,
            'breakLength': 5,
        })); 
    }

    render() {
        return (
            <div id='wrapper' className="w-auto h-auto relative rounded-md p-4 font-mono bg-slate-600 text-white shadow-lg">
                <h1 className="text-center text-xl underline m-2"> 25/5 Timer </h1>
                <Timer sessionLen={this.state.sessionLength} breakLen={this.state.breakLength} reset={this.reset}/> 
                <div className="w-full flex flex-row ">
                    <Display label='session' length={this.state.sessionLength} incrementor={this.incrementLength} decrementor={this.decrementLength}/>
                    <Display label='break' length={this.state.breakLength} incrementor={this.incrementLength} decrementor={this.decrementLength}/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));