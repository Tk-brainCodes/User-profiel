import React from 'react';
import Card from './Card';

//store the patients

const Patients = ({ users, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div className="patients">
            {users.map((user, i) => {
                return (
                    <Card
                        key={i}
                        FirstName={user.FirstName}
                        LastName={user.LastName}
                        Gender={user.Gender}

                    />
                )
            })}
        </div>
    )
}

export default Patients;
