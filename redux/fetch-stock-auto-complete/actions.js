export const fetchStockAutoCompleteActionTypes = {
  FETCHING_STOCK_AUTO_COMPLETE: 'FETCHING_STOCK_AUTO_COMPLETE',
  FETCHING_STOCK_AUTO_COMPLETE_SUCCESS: 'FETCHING_STOCK_AUTO_COMPLETE_SUCCESS',
  FETCHING_STOCK_AUTO_COMPLETE_FAILED: 'FETCHING_STOCK_AUTO_COMPLETE_FAILED',
}

export const fetchingStockAutoComplete = () => (dispatch) => {
  return dispatch({
    type: fetchStockAutoCompleteActionTypes.FETCHING_STOCK_AUTO_COMPLETE
  });
}

export const fetchingStockAutoCompleteSuccess = (response) => (dispatch) => {
  return dispatch({
    type: fetchStockAutoCompleteActionTypes.FETCHING_STOCK_AUTO_COMPLETE_SUCCESS,
    response: response,
  });
}

export const fetchingStockAutoCompleteFailed = (error) => (dispatch) => {
  return dispatch({
    type: fetchStockAutoCompleteActionTypes.FETCHING_STOCK_AUTO_COMPLETE_FAILED,
    error: error,
  });
}
