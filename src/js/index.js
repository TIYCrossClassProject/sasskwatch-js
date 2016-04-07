// Javascript Entry Point

import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import Home from './home';
import SignupView from './signup_view';




function renderHome() {
    render((
    <Home onSignUp={renderSignUpView} onLogin={x => x}/>
    ), document.querySelector('.app')
  );
}



function renderSignUpView() {

   render((
    <SignupView/>
    ), document.querySelector('.app')
  );

}

// function renderLoginView() {

//    render((
//     <LoginView/>
//     ), document.querySelector('.app')
//   );

// }

renderHome();


