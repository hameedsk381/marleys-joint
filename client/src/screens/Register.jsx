import React from 'react'
import '../styles/Register.css'
import { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  registerUser } from '../actions/Useractions'
import { Link } from 'react-router-dom'


const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setcPassword] = useState('')
    const regstate = useSelector(state => state.registerUserReducer)
    const { error, loading, success } = regstate
    const dispatch = useDispatch()




    function register() {
        if (password != cpassword) {
            alert("Password did not match")
        }
        else {
            const user = {
                name, email, password
            }
            console.log(user)
            dispatch(registerUser(user))

        }
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
                            {success && (<div className="alert alert-success" role="alert">
                                User registered Succesfully
                            </div>)}
                            {error && (<div className="alert alert-danger" role="alert">
                                User already registered
                            </div>)}
                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                    <div className="card-">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="mb-4 pb-3">Sign Up</h4>
                                                <div className="form-group">
                                                    <input type="text" name="logname" className="form-style" placeholder="Your Full Name" value={name} onChange={(e) => { setName(e.target.value) }} id="logname" autoComplete="off" required />
                                                    <i className="input-icon uil uil-user"></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input type="email" name="logemail" className="form-style" placeholder="Your Email" autoComplete="off" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                                                    <i className="input-icon uil uil-at"></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input type="password" name="logpass" className="form-style" placeholder="Your Password" autoComplete="off" value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                                                    <i className="input-icon uil uil-lock-alt"></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input type="password" name="cpass" className="form-style" placeholder="Confirm Password" autoComplete="off" value={cpassword} onChange={(e) => { setcPassword(e.target.value) }} required />
                                                    <i className="input-icon uil uil-lock-alt"></i>
                                                </div>
                                                <button className="btnn mt-4" onClick={register}>submit</button><br /><br />
                                                <Link to="/login" className="link mb-0 mt-4 text-center">Already have a account? login</Link>
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

export default Register