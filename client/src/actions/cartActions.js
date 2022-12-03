import {  useSelector } from 'react-redux'


export const addToCart = (pizza, quantity, varient) => async  (dispatch, getState) => {
  let cartItem = {
    name: pizza.name,
    _id: pizza._id,
    image: pizza.image,
    varient: varient,
    quantity: Number(quantity),
    prices: pizza.prices,
    price: pizza.prices[0][varient] * quantity,
  };
  if (cartItem.quantity > 10) {
    alert("limit exceeded");
  } else {
    if (cartItem.quantity < 1) {
      dispatch({ type: "DELETE_FROM_CART", payload: pizza });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
    }
  }

   
  
  localStorage.setItem("cartItems", JSON.stringify(getState().CartReducer.cartItems));
};

export const deleteFromCart = (pizza) => async (dispatch,getState) => {
  
//   const userstate = useSelector(state => state.loginUserReducer)
// const { currentUser } = userstate
  dispatch({ type: "DELETE_FROM_CART", payload: pizza });
  // {currentUser ? (localStorage.setItem("cartItems",JSON.stringify(getState().CartReducer.cartItems))): (null) }
 

  localStorage.setItem("cartItems",JSON.stringify(getState().CartReducer.cartItems))

};
