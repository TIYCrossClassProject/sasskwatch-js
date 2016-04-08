import React, { Component, PropTypes } from 'react';
import NavBar from './nav_bar';


export default class GameView extends Component {
  // static propTypes = {
    // onSelectTab: PropTypes.func.isRequired
  // },

  render() {
    return (
    <div>
      

      <div className="score-container">
        <div className="score-wrapper">
          <p>Score Display</p>
        </div>
      </div>    

      <div className="image-container">
        <div className="image-wrapper">
          <img src="http://www.fillmurray.com/200/200"/>
        </div>
      </div>

      <div className="answer-choice-wrapper">
        <input type="radio">Answer A</input>
        <input type="radio">Answer B</input>
        <input type="radio">Answer C</input>
        <input type="radio">Answer D</input>
      </div>  
    </div>    
    );
     
  }

}

// <NavBar onPlay={x => x} 
//               onAddImage={x => x} 
//               onAccount={x => x} 
//               onLogout={x => x}/>