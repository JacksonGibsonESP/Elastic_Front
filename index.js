import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Home from './app/screens/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';
import SearchResult from "./app/screens/SearchResult/index";
import ArticleContent from "./app/screens/ArticleContent/index";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/search/:query" component={SearchResult} />
    <Route path="/content/:id" component={ArticleContent} />
  </Router>,
  document.getElementById('container')
);
