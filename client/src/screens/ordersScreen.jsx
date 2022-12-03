import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../actions/Orderactions'



const ordersScreen = () => {
  const ordersstate = useSelector(state => state.getUserOrdersReducer)
  const { error, loading, orders } = ordersstate
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserOrders())
  },[])
  return (
    <>
      <h4 className='text-center bold m-2 my-4'>Orders List </h4>
      <div className="row justify-content-center ">
      {/* {loading && (<div className="spinner-grow m-auto my-auto" role="status">
            <span className="sr-only"></span>
        </div>)} */}
        {error && (<div className="alert alert-danger" role="alert">
              Something went wrong
            </div>)}

            {orders && orders.map(order=>{
              return <div className="col-md-8">
                <div className="flex-container bg-warning m-2">
                  <div className='text-left w-100 m-1'>
                    <h4>Items</h4>
                    {order.orderItems.map(items=>{
                      return <div >
                        <h5>{items.name} [{items.varient}] * {items.quantity} = {items.price}</h5>
                      </div>
                    })}
                  </div>
                  <div className='text-left w-100 m-1'>
                  <h4>Address</h4>
                  <h5>Street :{order.shippingAddress.street} </h5>
                  <h5>City :{order.shippingAddress.city} </h5>
                  <h5>Country :{order.shippingAddress.country} </h5>
                  <h5>Pincode :{order.shippingAddress.pincode} </h5>
                  </div>
                  <div className='text-left w-100 m-1'>
                    <h4>Order Info</h4>
                    <h5>Order Amount : {order.orderAmount}</h5>
                    <h5>Order Date : {order.createdAt.slice(0,10)}</h5>
                    <h5>Order Id : {order._id}</h5>
                    
                    
                  </div>

                </div>
              </div>
            })}


</div>












      </>
      )
}

      export default ordersScreen