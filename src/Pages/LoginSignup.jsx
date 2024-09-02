import React from 'react'
import './CSS/Loginsignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="login-container">
        <h1>Sign Up</h1>
        <div className="login-signup-fields">
          <input type="text" placeholder='your name'/>
          <input type="email" placeholder='email address'/>
          <input type="password" placeholder='password'/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account?<span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By Continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
