import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cartActions';


const Pizza = ({ pizza }) => {
    const [quantity, setQuantity] = useState(1)
    const [varient, setVarient] = useState('small')

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const addtoCart = () => {
        dispatch(addToCart(pizza, quantity, varient))

    }
    return (
        <div className="shadow-lg p-3 mb-5 bg-body rounded-full" >
            <div onClick={handleShow}>
                <h4 className='text-center cursor-pointer'>{pizza.name}</h4>
                <img src={pizza.image} className='img-fluid' alt="" style={{ height: "200px", width: '300px' }} />
            </div>

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
                <div className='mx-auto my-4'>
                    <button type='button' className='btn btn-outline-primary btn-sm' onClick={addtoCart}> Add to cart</button>
                </div>
            </div>



            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title >{pizza.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column justify-around">
                    {<img src={pizza.image} className='img-fluid' alt="" style={{ height: "200px", width: '300px' }} />}
                    {pizza.description}</Modal.Body>
                <Modal.Footer>
                    <Button variant="btn btn-danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="btn btn-danger" onClick={handleClose}>
                        Add to cart
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Pizza