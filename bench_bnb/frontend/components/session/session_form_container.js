import { connect } from 'react-redux';
import  SessionForm  from './session_form';
import {login, signup} from './../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  const type = (ownProps.location.pathname === '/login') ?
            "login" : "signup";
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
    formType: type
    // guess. check what path name is returning
      // if we get an error
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = (ownProps.location.pathname === '/login') ?
            login : signup;
  return {
    processForm: (user) => dispatch(action(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
