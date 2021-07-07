import { connect } from 'react-redux';
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { errors, signup } from '../../actions/session_action';
import SessionForm from './session_form';

const mst = ({ errors }) => ({
  errors: errors.session,
  formType: 'signup',
  msg: 'Create your AtoZ account',
  navLink: <Link to="/login">log in instead</Link>,
})

const mdt = dispatch => ({
  processForm: (user) => dispatch(signup(user)),
  removeErrors: () => dispatch(errors())
})

export default connect(mst, mdt)(SessionForm);
