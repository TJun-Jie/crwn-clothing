import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth} from '../../firebase/firebase.utils'


class SignIn extends React.Component{
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
        } catch (error) {
            console.log(error)
        }
        // this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]: value});
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        handleChange = {this.handleChange}
                        label="email"
                        required 
                        />
                    <FormInput
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        label="password"
                        handleChange = {this.handleChange}
                        required 
                        />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div> 
                </form>
            </div>
        )
    }
}


export default SignIn;
