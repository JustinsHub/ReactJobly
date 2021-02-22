import React from 'react'
import {useHistory} from 'react-router-dom'
import './Home.css'

const Home = () => {
    const history = useHistory()
    const goLogin = () =>{
        history.push('/login')
    }
    const goSignUp = () =>{
        history.push('/signup')
    }
    return (
        <section className="Home">
            <div className="Home-div">
            <h1>Jobly</h1>
            <p>All the job in one, convenient place.</p>
            <div>
                <button className="btn btn-primary" onClick={goLogin}>Login</button>
                <small className="m-2"></small>
                <button className="btn btn-primary" onClick={goSignUp}>Sign Up</button>
            </div>
            </div>
        </section>
    )
}

export default Home