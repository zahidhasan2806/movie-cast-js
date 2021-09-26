import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import "./person.css"

const Person = (props) => {
    //get data with props
    const { person, handleAddTOCast } = props
    const element = <FontAwesomeIcon icon={faCheckCircle} />
    const { name, born, occupation, salary, age, image } = props.person;
    return (
        <div className="persons m-3">
            <div className="card person pt-3" >
                <img src={image} className="img rounded rounded-circle mx-auto" height="350px" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title fw-bold">Name: {name}</h5>
                    <p>Role: {occupation}</p>
                    <p>Born In: {born}</p>
                    <p>Age:{age}</p>
                    <p>Salary:$ {salary}</p>
                    <div className="text-center">
                        <button onClick={() => handleAddTOCast(person)} className="btn btn-dark btn-outline-success text-white">Add to Cast {element}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Person;