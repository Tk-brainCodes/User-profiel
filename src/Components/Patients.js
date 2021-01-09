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
                        CreditCardNumber={user.CreditCardNumber}
                        Email={user.Email}
                        LastLogin={user.LastLogin}
                        MacAddress={user.MacAddress}
                        PaymentMethod={user.PaymentMethod}
                        PhoneNumber={user.PhoneNumber}
                        URL={user.URL}
                        UserName={user.UserName}


                    />
                )
            })}
        </div>
    )
}

export default Patients;
