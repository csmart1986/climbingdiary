import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { HomePage } from './components/HomePage';

/**
 * COMPONENT
 */
function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path ='/' component={HomePage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;