import React, { Component, PropTypes } from 'react';
import NavBar from './nav_bar';
import imageArray from './temp_jason';


export default class GameView extends Component {
  static propTypes = {
    // onSelectTab: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
    // onNewImage: PropTypes.func.isRequired
  }

  // renderNewImage(image) {
  // var newImage = imageArray[i].image;
  //   for (i = 0 ; i < 6; i++) {
  //   } return newImage;
  // } 

  render() {
  return (
    <div className="game-view">
     <div>{this.props.children}</div>
     <div><h2>Guess the Logos Now!</h2></div>
      
      <div className="score-container">
        <div className="score-wrapper">
          <div className="score-display"><p>Score Display</p></div>
        </div>
      </div>    

      <div className="image-container">
        <div className="image-wrapper">
          <img src={imageArray[0].image}/>
        </div>
      </div>

      <div className="answer-choice-wrapper">
        <input type="text" placeholder="Type Your Answer Here"/>
        <button>Submit Guess</button>
      </div>  


    </div>    
    );
     
  }

}
