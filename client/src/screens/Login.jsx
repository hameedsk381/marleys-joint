import React from 'react'
import '../styles/Register.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../actions/Useractions'
import { Link } from 'react-router-dom'


const Login = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   
    const dispatch = useDispatch()
    const loginstate = useSelector(state => state.loginUserReducer)
    const { loading, error } = loginstate

    useEffect(() => {
        if (localStorage.getItem('currentUser')) {
            window.location.href = "/"
           
        }
    }, [])

    function LoginButton() {
        const user = { email, password  }
        dispatch(loginUser(user))


    }
    return (
        <div className="section bg-black text-white">
            <div className="container">
                <div className="row full-height justify-content-center">
                    <div className="col-12 text-center align-self-center py-5">
                        <div className="section pb-5 pt-5 pt-sm-2 text-center">
                            {loading && (<div className="spinner-grow m-auto my-auto" role="status">
                                <span className="sr-only"></span>
                            </div>)}
                            {error && (<div className="alert alert-danger" role="alert">
                                Invalid credentials
                            </div>)}

                            <label htmlFor="reg-log"></label>
                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                    <div className="card-">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="mb-4 pb-3">Log In</h4>
                                                <div className="form-group">
                                                    <input type="text" name="logemail" className="form-style" placeholder="email" id="logemail" autoComplete="off" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                                                    <i className="input-icon uil uil-at"></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                                                    <i className="input-icon uil uil-lock-alt"></i>
                                                </div>
                                                <button className="btnn mt-4" onClick={LoginButton}>Login</button>
                                                <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
                                                <Link to="/register" className="link mb-0 mt-4 text-center">Create new Account</Link>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login