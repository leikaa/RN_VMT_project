export const initialState = {
  usersList: [],
  paymentRecipient: '',
  amountToTransfer: '',
};

export function Main(state = initialState, payload) {
  switch (payload.type) {
    case 'SET_USERS_LIST':
      return {
        ...state,
        usersList: payload.usersList,
      };
    case 'SET_INITIAL_TRANSACTION_DATA':
      return {
        ...state,
        paymentRecipient: payload.paymentRecipient,
        amountToTransfer: payload.amountToTransfer,
      };
    case 'CLEAR_ALL_DATA':
      return {
        ...state,
        usersList: [],
        paymentRecipient: '',
        amountToTransfer: '',
      };
    default:
      return state;
  }
}
