import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import ProductsCard from '../ProductsCard/ProductsCard';
import spinner from './download.png'
const Home = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className="container">
            <Header/>
            <div className="container">

                <div className="d-flex justify-content-center align=items-center mb-3 mt-5">
                    <div className="input-group m-2 p-2 w-50">


                        <input class="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-info " type="submit">Search</button>
                    </div>

                </div>


                <div className="row">
                    {
                        product.length === 0 &&
                        <div className="text-center">
                            <img src={spinner} style={{ width: '50%' }} alt="" />
                        </div>
                    }

                    {
                        product.map(products => <ProductsCard product={products}> </ProductsCard>)
                    }

                </div>

            </div>
        </div>
    );
};

export default Home;