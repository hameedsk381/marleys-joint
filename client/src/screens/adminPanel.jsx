import React from 'react'
import { useSelector } from 'react-redux'
import { Userlist } from '../../admin screens/Userlist'
import {Link,Outlet} from 'react-router-dom'
import Table from 'react-bootstrap/Table';



const adminPanel = () => {



    const loginstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = loginstate

    return (
        <div className='m-5'>
            {currentUser.isAdmin ? (
                <div>
                    <h1 className='text-center bold m-5'>Admin Panel</h1>
                    {/* <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-5 ">
                            <Link className="navbar-brand mx-auto " to="userlist" >Users List</Link>
                            <Link className="navbar-brand mx-auto " to="pizzaslist">Pizzas List</Link>
                            <Link className="navbar-brand mx-auto " to="addpizza">Add  Pizza</Link>
                            <Link className="navbar-brand mx-auto " to="orders">Orders List</Link>
                        </nav>
                    </div> */}
                    <Table striped bordered hover variant="warning" className='w-100 mx-auto '>
      <thead>
        <tr>
          
          <th> <Link className="navbar-brand mx-auto " to="userlist" >Users List</Link></th>
          <th> <Link className="navbar-brand mx-auto " to="pizzaslist">Pizzas List</Link></th>
          <th> <Link className="navbar-brand mx-auto " to="addpizza">Add  Pizza</Link></th>
          <th><Link className="navbar-brand mx-auto " to="orders">Orders List</Link></th>
        </tr>
      </thead>
      </Table>
                    <Outlet/>
                   

   


                   

                </div>) : (<h1>Sorry you dont have admin access </h1>)}
        </div>
    )
}

export default adminPanel