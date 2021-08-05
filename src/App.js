import React from 'react';
import classes from './App.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage.jsx/MainPage';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className={classes.main}>
      <BrowserRouter>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/" component={MainPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
