import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import './index.css'

const Login = () => {


// useState 

const [userLogin, setUserLogin] = useState("")

const [userPass, setUserPass] = useState("")




const navigate = useNavigate()

const handleSignup = () =>{
   
    navigate('/register')


}


// onChnage 

const handleLogin = (event) => {
    setUserLogin(event.target.value)
    console.log(event.target.value)
}

const handlePass = (event) =>{
    setUserPass(event.target.value)
    console.log(event.target.value)

}

// onSubmit 

const handleSubmit = async(event) =>{
    event.preventDefault()


    try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: userLogin, password: userPass }),
        });
  
        if (!response.ok) {
          throw new Error('Login failed');
        }
  
        const data = await response.json();
        localStorage.setItem('token', data.accessToken); // Save token for future requests
        navigate('/todo');
      } catch (error) {
        console.error('Login error:', error);
        alert('Login failed. Please check your credentials.');
      }



}

  return (
    <div className='log-container'>
    <div className='form-container'>
    <h1>LOGIN</h1>
     <form onSubmit={handleSubmit}>
         <div>
             <label>USERNAME</label> <br/>
             <input type='text'  placeholder='Enter you username'
             
             value={userLogin} onChange={handleLogin}
             className='login-input' id='input' required/>
         </div>


         <div>
             <label>PASSWORD</label> <br/>
             <input type='password'  placeholder='Enter you password'
             value={userPass} onChange={handlePass}
             className='login-input' id='password' required/>
         </div>
         <div>
           <button className='login-button'>Log in </button>
           <button className='login-button' onClick={handleSignup}>Sign up</button>
         </div>

     </form>
    </div>
    </div>
  )
}
export default Login
