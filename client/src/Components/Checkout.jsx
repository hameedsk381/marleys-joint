import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Stripecheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/Orderactions'



const Checkout = ({ subtotal }) => {

    const orderstate = useSelector(state => state.placeOrderReducer)
    const { loading, error, success } = orderstate
    const dispatch = useDispatch()
    function tokenHandler(token) {
        console.log(token)
        dispatch(placeOrder(token, subtotal))

    }
    return (
        <div>

            {/* {loading && (<div className="spinner-grow m-auto my-auto" role="status">
                <span className="sr-only"></span>
            </div>)} */}
            {error && (<div className="alert alert-danger" role="alert">
                Something went wrong
            </div>)}
            {success && (<div className="alert alert-success" role="alert">
                Order placed successfully
            </div>)}
            <Stripecheckout amount={subtotal * 100} shippingAddress token={tokenHandler} currency='INR' stripeKey='pk_test_51M7Z1PSDlFcN5MoKaLD6I68UBF6WMcSd4NUB2eU7PsM7jAQhgKlLy0of5vmT0jI1jBBB6l9CvSiPrhypPURKn7U600HQUK60sy'>
                <button className='btnn w-50'> Proceed to checkout</button>
            </Stripecheckout>
        </div>
    )
}

export default Checkout