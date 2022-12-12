import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormHelperText from '@mui/material/FormHelperText';
import './password.css';
function Password({error}){
    const col=error?'red':null;
    const [values, setValues] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
    
    const handleClickShowPassword = () => {
      setValues({
        ...values,
        showPassword: !values.showPassword,
      });
    };
    
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    return (
      <>
       <FormControl variant="outlined" className='password' style={{display:'flex',margin:' 2.5% 5%'}}>
            <InputLabel htmlFor="outlined-adornment-password" style={{color:col}}>Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              InputStyle="InputStyle"
              error={error}
  
             
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          {error?<FormHelperText id="outlined-weight-helper-text"style={{color:'red',marginLeft:'15px'}}>invalid password</FormHelperText>:null}
          </FormControl>
      </>
    );
  }
  export default Password;
  