import axios from 'axios';

import Strings from '../../utils/strings';
import ErrorsHandler from '../../helpers/ErrorsHandler';
// import {SET_USER_DATA} from './const';

export const getFilteredUsersList = (token, setIsListVisible, filter) => {
  console.log('token: ', token);
  console.log('filter string: ', filter);

  return (
    dispatch => axios({
      url: `${Strings.base_url}api/protected/users/list`,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + token,
      },
      data: {
        filter,
      },
    })
      .then(response => {
        if (response.status >= 200 && response.status < 300) {

          console.log('users list', response);

          // dispatch({
          //   type: SET_USER_DATA,
          //   username: response.data.user_info_token.name,
          //   email: response.data.user_info_token.email,
          //   balance: response.data.user_info_token.balance,
          // });
        }
        setIsListVisible(true);
      })
      .catch(error => {
        console.log('get user filtered list error', error);

        ErrorsHandler(error, Strings.user_get_info_error);
      })
  );
};
