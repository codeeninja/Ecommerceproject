import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


export default function Updateproduct() {
    const [productname,setproductname]=useState('');
    const [productprice,setproductprice]=useState('');
    const [productcategory,setproductcategory]=useState('');
    const [productcompany,setproductcompany]=useState('');
    const params=useParams();

    useEffect(()=>{
        console.log(params)
        getProduct();
    },[])

    const getProduct = async () => {
          let result = await fetch(`http://localhost:4000/product/${params.id}`);
          result = await result.json();
          console.log(result);
            const { name, price, category, company } = result[0];
            setproductname(name);
            setproductprice(price);
            setproductcategory(category);
            setproductcompany(company);
      };
    const handelClick= async (e)=>{
        e.preventDefault();
        console.log(productname,productprice,productcategory,productcompany);
    }
  return (
    <div style={{textAlign:'center'}}>
    <h1>Update Product</h1>
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
