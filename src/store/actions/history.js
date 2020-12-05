import axios from 'axios';
import Strings from '../../utils/strings';

import {SET_USER_TRANSACTIONS_HISTORY} from './const';
import ErrorsHandler from '../../helpers/ErrorsHandler';

export const getTransactionsHistory = (token, setIsLoading) => (
  dispatch => axios({
    url: `${Strings.base_url}api/protected/transactions`,
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + token,
    },
  })
    .then(response => {
      dispatch({type: SET_USER_TRANSACTIONS_HISTORY, transactionsHistory: response.data.trans_token});
      setIsLoading(false);
    })
    .catch(error => {
      console.log('get user transactions history error', error);

      ErrorsHandler(error, 'An error occurred when requesting user transactions history.');
      setIsLoading(false);
    })
);
