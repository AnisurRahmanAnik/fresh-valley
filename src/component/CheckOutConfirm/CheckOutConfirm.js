import React from 'react';
import { Link } from 'react-router-dom';

const CheckOutConfirm = () => {
    return (
        <div class="card text-center mt-5">
           <div class="card-header">
            </div>
            <div class="card-body">
                <h5 class="card-title"> Checked Out successfully</h5>
                <Link to="/orders">
                    <a href="..." class="btn btn-primary">Go to your orders</a>
                </Link>
            </div>
            <div class="card-footer text-muted">

            </div>
        </div>
    );
};

export default CheckOutConfirm;