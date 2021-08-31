import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Bloginfo from './pages/Bloginfo/Bloginfo';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/article/:id' component={Bloginfo}/>
            </Switch>
        </BrowserRouter>
    )
}
