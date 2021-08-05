import React from 'react';
import classes from './App.module.css';
import { HashRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage.jsx/MainPage';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className={classes.main}>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/" component={MainPage} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
