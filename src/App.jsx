import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <Person name="Raj" age="13"/>
                <Person name="Jai" age="21"/>
                <Person name="Om" age="32"/>
            </div>
        );
    }
}

export default App;
