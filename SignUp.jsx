import React, {Component} from 'react';
import {withStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import PhoneInput from './components/PhoneInput';
import Password from './Password';
import Button from '@material-ui/core/Button';
import Otp from './components/Otp';
import Timer from './Timer';
const useStyles = (theme) => ({
main_container:
{
   width: '100%',
   height: '100%',
   position: 'relative',
},
 h2:
 {
   fontFamily:'Roboto',
   textAlign:'center',
   marginTop: '20%',
 },
otp_resend_hide:
{
   color: 'blue',
   fontFamily: 'poppins',
   marginLeft: '5%',
},
otp_resend_show:
{
   marginLeft: '10%',
},
input:
{
   fontFamily: 'poppins',
},
register:
{
   position: 'relative',
   left: '37%',
   top: '20px',
},
resendbutton:
{
   marginLeft:'2.5%',
   marginTop: '3vh',
},
verifybutton:
{
   marginRight:'2.5%',
},
resend_verify_button:
{
   display: 'flex',
   justifyContent:'space-between'
},
otp_style: 
{
   marginTop: '3vh',
   marginLeft: '5%',
},
sb_style:
{ 
   marginRight:'5%',
   marginTop:'2.5%',
   display:'flex',
   flexDirection: 'row-reverse'
},
error:
{
   color:'red',
   marginLeft:'4%',
},
account:
{
   marginTop: '10%',
   display: 'flex',  
   justifyContent: 'center',
},
});
class SignUp extends Component {
   state={
   disable:false,
   set:false,
   show:true,
   btn:false,
   verify:false,
   valid:true,
   fullname:
   {
      value:' ',
      error:false,
      errorMessage:'',
   },
   email:
   {
      value:' ',
      error:false,
      errorMessage:'',
   },  
   password:
   {
      value:' ',
      error:false,
      errorMessage:'',
   }
   }
   active()
   {
      const dialCode=this.refs.PhoneInput2.accessDialCode();
      console.log("Dial Code=",dialCode);
       if(this.PhoneValidation(dialCode))
       {
         this.setState({valid:true})
         this.setState({btn:false})
         this.setState({set:true})
         this.setState({disable:true})
       }
       else
       {
         this.setState({valid:false})
       }
   }
   handleChange1(){
   this.setState({verify:true});
   }
   validate(){
   this.setState({show:false})
   };
   ///************************************handle change event*********************** */
   handleButton(e)
   {
      console.log(e.target.value);
      (!this.state.set)&&this.setState({btn:true})
      this.setState({valid:true})
   }
   handleFullName(e)
   {
      this.setState({
           fullname:
           {
            value:e.target.value,
           }
                    })
   }
   handleEmail(e)
   {
      this.setState(
         {
            email:
            {
            value:e.target.value
            }
         }
                   )
   }
   handlePassword(e)
   {
      this.setState(
         {
            password:
            {
               value:e.target.value
            }
         }
                   )
   }
   ///********************End of handle change evenets************************* */
  ///*********************validation part-************************************* */
   PhoneValidation(dialCode){
      console.log("dialCode=",dialCode);
      const PHONE_REGEX =new RegExp(/"^[/+]?[(]?[0-9]{3}[)]?[-\s/.]?[0-9]{3}[-\s.]?[0-9]{4,6}$"/gmi);
      if(PHONE_REGEX.text(dialCode))
      {
         return true;
      }
      return false;
   }
   fullNameValidation()
   {
    
     console.log('validation part'+this.state.fullname.value);
     var name=this.state.fullname.value;
     if(name.length<=9||name.length>=30)
     {
      this.setState({
         fullname:
         {
          value:this.state.fullname.value,
          error:true,
          errorMessage:'invalid Full Name'
         }
                  })
     }
   }
   emailValidation()
   {
         var email=this.state.email.value;
         if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
         {
            this.setState(
               {
                  email:
                  {
                     value:this.state.email.value,
                     error:true,
                     errorMessage:'invalid Email'
                  }
               }
                         )
         }
   }
   passwordValidation()
   {
      var re =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
      console.log(this.state.password.value);
      if(!re.test(this.state.password.value))
      {
         this.setState(
            {
               password:
               {
                  value:this.state.password.value,
                  error:true,
                  errorMessage:'invalid password'
               }
            }
                     )
      }
   }
   registration_validation()
   {
      this.fullNameValidation()
      this.emailValidation()
      this.passwordValidation()
   }
   ///****************************end of validation part*********************************** */

   render() {
   const { classes } = this.props;
   return (
        <div className={classes.main_container}>
           <h2 className={classes.h2}>Create New Account</h2>
           {
           this.state.show?
           <div>
               <span onChange={this.handleButton.bind(this)}><PhoneInput placeholder="Enter Phone number" disable={this.state.disable} valid={this.state.valid} ref="PhoneInput2"/></span>
               <div className={classes.sb_style}>{this.state.btn?<span className={classes.sendbutton}><Button onClick={this.active.bind(this)} variant="contained" color="primary">
               Send</Button></span>:null}
               </div>
               {this.state.set?
               <span>
                    <span onChange={this.handleChange1.bind(this)} value={this.message} className={classes.otp}><div className={classes.otp_style}><Otp /></div></span><br/>
                    <div className={classes.resend_verify_button}>
                    <Timer/>
                    {this.state.verify?<Button variant="text" color='primary' className={classes.verifybutton} onClick={this.validate.bind(this)}>Verify</Button>:null}
                    </div>
                </span>
                :
                null
               }
               <span className={classes.account}> <Button href="#text-buttons" color='primary' className={classes.account}>already have an account?</Button></span>
           </div>
           :
           <div>
               <TextField  onChange={this.handleFullName.bind(this)} 
                           error={this.state.fullname.error} 
                           helperText={this.state.fullname.errorMessage}
                           value={this.state.fullname.value}
                           id="outlined-basic"
                           label="Enter Full Name" 
                           variant="outlined" sx={{ m: 1,width: '90%',marginLeft:'5%',marginBottom:'70px',height:'10px'}} 
                           required />
               <TextField
                           onChange={this.handleEmail.bind(this)} 
                           error={this.state.email.error} 
                           helperText={this.state.email.error && this.state.email.errorMessage}
                           value={this.state.email.value}
                           id="outlined-basic"
                           label="Enter Email" 
                           variant="outlined" sx={{ m: 1, width: '90%',marginLeft:'5%',marginBottom:'70px',height:'10px' }}required/>
               <span onChange={this.handlePassword.bind(this)}><Password error={this.state.password.error}/></span>
               <Button 
                           className={classes.register} 
                           variant="contained" 
                           color="primary" 
                           type="submit"
                           onClick={this.registration_validation.bind(this)}> 
                           Register
               </Button>
            </div>
             }
        </div>
        );
  }
}
export default withStyles(useStyles, { withTheme: true })(SignUp);