
import { connect } from 'react-redux';

// Actions
import * as SellActions from '@redux/sell/actions';


// The component we're mapping to
import ValueConfirmationRender from './ValueConfirmationView';

// What data from the store shall we send to the component?
const mapStateToProps = state => (
  { sellValue: state.sell.value }
);

// Any actions to map to the component?
const mapDispatchToProps = {
  startSell: val => SellActions.startSell(val),
};

export default connect(mapStateToProps, mapDispatchToProps)(ValueConfirmationRender);
