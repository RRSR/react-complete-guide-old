import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
    state = {
        personList: [
            {name: 'Raj', age: 20},
            {name: 'Hari', age: 29},
            {name: 'Jai', age: 33}
        ],
        country: 'India'
    }

    switchNameHandler = () => {
        this.setState({
            personList: [
                {name: 'Raj Rathore', age: 101},
                {name: 'Hari', age: 91},
                {name: 'Jai Singh', age: 21}
            ]
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.personList[0].name} age={this.state.personList[0].age}/>
                <Person name={this.state.personList[1].name} age={this.state.personList[1].age}/>
                <Person name={this.state.personList[2].name} age={this.state.personList[2].age}/>
                <label>Person State : {this.state.country}</label><br/>
            </div>
        );
    }
}

export default App;
