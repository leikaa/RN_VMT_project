import axios from 'axios';

import Strings from '../../utils/strings';
import ErrorsHandler from '../../helpers/ErrorsHandler';
import {SET_USER_AUTHORIZATION_DATA, SET_USER_DATA} from './const';

export const registerUser = (username, password, email, navigate, setIsLoading) => (
  dispatch => axios({
    url: `${Strings.base_url}users`,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      username, password, email,
    },
  })
    .then(response => {
      setIsLoading(false);
      if (response.status >= 200 && response.status < 300) {
        dispatch({type: SET_USER_AUTHORIZATION_DATA, token: response.data.id_token});
        dispatch({type: SET_USER_DATA, username, email, balance: 500});
        navigate('Authorized');
      }
    })
    .catch(error => {
      console.log('user registration error', error);

      ErrorsHandler(error, Strings.user_registration_error);
      setIsLoading(false);
    })
);
