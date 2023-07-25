import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="bg-light p-4 mb-4 rounded container mx-auto my-5" style={{maxWidth: 800}}>
    <h1 className="display-5 fw-bold">Pluralsight Administration</h1>
    <p className="lead">React, Redux and React Router for ultra-responsive web apps.</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;