import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="text-center container mt-5">


      <div class="card">
        <h5 class="card-header">Author Anik</h5>
        <div class="card-body">
          <h5 class="card-title">Email at : <span style={{ color: 'red' }}>anikking87@gmail.com</span></h5>
          <h6 class="card-text"> Technology used to create this app</h6>
          <p>Javascript</p>
          <p>React</p>
          <p>Express js</p>
          <p>Mongodb</p>
          <p>Es6</p>


          <Link to="/">
            <a href="..." class="btn btn-primary">Go to Home</a>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;