import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Bloginfo from './pages/Bloginfo/Bloginfo';
import Favorites from './pages/Favorites/Favorites';

export default function Routes() {
    return (

        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/article/:id' component={Bloginfo}/>
                <Route path='/favorites' component={Favorites}/>
            </Switch>
        </BrowserRouter>
    )
}
