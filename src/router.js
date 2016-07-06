// Load css first thing. It gets injected in the <head> in a <style> element by
// the Webpack style-loader.

// Everything dervided from ./src

import React from 'react';
import { render } from 'react-dom';

import css from './styles/main.sass';

// Assign React to Window so the Chrome React Dev Tools will work.
window.React = React;

import App from './containers/App';
import Home from './containers/Home';
import StyleGuide from './containers/StyleGuide';
import Uploader from './containers/Uploader';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const mount = document.getElementById('app');

const routes = (

  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/styleguide" component={StyleGuide}/>
      <Route path="/uploader" component={Uploader}/>
    </Route>
  </Router>

)

render(routes, mount);


  //render(router, mount);
