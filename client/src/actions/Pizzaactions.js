import axios from "axios";
import swal from 'sweetalert'

export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });

  try {
    const response = await axios.get(
      "http://localhost:2000/api/pizzas/getallpizzas"
    );
    console.log(response);
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAILED", payload: error });
  }
};
export const deletePizza = (pizzaid) => async(dispatch) => {
  dispatch({ type: "DELETE_PIZZA", payload: pizzaid });
  try {
    const res = await axios.post("http://localhost:2000/api/pizzas/delete", {
      pizzaid,
    });
    console.log(res);
   
    swal("Pizza deleted");
    window.location.reload()
  } catch (error) {
    swal("error while deleting Pizza");
  }

};
export const addPizza = (pizza) => async (dispatch) => {
  dispatch({ type: "ADD_PIZZA_REQUEST" });
  try {
    const response = await axios.post(
      "http://localhost:2000/api/pizzas/addpizza",
      {pizza}
    );
    console.log(response);
    dispatch({ type: "ADD_PIZZA_SUCCESS",payload:response.data });
  } catch (error) {
    dispatch({ type: "ADD_PIZZA_FAILED", payload: error });
  }
};
export const filterPizza = (searchkey,category)=>async (dispatch)=>{
  let filteredPizza;
  dispatch({type:'GET_PIZZAS_REQUEST'})
  try{
   const res = await axios.get("http://localhost:2000/api/pizzas/getallpizzas")
   filteredPizza = res.data.filter((pizza) => pizza.name.toLowerCase().includes(searchkey))
   if(category!== 'all')
   {
    filteredPizza = res.data.filter(pizza=>pizza.category.toLowerCase() === category)
    
   }
   dispatch({type:'GET_PIZZAS_SUCCESS',payload:filteredPizza})

  }catch(error)
  {
    dispatch({type:'GET_PIZZAS_FAILED',payload:error.stack})
  }
}

