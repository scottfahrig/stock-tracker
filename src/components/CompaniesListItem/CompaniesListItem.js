import React from 'react';
import { Card, ListGroup } from "react-bootstrap";
import './CompaniesListItem.css'

const CompaniesListItem = ({ company }) => {
  return (
    <Card className="company__card">
      <Card.Img src={company.logo} variant="top" />
      <Card.Body>
        <Card.Title>{company.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{company.symbol}</Card.Subtitle>
        <ListGroup>
          <ListGroup.Item>Trading hours: {company.trading_hours}</ListGroup.Item>
          <ListGroup.Item>Price: {company.price}</ListGroup.Item>
          <ListGroup.Item>Price change: {company.price_change}</ListGroup.Item>
        </ListGroup>
        <Card.Link href={`//www.${company.website}`}>{company.website}</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default CompaniesListItem;
