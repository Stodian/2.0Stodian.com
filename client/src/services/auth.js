// auth.js
export const authenticateUser = async (email, password) => {
    // Replace with your actual API endpoint
    const API_ENDPOINT = 'https://example.com/api/auth/login';
  
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
  
    if (!response.ok) {
      throw new Error('Invalid email or password');
    }
  
    const data = await response.json();
    return data;
  };
  