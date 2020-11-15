export const initialState = {
  token: '',
};

export function Authorization(state = initialState, payload) {
  switch (payload.type) {
    case 'SET_USER_AUTHORIZATION_DATA':
      return {
        ...state,
        token: payload.token,
      };
    case 'CLEAR_ALL_DATA':
      return {
        ...state,
        token: '',
      };
    default:
      return state;
  }
}
