import React, { Component, PropTypes } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import Tabs   from 'material-ui/lib/tabs/tabs';
// import Tab    from 'material-ui/lib/tabs/tab';
// import Slider from 'material-ui/lib/slider';

export default class NavBar extends Component {
  static propTypes = {
    onPlay: PropTypes.func.isRequired,
    onAddImage: PropTypes.func.isRequired,
    onAccount: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
  }

  // constructor() {
  //   super();
  //   this.state = {
  //     value: 'game',
  //   };
  // }

  render() {
     let { onPlay, onAddImage, onAccount, onLogout } = this.props;
    return (
      <div className="nav-bar">
        <button className="nav-tabs" 
             label="Play Game" 
             value="play game" 
             onClick={onPlay}>

          Play New Game
        </button>

        <button className="nav-tabs" 
             label="Add Image" 
             value="add image" 
             onClick={onAddImage}>
          Add an Image
        </button>

        <button className="nav-tabs" 
             label="Account" 
             value="account" 
             onClick={onAccount}>
          Account
        </button>

        <button className="nav-tabs" 
             label="Log Out" 
             value="log out" 
             onClick={onLogout}>
          Logout
        </button>

      </div>
    );
  }
}
