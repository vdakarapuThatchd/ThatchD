import styled from 'styled-components';
import Button from "./components/Button";
import Input from "./components/Input";
import PhoneInput from "./components/PhoneInputs";
function App(){
  return (
    <MainContainer>
        <InputContainer>
        <PhoneNumber><PhoneInput placeholder="Enter Phone number"  /></PhoneNumber>
        <Input type="password" placeholder="Password" />
        </InputContainer>
    <Action>
      <ForgotPassword>Forgot Password?</ForgotPassword>
      <LoginWith>New To Thatchd</LoginWith>
    </Action>
    <ButtonContainer>
        <Button content="Login" />
      </ButtonContainer>
    </MainContainer>
  );
}
const PhoneNumber=styled.div`
background: rgba(255, 255, 255, 0.15);
box-shadow: 0 9px 32px 0 rgba(31, 38, 135, 0.37);
border-radius: 2rem;
display:relative;
width: 80%;
height: 3rem;
padding: 1rem;
outline: none;
color: black;
font-size: 1rem;
font-weight: bold;
margin-top:20px;
/**-----------------phone number height and width----------------------**/
.form-control
{
  border:none;
  height:30px;
  width:95%;
  font-wight:100;
  font-size: 1rem;
  // margin-bottom:220px;
  padding-bottom:12px;
}
.flag-dropdown
{
  border:none;
  padding-bottom:16px;
}
`
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
  margin-top:100px;
`;
const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h6`
  cursor: pointer;
  color:black;
  margin:0px;
  display:inline-block;
`;
const ForgotPassword = styled.h6`
  cursor: pointer;
  color:black;
  margin:0px;
  align-items:right;
  display:inline-block;
  
`;
const Action = styled.h3`
display:inline-block;
display:flex;
justify-content:space-around;
margin-top:40px;
`
export default App;
