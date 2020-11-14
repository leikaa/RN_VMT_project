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
        balance: 500,
      };
    default:
      return state;
  }
}
