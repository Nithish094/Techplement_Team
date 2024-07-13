import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  let navigate=useNavigate();

  const onSubmit = async(data) => {
    const response = await axios.post('http://localhost:3050/users/register', {
        name:data.name,
        email: data.email,
        password: data.password
      });
    if(response.data.message==="User added"){
        alert("Registraion success please Login");
        navigate('/');
    }else{
      alert("Registration FAiled")
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                id="name"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
            </div>
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
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
