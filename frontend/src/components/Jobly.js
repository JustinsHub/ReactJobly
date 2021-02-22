import React from 'react'
import JoblyNavbar from './JoblyNavbar'
import Routes from './Routes'
import StateContextWrapper from './StateContextWrapper'

const Jobly = () => {
    return (
        <section>
            <StateContextWrapper>
                <JoblyNavbar/>
                <Routes/>
            </StateContextWrapper>
        </section>
    )}

export default Jobly