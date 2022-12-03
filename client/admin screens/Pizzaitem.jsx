import React, { useState } from 'react'
import { deletePizza } from '../src/actions/Pizzaactions'

import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';



const Pizzaitem = ({ pizza }) => {


    const dispatch = useDispatch()

    return (
        <div  >


            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light m-1 " >
                <a className='navbar-brand mx-auto'>{pizza.name}</a>
                <a className='navbar-brand mx-auto'>{pizza.varients.map(varient => {
                        return <option value={varient} >
                            {varient}:{pizza.prices[0][varient]}
                        </option>
                    })}</a>
                <a className='navbar-brand mx-auto'>{pizza.category}</a>
                <a className='navbar-brand mx-auto' onClick={() => { dispatch(deletePizza(pizza._id)) }}> <i className="fa fa-trash " style={{ color: "red" }} aria-hidden="true"> </i></a>

            </nav> */}
            <Table striped bordered hover variant="dark" className='w-75 mx-auto '>
      <thead>
        <tr>
          
          <th>Name</th>
          <th>Prices</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a className='navbar-brand mx-auto'>{pizza.name}</a></td>
          <td><a className='navbar-brand mx-auto'>{pizza.varients.map(varient => {
                        return <option value={varient} >
                            {varient}:{pizza.prices[0][varient]}
                        </option>
                    })}</a></td>
          <td>  <a className='navbar-brand mx-auto'>{pizza.category}</a></td>
          <td>  <a className='navbar-brand mx-auto' onClick={() => { dispatch(deletePizza(pizza._id)) }}> <i className="fa fa-trash " style={{ color: "red" }} aria-hidden="true"> </i></a></td>
        </tr>
       
      </tbody>
    </Table>
            {/* <div className="row">
         
                <h4 className='text-center cursor-pointer'>{pizza.name}</h4>
               
     

            <div className='flex-container'>
                <div className='mx-auto'>
                    <p>Varients</p>
                    <select value={varient} onChange={(e) => { setVarient(e.target.value) }}> {pizza.varients.map(varient => {
                        return <option value={varient} >
                            {varient}
                        </option>
                    })}</select>
                </div>
                <div className='mx-auto' >
                    <p>Quantity</p>
                    <select value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option   value={i + 1}>{i + 1}</option>
                        })}
                    </select>

                </div>
            </div>
            <div className="flex-container">
                <div className='mx-auto my-4'>
                    <h5>Price:{pizza.prices[0][varient] * quantity}</h5>
                </div>
                
            </div>


            </div> */}

        </div>
    )
}

export default Pizzaitem