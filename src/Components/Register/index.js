import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import './index.css'
const Register = () => {


// useState 

const [user, setuUer] = useState("")
const [pass, setPass] = useState("")




const navigate = useNavigate()
//    navigate
    const handleLogin = () => {
        
        navigate('/')
    
    }
    
// onChange user 
const handlerUser = (event) =>{

setuUer(event.target.value)
console.log(event.target.value)

} 




const handlerPass = (event) => {
    setPass (event.target.value)
    console.log(event.target.value)
}


// onSubmit 

const handelSubmit = async(event) => {
    event.preventDefault()


    try {
        const response = await fetch('http://localhost:3000/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: user, password: pass }),
        });
  
        if (!response.ok) {
          throw new Error('Registration failed');
        }
  
        navigate('/');
      } catch (error) {
        console.error('Registration error:', error);
        alert('Registration failed. Please try again.');
      }


    

}



  return (

    <div className='reg-container'>
       <div className='form-container'>
       <h1>REGISTER</h1>
        <form onSubmit={handelSubmit}>
            <div>
                <label>USERNAME</label> <br/>
                <input type='text'  placeholder='Enter you username'
                value={user} onChange={handlerUser}
                className='register-input' id='input' required/>
            </div>


            <div>
                <label>PASSWORD</label> <br/>
                <input type='password'  placeholder='Enter you password'
                value={pass} onChange={handlerPass}
                className='register-input' id='password' required/>
            </div>
            <div>
              <button className='register-button' type='submit' >Sign up</button>
              <button className='register-button' onClick={handleLogin}>Log in</button>
            </div>

        </form>
       </div>
    </div>
  )
}

export default Register

