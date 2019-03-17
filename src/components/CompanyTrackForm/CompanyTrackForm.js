import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import { connect } from 'react-redux';
import { getCompany } from "../../actions/";

class CompaniesTrackForm extends Component {
  state = { value: '' }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.getCompany(this.state.value);
    this.setState({ value: "" });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="form">
            <Form.Label>Company symbol:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Company symbol"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              Provide the stock exchange symbol of a company you want to track
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Track
          </Button>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCompany: company => dispatch(getCompany(company))
});

export default connect(
  null,
  mapDispatchToProps
)(CompaniesTrackForm);
