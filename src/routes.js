import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'

import Portal from './views/portal'
import Admin from './views/admin'
import Login from './views/auth/login'

import history from './config/history'

const Routers = () => (
    <Router history={history}>
        <Switch>
            <Route component={Admin} path="/admin" />
            <Route exact component={Login} path="/login" />
            <Route component={Portal} path="/" />
        </Switch>
    </Router>
)

export default Routers;