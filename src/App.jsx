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

    switchNameHandler = (newName) => {
        this.setState({
            personList: [
                {name: newName, age: 101},
                {name: 'Hari', age: 91},
                {name: 'Jai Singh', age: 21}
            ]
        })
    }
    nameChangeHandler = (event) => {
        this.setState({
            personList: [
                {name: 'Raj', age: 20},
                {name: event.target.value, age: 29},
                {name: 'Jai', age: 33}
            ]
        })
    };


    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                {/*Not so recommended approach due to performance issue */}
                <button onClick={() => this.switchNameHandler('Raj Rajeshwar')}>Switch Name</button>
                <Person
                    name={this.state.personList[0].name}
                    age={this.state.personList[0].age}>Some more details of the person.</Person>
                <Person
                    name={this.state.personList[1].name}
                    age={this.state.personList[1].age}
                    //Recommended approach
                    myClick={this.switchNameHandler.bind(this, 'Raj Rathore')}
                    myChange={this.nameChangeHandler}
                />
                <Person
                    name={this.state.personList[2].name}
                    age={this.state.personList[2].age}/>
                <label>Person State : {this.state.country}</label><br/>
            </div>
        );
    }
}

export default App;
