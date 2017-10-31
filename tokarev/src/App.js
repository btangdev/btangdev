import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Count from './Count/Count';
import AppbarHeader from './AppbarHeader/AppbarHeader';
import ThumbnailList from './ThumbList/ThumbnailList';
import UploadButton from './UploadUI/UploadButton';
import AppbarBtm from './AppbarBottom/AppbarBtm'
import * as firebase from 'firebase';

class App extends Component {    
  constructor(props){
    super(props);
    this.state = {
      speed: 10,
      photo: ''
    }
  }

  componentDidMount() {
    const rootRef = firebase.database().ref();
    const speedRef = rootRef.child('speed');

    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val()
      });
    });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppbarHeader title={this.props.title}/>
        </MuiThemeProvider>

        <MuiThemeProvider>
          <ThumbnailList></ThumbnailList>
        </MuiThemeProvider>

        <MuiThemeProvider>
          <UploadButton></UploadButton>
        </MuiThemeProvider>
        
        <Count version={this.props.version}></Count>

        <h1>{this.state.speed}!!</h1>
        <MuiThemeProvider>
          <AppbarBtm></AppbarBtm>
        </MuiThemeProvider>
      </div>
    );
  }
}

App.defaultProps = {
  title: 'React & Firebase Post',
  version: '1.0.0'
}

export default App;
