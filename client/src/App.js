import React from 'react';
import {Route, Redirect, Switch, withRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import EventsContainer from './containers/EventsContainer';
import MonthsContainer from './containers/MonthsContainer';
import EventInputContainer from './containers/EventInputContainer';
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
                  <Route exact path="/" render={()=> <Redirect to="/events" />} />
                  <Route path="/calendar" component={MonthsContainer} />
                  <Switch>                    
                    <Route path="/events/new" render={(props)=> <EventInputContainer {...props} />} />
                    <Route exact path="/events/:id/edit" render={(props)=> <EventInputContainer {...props} />} />
                    <Route path="/events/:id" component={EventShowContainer} />                    
                    <Route exact path="/events" component={EventsContainer} />
                  </Switch>
                </div>
            </div>
             
      </div>
    );
  }  
}


export default withRouter(App);

// import React from 'react';
// import {connect} from 'react-redux'
// import {Route, Redirect, Switch, withRouter} from 'react-router-dom';
// import Navbar from './components/Navbar';
// import EventsContainer from './containers/EventsContainer';
// import MonthsContainer from './containers/MonthsContainer';
// import EventInputContainer from './containers/EventInputContainer';
// import EventShowContainer from './containers/EventShowContainer'
// import HomeContainer from './containers/HomeContainer'
// import './styles/App.css';

// class App extends React.Component{
//   constructor(){
//     super()
//     this.checkAuth = this.checkAuth.bind(this)
//   }

//   checkAuth = ()=>{
//     return this.props.auth && this.sessionStorage.jwt
//   }

//   render(){
//     return (
//       <div className="App" >
            
//             <div>
//               <Navbar {...this.props} />
//                 <div className="container">
//                   <Route exact path="/" render={()=> <Redirect to="/events" />} />
//                   <Route path="/calendar" component={MonthsContainer} />
//                   <Switch>
//                     <Route exact path="/events" component={EventsContainer} /> 
//                     <Route exact path="/events/new" render={(props)=> <EventInputContainer {...props} />} />
//                     <Route exact path="/events/:id/edit" render={(props)=> <EventInputContainer {...props} />} />
//                     <Route path="/events/:id" component={EventShowContainer} />  
//                   </Switch>
//                 </div>
//             </div>
             
//       </div>
//     );
//   }  
// }

// const mapStateToProps =({auth}) => {
//   return {auth}
// }

// export default connect(mapStateToProps)(withRouter(App));

