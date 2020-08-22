import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/shop/hats" component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
