import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllOrders,deliverOrder } from '../src/actions/Orderactions'
import {Button} from 'react-bootstrap'
import Table from 'react-bootstrap/Table';


const Orders = () => {
  const dispatch = useDispatch()
  const orderstate = useSelector(state => state.getAllOrdersReducer)
  const { orders, error, loading } = orderstate
  useEffect(() => {
    dispatch(getAllOrders())
  }, [])
  return (
    <div>
         <h4 className='text-center bold m-2 my-4'>Orders List </h4>
                    {/* <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-1 ">
                            <a className="navbar-brand mx-auto " href="#" >Order_id</a>
                            <a className="navbar-brand mx-auto " href="#">Email</a>
                            <a className="navbar-brand mx-auto " href="#">User_id</a>
                            <a className="navbar-brand mx-auto " href="#">Amount</a>
                            <a className="navbar-brand mx-auto " href="#">Date</a>
                            <a className="navbar-brand mx-auto " href="#">Status</a>
                        </nav>
                    </div> */}
                    {loading ? (<div className="spinner-grow m-auto my-auto" role="status">
        <span className="sr-only"></span>
      </div>) : error ? (<div className="alert alert-danger" role="alert">
        {error}
      </div>) : (

        orders.map(order => {
          return <div key={order._id}>

           {/* <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light m-1 " >
                <a className='navbar-brand mx-auto'>{order._id}</a>
                <a className='navbar-brand mx-auto'>{order.email}</a>
                <a className='navbar-brand mx-auto'>{order.userid}</a>
                <a className='navbar-brand mx-auto'>{order.orderAmount}</a>
                <a className='navbar-brand mx-auto'>{order.createdAt.slice(0,10)}</a>
               {order.isDelivered?(<h6 className='text-success'>Delivered</h6>):(<Button className='btn-danger' onClick={()=>{
                window.location.reload()
                dispatch(deliverOrder(order._id))}}>Deliver</Button>)}


               

              </nav>

            </div> */}
            <Table striped bordered hover variant="dark" className='w-75 mx-auto '>
      <thead>
        <tr>
          
          <th>Order Id</th>
          <th>Email</th>
          <th>User Id</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> <a className='navbar-brand mx-auto'>{order._id}</a></td>
          <td><a className='navbar-brand mx-auto'>{order.email}</a></td>
          <td>  <a className='navbar-brand mx-auto'>{order.userid}</a></td>
          <td>  <a className='navbar-brand mx-auto'>{order.orderAmount}</a></td>
          <td>   <a className='navbar-brand mx-auto'>{order.createdAt.slice(0,10)}</a></td>
          <td>{order.isDelivered?(<h6 className='text-success'>Delivered</h6>):(<Button className='btn-danger' onClick={()=>{
                window.location.reload()
                dispatch(deliverOrder(order._id))}}>Deliver</Button>)}
</td>
        </tr>
       
      </tbody>
    </Table>
            
           

          </div>
        })


      )}


     
    </div>
  )
}

export default Orders