import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsCard.css'



const ProductsCard = (props) => {

    const { imgUrl, name, price, stock, _id } = props.product

    const design = {
        width: '50%',
        margin: '0 auto'
    }

    return (
        <div className="col-md-3" >
            <div class="card shadow p-3 mb-5 bg-body rounded" >

                <div className="" style={design}>
                    <img src={imgUrl} class="card-img-top mt-2" alt="" />
                </div>

                <div class="card-body">
                    <h4 class="card-title text-center pb-3">{name}</h4>

                    <h5 className="text-center " style={{ backgroundColor: 'rgb(242 242 242)', borderRadius: '10px' }}>Price:{price}৳</h5>

                    <p className="text-center">stock:{stock}</p>
                    
                    <div className="text-center mt-3">
                        <Link to={`/checkOut/${_id}`}> <a href="..." class="btn btn-danger text-center">  Buy now</a></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductsCard;