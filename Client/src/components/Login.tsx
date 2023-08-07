import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const [login, setLogin] = useState({
    email: '',
    password: ''
  })


  const handleInput = (e: any) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {

      const res = await axios.post('http://localhost:3001/login', { login })
      if (res) {
        console.log(res)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label className='fw-bold'>Email</label>
            <input
              type='email'
              name='email'
              autoComplete='off'
              placeholder='Enter Your Email'
              className='form-control rounded-0'
              onChange={(e) => handleInput(e)}
              required
            />
          </div>
          <div className='mb-3'>
            <label className='fw-bold'>Password</label>
            <input
              type='password'
              name='password'
              autoComplete='off'
              placeholder='Enter Your Password'
              className='form-control rounded-0'
              onChange={(e) => handleInput(e)}
              required
            />
          </div>
          <div className='mb-3'>
            <input
              type='submit'
              value='Login'
              className='form-control rounded-0 btn btn-success'

            />
          </div>
          <p className='text-center'>Don't Have Account?</p>
          <div className='mt-3'>
            <Link to='/register' className='btn btn-defualt border bg-light w-100 '>Register</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login