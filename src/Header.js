import React, { useState, useContext } from 'react';
import { RiAccountCircleFill } from 'react-icons/ri';
import './Header.css';
import logo from './logo.png';
import logo1 from './logo1.png';
import logo2 from './logo2.jpg';
import { Link } from 'react-router-dom';
import profile from './profile.png';
import { loginContext } from './Context/loginContext';

const Header = () => {
  const [currentuser, error, userLoginStatus, loginuser, logoutuser] = useContext(loginContext); // state to keep track of user's login status
  const [email, setEmail] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for joining the waiting list. We will reach out to you soon.');
    setShowForm(false);
  };

  return (
    <header className="header">
      <div className="header-left">
        <a className="Search">
          <img src={logo} alt="Logo" className="header-logo" />
          <img src={logo1} alt="Logo1" className="header-logo1" />
        </a>
      </div>
      <div className="header-center-1">
        <form className="header-search-form-1">
          <input type="text" className="header-search-input-1" placeholder="Search..." />
          <button type="submit" className="header-search-button">
            <img src={logo2} alt="Search Logo" className="header-search-logo-1" />
          </button>
        </form>
      </div>
      <div className="header-right a">
        <Link to="/" className="active">Home</Link>
        <Link to="/Pricing">Pricing</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Support">Support</Link>

        {userLoginStatus ? (
          <Link to="/Profile">
            <img src={profile} className="header-profile-logo" alt="Profile" />
          </Link>
        ) : (
          <Link to="/Signup">
            <RiAccountCircleFill fontSize={'24px'} />
          </Link>
        )}

        <Link to="/RequestDemo">Request Demo</Link>

        {showForm ? (
          <div className="join-waiting-list">
            <h2>Join the waiting list</h2>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" onClick={handleSubmit}>Submit</button>
          </div>
        ) : (
          <button onClick={() => setShowForm(true)}>Join the waiting list</button>
        )}
      </div>
    </header>
  );
};

export default Header;





