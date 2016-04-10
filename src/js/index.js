// Javascript Entry Point

import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import Home from './home';
import SignupView from './signup_view';
import NavBar from './nav_bar';
import LoginView from './login_view';
import GameView from './game_view';
import { ajax } from 'jquery';
import NProgress from 'react-nprogress';
import ImageAddView from './image_add_view';



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
  url: 'http://lit-headland-16057.herokuapp.com/',
  type: 'POST',
  data: data,
  cache: false,
  dataType: 'json',
  processData: false,
  contentType: false
}).then(resp => {
  loggedInUser = resp.alias;

    ajaxSetup({
      headers: {
        'auth_token': '39dceac031e3b716f4f81b8550d88b17'
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
    url: 'http://lit-headland-16057.herokuapp.com/',
    type: 'POST',
    data: {
      alias: user.alias,
      password: user.password
    },
    cache: false,
    dataType: 'json',
    processData: false,
    contentType: false
  }).then(resp => {
    if (resp.success) {
      renderGameView();

      loggedInUser = resp.alias;

      ajaxSetup({
      headers: {
        'X-Access-Token': resp.access_token
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
  url: 'http://lit-headland-16057.herokuapp.com/',
  type: 'POST',
  data: data,
  cache: false,
  dataType: 'json',
  processData: false,
  contentType: false
}).then(resp => {
  loggedInUser = resp.alias;

    ajaxSetup({
      headers: {
        'X-Access-Token': resp.access_token
      }
    })


  NProgress.done();
  renderGameView();
  })
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
              onLogout={renderLogoutSuccessView}/>
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

    <GameView>
     <NavBar onPlay={renderGameView} 
              onAddImage={renderImageAddView} 
              onAccount={renderAccountView} 
              onLogout={renderLogoutSuccessView}/>
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
              onLogout={renderLogoutSuccessView}/>
    </AccountView>
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
renderGameView();