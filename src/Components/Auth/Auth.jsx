import React, { useEffect, useState } from 'react';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import { useLocation, useNavigate } from 'react-router-dom';
export default function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); 

  useEffect(() => {
    if (location.pathname === '/signUp') {
      setIsSignup(true);
    } else {
      setIsSignup(false);
    }
  }, [location.pathname]);

  const toggleMode = (mode) => {
    if (mode === 'signup') {
      navigate('/signUp');
    } else {
      navigate('/login');
    }
  };
  return (
    <div className="auth-wrapper">
      <div className={`auth-box ${isSignup ? "signup-mode" : ""}`}>
        
        <div className="form-container login-container">
          <Login />
        </div>

        <div className="form-container signup-container">
          <SignUp />
        </div>

      <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
              <p className="mb-8">To keep connected with us please login with your personal info</p>
              <button className="ghost" onClick={() => toggleMode('login')}>
                Sign In
              </button>
            </div>

            <div className="overlay-panel overlay-right">
              <h2 className="text-3xl font-bold mb-4">Hello, Friend!</h2>
              <p className="mb-8">Enter your personal details and start journey with us</p>
              <button className="ghost" onClick={() => toggleMode('signup')}>
                Sign Up
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}