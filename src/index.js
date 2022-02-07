import React from "react";
import ReactDOM from 'react-dom'
import './index.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        
    }

    

    render() {
        return (
            <div id='wrapper'>
                <h1> 25/5 Timer </h1>
                
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));