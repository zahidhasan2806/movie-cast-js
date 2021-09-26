import React from 'react';
import SelectedMember from '../SelectedMember/SelectedMember';
import './production.css'

const Production = (props) => {
    const { castingCrew } = props;
    let totalProductionCost = 0;
    let listedMember = [];
    for (const member of castingCrew) {
        totalProductionCost = totalProductionCost + member.salary;
        listedMember.push(member)
    }
    return (
        <div className='casting-crew text-dark m-3'>
            <h5>Total Casting Member:{castingCrew.length}</h5>
            <h4>Production Cost:${totalProductionCost}</h4>
            <h4>Listed Crew Member:</h4>
            <div className='listed-member'>
                {
                    // listedMember.map(member => <p className='fw-bold' key={member.name}> <img src={member.image} alt="" />{member.name}</p>)
                    listedMember.map(member => <SelectedMember key={member.name} member={member}></SelectedMember>)
                }
            </div>
            <div className='text-center'>
                <button className='btn btn-success'>Confirm</button>
            </div>

        </div >
    );
};

export default Production;