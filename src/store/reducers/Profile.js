export const initialState = {
  username: '',
  email: '',
  balance: '',
};

export function Profile(state = initialState, payload) {
  switch (payload.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        username: payload.username,
        email: payload.email,
        balance: payload.balance,
      };
    case 'UPDATE_USER_BALANCE':
      return {
        ...state,
        balance: payload.balance,
      };
    default:
      return state;
  }
}
