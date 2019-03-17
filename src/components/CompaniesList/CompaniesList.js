import React from 'react';
import CompaniesListItem from '../CompaniesListItem/CompaniesListItem';

const CompaniesList = ({ companies }) => {
  return (
    <div>
      <h4>Companies</h4>
      {companies && companies.length ? (
        companies.map(company => (
          <CompaniesListItem company={company} key={company.name} />
        ))
      ) : (
        <p>No companies on the list</p>
      )}
    </div>
  )
}

export default CompaniesList;
