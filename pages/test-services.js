import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import LoginVerifier from '../components/login-verifier/login-verifier';
import databaseService from '../services/database/database-service';
import refBuilder from '../services/database/ref-builder/ref-builder';
import apiService from '../services/api/api-service';

const TestServices = () => {
  const noInfoMessage = "None";

  const [autoCompleteInputText, setAutoCompleteInputText] = useState('');

  const user = useSelector(state => state.login.userData)
  const userDataFromFirebase = useSelector(state => state.fetchUserData)
  const autoCompleteData = useSelector(state => state.fetchStockAutoComplete);

  const displayJson = (jsonObj) => jsonObj ? JSON.stringify(jsonObj) : noInfoMessage;

  const readUserData = () => {
    databaseService
      .withRef(refBuilder
        .user(user.id)
        .build())
      .getValue();
  }

  const getStockAutoCompleteFromInput = () => {
    apiService
      .yahooFinance()
      .fetchStockAutoComplete(autoCompleteInputText);
  }

  const handleAutoCompleteInputChange = (event) => {
    setAutoCompleteInputText(event.target.value);
  }
  
  return (
    <LoginVerifier MUST_BE_LOGGED_IN_OTHERWISE_REDIRECT>
      <div>
        <p>
          <b>Authentication data stored in Redux:</b><br/>
          {displayJson(user)}
        </p>
      </div>
      <div>
        <button onClick={readUserData}>Test Read</button>
        <p>
          <b>User data from firebase stored in Redux:</b><br/>
          {displayJson(userDataFromFirebase.user)}
        </p>
      </div>
      <div>
        <button onClick={getStockAutoCompleteFromInput}>
          Call Yahoo Finance Auto Complete 
        </button>
        with query
        <input onChange={handleAutoCompleteInputChange}/>
        <p>
          <b>Stock Auto Complete Data from Yahoo Finance in Redux:</b><br/>
          {displayJson(autoCompleteData)}
        </p>
      </div>
    </LoginVerifier>
  );
}

export default TestServices;
