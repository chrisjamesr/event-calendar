import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import EventsContainer from './containers/EventsContainer';
import MonthsContainer from './containers/MonthsContainer';
import CreateEventContainer from './containers/CreateEventContainer';
import EventShowContainer from './containers/EventShowContainer'
import HomeContainer from './containers/HomeContainer'
import './styles/App.css';

class App extends React.Component{
  render(){
    return (
      <div className="App" >
            
            <div>
              <Navbar {...this.props} />
                <div className="container">
                  <Route exact path="/" component={EventsContainer} />
                  <Route path="/calendar" component={MonthsContainer} />
                  <Switch>
                    <Route exact path="/events" component={EventsContainer} />
                    <Route exact path="/events/new" render={(props)=> <CreateEventContainer {...props} />} />
                    <Route path="/events/:id" component={EventShowContainer} />
                  </Switch>
                </div>
            </div>
             
      </div>
    );
  }  
}


export default withRouter(App);

