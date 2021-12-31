import React from "react";
import ReactDOM from 'react-dom'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sessionLength : 1500,
            breakLength : 300,
            isBreak : false,
            isPaused : true, 
        }
    }

    render(){
        return(
            <h1> Hello World </h1>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));