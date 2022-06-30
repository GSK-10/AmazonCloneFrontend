
import React from 'react';
import axios from "axios";

import { useEffect, useState } from "react"

import ProductObj from '../../components/ProductObj/ProductObj';

// import Row from 'react-bootstrap/Row'
// import CardObj from '../components/Product';

function Furniture() {

    let [users, setUsers] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            let response = await axios.get("http://localhost:8090/Furniture")
            let userList = response.data
            setUsers(userList)
        }
        fetchUsers()
    }, [])


    return(
        <>
            <div className='container border mt-5'>
                <ProductObj products = {users} />
            </div>
        </>
    );
}
export default Furniture;