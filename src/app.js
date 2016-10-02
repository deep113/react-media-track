import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from "react-router";

import Routes from "./routers/Routes";

// Initialize routes depending on session
let routes;

routes = Routes.getRoutes();


ReactDOM.render((<Router history={hashHistory}>{ routes }</Router>), document.getElementById('app'));
