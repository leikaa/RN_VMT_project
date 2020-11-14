import axios from 'axios';

import Strings from '../../utils/strings';
import ErrorsHandler from '../../helpers/ErrorsHandler';

export const SET_USER_DATA = 'SET_USER_DATA';

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
      if (response.status >= 200 && response.status < 300) {
        console.log('response', response);

        dispatch({type: SET_USER_DATA, username, email});
        navigate('Authorized');
      }
      setIsLoading(false);
    })
    .catch(error => {
      console.log('user registration error', error);

      ErrorsHandler(error, Strings.user_registration_error);
      setIsLoading(false);
    })
);
