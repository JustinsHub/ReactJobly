import React from 'react'
import Home from './Home'
import JoblyNavbar from './JoblyNavbar'
import Routes from './Routes'
import StateContextWrapper from './StateContextWrapper'

const Jobly = () => {
    return (
        <section>
            <StateContextWrapper>
                <JoblyNavbar/>
                <Home/>
                <Routes/>
            </StateContextWrapper>
        </section>
    )}

export default Jobly