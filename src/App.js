import React, {Suspense, lazy} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './layouts/Main';
import './static/css/main.scss'; 

const { PUBLIC_URL } = process.env;

const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));


const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback = {<Main/>}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path = "/about" component={About} />
        <Route exact path = "/contact" component={Contact} />
        <Route component={NotFound} status={404} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;