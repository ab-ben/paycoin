import React from 'react';

const SignIn = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const leftStyle = {
    backgroundColor: '#6200ee',
    color: '#fff',
    padding: '40px',
    borderRadius: '8px 0 0 8px',
    width: '300px',
  };

  const rightStyle = {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '0 8px 8px 0',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '400px',
  };

  const headingStyle = {
    marginBottom: '10px',
  };

  const paragraphStyle = {
    marginBottom: '20px',
  };

  const formGroupStyle = {
    marginBottom: '20px',
  };

  const labelStyle = {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyle = {
    backgroundColor: '#6200ee',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      {/* <div style={leftStyle}>
        <h3 style={headingStyle}>Quick and free sign-up</h3>
        <p style={paragraphStyle}>Enter your email address to create an account.</p>
        <h3 style={headingStyle}>Cross-platform solution</h3>
        <p style={paragraphStyle}>Preview your newsletters on any device before sending them out.</p>
        <h3 style={headingStyle}>Start sending emails</h3>
        <p style={paragraphStyle}>Use our API or pick our pre-built templates.</p>
      </div> */}
      <div style={rightStyle}>
      <div style={leftStyle}>
        <h3 style={headingStyle}>Quick and free sign-up</h3>
        <p style={paragraphStyle}>Enter your email address to create an account.</p>
        <h3 style={headingStyle}>Cross-platform solution</h3>
        <p style={paragraphStyle}>Preview your newsletters on any device before sending them out.</p>
        
      </div>
        
        <h2>Create your account</h2>
        <form>
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="email">
              Email
            </label>
            <input style={inputStyle} type="email" id="email" placeholder="Enter your email address" />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="fullName">
              Full name
            </label>
            <input style={inputStyle} type="text" id="fullName" placeholder="Enter your full name" />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="password">
              Password
            </label>
            <input style={inputStyle} type="password" id="password" placeholder="Type to create a password" />
          </div>
          <div style={formGroupStyle}>
          </div>
          <button style={buttonStyle} type="submit">
            Sign Up
          </button>
          <a href="" style={{color:'#6200ee', marginTop:'20px'}} >already a member? Sign In</a>
        </form>
      </div>
    </div>
  );
};

export default SignIn;