import react from 'react'


import Navbar from './Components/Navbarr'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Homepage from './Components/Homepage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cartscreen from './screens/cartscreen'
import OrdersScreen from './screens/ordersScreen'
import Register from './screens/Register'
import Login from './screens/Login'
import Admin from './screens/adminPanel'
import { Userlist } from '../admin screens/Userlist';
import Pizzalist from '../admin screens/Pizzalist';
import Addpizza from '../admin screens/Addpizza';
import Orders from '../admin screens/Orders';
function App() {


  return (



    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} exact />

        <Route path="cart" element={<Cartscreen />} exact />
        <Route path="register" element={<Register />} exact />
        <Route path="login" element={<Login />} exact />
        <Route path="orders" element={<OrdersScreen />} exact />
        <Route path="admin" element={<Admin />} >
          <Route path='userlist' element={<Userlist/>}/>
          <Route path="pizzaslist" element={<Pizzalist />} exact />
          <Route path="addpizza" element={<Addpizza />} exact />
          <Route path="orders" element={<Orders />} exact />
        </Route>



      </Routes>
    </BrowserRouter>




  )
}

export default App
