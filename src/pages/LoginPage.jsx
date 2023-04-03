import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"
import { useNavigate } from 'react-router-dom';
import profileIcon from "../assets/profile.png";

const LoginPage = ({ setIsAuth }) => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    const handleLogin = (e) => {
       e.preventDefault();
       signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                localStorage.setItem("adminLoggedIn", true)
                navigate('/')
                setIsAuth(true)
            })
            .catch((error) => {
                setError(true);
            });
    }

  return (
    <div className='loginBox'>
      <img className='userProfile' src={profileIcon} alt="profileIcon" />
      <h4>Only for Admin</h4>
       <form onSubmit={handleLogin}>

            <p>Email</p>
            <input type='email' 
                   placeholder='admin@someone.com' 
                   name='email' 
                   onChange={(e) => setEmail(e.target.value)} 
            />

            <p>Password</p>
            <input type='password' 
                   placeholder='********' 
                   onChange={(e) => setPassword(e.target.value)} 
            />

            <button type='submit'>Login</button>
              {
                  error &&<span>Wrong email or password !</span>
              }
       </form>
    </div>
  )
}

export default LoginPage;