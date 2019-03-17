import React, { Component } from 'react';
import './App.css';
import CompanyTrackForm from '../CompanyTrackForm/CompanyTrackForm';

class App extends Component {
  render() {
    return (
      <div className="container app__wrapper">
        <CompanyTrackForm />
      </div>
    );
  }
}

export default App;
