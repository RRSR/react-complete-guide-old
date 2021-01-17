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
        country: 'India',
        showPersons: false
    }
    myStyle = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid red',
        padding: '8px',
        cursor: 'pointer'
    };

    deleteNameHandler = (personIndex) => {
        // const persons = this.state.personList.slice(); Mutable as it changes the original list itself because it's just a reference.
        const persons = [...this.state.personList]; // Immutable as it creates a new copy using spread operator.
        persons.splice(personIndex, 1);
        this.setState({personList: persons})
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

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.personList.map((person, index) => {
                            return <Person
                                myClick={() => this.deleteNameHandler(index)}
                                name={person.name}
                                age={person.age}/>
                        }
                    )}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                {/*Not so recommended approach due to performance issue */}
                <button
                    style={this.myStyle}
                    onClick={() => this.togglePersonsHandler()}>Switch Name
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
