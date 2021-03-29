import { US_REGION } from "../../../config/rapid-api/yahoo-finance/yahoo-finance-constants";
import { ApiService } from "../api-service";
import { FetchStockAutoComplete } from './fetch-stock-auto-complete/fetch-stock-auto-complete';

export const YahooFinanceApiService = function(axios) {
  ApiService.call(this);

  this._fetchStockAutoComplete = null;

  this.defaultRegion = () => US_REGION;

  this.fetchStockAutoComplete = ({ query }) => {
    if(!this._fetchStockAutoComplete) {
      this._fetchStockAutoComplete = new FetchStockAutoComplete(axios, query);
    }
    return this._fetchStockAutoComplete;
  }
}
