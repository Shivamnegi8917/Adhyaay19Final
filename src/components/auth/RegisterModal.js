import React, { Component } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions.js";
import history from "../history";
import M from "materialize-css";

class registerModal extends Component {
  state = {
    modal: false,
    name: "",
    email: "",
    password: "",
    message: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    clearAuthMessage: PropTypes.func.isRequired
  };

  componentDidMount() {
    M.AutoInit();
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
    const { isAuthenticated } = this.props;
    if (isAuthenticated) {
      history.push("/");
    }
  }

  onCancelClick = () => {
    this.setState({
      message: ""
    });
  };

  componentDidUpdate(prevprops) {
    const { error, isAuthenticated, authMessage } = this.props;
    if (error !== prevprops.error) {
      // check for register error
      if (error.id === "REGISTER_FAIL") {
        this.setState({ message: error.message.message });
      } else {
        this.setState({ message: null });
      }
    }

    if (authMessage) {
      history.push("/confirm");
    }

    // if authenticated close model
    if (isAuthenticated) {
      this.props.clearErrors();
      history.push("/");
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password, name, college, branch, year, phone } = this.state;

    // Create user Object
    const newUser = {
      email,
      password,
      name,
      college,
      branch,
      year,
      phone
    };

    // Attempt to register
    this.props.register(newUser);
  };

  render() {
    return (
      <div className="test2">
        <button className="back btn blue" onClick={e => history.push("/")}>
          <i className="material-icons">arrow_back</i>
        </button>
        <div className="container login">
          <div
            ref={Modal => {
              this.Modal = Modal;
            }}
            id="modal1"
            className="modal"
          >
            <div className="modal-content" style={{ background: "black" }}>
              {this.state.message ? (
                <p style={{ color: "red" }}>{this.state.message}</p>
              ) : (
                <p style={{ color: "red" }}>Please Wait</p>
              )}
              <br />
              <div className="row">
                <div className="col s6 btn-1">
                  <button
                    href="#"
                    className="modal-close waves-effect waves-red btn-flat red btn-small"
                    onClick={this.onCancelClick}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="row valign-wrapper">
            <div class="col s7 offset-s3 valign">
              <div class="card ">
                <div class="card-action blue white-text">
                  <h4>Register</h4>
                </div>
                <div class="card-content">
                  <div className="form-field">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={this.onChange}
                    />
                  </div>
                  <br />
                  <div className="form-field">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={this.onChange}
                    />
                  </div>
                  <br />
                  <div className="form-field">
                    <label for="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      onChange={this.onChange}
                    />
                  </div>
                  <br />
                  <div className="row">
                    <div className="form-field col s6">
                      <label for="college">College</label>
                      <input
                        type="text"
                        name="college"
                        id="college"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="input-field col s6">
                      <select name="year" id="year" onChange={this.onChange}>
                        <option value="" disabled selected>
                          Year
                        </option>
                        <option value="1" name="year">
                          1st
                        </option>
                        <option value="2" name="year">
                          2nd
                        </option>
                        <option value="3" name="year">
                          3rd
                        </option>
                        <option value="4" name="year">
                          final
                        </option>
                      </select>
                    </div>
                  </div>
                  {/* <br /> */}
                  <div className="input-field">
                    <select name="branch" id="branch" onChange={this.onChange}>
                      <option value="" disabled selected>
                        Branch
                      </option>
                      <option
                        value="Computer and Science Engineering"
                        name="branch"
                      >
                        Computer and Science Engineering
                      </option>
                      <option value="Electronics Engineering" name="branch">
                        Electronics Engineering
                      </option>
                      <option value="Electrical Engineering" name="branch">
                        Electrical Engineering
                      </option>
                      <option value="Paint Technology" name="branch">
                        Paint Technology
                      </option>
                      <option value="Leather Technology" name="branch">
                        Leather Technology
                      </option>
                      <option value="Chemical Engineering" name="branch">
                        Chemical Engineering
                      </option>
                      <option value="Plastic Technology" name="branch">
                        Plastic Technology
                      </option>
                      <option value="Information Technology" name="branch">
                        Information Technology
                      </option>
                      <option value="Mechanical Engineering" name="branch">
                        Mechanical Engineering
                      </option>
                      <option value="Oil Technology" name="branch">
                        Oil Technology
                      </option>
                      <option value="Food Technology" name="branch">
                        Food Technology
                      </option>
                      <option value="Bio Chemical Engineering" name="branch">
                        Bio Chemical Engineering
                      </option>
                      <option value="Civil Engineeering" name="branch">
                        Civil Engineeering
                      </option>
                    </select>
                  </div>
                  <br />
                  {/* <div className="input-field">
                    <select name="year" id="year" onChange={this.onChange}>
                      <option value="" disabled selected>
                        Year
                      </option>
                      <option value="1" name="year">
                        1st
                      </option>
                      <option value="2" name="year">
                        2nd
                      </option>
                      <option value="3" name="year">
                        3rd
                      </option>
                      <option value="4" name="year">
                        final
                      </option>
                    </select>
                  </div> */}
                  {/* <br /> */}
                  <div className="form-field">
                    <label for="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      onChange={this.onChange}
                    />
                  </div>
                  <br />
                  <div className="form-field center-align">
                    <button
                      className="btn blue modal-trigger"
                      data-target="modal1"
                      onClick={this.onSubmit}
                    >
                      Register
                    </button>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  authMessage: state.auth.message
});

export default connect(
  mapStateToProps,
  { register, clearErrors }
)(registerModal);
