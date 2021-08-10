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
      <>
      <ul className='errorMsgs'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className='errorMsg'>
            {error}
          </li>
        ))}
      </ul>
      </>
    );
  }

  render() {
    let sign_up_form = () => null;
    let demo_user = () => null;
    if (this.props.formType === 'signup') {
      sign_up_form = () => (
          <>
            <br/>
            <br />
              <label>Email:
                  <br />
                  <input type="email" value={this.state.email} onChange={this.update('email')} className="login-input" placeholder='email'/>
              </label>
              <br/>
              <br />
              <label>Address:
                  <br />
                  <input type="text" value={this.state.address} onChange={this.update('address')} className="login-input" placeholder='address'/>
              </label>
              <br /><br />
          </>
      )
    } else {
      demo_user = () => (
        <form className='demo' onSubmit={this.handleSubmit}>
          <button onClick={this.setdemo} className='demoButton'>Demo User</button>
        </form>
      )
    }
    return (
      <div className='theBoxOutside'>
        <div className='theBoxInside'>
          <div className='theInsideBox'>
            <div className='sessionlogo'>
              <Link to="/" ><img src="https://atoz-seeds.s3.us-east-2.amazonaws.com/atoz_logo_black.png" alt="atoz" className='logoNav'/></Link>
            </div>
            <div className="login-form-container">
              <form onSubmit={this.handleSubmit} className="login-form-box">
                {this.renderErrors()}
                <label>Username:
                  <br />
                  <input type="text" value={this.state.username} onChange={this.update('username')} className="login-input" placeholder='username'/>
                </label>
                <br />
                <br/>
                <label>Password: 
                  <br />
                  <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input" placeholder='password'/>
                </label>
                {sign_up_form()}
                <button className="session-submit" type="submit">{this.props.msg}</button>
              </form>
              <br />
              <p className='formTypeMsg'>{this.props.formTypeMsg}</p>
              <div>
                {this.props.navLink}
              </div>
              <br />
              {demo_user()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
