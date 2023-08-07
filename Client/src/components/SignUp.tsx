import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const SignUp = () => {

    const [signUp, setSignUp] = useState({
        name: '',
        email: '',
        password: '',
    })

    const navigate = useNavigate()
    const handleInput = (e: any) => {
        setSignUp({ ...signUp, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3001/register', { signUp });
            if (res) {
                navigate('/login')
            }

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label className='fw-bold'>Name</label>
                        <input
                            type='text'
                            name='name'
                            autoComplete='off'
                            placeholder='Enter Your Name'
                            className='form-control rounded-0'
                            onChange={(e) => handleInput(e)}
                            required
                        />
                    </div>
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
                            value='Register'
                            className='form-control rounded-0 btn btn-success'

                        />
                    </div>
                    <p className='text-center'>Already Have Account?</p>
                    <div className='mt-3'>
                        <Link to='/login' className='btn btn-defualt border bg-light w-100 '>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp