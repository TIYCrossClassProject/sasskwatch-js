import React, { Component, PropTypes } from 'react';
import NavBar from './nav_bar';


export default class GameView extends Component {
  static propTypes = {
    // onSelectTab: PropTypes.func.isRequired,
    child: PropTypes.element.isRequired
  }


  render() {

    return (
    <div className="game-view">
     {this.props.child}
      
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
        <input type="text" placeholder="Type Your Answer Here"/>
      </div>  

    </div>    
    );
     
  }

}
