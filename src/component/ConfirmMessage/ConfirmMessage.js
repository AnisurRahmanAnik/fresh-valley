import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmMessage = () => {
  return (
    <div class="card text-center mt-5">
      <div class="card-header">

      </div>
      <div class="card-body">
        <h5 class="card-title">Order placed Successfully</h5>
        <p class="card-text">We will send you a email in future. Developer is not able to send it for now</p>

        <Link to="/">
          <a href="..." class="btn btn-warning"> Continue Shopping </a>
        </Link>

      </div>
      <div class="card-footer text-muted">

      </div>
    </div>
  );
};

export default ConfirmMessage;