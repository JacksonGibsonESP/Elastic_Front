import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';
import SearchResult from "./app/screens/SearchResult/index";

ReactDOM.render((
        <BrowserRouter>
            <Route path="/" component={SearchResult}/>
        </BrowserRouter>
    ),
    document.getElementById('container')
);
