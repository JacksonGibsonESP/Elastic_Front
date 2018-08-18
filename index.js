import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';
import Enroll from "./app/screens/enroll/index";
import AOrganisation from "./app/screens/orgs/AOrganisation";
import BOrganisation from "./app/screens/orgs/BOrganisation";

ReactDOM.render((
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Enroll}/>
                <Route exact path="/a/:token" component={AOrganisation}/>
                <Route exact path="/b/:token" component={BOrganisation}/>
            </Switch>
        </BrowserRouter>
    ),
    document.getElementById('container')
);
