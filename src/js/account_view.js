import React, { Component, PropTypes } from 'react';

export default class AccountView extends Component {
  static PropTypes = {
    children: PropTypes.element.isRequired

  }

  render() {
    return (
      <div className="account-view">
        <div>{this.props.children}</div>
        <div>First Name and Last Name goes here</div>
        <div>Avatar Photo</div>
        <div>Email Goes Here</div>
        <div>Othere Details to Add</div>
      </div>

      )
  }
}