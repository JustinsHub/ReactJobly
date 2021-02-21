import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'

const Routes = () => {
    return (
        <section>
            <Switch>
                <Route exact path='/'></Route>
            </Switch>
        </section>
    )
}

export default Routes