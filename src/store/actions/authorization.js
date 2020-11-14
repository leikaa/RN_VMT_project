import axios from 'axios';

import Strings from '../../utils/strings';
import ErrorsHandler from '../../helpers/ErrorsHandler';
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
      if (response.status >= 200 && response.status < 300) {
        dispatch(userInfo(response.data.id_token, navigate, setIsLoading));
      } else {
        setIsLoading(false);
      }
    })
    .catch(error => {
      console.log('user authorization error', error);

      ErrorsHandler(error, Strings.user_authorization_error);
      setIsLoading(false);
    })
);
