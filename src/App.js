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
import AddChild from './Components/Children/addChildren';
import UpdateChildren from './Components/Children/updateChildren';
import FriendInvites from './Components/Events/FriendInvites';
import ViewProfile from './Components/ViewProfile/viewProfile'

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <HashRouter>
          
          <Switch>
            <Route exact path = '/' component = {Landing}/>
            <Route path = '/dashboard' component = {Dashboard}/>
            <Route path = '/profile/:id' component = {Profile}/>   
            <Route path = '/friends/:id' component = {Friends}/>
            <Route path = '/children/:id' component = {Children}/> 
            <Route path = '/friendsearch/:id' component = {FriendSearch} />    
            <Route path = '/events/:id' component = {Events} />    
            <Route path = '/createevent/:id' component = {CreateEvent} />    
            <Route path = '/searchevents/:id' component = {SearchEvents} />  
            <Route path = '/addchild/:id' component = {AddChild} />
            <Route path = '/updatechild/:id' component = {AddChild} />
            <Route path = '/friendinvites/:id' component = {FriendInvites} />   
            <Route path = '/viewprofile/:id' component = {ViewProfile} />   


          </Switch>
        
        </HashRouter>
      </div>
    );
  }
}

export default App;

