
// Set initial state
const initialState = {};

export default function sellReducer(state = initialState, action) {
  console.log('caiu nos reducers do sell ');
  switch (action.type) {
    case 'SELL_CODE_GENERATED': {
      if (action.payload) {
        return {
          ...state,
          value: action.payload,
        };
      }
      return {};
    }
    default:
      return state;
  }
}
