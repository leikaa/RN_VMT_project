export const initialState = {
  usersList: [],
};

export function Main(state = initialState, payload) {
  switch (payload.type) {
    case 'SET_USERS_LIST':
      return {
        ...state,
        usersList: payload.usersList,
      };
    default:
      return state;
  }
}
