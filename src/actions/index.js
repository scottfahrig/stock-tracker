export const GET_DATA = 'GET_DATA';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';

export function getData(inputValue) {
  return {
    type: 'GET_DATA',
    payload: { inputValue }
  };
}

export function getDataSuccess(data) {
  return {
    type: 'GET_DATA_SUCCESS',
    payload: data
  };
}

export function getDataError(error) {
  return {
    type: 'GET_DATA_ERROR',
    payload: error
  };
}


export function getCompany(value) {
  const API_KEY = process.env.REACT_APP_API_KEY_NAME;

  return dispatch => {
    dispatch(getData(value));

    fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${value}&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(searchData => {
        // save the first result from the response list
        const company = searchData.bestMatches[0];
        const companySymbol = company['1. symbol'];
        const companyName = company['2. name'].split(' ')[0];

        fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${companySymbol}&apikey=${API_KEY}`)
          .then(response => response.json())
          .then(quoteData => {
            const quoteCompanyData = quoteData['Global Quote'];

            fetch(`https://autocomplete.clearbit.com/v1/companies/suggest?query=${companyName}`)
              .then(response => response.json())
              .then(autoCompleteData => {
                const autoCompleteCompanyData = autoCompleteData[0];

                dispatch(getDataSuccess({...company, ...quoteCompanyData, ...autoCompleteCompanyData}));
              })
          })
      })
      .catch(error => {
        console.log(error)
        dispatch(getDataError(error));
      })
  }
}
