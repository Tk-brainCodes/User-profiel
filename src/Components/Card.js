import React from 'react';
import './Card.css';



const Card = ({ FirstName, LastName, Gender, CreditCardNumber, Email, LastLogin, MacAddress, PaymentMethod, PhoneNumber, URL, UserName }) => {
    return (
        <div className="Card__component">
            <div className="inner__component">
                <p className="names__">{FirstName} {LastName}</p>
                <p>Sex: {Gender}</p>
                <p>CreditCardNumber: <b>{CreditCardNumber}</b></p>
                <p>Email: <b>{Email}</b></p>
                <p>LastLogin: <b>{LastLogin}</b></p>
                <p>MacAddress: <b>{MacAddress}</b></p>
                <p>PaymentMethod: <b>{PaymentMethod}</b></p>
                <p>PhoneNumber: <b>{PhoneNumber}</b></p>
                <p>URL: <b>{URL}</b></p>
                <p>UserName: <b>{UserName}</b></p>
            </div>
        </div>
    )
}

export default Card;
