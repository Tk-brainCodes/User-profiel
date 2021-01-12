import React, { useState } from 'react';
import Card from './Card';
import './Patient.css';

//store the patients

const Patients = ({ users, loading }) => {
    const [search, setSearch] = useState('');

    if (loading) {
        return <h2>Loading...</h2>
    }


    const filterUser = users.filter(name => {
        return name.FirstName.toLowerCase().includes(search.toLowerCase())
    })

    const filterData = users.filter(data => {

    })

    return (
        <div className="patients">
            <h2>Filter By:</h2>
            <div className="filter">
                <div className="Gender">
                    <h3>Gender</h3>
                    <select>
                        <option value="grapefruit">Male</option>
                        <option value="lime">Female</option>
                        <option selected value="coconut">Prefer to skip</option>
                    </select>
                </div>

                <div className="payment__method">
                    <h3>Payment Method</h3>
                    <select>
                        <option value="grapefruit">Money order</option>
                        <option value="lime">Paypal</option>
                        <option selected value="coconut">Cc</option>
                        <option selected value="check">Check</option>
                    </select>
                </div>
            </div>

            <div className="search">
                <label className="search-label">
                    <input
                        type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Search by Name"
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


                    />
                )
            })}
        </div>
    )
}

export default Patients;
