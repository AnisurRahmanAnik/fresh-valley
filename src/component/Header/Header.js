import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from './logo.png'

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

  
  return (

    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container-fluid">
        <Link to="/home" style={{ textDecoration: 'none' }}>
          <a class="navbar-brand ms-3 fs-" style={{ fontWeight: 'bold' }} href="...">Gadget boy<img src={logo} style={{ width: '73px' }} alt="" /></a>

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

            <li class="nav-item">
              <Link to="/admin" style={{ textDecoration: 'none' }}>
                <button class="btn btn-outline-danger me-2 fs-5 ms-3" type="submit">Admin</button>
              </Link>
            </li>


            <li class="nav-item">
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <button class="btn btn-outline-success me-2 fs-5 ms-3" type="submit">Log in</button>
              </Link>

            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

