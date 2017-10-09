
// Set initial state
const initialState = {};

export default function sellReducer(state = initialState, action) {
  switch (action.type) {
    case 'SELL_STARTED': {
      if (action.payload) {
        return {
          ...state,
          sellValue: action.payload,
        };
      }
      return {};
    }
    case 'SELL_CODE_GENERATED': {
      if (action.payload) {
        return {
          ...state,
          cashflyCode: action.payload,
        };
      }
      break;
    }
    case 'PAID_STATUS_SUCCESS': {
      if (action.payload) {
        return {
          ...state,
          status: action.payload,
          paymentModal: true,
        };
      }
      break;
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        paymentModal: false,
      };
    }
    default:
      return state;
  }
}
