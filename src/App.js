import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Switch} from 'react-router-dom';
import Landing from './Components/Landing/landing';
import Dashboard from './Components/Dashboard/dashboard';
import Events from './Components/Events/events';
import CreateEvent from './Components/Events/CreateEvent';
import Children from './Components/Children/children'
import Friends from './Components/Friends/friends'
import Profile from './Components/Profile/profile'
import FriendSearch from './Components/Friends/friendsSearch'
import SearchEvents from './Components/Events/SearchEvents';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <HashRouter>
          
          <Switch>
            <Route exact path = '/' component = {Landing}/>
            <Route path = '/dashboard' component = {Dashboard}/>
            <Route path = '/profile' component = {Profile}/>   
            <Route path = '/friends:/id' component = {Friends}/>
            <Route path = '/children:/id' component = {Children}/> 
            <Route path = '/friendsearch:/id' component = {FriendSearch} />    
            <Route path = '/events/:id' component = {Events} />    
            <Route path = '/createevent/:id' component = {CreateEvent} />    
            <Route path = '/searchevents/:id' component = {SearchEvents} />    


          </Switch>
        
        </HashRouter>
      </div>
    );
  }
}

export default App;

