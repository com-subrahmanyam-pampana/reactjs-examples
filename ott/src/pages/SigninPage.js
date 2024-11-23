

// SignInPage.js

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function SigninPage() {
  // State for handling input fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');  // To show success or error message
  const [loading, setLoading] = useState(false);  // To show loading state
  const navigate = useNavigate();
  // Handle form input changes
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    
    event.preventDefault();
    setLoading(true);
    setMessage('');

    // Prepare the data for API request
    const data = {
      username: username,
      password: password,
    };

    try {
      // Sending POST request to backend API
      const response = await fetch('http://localhost:3004/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.text();

      if (response.status === 200) {
        setMessage(`Success! ${result}`);
        navigate("/home");
      } else {
        setMessage(`Error: ${result}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f4f4f4' }}>
      <div style={{ padding: '20px', borderRadius: '5px', backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '300px' }}>
        <h2 style={{ textAlign: 'center' }}>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#007BFF',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
              }}
              disabled={loading}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </div>
        </form>
        {message && (
          <div style={{ textAlign: 'center', color: message.startsWith('Error') ? 'red' : 'green', marginTop: '10px' }}>
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SigninPage;

