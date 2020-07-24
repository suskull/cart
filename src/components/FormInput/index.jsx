import React from 'react';

const FormInput = ({handleChange,label, ...otherFormInputProps}) => {
    
    return (
        <div className = 'group'>
             <input className ='form-input' onChange={handleChange} {...otherFormInputProps}/>
            <label className = {`${otherFormInputProps.value.length ? 'shrink' : ''} form-input-label `}>{label} </label>
        </div>  


       

        
    )
}

export default FormInput;

