import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      address: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setdemo = this.setdemo.bind(this);
  }

  componentWillUnmount(){
    this.props.removeErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  setdemo(){
    this.setState({
      ['username']: 'Demo',
      ['password']: '******' 
    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let sign_up_form = () => null;
    let demo_user = () => null;
    if (this.props.formType === 'signup') {
      sign_up_form = () => (
          <>
              <label>Email:
                  <input type="email" value={this.state.email} onChange={this.update('email')} className="login-input"/>
              </label>
              <br/>
              <label>Address:
                  <input type="text" value={this.state.address} onChange={this.update('address')} className="login-input"/>
              </label>
              <br />
          </>
      )
    } else {
      demo_user = () => (
        <form className='demo' onSubmit={this.handleSubmit}>
          <button onClick={this.setdemo}>Demo User</button>
        </form>
      )
    }
    return (
      <div className="login-form-container">
        <Link to="/" ><img src="" alt="atoz" className='logo'/></Link>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to AtoZ!
          <br/>
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Username:
              <input type="text" value={this.state.username} onChange={this.update('username')} className="login-input"/>
            </label>
            <br/>
            <label>Password:
              <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input"/>
            </label>
            <br/>
            {sign_up_form()}
            <input className="session-submit" type="submit" value={this.props.msg} />
          </div>
        </form>
        <br />
        {demo_user()}
      </div>
    );
  }
}

export default SessionForm;
