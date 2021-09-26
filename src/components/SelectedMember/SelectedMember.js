import React from 'react';
import './selectedMember.css'

const SelectedMember = (props) => {
    const { member } = props
    return (
        <div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={member.image} className="card-img img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title ">{member.name}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedMember;