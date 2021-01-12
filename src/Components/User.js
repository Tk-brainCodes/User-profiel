import React, { useState, useEffect } from 'react';
import Patient from "./Patients";
import Pagination from './Pagination';
import './User.css';
import './Header.css';
import axios from 'axios';

const User = () => {
    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1); //set the current page to 1
    const [usersPerPage] = useState(20) //set the number users to be displayed per page


    //change page (paginate)
    const paginate = (pageNumbers) => setCurrentPage(pageNumbers)

    //api url
    const apiURL = `/records`;

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
    }, [apiURL]);//run once

    //Get current post
    const indexOfLastPost = currentPage * usersPerPage;
    const indexOfFirstPost = indexOfLastPost - usersPerPage;
    const currentUser = users.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div className="User__home">
            <h1 className="records">Patients <div className="boldness">Records</div></h1>

            {/*Display filter by gender and age */}

            <div className="user__container">
                <Patient users={currentUser} loading={loading} />
            </div>

            <Pagination
                usersPerPage={usersPerPage}
                totalUsers={users.length}
                paginate={paginate}
            />

        </div>
    )
}

export default User;
