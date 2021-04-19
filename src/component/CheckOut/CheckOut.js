import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const CheckOut = () => {

  let { productId } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [])

  const OrderDetails = product.find(product => product._id == productId);
  console.log(OrderDetails)

  const { name, price, imgUrl } = OrderDetails || {}

  const handleOrder = () => {
    console.log('submit', OrderDetails)

    const orderDetails = { ...loggedInUser, Shipment: OrderDetails, orderTime: new Date() }

    fetch('http://localhost:5000/addOrder', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(orderDetails)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          alert('successful')
        }
      })
  }

  return (

    <div className="container">

      <Header></Header>

      <div className="container text-center mt-5 pt-5 shadow p-3 mb-5 bg-body rounded">

        <table class="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Product Name</th>
              <th scope="col"> Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{name}</td>
              <td>1</td>
              <td>{price}</td>

            </tr>

            <tr>
              <th scope="">2</th>
              <td>...</td>
              <td>...</td>
              <td>-</td>
            </tr>

            <th scope=""></th>
            <td></td>
            <td> Total:  </td>
            <td>{price}</td>

          </tbody>

        </table>
        <div className="m-0">
          <Link to="/confirmCheckout">
            <button className="btn btn-success mt-3 mb-3" onClick={() => handleOrder()}>Check out</button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default CheckOut;