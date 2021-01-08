import React, { useState, useEffect } from 'react'
import axios from 'axios';

const User = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1); //set the current page to 1
    const [usersPerPage, setUsersPerPage] = useState(20) //set the users to be displayed per page


    //api url
    const apiURL = "https://cors-anywhere.herokuapp.com/http://api.enye.tech/v1/challenge/records";

    //make request
    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true); //making request
            const response = await axios.get(apiURL, { headers: { Accept: "application/json" } })
            console.log(response.data.records.profiles);
            setUser([response.data.profiles])
            setLoading(false) //request received
        }
        fetchUser()
    }, []);//run once

    return (
        <div className="User">
            <h1>User hello</h1>
            {/*search user*/}
            {/*sub header: display filter by age, gender,and payment method*/}
            {/*Display user by pagination*/}
        </div>
    )
}

export default User;
