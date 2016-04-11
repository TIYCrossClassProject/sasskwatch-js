import React, { Component, PropTypes } from 'react';

export default class AccountView extends Component {
  static PropTypes = {
    children: PropTypes.element.isRequired

  }

  render() {
    return (
      <div className="account-view">
        <div>{this.props.children}</div>
        <div>User</div>
        <div>Avatar Photo</div>
        <div>Email Goes Here</div>
        <div>Top Score</div>
      </div>

      )
  }
}