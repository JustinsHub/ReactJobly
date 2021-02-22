import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Companies from './Companies'
import Company from './Company'
import Jobs from './Jobs'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'
import NotFound from './NotFound'

const Routes = () => {
    return (
        <section>
            <Switch>
                <Route exact path='/companies'><Companies/></Route>
                <Route exact path='/companies/:company'><Company/></Route>
                <Route exact path='/jobs'><Jobs/></Route>
                <Route exact path='/login'><Login/></Route>
                <Route exact path='/signup'><Signup/></Route>
                <Route exact path='/profile'><Profile/></Route>
                <Route exact path='/'><Home/></Route> 
                <Route><NotFound/></Route>
            </Switch>
        </section>
    )
}

export default Routes