import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';
import Enroll from "./app/screens/enroll/Enroll";
import OrgA from "./app/screens/orgs/orgA/OrgA";
import OrgB from "./app/screens/orgs/orgB/OrgB";

ReactDOM.render((
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Enroll}/>
                <Route exact path="/a/:token" component={OrgA}/>
                <Route exact path="/b/:token" component={OrgB}/>
            </Switch>
        </BrowserRouter>
    ),
    document.getElementById('container')
);
