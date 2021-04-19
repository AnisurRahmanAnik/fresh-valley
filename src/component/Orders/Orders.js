import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import NavBar from '../NavBar/NavBar';
import OrderDetail from '../OrderDetail/OrderDetail';

const Orders = () => {
    const [orderDetails, setOrderDetails] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch('http://localhost:5000/ordersDetails?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrderDetails(data))

    }, [])
    return (
        <div className="container">
            <NavBar></NavBar>

            <div className="container text-center mt-5 pt-5 mb-5">
                <h1> <span style={{ color: 'red' }}> {loggedInUser.name}</span> , Your Total order: {orderDetails.length} </h1>
            </div>

            {
                orderDetails.map(orderDetail => <OrderDetail orderD={orderDetail}></OrderDetail>)
            }

            <div className="text-center">
                <Link to="/confirmMsg" >
                    <button class="btn btn-danger  mb-5" >Confirm Order</button>
                </Link>
            </div>

        </div>
    );
};

export default Orders;