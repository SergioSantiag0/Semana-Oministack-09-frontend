import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'
import Login from './Pages/Login/index'
import Dashborad from './Pages/Dashboard/index'
import New from './Pages/New/index'

export default function Routes() {

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/dashboard" component={Dashborad}/>
                <Route path="/new" component={New}/>
            </Switch>
        </BrowserRouter>
    )
}