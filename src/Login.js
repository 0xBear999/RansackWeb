import React, { useState, useContext , useEffect} from 'react';
import './Login.css';
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { loginContext } from './Context/loginContext';

const Login = () => {
  
  let[currentuser,error,userLoginStatus,loginuser] = useContext(loginContext)

  //error state
  //let [err, setErr] = useState("")

  //navigate
  const navigate = useNavigate();

  //use for hook
  let{
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  
  //user login
  const handleLogin=(userCredObj)=>{
    //console.log(userCredObj)
    loginuser(userCredObj)
  }

  useEffect(()=>{ 
    if(userLoginStatus === true)
    navigate("/Profile")
  },[userLoginStatus])

  return (
    <div className="login-page">
      {error.length !== 0 && (
        <p className="display-3 text-danger text-center">{error}</p>
      )}
      <form onSubmit={handleSubmit(handleLogin)}>
        <h1>Login</h1>
        <label htmlFor="#v1">username</label>
        <input type="text" id="v1" {...register("username",{required:true})}  />
        {errors.username?.type==="required" && <p className='text-danger'>*username required</p>}
        <label htmlFor="#v2">Password</label>
        <input type="password" id="v2"  {...register("password",{required:true})} />
        {errors.password?.type==="required" && <p className='text-danger'>*password required</p>}
        <button type="button" >Login</button>
        <button type="button" >Forgot Password?</button>
        {/* <div className="oauth-providers">
          <button type="button" ><FaMicrosoft /> Login with Microsoft</button>
          <button type="button" ><FaFacebook /> Login with Facebook</button>
          <button type="button" ><FaGoogle /> Login with Google</button>
        </div> */}
      </form>
    </div>
  );
};

export default Login;

