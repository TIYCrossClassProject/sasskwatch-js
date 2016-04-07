import React, { Component, PropTypes } from 'react';
import Icon from './icon';

export default class Home extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
    onSignUp: PropTypes.func.isRequired
  }

  render() {
    let { onSignUp, onLogin } = this.props;
    return (
      <div className="home-view">
        <div className="home-header">
          <div className="home-header-title">
            <h1>Guess...That...Mythical Creature!</h1>
          </div>
          <div className="home-header-add-photo">
            <h3>Submit Questions Here</h3>
            <button id="home-add-photo-btn"><Icon type= "plus-square"/></button>
          </div>
        </div>
        <div className="home-content">
          <img id="img-sasquatch" src="./images/sasquatch.png"/>
          <img id="img-sasquatch-flip" src="./images/sasquatch.png"/>
          <div id="home-login-signup-btn">
            <button onClick={onSignUp} id="home-sign-up-btn">Sign Up</button>
            <button onClick={onLogin} id="home-login-btn">Login</button>
          </div>
        </div>
        <div className="home-footer">
          <h4><Icon type= "registered"/>Team Sasskwatch 2016</h4>
        </div>
    </div>
      )
  }
}