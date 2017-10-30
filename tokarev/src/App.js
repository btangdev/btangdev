import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Count from './Count/Count';
import AppbarHeader from './AppbarHeader/AppbarHeader';
import * as firebase from 'firebase';

class App extends Component {    
  constructor(props){
    super(props);
    this.state = {
      speed: 10,
      photo: 'asdasd'
    }
  }

  componentDidMount() {
    const rootRef = firebase.database().ref();
    const rootStRef = firebase.storage().ref();
    const speedRef = rootRef.child('speed');

    rootStRef.child('photo/May-Fruits-Flowers.jpg').getDownloadURL().then( (url) => {
      this.setState({
        photo: url
      });
    })

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
        <Count version={this.props.version}></Count>

        <h1>{this.state.speed} !!!</h1>
        <img src={this.state.photo} alt=""/> 
      </div>
    );
  }
}

App.defaultProps = {
  title: 'react example demo!',
  version: '1.0.0'
}

export default App;
