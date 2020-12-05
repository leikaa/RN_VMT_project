import axios from 'axios';

import Strings from '../../utils/strings';
import ErrorsHandler from '../../helpers/ErrorsHandler';
import {SET_USER_AUTHORIZATION_DATA} from './const';
import {userInfo} from './profile';

export const authorizeUser = (email, password, navigate, setIsLoading) => (
  dispatch => axios({
    url: `${Strings.base_url}sessions/create`,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      email, password,
    },
  })
    .then(response => {
      dispatch({type: SET_USER_AUTHORIZATION_DATA, token: response.data.id_token});
      dispatch(userInfo(response.data.id_token, navigate, setIsLoading));
    })
    .catch(error => {
      console.log('user authorization error', error);

      ErrorsHandler(error, 'An error occurred during user authorization.');
      setIsLoading(false);
    })
);
