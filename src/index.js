import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Router, Route } from "react-router-dom";
import reducers from "./reducers";

import history from "./history";
import AppContainer from './containers/appContainer';


import "./style/main.scss";
import 'bootstrap/dist/css/bootstrap.css';

import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = composeEnhancers(applyMiddleware(thunk))(
  createStore
);
const store =createStoreWithMiddleware(reducers) 

const startApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <div className='container-fluid'>
          <Route path={['/:submenuId/:contentId', '/:submenuId', '/']} component={AppContainer} />
        </div>
      </Router>
    </Provider>,
    document.querySelector("#root")
  );
  serviceWorker.register()
};
export {store};
if(window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp();
}