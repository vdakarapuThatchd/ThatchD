import React ,{Component}from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './PhoneInput.css' 
import FormHelperText from '@mui/material/FormHelperText';
export default class PhoneInput2 extends Component
{   
  constructor(props)
  {
    super(props);
    this.state=
    {
      dialCode:''
    }
  }
  accessDialCode=()=>
  {
    return this.state.dialCode;
  }
  render()
  {
    const valid=this.props.valid;
    return (
    <div>
    <PhoneInput
    className="PhoneInput2"
    country={'in'}
    onChange={(value,data)=>{
      var phonenumber=value.slice(data.dialCode.length)
      this.setState({
        dialCode:phonenumber
      })
    }
     }
    isValid={this.props.valid}
    placeholder={this.props.placeholder}
    disabled={this.props.disable}
    />
    {valid?null:<FormHelperText id="outlined-weight-helper-text"style={{color:'red',marginLeft:'7%'}}>invalid mobile number</FormHelperText>}
    </div>)
  }
}

