import axios from 'axios';

import Strings from '../../utils/strings';
import ErrorsHandler from '../../helpers/ErrorsHandler';
import {SET_USER_DATA} from './const';

export const userInfo = (token, navigate, setIsLoading) => (
  dispatch => axios({
    url: `${Strings.base_url}api/protected/user-info`,
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + token,
    },
  })
    .then(response => {
      setIsLoading(false);
      dispatch({
        type: SET_USER_DATA,
        username: response.data.user_info_token.name,
        email: response.data.user_info_token.email,
        balance: response.data.user_info_token.balance,
      });
      navigate('Authorized');
    })
    .catch(error => {
      console.log('user get info error', error);

      ErrorsHandler(error, 'An error occurred when requesting user information.');
      setIsLoading(false);
    })
);
