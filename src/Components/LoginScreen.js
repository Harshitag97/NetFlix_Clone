import React, { useState } from 'react'
import SignUpScreen from './SignUpScreen'
import './LoginScreen.css'
function LoginScreen() {
  const [isSignin , setisSignin] = useState(false)
  return (
    <div className='loginscreen'>
        <div className='loginscreen__background'>
          <img className='loginscreen__logo' 
          src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'>

          </img>
          <button className='loginScreen__button' onClick={()=>setisSignin(true)}>Sign In</button>
          <div className='loginscreen__gradient'>

          </div>
          <div className='loginScreen__body'>
            {isSignin? <SignUpScreen/>:<>
                  <h1>Unlimited films ,TV programmes and 
                    more.</h1>
                  <h2>Watch anywhere. Cancel at any time.</h2>
                  <h3>
                    Ready to watch? Enter your email to
                    create or restart your
                    membership.
                  </h3>
                  <div className="loginScreen__input">
                    <form>
                        <input type='email' placeholder='Email Address'/>
                        <button className='loginScreen__getStated'>
                          GET STARTED
                        </button>
                    </form>
                  </div>
                </>}
                
          </div>
       </div>
    </div>
  )
}

export default LoginScreen