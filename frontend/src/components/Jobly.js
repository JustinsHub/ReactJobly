import React from 'react'
import Navbar from './Navbar'
import StateContextWrapper from './StateContextWrapper'

const Jobly = () => {
    return (
        <section>
            <StateContextWrapper>
                <Navbar/>
                <Routes/>
            </StateContextWrapper>
        </section>
    )}

export default Jobly