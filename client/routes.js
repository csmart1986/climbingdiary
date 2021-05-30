import React from 'react';
import { Route, Switch} from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { AllGyms } from './components/AllGyms';

/**
 * COMPONENT
 */
function Routes() {
    return (

        <Switch>
            <Route exact path ='/' component={HomePage} />
            <Route exact path='/allgyms' component={AllGyms} />
            
        </Switch>

    )
}

export default Routes;