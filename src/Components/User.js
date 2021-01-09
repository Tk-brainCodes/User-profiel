import React, { useState, useEffect } from 'react';
import Header from './Header';
import Patient from "./Patients";
import './User.css';
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

    //Get current post
    const indexOfLastPost = currentPage * usersPerPage;
    const indexOfFirstPost = indexOfLastPost - usersPerPage;
    const currentUser = users.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div className="User__home">
            <Header />
            <h1 className="records">Profiles</h1>
            <div className="user__container">
                {/*search user*/}
                {/*sub header: display filter by age, gender,and payment method*/}
                {/*Display user by pagination*/}
                <Patient users={currentUser} loading={loading} />
            </div>
        </div>
    )
}

export default User;
