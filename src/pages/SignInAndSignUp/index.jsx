import React from 'react';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
const SignInAndSignUp = () => {
    return(
        <div className ='signin-signup'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignUp;