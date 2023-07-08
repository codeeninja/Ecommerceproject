import React, { useState } from 'react'
import './App.css';
export default function AddProduct() {
    const [productname,setproductname]=useState('');
    const [productprice,setproductprice]=useState('');
    const [productcategory,setproductcategory]=useState('');
    const [productcompany,setproductcompany]=useState('');

    const handelClick= async (e)=>{
        e.preventDefault();
        const user = JSON.stringify(localStorage.getItem('user'));
        const userId = user.id;
        console.log("hello id"+ userId)
        console.log(userId,productname,productprice,productcategory,productcompany);
        let result=await fetch('http://localhost:4000/addproduct',{
            method:'POST',
            body:JSON.stringify({productname,productprice,productcategory,productcompany}),
            headers:{
                'Content-type':'application/json',
            }
        })
        result=await result.json();
        console.log(result);
    }
  return (
    <div style={{textAlign:'center'}}>
    <h1>Add Product</h1>
 <label>Name:-</label>
  <input className='inputbox' type="text" value={productname} onChange={(e) => setproductname(e.target.value)} />
  <label>Price:-</label>
  <input className='inputbox' type="text"  value={productprice} onChange={(e) => setproductprice(e.target.value)}/>
  <label>Category:-</label>
  <input className='inputbox' type="text" value={productcategory} onChange={(e) => setproductcategory(e.target.value)}/>
  <label>Company:-</label>
  <input className='inputbox' type="text"  value={productcompany} onChange={(e) => setproductcompany(e.target.value)}/>
  <button className='submitbtn' onClick={handelClick}>Add</button>
</div>
  )
}
