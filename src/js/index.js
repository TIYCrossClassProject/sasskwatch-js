// Javascript Entry Point

import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import Home from './home';
import SignupView from './signup_view';




function renderHome() {
    render((
    <Home onSignUp={renderSignupView} onLogin={x => x}/>
    ), document.querySelector('.app')
  );
}



function renderSignupView() {

   render((
    <SignupView onSwitchToLogin={x => x} onSignupSubmit={x => x} onAvatarAdd={x => x}/>
    ), document.querySelector('.app')
  );

}


function renderLoginView() {

   render((
    <LoginView onSwitchToSignup={x => x} onLoginSubmit={x => x}/>
    ), document.querySelector('.app')
  );

}

renderHome();


