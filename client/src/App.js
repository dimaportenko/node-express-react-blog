import React, { Component } from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';

class App extends Component {

  componentWillMount() {
      axios.get('/api/post')
          .then(result => console.log(result))
          .catch(error => console.log(error));
  }

  render() {
    return (
      <MuiThemeProvider>
        <Header/>
        <Home />
      </MuiThemeProvider>
    );
  }
}

export default App;
