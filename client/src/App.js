import React from 'react';
import {Route, Redirect, Switch, withRouter} from 'react-router-dom';
import NavbarContainer from './containers/NavbarContainer';
import EventsContainer from './containers/EventsContainer';
import EventInputContainer from './containers/EventInputContainer';
import EventShowContainer from './containers/EventShowContainer'
import './styles/App.css';

class App extends React.Component{
  render(){
    return (
      <div className="App" >
     
        <NavbarContainer {...this.props} />
        <div className="app-container">
          <Route exact path="/" render={()=> <Redirect to="/api/events" />} />
          <Switch>                    
            <Route exact path="/api/events/new" render={(props)=> <EventInputContainer {...props} />} />
            <Route exact path="/api/events/:id/edit" render={(props)=> <EventInputContainer {...props} />} />
            <Route path="/api/events/:id" component={EventShowContainer} />
            <Route path="/api/users/:id/events" component={EventsContainer} />                    
            <Route path="/api/events" component={EventsContainer} />
          </Switch>
        </div>
             
      </div>
    );
  }  
}

export default withRouter(App);