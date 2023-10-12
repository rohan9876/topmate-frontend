import React, { useState } from 'react';


function Update() {
  const accessToken = localStorage.getItem('accessToken');


  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/auth/updateuser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify(user)
      });
      if (response.status === 200) {
        window.alert('User details updated successfully');
      } else {
        window.alert('You can update only your own account');
      }
    } catch (error) {
      console.error('Error:', error);
      window.alert('An error occurred while updating user details');
    }
  };
  
  function handleupdate(){
    window.location = "/";
  }

  return (
    <div className="signup">
      <div className="signup-form">
        <h1>Update</h1>
        <input
          className="signup-input"
          type="text"
          name="username"
          placeholder="Name"
          value={user.username}
          onChange={handleInputChange}
        />
        <input
          className="signup-input"
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleInputChange}
        />
        <input
          className="signup-input"
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleInputChange}
        />
        <button className='signup-btn' onClick={handleupdate}>Update</button>
      </div>
      <div className='signup-right'>
        <span className='Signup-right-text'>
          Glad to see you
        </span>
      </div>
    </div>
  );
}

export default Update;
