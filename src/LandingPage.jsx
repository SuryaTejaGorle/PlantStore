import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Houseplant Store</h1>
        <p>Your one-step shop for beautiful houseplants</p>
        <Link to="/products">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </header>
    </div>
  );
};

export default LandingPage;
