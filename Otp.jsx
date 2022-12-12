import React, { Component } from 'react';
import OtpInput from 'react-otp-input';
import './Otp.css'
export default class App extends Component {
  state = { otp: '' };

  handleChange = (otp) => this.setState({ otp });

  render() {
    return (
       <div className='otp_style'>
        <OtpInput
          value={this.state.otp}
          onChange={this.handleChange}
          numInputs={6}
          separator={<></>}
          className='one-time-password'
          inputStyle="inputStyle"
      />
      </div>
    );
  }
}