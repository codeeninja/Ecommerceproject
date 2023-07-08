import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Logins() {
    const navigate=useNavigate()
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    useEffect(()=>{
      const auth=localStorage.getItem('user');
      if(auth){
        navigate('/');
      }
    })
    
    const handelClick= async()=>{
       let result= await fetch('http://localhost:4000/login',{
        method:"POST",
        body:JSON.stringify({email,password}),
        headers:{
          'Content-Type':'application/json'
        }
       })
       result=await result.json();
       console.log(result);
       if(!result.error){
        localStorage.setItem('user',JSON.stringify(result));
        navigate('/')
       }
       else{
        alert("Enter Invalid Login ID or Password");
       }
    };
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Login</h1>
      <div>
        <label style={{textAlign:'center',display:'block'}}>Email:-</label>
        <input className='inputbox' type="text" value={email} onChange={(e)=>setemail(e.target.value)} />
        <label style={{textAlign:'center',display:'block'}}> Password:-</label>
        <input className='inputbox' type="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <button className='submitbtn' onClick={handelClick}>Login</button>
      </div>
    </div>
  )
}
