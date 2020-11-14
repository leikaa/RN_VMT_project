import axios from 'axios';
import qs from 'qs';

import Strings from '../../utils/strings';
import ErrorsHandler from '../../helpers/ErrorsHandler';
import {UPDATE_USER_BALANCE} from './const';

export const getFilteredUsersList = (token, setIsListVisible, filter) => {
  console.log('token: ', token);
  console.log('filter string: ', filter);

  const params = {
    filter,
  };

  return (
    dispatch => axios({
      url: `${Strings.base_url}api/protected/users/list`,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + token,
      },
      data: qs.stringify(params),
    })
      .then(response => {
        if (response.status >= 200 && response.status < 300) {

          console.log('users list', response.data);
          //add dispatch
        }
        setIsListVisible(true);
      })
      .catch(error => {
        console.log('get user filtered list error', error);

        ErrorsHandler(error, Strings.users_filtered_list_error); //add new error
      })
  );
};

export const createTransaction = (token, recipientName, amount, setIsLoading) => {
  const params = {
    name: recipientName,
    amount,
  };

  return (
    dispatch => axios({
      url: `${Strings.base_url}api/protected/transactions`,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + token,
      },
      data: qs.stringify(params),
    })
      .then(response => {
        setIsLoading(false);
        if (response.status >= 200 && response.status < 300) {
          dispatch({type: UPDATE_USER_BALANCE, balance: response.data.trans_token.balance});
        }
      })
      .catch(error => {
        console.log('user create transaction error', error);

        ErrorsHandler(error, Strings.user_create_transaction_error);
        setIsLoading(false);
      })
  );
};
