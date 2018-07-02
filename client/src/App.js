import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './styles/App.css';
import Navbar from './components/Navbar';
import EventsContainer from './containers/EventsContainer';
import MonthsContainer from './containers/MonthsContainer';


class App extends React.Component{
  render(){
    return (
      <div className="App">
          <Router>
            <div>
              <Navbar />
              <Route path="/" component={EventsContainer} />
              
            </div>
        </Router>      
      </div>
    );
  }  
}


export default App;

