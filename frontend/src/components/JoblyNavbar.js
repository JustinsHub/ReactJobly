import React from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar, Nav, NavItem} from 'reactstrap'
import './JoblyNavbar.css'

const JoblyNavbar = () => {
    return (
        <div>
            <Navbar expand="md">
                <NavLink exact to='/' className="navbar-brand">
                    Jobly
                </NavLink>

                <Nav className="ml-auto JoblyNavbar-Nav" navbar>
                <NavItem>
                    <NavLink to='/login'>Login</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to='/signup'>Sign Up</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to='/companies'>Companies</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to='/jobs'>Jobs</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to='/profile'>Profile</NavLink>
                </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default JoblyNavbar