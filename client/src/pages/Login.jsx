import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [inputs, setInputs] = useState({ username: "", password: "" })
  const[error , setError]=useState('');

  const navigate=useNavigate();

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))

  }
  console.log(inputs);

  const handleSubmit=async e=>{
    e.preventDefault();

    try {
      await axios.post("/auth/login",inputs)
      navigate('/')
     
    } catch (error) {
      setError(error.response.data);
      console.log(error)
    }
  }
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type='text' name="username" onChange={handleChange} placeholder='username' />
        <input required type="password" name="password" onChange={handleChange} placeholder='password' />
        <button onClick={handleSubmit}>Login</button>
        {error && <p>{error}</p>}
        <span>Don't you have an account?<Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}


export default Login;