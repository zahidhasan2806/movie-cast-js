import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import Production from '../Production/Production';
import "./Team.css"

const Team = () => {
    const [persons, setPersons] = useState([]);
    const [castingCrew, setCastingCrew] = useState([]);
    useEffect(() => {
        fetch("./cast.JSON")
            .then(res => res.json())
            .then(data => setPersons(data))
    }, [])

    const handleAddTOCast = person => {
        const addedCastingCrew = [...castingCrew];
        if (!addedCastingCrew.includes(person)) {
            setCastingCrew([...castingCrew, person]);
        }
    }
    return (
        <div className='team-container'>
            <div className='person-container'>
                {
                    persons.map(person => <Person person={person} key={person.name} handleAddTOCast={handleAddTOCast}>
                    </Person>)
                }
            </div>
            <div className='cart-container'>
                <Production castingCrew={castingCrew} ></Production>
            </div>


        </div>
    );
};

export default Team;