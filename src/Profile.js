import React from 'react';
import Contact from './Contact.js';
import './Profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = ({ onDownloadCvClick, onContactInfoClick }) => {
  return (
    <div className="container">
      <div className='profile'>
      <div className="row">
        <div className="col-md-6">
          <p>Hi, my name is</p>
          <h2>Zlata Shabalina.</h2>
          <p>I design and code things, and I love what I do.</p>
        </div>
        <div className="col-md-6">
          <div className="button-container">
            <button className="cool-button" onClick={onDownloadCvClick}>
              Download CV
            </button>
            <button className="cool-button" onClick={onContactInfoClick}>
              Contact Info
            </button>
          </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Profile;
