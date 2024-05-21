import React from 'react';
import { useNavigate } from 'react-router-dom';

const Submit = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here (e.g., authentication)
    // For now, we'll assume sign-in is successful and navigate to the projects page
    navigate('/projects');
  };

  return (
    <div className="container mt-5" style={{margin: '500px'}}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center"
                  style={{marginBottom: '15px'}}>Members Area</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                    style={{marginTop: '15px'}}
                  />
                  <label className="form-check-label" 
                         htmlFor="rememberMe" 
                         style={{marginTop: '10px'}}>
                    Remember me
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-block"
                  style={{ backgroundColor: '#800000', borderColor: '#800000', marginTop: '20px', color: 'white', padding: '7px 116px'}}
                >
                  Sign In
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
