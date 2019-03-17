import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR
} from "../actions";

const initialState = {
  inputValue: "",
  companies: [],
  isLoading: false,
  isError: null
};

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        isLoading: true,
        inputValue: action.payload.inputValue
      };
    case GET_DATA_SUCCESS:
      const data = action.payload;

      const company = {
        name: data['2. name'],
        symbol: data['01. symbol'],
        trading_hours: `${data['5. marketOpen']} - ${data['6. marketClose']}`,
        price: `${Math.round(data['05. price'])} ${data['8. currency']}`,
        price_change: data['09. change'],
        website: data.domain,
        logo: data.logo
      }

      return {
        ...state,
        isLoading: false,
        companies: [...state.companies, company]
      };
    case GET_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    default:
      return state;
  }
};
