import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle,signInWithFacebook} from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

import 'bootstrap/dist/css/bootstrap.min.css';



class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }
/*
  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
*/
  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton className="signin" type='submit'> Sign in </CustomButton><br></br>
            <CustomButton className="signin" onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
            <CustomButton className="signin" onClick={signInWithFacebook} isFacebookSignIn>
              Sign in with Facebook
            </CustomButton>
      
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
