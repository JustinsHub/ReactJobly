import React from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar, Nav, NavItem} from 'reactstrap'
import './JoblyNavbar.css'

//update login and sign up paths
const JoblyNavbar = () => {
    return (
        <div>
            <Navbar expand="md">
                <NavLink className="navbar-brand" exact to='/'>
                Jobly
                </NavLink>
                
                <Nav className="ml-auto JoblyNavbar-Nav" navbar>
                <NavItem>
                    <NavLink to='/login'>Login</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to='/signup'>Sign Up</NavLink>
                </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default JoblyNavbar