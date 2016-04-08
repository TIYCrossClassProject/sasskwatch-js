// Javascript Entry Point

import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import Home from './home';
import SignupView from './signup_view';
import NavBar from './nav_bar';
import LoginView from './login_view';
import GameView from './game_view';
import {ajax} from 'jquery';
import NProgress from 'react-nprogress';
import ImageAddView from './image_add_view';



let addUserAndRenderGame = (user) => {
  console.log(' new user ', user);

  let data = new FormData();
  data.append('first', user.first);
  data.append('last', user.last);
  data.append('email', user.email);
  data.append('alias', user.username);
  data.append('password', user.password);
  data.append('avatar', user.avatar);

  NProgress.start();

ajax({
  url: 'http://lit-headland-16057.herokuapp.com/',
  type: 'POST',
  data: data,
  cahce: false,
  dataType: 'json',
  processData: false,
  contentType: false
}).then(() => {

  NProgress.done();
  renderGameView();
  })
}

let loginAndRenderGame = (user) => {
  console.log('signing in', user);

  let data = new FormData();
  data.append('alias', user.username);
  data.append('password', user.password);

  NProgress.start();

  ajax({
    url: 'http://lit-headland-16057.herokuapp.com/',
    type: 'POST',
    data: data,
    cahce: false,
    dataType: 'json',
    processData: false,
    contentType: false
  }).then(() => {

    NProgress.done();
    renderGameView();
  })
}



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
    <SignupView onSwitchToLogin={renderLoginView} onSignupSubmit={addUserAndRenderGame} />
    ), document.querySelector('.app')
  );

}


function renderLoginView() {

   render((
    <LoginView onLoginToSignup={renderSignupView} onLoginSubmit={loginAndRenderGame}/>
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

