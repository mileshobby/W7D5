import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component{
  constructor(props){
    super(props);
    this.loggedInGreeting = this.loggedInGreeting.bind(this);
    this.loggedOutGreeting = this.loggedOutGreeting.bind(this);

  }

  loggedInGreeting() {
    return (
    <div id="loggedInGreeting">
      <h2>Welcome, {this.props.currentUser.username}</h2>
      <button onClick={this.props.logout}>Log Out</button>
    </div>
  );}

  loggedOutGreeting() {
    return (
    <div id="loggedOutGreeting">
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </div>
  );}

  render(){
    const renderComponent = this.props.currentUser ?
    this.loggedInGreeting() : this.loggedOutGreeting();
    return (
      renderComponent
    );
  }

}

export default Greeting;
