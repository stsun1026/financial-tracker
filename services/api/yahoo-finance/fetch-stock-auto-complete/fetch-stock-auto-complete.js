import { store } from '../../../../redux/store';
import YahooFinanceApiService from '../yahoo-finance-api-service';
import urlBuilder from '../../url-builder';
import {
  BASE_URL,
  STOCK_AUTO_COMPLETE,
} from '../constants';
import { yahooFinanceHeader } from '../../../../config/rapid-api/yahoo-finance/headers';
import FetchAutoCompleteRequestModel from './fetch-stock-auto-complete-request-model';
import {
  fetchingStockAutoComplete,
  fetchingStockAutoCompleteSuccess,
  fetchingStockAutoCompleteFailed,
} from '../../../../redux/fetch-stock-auto-complete/actions';

export const FetchStockAutoComplete = function(axios, query) {
  YahooFinanceApiService.call(this, axios);

  const url = urlBuilder.build(BASE_URL, STOCK_AUTO_COMPLETE);
  const body = FetchAutoCompleteRequestModel({
    region: this.defaultRegion(),
    query: query,
  });
  const successAction = (response) =>
    store.dispatch(fetchingStockAutoCompleteSuccess(response));
  const failAction = (error) =>
    store.dispatch(fetchingStockAutoCompleteFailed(error));
  
  store.dispatch(fetchingStockAutoComplete());

  this.get({
    url: url,
    headers: yahooFinanceHeader,
    body: body,
    successAction: successAction,
    failAction: failAction,
  });
}
