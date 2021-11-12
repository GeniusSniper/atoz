import { connect } from 'react-redux';
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { errors, signup } from '../../actions/session_action';
import SessionForm from './session_form';

const mst = ({ errors }) => ({
  errors: errors.session,
  formType: 'Create account',
  msg: 'Create your AtoZ account',
  navLink: <Link to="/login" className='redirectButton'><button className='formTypeLink'>Sign-In</button></Link>,
  formTypeMsg: 'Already have an account?'
})

const mdt = dispatch => ({
  processForm: (user) => dispatch(signup(user)),
  removeErrors: () => dispatch(errors())
})

export default connect(mst, mdt)(SessionForm);
