import ParsedStockTickerAutoComplete
  from '../models/front-end-models/parsed-redux-stock-ticker-auto-complete';

// keys
const DATA = 'data';
const COUNT = 'count';
const QUOTES = 'quotes';

export const parseStockTickerAutoCompleteResponse = (response) => {
  if(!(response
      && response[DATA]
      && response[DATA][COUNT]
      && response[DATA][QUOTES])
    ) {
    return null;
  }
  
  const count = response.data.count;
  const quotes = response.data.quotes;
  
  return ParsedStockTickerAutoComplete({
    count: count,
    quotes: quotes,
  });
}
