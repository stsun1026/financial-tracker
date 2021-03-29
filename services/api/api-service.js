import axios from 'axios';
import { YahooFinanceApiService } from './yahoo-finance/yahoo-finance-api-service';

export const ApiService = function() {
  this._yahooFinanceApiService = null;

  this.yahooFinance = () => {
    if(!this._yahooFinanceApiService) {
      this._yahooFinanceApiService = new YahooFinanceApiService(axios);
    }
    return this._yahooFinanceApiService;
  }

  this.get = ({
    url,
    headers,
    body,
    successAction,
    failAction,
    finalAction
  }) => {
    axios.get(url, { params: body, headers: headers })
      .then(successAction)
      .catch(failAction)
      .then(finalAction);
  }
}

const apiService = new ApiService();

export default apiService;
