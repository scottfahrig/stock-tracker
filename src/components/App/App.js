import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import CompanyTrackForm from '../CompanyTrackForm/CompanyTrackForm';
import CompaniesList from '../CompaniesList/CompaniesList'

class App extends Component {
  render() {
    return (
      <div className="container app__wrapper">
        <CompanyTrackForm />
        <CompaniesList companies={this.props.companies} />
      </div>
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
