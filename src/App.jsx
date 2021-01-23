import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
    state = {
        personList: [
            {id: 101, name: 'Raj', age: 20},
            {id: 102, name: 'Hari', age: 29},
            {id: 103, name: 'Jai', age: 33}
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

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.personList.slice(); Mutable as it changes the original list itself because it's just a reference.
        const persons = [...this.state.personList]; // Immutable as it creates a new copy using spread operator.
        persons.splice(personIndex, 1);
        this.setState({personList: persons})
    }

    nameChangeHandler = (event, id) => {

        const personIndex = this.state.personList.findIndex(p => {
            return p.id === id;
        });

        const personCopy = {
            ...this.state.personList[personIndex]
        };

        personCopy.name = event.target.value;

        const personListCopy = [...this.state.personList];
        personListCopy[personIndex] = personCopy

        this.setState({personList: personListCopy})
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
                                myClick={() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                myChange={(event) => this.nameChangeHandler(event, person.id)}/>
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
