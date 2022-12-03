import React from 'react'
import marley from '../assets/marley.svg'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOutUser } from '../actions/Useractions'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




const Navbarr = () => {
    const cartstate = useSelector(state => state.CartReducer)
    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate
    const dispatch = useDispatch()

    return (
        <Navbar  bg="warning" variant="dark">
        <Container className='me-auto '>
          <Navbar.Brand href="/">   <img src={marley} alt="logo" style={{width: "60px"}} className='rounded h-auto max-w-xl' /></Navbar.Brand>
          <Link className="navbar-brand xono text-black" style={{fontSize: "30px"}} to="/" relative='path'>Marley's Joint Bistro</Link>
          <Nav className="mr-auto">
          {currentUser ? (<NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                       
                        
                            {currentUser.isAdmin ? (<> <NavDropdown.Item href="/admin/userlist">Admin panel</NavDropdown.Item><NavDropdown.Divider /></>) : (null)}
                            
                            <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" onClick={() => { dispatch(logOutUser()) }}>
                      Log out
                    </NavDropdown.Item>

                    </NavDropdown>
                    ) : ( <Nav.Link eventKey={2} href="/login">
                    Login
                  </Nav.Link>)}
         
                  {currentUser ? (<Link className="nav-link" to="/cart" relative="path">Cart {cartstate.cartItems.length}</Link>) : (null)}
           </Nav>
          
        </Container>
      </Navbar>
        // <nav className="navbar navbar-expand-lg shadow-lg">
        //     <div className="container-fluid">
        //         <img src={marley} alt="logo" className='logoo' />
        //         <Link className="navbar-brand xono" to="/" relative='path'>Marley's Joint Bistro</Link>

        //         <div className=' d-flex justify-content-end '>
                   
               
                    
                  
                 

        //             {currentUser ? (<Link className="nav-link" to="/cart" relative="path">Cart {cartstate.cartItems.length}</Link>) : (null)}

        //         </div>


        //     </div>
        // </nav>
    )
}

export default Navbarr