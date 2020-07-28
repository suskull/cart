import React, {useState} from 'react' ;
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
import {signInWithGoogle,auth} from '../../firebase/firebase.utils';


const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email,password);
            setEmail('');
            setPassword('');
        }catch(error) {
            console.log('error', error.message);
        }
       
    }

   
    return(
        <div className = 'sign-in'>
            <h1>{email}</h1>
            <span>Sign in with your email and password</span>

           <form onSubmit={handleSubmit}>
                <FormInput 
                    value={email}
                    type = 'email'
                    name = 'email'
                    label = 'email'
                    handleChange = {e => setEmail(e.target.value)}
                    required
                     
                />
                <FormInput 
                    value={password}
                    type = 'password'
                    name = 'password'
                    label = 'password'
                    handleChange = {e => setPassword(e.target.value)}
                    required
                />
                <div className = 'buttons'>
                    <CustomButton type ='submit' value ='submit form'>SIGN IN </CustomButton>
                    <CustomButton onClick = {signInWithGoogle} isGoogleSignIn>GOOGLE SIGN IN</CustomButton>
                </div>
                
           </form> 
          
        </div>
    )
}

export default SignIn;