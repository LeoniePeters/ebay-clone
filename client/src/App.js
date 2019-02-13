import React, { Component } from 'react';
import './App.css';
import AdsList from './components/AdsList';
import { Route } from 'react-router-dom'
import CreateAd from './components/CreateAd';
import AdDetails from './components/AdDetails';
import AdminPage from './components/AdminPage';
require('typeface-roboto')


class App extends Component {
  render() {
    return(
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <Route path="/" exact component={AdsList} />
      <Route path="/sellerpage" exact component={CreateAd} />
      <Route path="/ad/:id" exact component={AdDetails} />
      <Route path="/admin" exact component={AdminPage} />
    </div>
    )
  }
}

export default App;
