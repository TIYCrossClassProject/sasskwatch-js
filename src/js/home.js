import React, { Component, PropTypes } from 'react';
import Icon from './icon';

export default class Home extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
    onSignUp: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="home-view">
        <div className="home-header">
          <div className="home-header-title">
            <h1>Sasskwatch, the game!</h1>
          </div>
          <div className="home-header-add-photo">
            <h3>Submit Questions Here</h3>
            <Icon type="plus-square-o"/>
          </div>
        </div>
        <div className="home-content">
        
        </div>
        <div className="home-foote">
        
        </div>
    </div>
      )
  }
}