import React, { useState, useEffect } from 'react'
import Patient from "./Patients";
import axios from 'axios';

const User = () => {
    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1); //set the current page to 1
    const [usersPerPage, setUsersPerPage] = useState(20) //set the number users to be displayed per page


    //api url
    const apiURL = "/records";

    //make request
    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true); //making request

            const response = await axios.get(apiURL, { headers: { Accept: "application/json" } });

            console.log(response.data);

            let userArray = [];

            userArray.push(response.data.records.profiles);
            console.log(userArray[0].length);

            setUser(userArray[0]);

            setLoading(false) //request received

        }
        fetchUser();
    }, []);//run once

    //test
    // let USER = Object.values(users);
    // console.log(USER, "the KEYYYY");

    // USER.map(value => console.log(value[0], "first name"));

    return (
        <div className="User__">
            <h1>User hello</h1>
            {/*search user*/}
            {/*sub header: display filter by age, gender,and payment method*/}
            {/*Display user by pagination*/}
            <Patient users={users} loading={loading} />
        </div>
    )
}

export default User;
