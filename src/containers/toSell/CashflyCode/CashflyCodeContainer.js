
import { connect } from 'react-redux';

// Actions
import * as SellActions from '@redux/sell/actions';


// The component we're mapping to
import CashflyCodeRender from './CashflyCodeView';

// What data from the store shall we send to the component?
const mapStateToProps = state => (
  {
    cashflyCode: state.sell.cashflyCode,
    sellValue: state.sell.sellValue,
  }
);

// Any actions to map to the component?
const mapDispatchToProps = {
  saveCashflyCode: code => SellActions.saveCashflyCode(code),
  publishSell: newSell => SellActions.publishSell(newSell),
};

export default connect(mapStateToProps, mapDispatchToProps)(CashflyCodeRender);
