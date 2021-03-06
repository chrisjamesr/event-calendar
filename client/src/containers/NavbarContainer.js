import React from 'react';
import {connect} from 'react-redux';
import NavbarComponent  from '../components/NavbarComponent'

class NavbarContainer extends React.Component{

  render(){
    return(
      <NavbarComponent loggedIn={this.props.auth} history={this.props.history}/>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {auth: auth.loggedIn, message: auth.message}
}

export default connect(mapStateToProps)(NavbarContainer)