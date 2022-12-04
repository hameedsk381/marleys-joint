import axios from "axios";
import swal from 'sweetalert'
export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    const response = await axios.post(
      "/api/users/register",
      user
    );
    console.log(response);
    dispatch({ type: "USER_REGISTER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILED", payload: error });
  }
};

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const response = await axios.post(
      "/api/users/login",
      user
    );
    console.log(response);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));

    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED", payload: error });
  }
};
export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: "GET_USERS_REQUEST" });

  try {
    const response = await axios.get("/api/users/get");
    console.log(response);
    dispatch({ type: "GET_USERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_USERS_FAILED", payload: error });
  }
};

export const logOutUser = () => (dispatch) => {
 
  localStorage.removeItem("currentUser");
  localStorage.removeItem("cartItems");
  
  

  window.location.href = "/login";
};
export const deleteUser = (userid) => async(dispatch) => {
  dispatch({ type: "DELETE_USER", payload: userid });
  try {
    const res = await axios.post("/api/users/delete", {
      userid,
    });
    console.log(res);
   
    swal("User deleted");
  } catch (error) {
    swal("error while deleting user");
  }

};


