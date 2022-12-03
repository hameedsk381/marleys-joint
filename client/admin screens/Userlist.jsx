import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser } from '../src/actions/Useractions'
import { getAllUsers } from '../src/actions/Useractions'
import Table from 'react-bootstrap/Table';

export const Userlist = () => {
  const dispatch = useDispatch()
  const userstate = useSelector(state => state.getAllUsersReducer)
  const { users, error, loading } = userstate
  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

 
  return (
    <div>
       <h4 className='text-center bold m-2 my-4'>Users List </h4>
                    {/* <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-1 ">
                            <a className="navbar-brand mx-auto " href="#" >User Id</a>
                            <a className="navbar-brand mx-auto " href="#">Name</a>
                            <a className="navbar-brand mx-auto " href="#">Email</a>
                            <a className="navbar-brand mx-auto " href="#">Delete</a>
                        </nav>
                    </div> */}
                    {loading ? (<div className="spinner-grow m-auto my-auto" role="status">
        <span className="sr-only"></span>
      </div>) : error ? (<div className="alert alert-danger" role="alert">
        {error}
      </div>) : (

        users.map(user => {
          return <div key={user._id}>

            {!user.isAdmin ? (
            
            <Table striped bordered hover variant="dark" className='w-75 mx-auto '>
      <thead>
        <tr>
          
          <th>User Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{user._id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td> <a className='navbar-brand mx-auto' onClick={() => { dispatch(deleteUser(user._id)) }}> <i className="fa fa-trash " style={{ color: "red" }} aria-hidden="true"> </i></a></td>
        </tr>
       
      </tbody>
    </Table>
            // <div className="container">
            //   <nav className="navbar navbar-expand-lg navbar-light bg-light m-1 " >
            //     <a className='navbar-brand mx-auto'>{user._id}</a>
            //     <a className='navbar-brand mx-auto'>{user.name}</a>
            //     <a className='navbar-brand mx-auto'>{user.email}</a>
            //     <a className='navbar-brand mx-auto' onClick={() => { dispatch(deleteUser(user._id)) }}> <i className="fa fa-trash " style={{ color: "red" }} aria-hidden="true"> </i></a>

            //   </nav>

            // </div>
            ) : (null)}

          </div>
        })


      )}



    </div>
  )
}

