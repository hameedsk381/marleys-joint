import React,{useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from "../actions/cartActions";
import { deleteFromCart } from "../actions/cartActions";
import Checkout from "../Components/Checkout";



const cartscreen = () => {
  const cartstate = useSelector(state => state.CartReducer)
  const cartItems = cartstate.cartItems
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0)
  const dispatch = useDispatch()
  
  
 
  return (<div className="container">
    <div className="row justify-content-center p-5">
      <div className="col-md-6">
        <h1 className="mx-auto">My Cart</h1>
        {cartItems.map((item) => {
          return (
            <div className="flex-container">

              <div className="text-left p-3">
                <hr />
                <div>
                  {item.name} ({item.varient})
                  <h4>Price : {item.quantity} * {item.prices[0][item.varient]} = {item.price} </h4>
                </div>
                <h4 className="inline">Quantity
                </h4>
                <i className="fa fa-plus" aria-hidden="true" onClick={() => { dispatch(addToCart(item, item.quantity + 1, item.varient)) }}> </i>
                <b>   {item.quantity}   </b>
                <i className="fa fa-minus" aria-hidden="true" onClick={() => { dispatch(addToCart(item, item.quantity - 1, item.varient)) }}> </i>




              </div>
              <div>
                <img src={item.image} alt="pizza" className="m-3 mt-5" style={{ width: '80px', height: '80px' }} />
              </div>
              <div>
                <i className="fa fa-trash px-3 py-5" style={{ color: "red" }} aria-hidden="true" onClick={() => { dispatch(deleteFromCart(item)) }}> </i>
              </div>

            </div>

          )

        })}
      </div>
      <div className="col-md-6">
        <div className="flex-container ">
          <div className="flex-row justify-between">
            <div className="flex-col">
              {(cartstate.cartItems.length) > 0 ?

                (
                  <h2 style={{ fontSize: '45px' }}>Sub Total : {subtotal} /Rs-</h2>
                ) : (<h1>Nothing here order some food to proceed</h1>)
              }

              {(cartstate.cartItems.length) > 0 ?

                (

                  <Checkout subtotal={subtotal} />) : (null)
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>)

};

export default cartscreen;
