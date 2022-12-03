import React, { useEffect, useState } from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../actions/Pizzaactions'
import Filters from './Filters'

import Pizza from './Pizza'
const Homepage = () => {
    const dispatch = useDispatch()

    const pizzaState = useSelector(state => state.getAllPizzasReducer)
    const { pizzas, error, loading } = pizzaState
    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])

    return (
       <Container >


                {loading ? (<div className="spinner-grow m-auto my-auto" role="status">
                    <span className="sr-only"></span>
                </div>) : error ? (<div className="alert alert-danger" role="alert">
 {error}
</div>) : (
           <Row my={4} >
                 <Filters /> 
            {pizzas.map(pizza => (
                <Col md={4} key={pizza.name}>
                    <Pizza pizza={pizza}/>
                </Col>
            ))}

</Row>
                )}

            
        </Container>
                   
    )
}

export default Homepage