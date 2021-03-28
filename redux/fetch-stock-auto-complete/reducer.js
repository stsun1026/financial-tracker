import { fetchStockAutoCompleteActionTypes } from './actions';
import {
  parseStockTickerAutoCompleteResponse,
} from '../../parsers/stock-ticker-auto-complete-parser';

const fetchStockAutoCompleteInitialState = {
  isFetchingStockAutoComplete: false,
  autoComplete: null,
  error: null,
};

export default function reducer(state = fetchStockAutoCompleteInitialState, action) {
  switch(action.type) {
    case fetchStockAutoCompleteActionTypes.FETCHING_STOCK_AUTO_COMPLETE: {
      return {
        ...state,
        isFetchingStockAutoComplete: true,
      };
    }

    case fetchStockAutoCompleteActionTypes.FETCHING_STOCK_AUTO_COMPLETE_SUCCESS: {
      const parsedResponse = parseStockTickerAutoCompleteResponse(action.response);
      return {
        ...state,
        isFetchingStockAutoComplete: false,
        autoComplete: parsedResponse,
      };
    }

    case fetchStockAutoCompleteActionTypes.FETCHING_STOCK_AUTO_COMPLETE_FAILED: {
      return {
        ...state,
        isFetchingStockAutoComplete: false,
        error: action.error,
      };
    }

    default:
      return state;
  }
}
