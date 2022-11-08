// import React,{useState} from 'react';
// import 'react-phone-number-input/style.css';
// import PhnoInput from 'react-phone-number-input';
// import './PhoneInput.css';
// export default function PhoneInput({placeholder})
// {
// const [value,setValue]= useState()
// const PhoneInputStyle={
//     width:"80%",
//     height:"70px",
//     border:'none',
//     borderRadius:'2rem',
// }
// return(
    
//     <PhnoInput
//      className='Bcolor'
//      placeholder={placeholder}
//      defaultCountry='IN'
//      value={value}
//      onChange={setValue} style={PhoneInputStyle}/>
     
// )
// }
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './PhoneInput.css' 

export default function PhoneInput2({placeholder})
{
    
    return (<PhoneInput
    className="PhoneInput"
    country={'in'}
    placeholder={placeholder}/>)
}
