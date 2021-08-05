import React from 'react';
import classes from './App.module.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage.jsx/MainPage';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className={classes.main}>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/" exact component={MainPage} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
