import React from 'react';
import FormHeader from './FormHeader'
import FormBody from './FormBody'
import TextInput from './TextInput'
import TextArea from './TextArea'
import Button from './Button'

const RegistrationForm = (props) => {
    return (
        <div>
            <FormHeader title='Registration Form'/>
            {/* <FormBody> </FormBody> */}
            <div className='form-control'> 
                <TextInput 
                    type="text"      
                    label="First Name"
                    placeHolder="First Name"
                />
                <TextInput 
                    type="text"  
                    label="Last Name"
                    placeHolder="Last Name" 
                />
                <TextInput 
                    type="email"     
                    label="Email-Address" 
                    placeHolder="Email-Address" 
                /> 
                <TextInput 
                    type="number"    
                    label="Mobile No" 
                    placeHolder="Mobile No" 
                /> 
                <TextArea  
                    rows="5" 
                    cols="5"        
                    label="Message" 
                    placeHolder="Message" 
                />  
            </div>
            <div className='form-control'>
                <Button label="Save"></Button>
                <Button label="Clear"></Button> 
            </div>
        </div>
    )
}; 

export default RegistrationForm;