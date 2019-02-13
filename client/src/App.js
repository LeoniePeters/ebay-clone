import React, { Component } from 'react';
import './App.css';
import AdsList from './components/AdsList';
import { Route } from 'react-router-dom'
import CreateAd from './components/CreateAd';

class App extends Component {
  render() {
    return(
    <div>
      <Route path="/" exact component={AdsList} />
      <Route path="/sellerpage" component={CreateAd} />
    </div>
    )
  }
}

export default App;
