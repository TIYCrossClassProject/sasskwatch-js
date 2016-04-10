import React, { Component, PropTypes } from 'react';

export default class LogoutSuccessView extends Component {
  static propTypes = {

  }

  render() {
    return(
      <div className="logout-success-view">
        <div><p>You have succesfully logged out!</p></div>
      </div>
      )
  }
}