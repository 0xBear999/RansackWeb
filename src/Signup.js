import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import { Link } from 'react-router-dom';
import Otp from './Otp'
import { useForm } from 'react-hook-form';
import axios from 'axios';
function SignUp() {
  let navigate= useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();

 
let [error,setError]=useState("")
  


  // let [file,setFile]=useState(null)
  // //on file select
  // let fileSelect=(e)=>{
  //   setFile(e.target.files[0])
  // }
  
  let formsubmit=(data)=>{
//instead of data as object we can give fd as object
    axios.post("http://localhost:4000/user-api/create-user",data).then(response=>{
  console.log(response)
  console.log(response.status)
 if(response.status===201)
 {
 navigate('login')
}
 if(response.status!==201)
 {
   setError(response.data.message)
}
 }).catch((err)=>{
 if(err.response)
{
  setError(err.message);
}
else if(err.request)
{
  setError(err.message);
}
else
{
  setError(err.message);
}
})
 }

  return (
    <form onSubmit={handleSubmit(formsubmit)} className='s1' >
      {error.length!==0 &&(<p>{error}</p>)}
      <div className='s1'>
        <label htmlFor="#name">username</label>
        <input
          type="text"
          id="name"
          {...register("username",{required:true})}
          />
          {errors.username?.type==="required" && <p>*name required</p>}
      </div>
      <div className='s1'>
        <label htmlFor="#email">email</label>
        <input
          type="text"
          id="email"
          {...register("email",{required:true})}
          />
          {errors.email?.type==="required" && <p>*email required</p>}
      </div>
      <div className='s1'>
        <label htmlFor="#password">Password</label>
        <input
          type="text"
          id="password"
          {...register("password",{required:true})}
          />
          {errors.password?.type==="required" && <p>*password required</p>}
      </div>
      {/*
      <div className='s1'>
        <label htmlFor="#confirmpassword">Password</label>
        <input
          type="text"
          id="confirmpassword"
          {...register("confirmpassword",{required:true})}
          />
          {errors.confirmpassword?.type==="required" && <p>*confirm password required</p>}
      </div>*/
  }
      
    <button className='s2' >Sign Up</button>
    <div className='s3'>
      Already have an account?
    </div>
</form>
  )
};
export default SignUp;