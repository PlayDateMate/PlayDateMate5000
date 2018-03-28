import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Switch} from 'react-router-dom';
import Landing from './Components/Landing/landing';
import Dashboard from './Components/Dashboard/dashboard';
import Events from './Components/Events/events';


class App extends Component {
  render() {
    return (
      
      <div className="App">
        <HashRouter>
          
          <Switch>
            <Route exact path = '/' component = {Landing}/>
            <Route path = '/dashboard' component = {Dashboard}/>
            <Route path = '/landing' component = {Landing}/>            


          </Switch>
        
        </HashRouter>
      </div>
    );
  }
}

export default App;

