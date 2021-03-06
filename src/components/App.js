import React from 'react';
import './App.css';
import Nav from './Nav';
import Instructions from './Instructions';
import Designs from './Designs';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/instructions" component={Instructions} />
          <Route path="/designs" component={Designs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
