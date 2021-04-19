import React from 'react';
import { Link } from 'react-router-dom';
// import logo from './360_F_194199033_Kcef1C2HcxuOsTY6MYQ2LXqONfc2VFbg.jpg'

const NavBar = () => {
  return (

    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <Link to="/home" style={{ textDecoration: 'none' }}>
          <a class="navbar-brand ms-3 fs-4" href="...">Gadget Boy<img src="" style={{ width: '73px' }} alt="" /></a>
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto p-2">
            
            <li class="nav-item">
              <Link to="/home" style={{ textDecoration: 'none' }}>
                <a class="nav-link active fs-5 ms-3" aria-current="page" href="...">Home</a>
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/orders" style={{ textDecoration: 'none' }}>
                <a class="nav-link active fs-5 ms-3" href="...">Orders</a>
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/about" style={{ textDecoration: 'none' }}>
                <a class="nav-link active fs-5 ms-3" href="...">About us </a>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;