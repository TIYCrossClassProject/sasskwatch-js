import React, { Component, PropTypes } from 'react';

export default class AccountView extends Component {
  static PropTypes = {

  }

  render() {
    return (
      <div className="account-view">
        <div>First Name and Last Name goes here</div>
        <div>Avatar Photo</div>
        <div>Email Goes Here</div>
        <div>Othere Details to Add</div>
      </div>

      )
  }
}