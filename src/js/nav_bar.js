import React, { Component, PropTypes } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Tabs   from 'material-ui/lib/tabs/tabs';
import Tab    from 'material-ui/lib/tabs/tab';
// import Slider from 'material-ui/lib/slider';

export default class NavBar extends Component {
  static propTypes = {
    onPlay: PropTypes.func.isRequired,
    onAddImage: PropTypes.func.isRequired,
    onAccount: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.state = {
      value: 'game',
    };
  }

<<<<<<< HEAD
=======
  selectHandler () {
   let { onSelectNavOption } = this.props;
>>>>>>> c323f2ab635f0a67e9755d728ef0825230ab381b

  // Pretty sure we don't need thus anymore after learning about the onActive thing.
  // selectHandler () {
  //   let { onPlay, onAddImage, onAccount, onLogout } = this.props;

  // }

  render() {
<<<<<<< HEAD
    let { onSelectNavOption, onPlay, onAddImage, onAccount, onLogout } = this.props;
=======
     let { onPlay, onAddImage, onAccount, onLogout } = this.props;
>>>>>>> c323f2ab635f0a67e9755d728ef0825230ab381b
    return (
      <Tabs className="nav-bar">
        <Tab className="nav-tabs" 
             label="Play Game" 
             value="play game" 
             onActive={onPlay}>
        </Tab>

        <Tab className="nav-tabs" 
             label="Add Image" 
             value="add image" 
             onActive={onAddImage}>
        </Tab>

        <Tab className="nav-tabs" 
             label="Account" 
             value="account" 
             onActive={onAccount}>
        </Tab>

        <Tab className="nav-tabs" 
             label="Log Out" 
             value="log out" 
             onActive={onLogout}>
        </Tab>

      </Tabs>
    );
  }
}
