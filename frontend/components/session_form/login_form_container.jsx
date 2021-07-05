import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/action';
import SessionForm from './session_form';

const mst = ({ errors }) => ({
  errors: errors.session,
  formType: 'login',
  navLink: <Link to="/signup">sign up instead</Link>,
})

const mdt = dispatch => ({
  processForm: (user) => dispatch(login(user)),
});

export default connect(mst, mdt)(SessionForm);
