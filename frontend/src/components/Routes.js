import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Companies from './Companies'
import NotFound from './NotFound'

const Routes = () => {
    return (
        <section>
            <Switch>
                <Route exact path='/companies'><Companies/></Route>
                <Route path='/companies/:company'><Companies/></Route>
                <Route exact path='/jobs'></Route>
                <Route exact path='/login'></Route>
                <Route exact path='/signup'></Route>
                <Route exact path='/profile'></Route>
                <Route exact path='/'><Home/></Route>
                <Route><NotFound/></Route>
            </Switch>
        </section>
    )
}

export default Routes