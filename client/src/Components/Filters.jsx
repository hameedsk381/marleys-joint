import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { filterPizza } from '../actions/Pizzaactions'

const Filters = () => {
    const dispatch = useDispatch()
    const [searchkey, setsearchkey] = useState('')
    const [category, setcategory] = useState('all')



    return (
        <>
            <div className='my-5 bg-success rounded w-100  mw-100 shadow p-3'>
                <Form>
                    <Row className=''>
                        <Col xs={8}>
                            <Form.Control value={searchkey} onChange={e => setsearchkey(e.target.value)} placeholder="Search pizza" />
                            <Button onClick={()=>{dispatch(filterPizza(searchkey,category))}} className='mt-3 w-25'>Search</Button>
                        </Col>
                        <Col>
                            <Form.Select size="md" value={category} onChange={e => setcategory(e.target.value)}>
                                <option>All</option>
                                <option>veg</option>
                                <option>non-veg</option>
                            </Form.Select>
                           
                        </Col>
                       

                    </Row>
                </Form>
            </div>


        </>
    )
}

export default Filters