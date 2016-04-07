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

  selectHandler () {
    let { onPlay, onAddImage, onAccount, onLogout } = this.props;
    
  }

  render() {
    let { onSelectNavOption } = this.props;
    return (
      <Tabs className="nav-bar">
        <Tab className="nav-tabs" 
             label="Play Game" 
             value="play game" 
             onPlay={::this.selectHandler}>
        </Tab>

        <Tab className="nav-tabs" 
             label="Add Image" 
             value="add image" 
             onAddImage={::this.selectHandler}>
        </Tab>

        <Tab className="nav-tabs" 
             label="Account" 
             value="account" 
             onAccount={::this.selectHandler}>
        </Tab>

        <Tab className="nav-tabs" 
             label="Log Out" 
             value="log out" 
             onLogout={::this.selectHandler}>
        </Tab>

      </Tabs>
    );
  }
}
