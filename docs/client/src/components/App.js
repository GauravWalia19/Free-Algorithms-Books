import React from 'react';
import './styles/App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
