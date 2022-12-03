import axios from "axios";
import swal from "sweetalert";
export const placeOrder = (token, subtotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().CartReducer.cartItems;
  try {
    const response = await axios.post(
      "http://localhost:2000/api/orders/placeorder",
      {
        token,
        subtotal,
        currentUser,
        cartItems,
      }
    );
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
    // console.log(response);

    swal("order successfully placed");
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAILED" });
    console.log(error);
  }
};
export const getUserOrders = () => async (dispatch, getState) => {
  const currentUser = getState().loginUserReducer.currentUser;
  dispatch({ type: "GET_USERS_ORDERS_REQUEST" });

  try {
    const response = await axios.post(
      "http://localhost:2000/api/orders/getuserorders",
      { userid: currentUser._id }
    );

    // console.log(response);
    dispatch({ type: "GET_USERS_ORDERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_USERS_ORDERS_FAILED", payload: error });
  }
};
export const getAllOrders = () => async (dispatch) => {
  dispatch({ type: "GET_ORDERS_REQUEST" });

  try {
    const response = await axios.get(
      "http://localhost:2000/api/orders/getallorder"
    );
    // console.log(response);
    dispatch({ type: "ALL_ORDERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "ALL_ORDERS_FAILED", payload: error });
  }
};
export const deliverOrder = (orderid) => async (dispatch) => {
  dispatch({ type: "DELIVER_ORDER_REQUEST" });
  try {
    const response = await axios.post(
      "http://localhost:2000/api/orders/deliver",
      { orderid }
    );
    swal("Order succesfully delivered");

    const orders = await axios.get(
      "http://localhost:2000/api/orders/getallorder"
    );
    window.location.reload();
    dispatch({ type: "DELIVER_ORDER_SUCCESS", payload: orders.data });
  } catch (error) {
    dispatch({ type: "DELIVER_ORDER_FAILED", payload: error });
  }
};
