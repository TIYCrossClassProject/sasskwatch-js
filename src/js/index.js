// Javascript Entry Point

import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import Home from './home';
import SignupView from './signup_view';
import NavBar from './nav_bar';
import LoginView from './login_view';
import GameView from './game_view';
import { ajax, ajaxSetup } from 'jquery';
import NProgress from 'react-nprogress';
import ImageAddView from './image_add_view';
import ImageUploadSuccessView from './image_upload_success_view';

let loggedInUser;

let addUserAndRenderGame = (user) => {
  console.log(' new user ', user);

  let data = new FormData();
    data.append('first', user.first);
    data.append('last', user.last);
    data.append('email', user.email);
    data.append('alias', user.alias);
    data.append('password', user.password);
    data.append('avatar', user.avatar);

  NProgress.start();

ajax({
  url: 'https://lit-headland-16057.herokuapp.com/signup',
  type: 'POST',
  data: data,
  cache: false,
  dataType: 'json',
  processData: false,
  contentType: false
}).then(response => {
  loggedInUser = response.alias;

    ajaxSetup({
      headers: {
        auth_token: response.auth_token
      }
    })

  NProgress.done();

  renderGameView();
  })
}

let loginAndRenderGame = (user) => {

  console.log('signing in', user);

  NProgress.start();

  ajax({
    url: 'http://lit-headland-16057.herokuapp.com/login',
    type: 'POST',
    data: {
      email: user.email,
      password: user.password
    },
    cache: false,
    dataType: 'json',
    processData: false,
    contentType: false
  }).then(response => {
    if (response.success) {
      renderGameView();

      loggedInUser = response.alias;

      ajaxSetup({
      headers: {
        auth_token: response.auth_token
      }
    }) 
  } else {
      alert('Invalid Username and Password!');
      }

    NProgress.done();
    renderGameView();
  });
}

let addLogoAndRenderGameView = (image) => {
  console.log(' new image ', image);

  let data = new FormData();
  data.append('logo', user.logo);
  data.append('answer', user.answer);

  NProgress.start();

ajax({
  url: 'https://lit-headland-16057.herokuapp.com/upload_image',
  type: 'POST',
  data: data,
  cache: false,
  dataType: 'json',
  processData: false,
  contentType: false
}).then(response => {
  loggedInUser = response.alias;

    ajaxSetup({
      headers: {
        auth_token: response.auth_token
      }
    })


  NProgress.done();
  renderGameView();
  })
}

let logoutAndRenderHome = (user) => {
  loggedInUser = null;
  ajaxSetup({
      headers: {
        auth_token: response.auth_token
      }
    });
  renderHome();
  alert('You have been logged out.')
}

function renderHome() {
    render((
    <Home onSignUp={renderSignupView} onLogin={renderLoginView} onHometoAddImageView={renderImageAddView}/>
    ), document.querySelector('.app')
  );
}

function renderNavBar() {
    render((
      <NavBar onPlay={renderGameView} 
              onAddImage={renderImageAddView} 
              onAccount={renderAccountView} 
              onLogout={logoutAndRenderHome}/>
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
  console.log('renderImageAddView ran');

    render((
    <ImageAddView onImageSubmit={x => x} onGameImageAdd={x => x}>
      <NavBar onPlay={renderGameView}
              onAddImage={renderImageAddView} 
              onAccount={renderAccountView} 
              onLogout={logoutAndRenderHome}/>
    </ImageAddView>
    ), document.querySelector('.app')
  );
}

function renderGameView() {
  console.log('game view whats up');
    render((
    <GameView>
     <NavBar onPlay={renderGameView} 
             onAddImage={renderImageAddView} 
             onAccount={renderAccountView} 
             onLogout={logoutAndRenderHome}/>
    </GameView>
    ), document.querySelector('.app')
  );
}

function renderAccountView() {
  render((
    <AccountView>
      <NavBar onPlay={renderGameView} 
              onAddImage={renderImageAddView} 
              onAccount={renderAccountView} 
              onLogout={logoutAndRenderHome}/>
    </AccountView>
    ), document.querySelector('.app')
  );
}

function renderImageUploadSuccessView() {
  render((
    <ImageUploadSuccessView 
      onAddAnotherImage={renderImageAddView} 
      onTakeMeHome={renderGameView}>
      <NavBar onPlay={renderGameView} 
              onAddImage={renderImageAddView} 
              onAccount={renderAccountView} 
              onLogout={logoutAndRenderHome}/> 
    </ImageUploadSuccessView>

    ), document.querySelector('.app')
  );
}

function renderLogoutSuccessView() {
  render((
    <LogoutSuccessView/>
    ), document.querySelector('.app')
  );
}



// renderHome();
// renderNavBar();
// renderGameView();
// renderImageUploadSuccessView();
// renderImageAddView();
renderSignupView();









