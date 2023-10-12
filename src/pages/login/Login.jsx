import React, { useState } from 'react';
import './login.css';

function redirectToHome() {
  window.location.href = "/";
}

const userId = false;
function Login() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = async () => {
    console.log(JSON.stringify(user));
    try {
      const response = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      if (response.status === 200) {
        const { accessToken } = await response.json();
        localStorage.setItem('username', user.username); // Store accessToken in localStorage
        redirectToHome();
      } else if (response.status === 500) {
        window.alert("User not found");
      } else {
        window.alert("Password is wrong");
      }
    } catch (error) {
      console.error('Error:', error);
      window.alert("Server error");
    }
  }; 
  

  return (
    <div className="login">
      <div className='login-form'>
        <h1>Log In</h1>
        <input
          className='login-input'    
          type='text'
          name="username"
          placeholder='Username'
          value={user.username}
          onChange={handleInputChange}
        />
        <input
          className='login-input'
          type='email'
          name="email"
          placeholder='Email'
          value={user.email}
          onChange={handleInputChange}
        />
        <input
          className='login-input'
          type="password"
          name="password"
          placeholder='Password'
          value={user.password}
          onChange={handleInputChange}
        />
        <button className='login-btn' onClick={handleLogin}>Log In</button>
        <span className='login-text'>If you are not registered? Click <a href="/signup">here</a> to sign up</span>
      </div>
      <div className='login-right'>
        <span className='login-right-text'>
          Glad to see you
        </span>
      </div>
    </div>
  );
}
export default Login;
