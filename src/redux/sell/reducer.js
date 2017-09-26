
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
    default:
      return state;
  }
}
