import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './AuthContext';

function Login() {
  const [feedback, setFeedback] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { user, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/home');
    }
  }, [user, navigate]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3050/users/login', {
        email: data.email,
        password: data.password
      });
      if (response.data.message === "Login success") {
        login(response.data.user);
        setFeedback('Logged in Successfully');
        setTimeout(() => {
          navigate('/home');
        }, 5000);
      } else {
        setFeedback('Login Failed');
      }
    } catch (error) {
      setFeedback('An error occurred');
    } finally {
      setTimeout(() => setFeedback(''), 5000);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              {feedback && (
                <div className={`alert ${feedback === 'Logged in Successfully' ? 'alert-success' : 'alert-danger'} alert-dismissible fade show`} role="alert">
                  {feedback}
                </div>
              )}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    {...register('email', { required: 'Email is required' })}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    id="password"
                    {...register('password', { required: 'Password is required' })}
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
