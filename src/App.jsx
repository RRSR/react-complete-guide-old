import React, {useState} from 'react';
import './App.css';
import Person from "./Person/Person";

const app = props => {

    const [personState, setPersonState] = useState({
        personList: [
            {name: 'Raj', age: 20},
            {name: 'Hari', age: 29},
            {name: 'Jai', age: 33}
        ],
        country: 'India'
    });

    const [countryState, setCountryState] = useState({
        country: 'India'
    })

    const switchNameHandler = () => {
        setPersonState({
            personList: [
                {name: 'Raj Rathore', age: 101},
                {name: 'Hari', age: 29},
                {name: 'Jai Singh', age: 21}
            ]
        });
    }

    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personState.personList[0].name} age={personState.personList[0].age}/>
            <Person name={personState.personList[1].name} age={personState.personList[1].age}/>
            <Person name={personState.personList[2].name} age={personState.personList[2].age}/>
            <label>Person State : {personState.country}</label><br/>
            <label>Country State : {countryState.country}</label>
        </div>
    );
}

export default app;
