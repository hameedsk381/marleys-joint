import swal from "sweetalert";

export const placeOrderReducer = (state = {}, action) => {
    switch (action.type) {
      case "PLACE_ORDER_REQUEST":
        return {
          loading: true,
        };
      case "PLACE_ORDER_SUCCESS":
        return {
          loading: false,
          success: true,
        };
      case "PLACE_ORDER_FAILED":
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export const getUserOrdersReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
      case "GET_USERS_ORDERS_REQUEST":
        return { ...state,loading:true};
      case "GET_USERS_ORDERS_SUCCESS":
        return { orders:action.payload, loading: false};
      case "GET_USERS_ORDERS_FAILED":
        return { error: action.payload, loading: false };
      default:
        return state;
    }
  };
  export const getAllOrdersReducer = (state = { orders: [] }, action) => {
  
    switch (action.type) {
      case "ALL_ORDERS_REQUEST":
        return { ...state, loading: true };
      case "ALL_ORDERS_SUCCESS":
        return {  orders:action.payload, loading: false ,success:true
        
        };
      case "ALL_ORDERS_FAILED":
        return { error: action.payload, loading: false };
      default:
        return state;
    }
  };
  
