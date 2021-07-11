import { connect } from 'react-redux';
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { errors, login } from '../../actions/session_action';
import SessionForm from './session_form';

const mst = ({ errors }) => ({
  errors: errors.session,
  formType: 'login',
  msg: 'Continue',
  navLink: <Link to="/signup">Create your Atoz account</Link>,
  formTypeMsg: 'New to Atoz?'
})

const mdt = dispatch => ({
  processForm: (user) => dispatch(login(user)),
  removeErrors: () => dispatch(errors())
});

export default connect(mst, mdt)(SessionForm);
