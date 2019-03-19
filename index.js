import React from "react";
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

import App from './app/App'
import EGOne from './app/EGOne/index'
import EGTwo from './app/EGTwo/index'
import EGThree from './app/EGThree/index'
import EGFour from './app/EGFour/index'
import EGFive from './app/EGFive/index'
import EGSix from './app/EGSix/index'
import EGSeven from './app/EGSeven/index'
import FlexLayout from './app/FlexLayout/index'
import './index.scss'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/egone" component={EGOne} />
    <Route path="/egtwo" component={EGTwo} />
    <Route path="/egthree" component={EGThree} />
    <Route path="/egfour" component={EGFour} />
    <Route path="/egfive" component={EGFive} />
    <Route path="/egsix" component={EGSix} />
    <Route path="/egseven" component={EGSeven} />
    <Route path="/flex-layot" component={FlexLayout} />
  </Router>
), document.getElementById('root'))