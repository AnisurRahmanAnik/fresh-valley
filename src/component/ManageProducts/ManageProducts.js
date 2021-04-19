import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManageProductsList from '../ManageProductsList/ManageProductsList';
import NavBar from '../NavBar/NavBar';
// import spiner from './loader_gif.gif'
// import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ManageProducts = (props) => {

  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [])

  return (
  
    <div className="container">
      <NavBar></NavBar>

      <div className="row">
        <div className="col-md-3 mt-5 text-center">
          <div className="row mb-3">
            <Link to="/admin">
              <button class="btn btn-success" > Add Product</button>
            </Link>
          </div>

          <div className="row">
            <Link to="/manageProduct">
              <button class="btn btn-secondary"> Manage Product</button>
            </Link>
          </div>


        </div>
        <div className="col-md-9 mt-5">

          {
            product.length === 0 &&
            <div className="text-center">
              <img src="" style={{ width: '50%' }} alt="" />
            </div>
          }
          {
            product.map(products => <ManageProductsList product={products}></ManageProductsList>)
          }

        </div>
        </div>
    </div>
  );
};

export default ManageProducts;