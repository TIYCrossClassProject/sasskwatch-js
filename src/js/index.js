// Javascript Entry Point

import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import Home from './home';
import SignupView from './signup_view';
import NavBar from './nav_bar';
import LoginView from './login_view';
import GameView from './game_view';




function renderHome() {
    render((
    <Home onSignUp={renderSignupView} onLogin={renderLoginView}/>
    ), document.querySelector('.app')
  );
}

function renderNavBar() {
    render((
      <NavBar onPlay={renderGameView} 
              onAddImage={renderImageAddView} 
              onAccount={x => x} 
              onLogout={x => x}/>
      ), document.querySelector('.app')
    );
}

function renderSignupView() {

   render((
    <SignupView onSwitchToLogin={x => x} onSignupSubmit={renderGameView} onAvatarAdd={x => x}/>
    ), document.querySelector('.app')
  );

}


function renderLoginView() {

   render((
    <LoginView onLoginToSignup={x => x} onLoginSubmit={x => x}/>
    ), document.querySelector('.app')
  );

}

function renderImageAddView() {
    render((
    <ImageAddView onImageSubmit={x => x} onGameImageAdd={x => x}/>
    ), document.querySelector('.app')
  );
}

function renderGameView() {
    render((
    <GameView onPlay={x => x} 
              onAddImage={x => x} 
              onAccount={x => x} 
              onLogout={x => x}/>
    ), document.querySelector('.app')
  );
}

renderHome();
// renderNavBar();

//Add this back to line 52

