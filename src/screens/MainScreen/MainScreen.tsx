import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
    AppComposition,
} from 'compositions';

class MainScreen extends Component {
    public render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact={true} component={AppComposition} />
                </Switch>
            </Router>
        );
    }
}

export default MainScreen;