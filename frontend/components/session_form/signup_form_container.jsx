import { connect } from 'react-redux';
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { signup } from '../../actions/action';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'signup',
  msg: 'Create your AtoZ account',
  navLink: <Link to="/login">log in instead</Link>,
})

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
