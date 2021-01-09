import React from 'react'

const Card = ({ FirstName, LastName, Gender }) => {
   // console.log(FirstName);
   // console.log(LastName);
    // console.log(Gender);
    return (
        <div className="Card__">
            <h1>FirstName: {FirstName}</h1>
            <h2>LastName: {LastName}</h2>
            <h2>Gender: {Gender}</h2>
        </div>
    )
}

export default Card;
