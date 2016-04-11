import React, { Component, PropTypes } from 'react';
import Icon from './icon';

export default class Home extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
    onSignUp: PropTypes.func.isRequired,
    onHometoAddImageView: PropTypes.func.isRequired
  }

  render() {
    let { onSignUp, onLogin, onHometoAddImageView } = this.props;
    return (
      <div className="home-view">
        <div className="home-header">
          <div className="home-header-title">
            <h1>Which Tech?</h1>
            <h2>A logo guessing game.</h2>
          </div>
          <div className="home-header-add-photo">
            <h3>Add Your Own Questions Here!</h3>
            <button onClick={onHometoAddImageView} 
                    id="home-add-photo-btn">
                      <Icon id="add-icon" type= "plus-square"/>
            </button>
          </div>
        </div>
        <div className="home-content">
          <img id="img-circuit" src="./images/electronics.png"/>
          <img id="img-circuit-flip" src="./images/electronics.png"/>
          <div id="home-login-signup-btn">
            <button onClick={onSignUp} id="home-sign-up-btn">Sign Up</button>
            <button onClick={onLogin} id="home-login-btn">Login</button>
          </div>
        </div>
      
    </div>
      )
  }
}