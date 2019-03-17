import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Navigation from '../Navigation/Navigation'
import CompanyTrackForm from '../CompanyTrackForm/CompanyTrackForm';
import CompaniesList from '../CompaniesList/CompaniesList'

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <div className="container app__wrapper">
          <Route exact path="/" render={() => <CompaniesList companies={this.props.companies} />} />
          <Route exact path="/track" component={CompanyTrackForm} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  companies: state.companyReducer.companies
});

export default connect(
  mapStateToProps,
  null
)(App);
