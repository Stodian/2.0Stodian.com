import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from '../../services/auth';

const Submit = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Add the overflow: hidden style to body and html elements when the component mounts
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Clean up the style when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Call the authentication function
      // const userData = await authenticateUser(email, password);
      await authenticateUser(email, password);

      // Assuming successful authentication, redirect to the projects page
      navigate('/projects');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="d-flex justify-content-center align-items-center" 
      style={{ minHeight: '730px', marginLeft: '-150px', marginBottom: '100px' }}
    >
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center" style={{ marginBottom: '15px' }}>
                Members Area
              </h3>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                    style={{ marginTop: '15px' }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="rememberMe"
                    style={{ marginTop: '10px' }}
                  >
                    Remember me
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-block"
                  style={{
                    backgroundColor: '#800000',
                    borderColor: '#800000',
                    marginTop: '20px',
                    color: 'white',
                    padding: '7px 116px',
                  }}
                  disabled={loading}
                >
                  {loading ? 'Signing In...' : 'Sign In'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submit;
