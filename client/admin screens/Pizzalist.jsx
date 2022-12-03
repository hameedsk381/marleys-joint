import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../src/actions/Pizzaactions'
import Table from 'react-bootstrap/Table';

import Pizzaitem from './Pizzaitem'
const Pizzalist = () => {
    const dispatch = useDispatch()

    const pizzaState = useSelector(state => state.getAllPizzasReducer)
    const { pizzas, error, loading } = pizzaState
    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])

    return (
        <div>
            {/* <div className="row mx-5"> */}
                <h4 className='text-center bold m-2 my-4'>Pizzas List </h4>
{/* 
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-1 ">
                    <a className="navbar-brand mx-auto " href="#" >Name</a>
                    <a className="navbar-brand mx-auto " href="#">Prices</a>
                    <a className="navbar-brand mx-auto " href="#">Category</a>
                    <a className="navbar-brand mx-auto " href="#">Actions</a>
                </nav> */}
                  {/* <Table striped bordered hover variant="dark" className='w-100 mx-auto '>
      <thead>
        <tr>
          
          <th>Name</th>
          <th>Prices</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      </Table> */}



                {loading ? (<div className="spinner-grow m-auto my-auto" role="status">
                    <span className="sr-only"></span>
                </div>) : error ? (<div className="alert alert-danger" role="alert">
                    {error}
                </div>) : (

                    pizzas.map(pizza => {
                        return (


                            <div key={pizza._id}>

                                <Pizzaitem pizza={pizza} />

                            </div>)
                    })


                )}

            </div>

        // </div>
    )
}

export default Pizzalist