import React from 'react'
import './Person.css'

const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.myClick}>I am {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input onChange={props.myChange} value={props.name}/>
        </div>
    )
}

export default person;
