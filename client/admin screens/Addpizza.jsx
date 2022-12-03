import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPizza } from '../src/actions/Pizzaactions'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import swl from "sweetalert"

const Addpizza = () => {
    const [name, setName] = useState('')
    const [smallPrice, setsmallPrice] = useState()
    const [mediumPrice, setmediumPrice] = useState()
    const [largePrice, setlargePrice] = useState()
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const regstate = useSelector(state => state.registerUserReducer)
    const { error, loading, success } = regstate
    const dispatch = useDispatch()

    function addpizza(e) {
        e.preventDefault()
        const pizza = {
            name, prices: {
                small: smallPrice,
                medium: mediumPrice,
                large: largePrice
            }, category, image, description
        }
        console.log(pizza)
        dispatch(addPizza(pizza))
        swl("new Pizza added")


    }


    return (
        <>{loading && (<div className="spinner-grow m-auto my-auto" role="status">
            <span className="sr-only"></span>
        </div>)}
            {success && (<div className="alert alert-success" role="alert">
                New Pizza added
            </div>)}
            {error && (<div className="alert alert-danger" role="alert">
                Pizza already exist
            </div>)}
            <Form >

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Small</Form.Label>
                            <Form.Control type="text" placeholder="Enterprice for small" value={smallPrice} onChange={e => setsmallPrice(e.target.value)} />
                        </Form.Group>


                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Medium</Form.Label>
                            <Form.Control type="text" placeholder="Enter price for medium" value={mediumPrice} onChange={e => setmediumPrice(e.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Large</Form.Label>
                            <Form.Control type="text" placeholder="Enter price for large" value={largePrice} onChange={e => setlargePrice(e.target.value)} />
                        </Form.Group>
                    </Row>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Category</Form.Label>
                        <Form.Select defaultValue="Choose..." value={category} onChange={e => setCategory(e.target.value)}>
                            <option>Choose category</option>
                            <option>veg</option>
                            <option>non-veg</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Image Url</Form.Label>
                    <Form.Control placeholder="paste url of image" value={image} onChange={e => setImage(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Description</Form.Label>
                    <Form.Control placeholder="Enter  description" value={description} onChange={e => setDescription(e.target.value)} />
                </Form.Group>





                <Button variant="primary" onClick={addpizza} >
                    Add new Pizza
                </Button>
            </Form>
        </>


    )
}

export default Addpizza