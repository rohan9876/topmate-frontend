import React, { useState } from 'react';
import './signup.css';
import "react-icons";

function redirectToLogin() {
  window.location.href = "/login";
}

async function sendUserData(user) {
  console.log(user);
  try {
    const response = await fetch('http://localhost:4000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    if (response.status === 404) {
      return "username is already taken";
    } else if (response.status === 500) {
      return "internal error";
    } else {
      return "you registered successfully";
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}


function Signup() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    option: '',
    password: ''
  });

  const handleSelectChange = (event) => {
    setUser({ ...user, option: event.target.value });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSignUp = async () => {
    console.log(user);
    try {
      if (!user.username || user.username.trim() === '') {
        throw new Error('Username is required');
      }
  
      const data = await sendUserData(user);
      window.alert(data);
      if(data === "you registered successfully"){ 
        redirectToLogin();
      }
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
      window.alert(error.message); // Display the error message to the user
    }
  };

  return (
    <div className="signup">
      <div className='signup-form'>
        <h1>Sign Up</h1>
        <input className='signup-input' type='text' name="username" placeholder='Name' value={user.username} onChange={handleInputChange} />
        <input className='signup-input' type='email' name="email" placeholder='Email' value={user.email} onChange={handleInputChange} />
        <select className="signup-input" name="option" value={user.option} onChange={handleSelectChange} required>
          <option value="Seeker">Select an option</option>
          <option value="Seeker">Seeker</option>
          <option value="Expert">Expert</option>
        </select>
        <input className='signup-input' type="password" name="password" placeholder='Password' value={user.password} onChange={handleInputChange} />
        <button className='signup-btn' onClick={handleSignUp}>Sign Up</button>
        <span className='signup-text'>Already Registered? Click <a href="/login">here</a> to login</span>
      </div>
      <div className='signup-right'>
        <span className='Signup-right-text'>
          Glad to see you
        </span>
      </div>
    </div>
  )
}

export default Signup;
