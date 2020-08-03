import React, {useState} from 'react' ;
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
//import {auth} from '../../firebase/firebase.utils';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import {connect} from 'react-redux'
//import { onGoogleSignInStart } from '../../redux/user/user.sagas';

const SignIn = ({googleSignInStart, emailSignInStart}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        emailSignInStart(email,password)
        // try {
        //     await auth.signInWithEmailAndPassword(email,password);
        //     setEmail('');
        //     setPassword('');
        // }catch(error) {
        //     console.log('error', error.message);
        // }
       
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
                    <CustomButton type='button' onClick = {googleSignInStart} isGoogleSignIn>GOOGLE SIGN IN</CustomButton>
                </div>
                
           </form> 
          
        </div>
    )
}

 
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email,password}))
})
export default connect(null,mapDispatchToProps)(SignIn);