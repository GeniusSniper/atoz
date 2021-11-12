import React from "react";
import { Link, Redirect } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      address: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setdemo = this.setdemo.bind(this);
  }

  componentWillUnmount() {
    this.props.removeErrors();
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  setdemo() {
    this.setState({
      ["username"]: "Demo",
      ["password"]: "******",
    });
  }

  renderErrors() {
    return (
      <>
        <ul className="errorMsgs">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`} className="errorMsg">
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
    if (this.props.formType === "Create account") {
      sign_up_form = () => (
        <>
          <div className="sessionInput">
            <div className="inputLabel">Email:</div>
            <input
              type="email"
              value={this.state.email}
              onChange={this.update("email")}
              className="input"
              placeholder="Email"
            />
          </div>
          <div className="sessionInput">
            <div className="inputLabel">Address:</div>
            <input
              type="text"
              value={this.state.address}
              onChange={this.update("address")}
              className="input"
              placeholder="Address"
            />
          </div>
        </>
      );
    } else {
      demo_user = () => (
        <form className="demo" onSubmit={this.handleSubmit}>
          <button onClick={this.setdemo} className="demoButton">
            Demo User
          </button>
        </form>
      );
    }
    return (
      <div className="session">
        <div className="sessionlogo">
          <Link to="/">
            <img
              src="https://atoz-seeds.s3.us-east-2.amazonaws.com/atoz_logo_black.png"
              alt="atoz"
              className="logoNav"
            />
          </Link>
        </div>
        <div className="sessionFormContainer">
          <form onSubmit={this.handleSubmit} className="sessionForm">
            <div className="formType">{this.props.formType}</div>
            {this.renderErrors()}
            <div className="sessionInput">
              <div className="inputLabel">Username:</div>
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="input"
                placeholder="Username"
              />
            </div>
            <div className="sessionInput">
              <div className="inputLabel">Password:</div>
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="input"
                placeholder="Password"
              />
            </div>
            {sign_up_form()}
            <button className="sessionSubmit" type="submit">
              {this.props.msg}
            </button>
          </form>
        </div>
        <div className='forTypeDiv'>
          <div className="formTypeMsg">{this.props.formTypeMsg}</div>
        </div>
        <div>{this.props.navLink}</div>
        {demo_user()}
      </div>
    );
  }
}

export default SessionForm;
