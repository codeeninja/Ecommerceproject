
import { useEffect, useState } from 'react';
import './App.css';
import { Navigate, useNavigate } from 'react-router-dom';
export default function Signup() {
    const [full_name, setfullname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate=useNavigate();
    useEffect(()=>{
      const auth=localStorage.getItem('user');
        if (auth){
            navigate('/')
        }
    })

    const handleClick = async (e) => {
      e.preventDefault();
      console.log(full_name, email, password);
      let result = await fetch('http://localhost:4000/register', {
        method: 'post',
        body: JSON.stringify({ full_name, email, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      result=await result.json()
      console.warn(result);
      localStorage.setItem('user',JSON.stringify(result));
      navigate('/');
    };
  return (
    <div style={{textAlign:'center'}}>
        <h1>Register</h1>
     <label>Full-Name:-</label>
      <input className='inputbox' type="text" value={full_name} onChange={(e) => setfullname(e.target.value)} />
      <label>Email:-</label>
      <input className='inputbox' type="text" value={email} onChange={(e) => setemail(e.target.value)} />
      <label>Password:-</label>
      <input className='inputbox' type="password" value={password} onChange={(e) => setpassword(e.target.value)} />
      <button className='submitbtn' onClick={handleClick}>Submit</button>
    </div>
  )
}
