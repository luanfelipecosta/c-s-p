/**
 * Navbar Elements
 *
 */
import { connect } from 'react-redux';

// Actions
import * as SideMenuActions from '@redux/sidemenu/actions';

// The component we're mapping to
import NavbarHomeMenuButtonRender from './NavbarHomeMenuButtonView';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  user: state.user,
});

// Any actions to map to the component?
const mapDispatchToProps = {
  toggleSideMenu: SideMenuActions.toggle,
};

/* Export Component ==================================================================== */
exports.NavbarMenuButton = connect(mapStateToProps, mapDispatchToProps)(NavbarHomeMenuButtonRender);
