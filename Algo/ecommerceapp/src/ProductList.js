import React, { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const DeletehandelClick = async (id) => {
    let result = await fetch(`http://localhost:4000/product/${id}`, {
      method: "DELETE",
    });
    result = await result.json();
    if (result) {
      alert("Record is deleted");
      window.location.reload();
    }
  };

  const getProduct = async () => {
    let result = await fetch("http://localhost:4000/getproduct");
    result = await result.json();
    setproduct(result);
  };
  console.log(product);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Product List</h1>
      <table style={{ width: "80%", marginTop: "50px", margin: "auto" }}>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Company</th>
          <th>Delete</th>
        </tr>

        {product.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.category}</td>
            <td>{item.company}</td>
            <td>
              <button
                style={{ margin: "5px" }}
                onClick={() => DeletehandelClick(item.id)}
              >
                Delete
              </button>{" "}
              <Link to={`/update/${item.id}`}>Update</Link>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
