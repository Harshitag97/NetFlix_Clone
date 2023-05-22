import React from 'react'
import './SignUpScreen.css'
const user ={
  email:'',
  Password:''
}
function SignUpScreen() {
  function sendData () {
    const user ={
      email:'email',
      Password:'password'
    }
  }
  return (
    <div className='signupScreen'>
      <form>
      <h1>Sign In</h1>
      <input placeholder='Email' type='email'/>
      <input placeholder='Password' type='Password'/>
      <button type='submit'>Sign In</button>
      </form>
     
     <h4>
      <span className='signupScreen_gray'>New to Netflix?</span>
      New to Netflix? Sign Up now.?</h4>
    </div>
  )
}

export default SignUpScreen