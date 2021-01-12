import React, { useState } from 'react';
import Card from './Card';
import loader from './loading.gif';
import './Patient.css';

//store the patients

const Patients = ({ users, loading }) => {
    const [search, setSearch] = useState('');

    // if (loading) {
    //     return <div>
    //     <img src={loader} alt="loading"/>
    //     </div>
    // }


    const filterUser = users.filter(data => {
        let firstName = data.FirstName.toLowerCase().includes(search.toLowerCase());
        let lastName = data.LastName.toLowerCase().includes(search.toLowerCase());
        let gender = data.Gender.toLowerCase().includes(search.toLowerCase());
        let paymentMethod = data.PaymentMethod.toLowerCase().includes(search.toLowerCase());
        let phoneNumber = data.PhoneNumber.toLowerCase().includes(search.toLowerCase());
        let email = data.Email.toLowerCase().includes(search.toLowerCase());
        let userName = data.UserName.toLowerCase().includes(search.toLowerCase());

        return (
            firstName + lastName + gender + paymentMethod + phoneNumber + email + userName
        )

    });

    return (
        <div>
            {loading
                ?
                <img src={loader} alt="loading" />
                :
                (
                    <div className="patients">
                        <h4 className="description__">Filter by username, gender, credit type, payment method...</h4>
                        <div className="search">
                            <label className="search-label">
                                <input
                                    type="text"
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    placeholder="Filter by First Name, Gender, Payment Method, Phone Number, Email, UserName ..."
                                />
                            </label>
                        </div>

                        <h3>{`"${search}"`}</h3>

                        {filterUser.map((user, i) => {
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
                                    Latitude={user.Latitude}
                                    Longitude={user.Longitude}
                                    CreditCardType={user.CreditCardType}
                                    DomainName={user.DomainName}
                                />
                            )
                        })}
                    </div>

                )}
        </div>
    )
}

export default Patients;
