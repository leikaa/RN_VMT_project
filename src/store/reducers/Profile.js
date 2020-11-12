export const initialState = {
  profile: {
    name: '',
    email: '',
    balance: '',
  },
};

export function Profile(state = initialState, payload) {
  switch (payload.type) {
    default:
      return state;
  }
}
