import React, { Component } from 'react';
import './App.css';
import AdsList from './components/AdsList';
import { Route } from 'react-router-dom'
import CreateAd from './components/CreateAd';
import AdDetails from './components/AdDetails';

class App extends Component {
  render() {
    return(
    <div>
      <Route path="/" exact component={AdsList} />
      <Route path="/sellerpage" exact component={CreateAd} />
      <Route path="/ad/:id" exact component={AdDetails} />
    </div>
    )
  }
}

export default App;
