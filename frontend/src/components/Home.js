import React from 'react'
import './Home.css'

//add login and sign up buttons/paths
const Home = () => {
    return (
        <section className="Home">
            <div className="Home-div">
            <h1>Jobly</h1>
            <p>All the job in one, convenient place.</p>
            <div>
                <button className="btn btn-primary">Login</button>
                <small className="m-2"></small>
                <button className="btn btn-primary">Sign Up</button>
            </div>
            </div>
        </section>
    )
}

export default Home