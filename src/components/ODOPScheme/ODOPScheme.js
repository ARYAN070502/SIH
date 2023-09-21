// src/components/ODOPScheme.js

import React from 'react';

const odopStyle = {
  textAlign: 'center',
  padding: '20px',
};

const headingStyle = {
  fontSize: '24px',
  marginBottom: '20px',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const buttonStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  margin: '10px',
  maxWidth: '200px',
  textDecoration: 'none', // Add text decoration for links
  color: '#333', // Text color for links
};

const logoStyle = {
  maxWidth: '100px',
};

function ODOPScheme() {
  return (
    <div style={odopStyle}>
      <h2 style={headingStyle}>ODOP Scheme</h2>
      <div style={buttonContainerStyle}>
        <a href="link1.html" style={buttonStyle}>
          <img src="logo1.png" alt="Logo 1" style={logoStyle} />
          <p>Name 1</p>
        </a>
        <a href="link2.html" style={buttonStyle}>
          <img src="logo2.png" alt="Logo 2" style={logoStyle} />
          <p>Name 2</p>
        </a>
        {/* Add more buttons with links as needed */}
      </div>
    </div>
  );
}

export default ODOPScheme;
