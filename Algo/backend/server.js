const mysql=require('mysql');
const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const port=process.env.PORT ||4000;

app.use(cors());
const con=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"mydb"
});

app.use(express.json());

con.connect(function(err){
  if(err) throw err
  console.log("Connected");
})

app.get('/test',function(req,resp){
  resp.send("Hello im live n in test api")
})

app.post("/register",function(req,resp){
  const sql="insert into signupData  (full_name,email,password) values (?,?,?)";
  const value=[req.body.full_name,req.body.email,req.body.password];
  con.query(sql,value,function(err,result){
    delete result.password;
    resp.json({  message: 'Data Inserted Successfully',result});
    console.log("Data Inserted into table");
  })
});

app.post('/login', (req, resp) => {
  const {email,password}=req.body;
  const sql="select *from signupdata where email=?";
  con.query(sql,[email],function(err,result){
    if(err){
      console.log(err);
      return resp.status(500).json({error:"Internal server Error"});
    }
    const user=result[0];
    if(!user || password !== user.password){
      return resp.status(401).json({error:"Wrong email or passowrd"})
    }
    delete user.password;
    resp.json(result);
  });
});

app.post('/addproduct', function(req, resp) {
  const { productname, productprice, productcategory, productcompany } = req.body;
  const sql = "INSERT INTO product (name, price, category, company) VALUES (?, ?, ?, ?)";
  const values = [productname, productprice, productcategory, productcompany];

  con.query(sql, values, function(err, result) {
    if (err) {
      console.log(err);
      resp.status(500).json({ message: 'Error inserting product' });
    } else {
      console.log("Product inserted");
      resp.status(200).json({ message: 'Product inserted successfully' });
    }
  });
});

app.get('/getproduct',function(req,resp){
  const sql="select *from product";
  con.query(sql,function(err,result){
    if(err){
      console.log(err);
    }else{
      resp.send(result);
    }
  })
});

app.delete('/product/:id',function(req,resp){
  const userid=req.params.id;
  const sql='delete from product where id=?';
  con.query(sql,userid,function(err,result){
    if(err){
      console.log(err);
    }else{
      resp.json({ message: 'Delete Successful' });

    }
  });
});

app.get('/product/:id',function(req,resp){
const userId=req.params.id;
const sql="select *from product where id=?";
con.query(sql,userId,function(err,result){
  if(result){
    resp.json(result);
  }
  else{
    resp.json({message:"No Data found"});
  }
})
});

app.post('/product/:id', (req, res) => {
  const productId = req.params.id;
  const { name, price, category, company } = req.body;

  // Create the SQL query to update the product
  const sql = 'UPDATE product SET name = ?, price = ?, category = ?, company = ? WHERE id = ?';
  const values = [name, price, category, company, productId];

  // Execute the query
  con.query(sql, values, (error, results) => {
    if (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ success: true, message: 'Product updated successfully' });
    }
  });
});




app.listen(port,()=>{
  console.log("im live again")
})





































// app.delete('/:id',function(req,resp){
  //   const value=[req.params.id];
  //   const sql="Delete from customer Where id=?";
  //   con.query(sql,value,function(err,result){
  //     if(err) throw err
  //     resp.send("User Deleted Successfully");
  //     console.log("User Deleted");
  //   });
  // });
  
  // app.put("/:id",function(req,resp){
  //   sql="update customer set name=?,surname=? where id=?"
  //   value=[req.body.name,req.body.surname,req.params.id]
  //   con.query(sql,value,function(err,result){
  //     resp.send("Data Updated");
  //     console.log("Data Updated");
  //   })
  // })
  
  // app.get("/",function(req,resp){
  //   sql="select *from customer";
  //   con.query(sql,function(err,result){
  //     resp.send(result);
  //   })
  // })