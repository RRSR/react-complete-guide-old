import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
    state = {
        personList: [
            {name: 'Raj', age: 20},
            {name: 'Hari', age: 29},
            {name: 'Jai', age: 33}
        ]
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <Person name={this.state.personList[0].name} age={this.state.personList[0].age}/>
                <Person name={this.state.personList[1].name} age={this.state.personList[1].age}/>
                <Person name={this.state.personList[2].name} age={this.state.personList[2].age}/>
            </div>
        );
    }
}

export default App;
