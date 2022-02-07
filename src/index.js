import React from "react";
import ReactDOM from 'react-dom'
import './index.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'session-length' : 25,
            'break-length' : 5
        }
    }

    render() {
        return (
            <div id='wrapper'>
                <h1> 25/5 Timer </h1>
                <h2 id="session-label"> Session Length : {this.state["session-length"]}</h2>
                <button id="session-increment"> Increment </button> 
                <button id="session-decrement"> Decrement </button>

                <h2 id="break-label"> Break Length : {this.state["break-length"]}</h2>
                <button id="break-increment"> Increment </button> 
                <button id="break-decrement"> Decrement </button>

                
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));