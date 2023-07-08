// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//     res.write('Hello World!'); //write a response to the client
//     res.write(req.url);
//     res.end(); //end the response
//     console.log("hi")
// }).listen(8080); //the server object listens on port 8080

// var fs = require('fs');

// fs.appendFile('mynewfile1.txt', 'Hello content! kale', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// var fs=require('fs');
// fs.open('mynewfile2.txt','w',function(err,file){
//     if(err) throw err;
//     console.log("opening")
// })

// var fs=require('fs');
// fs.writeFile('mynewfile3.txt','hello im don bhai shivam',function(err){
//     if(err) throw err;
//     console.log("written");
// })

// var fs = require('fs');

// fs.unlink('mynewfile3.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });

// var http = require('http');
// var uc = require('upper-case');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(uc.upperCase("Hello World!"));
//   res.end();
// }).listen(8080);

// const nodemailer=require('nodemailer');
// let transporter=nodemailer.createTransport({
//   service:'gmail',
//   auth:{
//     user:'hesterkaren711@gmail.com',
//     pass:'711kasfjren'
//   }
// });

// let mailoption={
//   from:"shivamkale1123@gmail.com",
//   to:"kaleshivam926@gmail.com",
//   subject:"Node js",
//   text:"I am learning how to send email using node js"
// };

// transporter.sendMail(mailoption,function(err,info){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Email send");
//   }
// });
/*to create connection with dataBase*/
// const mysql=require('mysql');
// const con=mysql.createConnection({
//   host:"localhost",
//   user:"root",
//   password:""
// });

// con.connect(function(err){
//   if(err) throw err;
//   console.log("connected");
// })

/*to create DataBase*/
// const mysql=require('mysql');
// const con=s=mysql.createConnection({
//   host:"localhost",
//   user:"root",
//   password:""
// });

// con.connect(function(err){
//   if(err)throw err;
//   console.log("connected");

// con.query("CREATE DATABASE myNewDbs",function(err,result){
//   if(err) throw err;
//   console.log("DATABASE CREATED"+result)
// })
// })

/*to create Table in DataBase*/
// const mysql=require('mysql');
// const con=mysql.createConnection({
//   host:"localhost",
//   user:"root",
//   password:"",
//   database:"mydb"
// });

// con.connect(function(err){
// if(err)throw err;
// console.log("Connected");
// const sql="create table customer (name VARCHAR(255),surname VARCHAR(255))";
// con.query(sql,function(err,result){
//   if(err) throw err;
//   console.log("Table Created" + result);
// })
// });

/*to Insert Data Table in DataBase*/
// const mysql=require("mysql");
// const con=mysql.createConnection({
//   host:"localhost",
//     user:"root",
//     password:"",
//     database:"mydb"
// });

// con.connect(function(err){
//   if(err) throw err;
//   console.log("Connected");
//   const sql="insert into customer(name,surname) VALUES ?";
//   const value=[
//     ['John', 'Highway 71'],
//     ['Peter', 'Lowstreet 4'],
//     ['Amy', 'Apple st 652'],
//     ['Hannah', 'Mountain 21'],
//     ['Michael', 'Valley 345'],
//     ['Sandy', 'Ocean blvd 2'],
//     ['Betty', 'Green Grass 1'],
//     ['Richard', 'Sky st 331'],
//   ];
//   con.query(sql,[value],function(err,result){
//     if(err) throw err;
//     console.log("Data Inserted");
//   });
// });

/*to Fetch Data From DataBase*/
// const mysql=require("mysql");
// const con=mysql.createConnection({
//   host:"localhost",
//     user:"root",
//     password:"",
//     database:"mydb"
// });

// con.connect(function(err){
//   if(err) throw err;
//   console.log("Connected");
// const sql="select *from customer";
// con.query(sql,function(err,result){
//   console.log(result);
// })

// con.connect(function(err){
//   if(err) throw err;
//   console.log("Connected");
// const sql="select surname from customer";
// con.query(sql,function(err,result){
//   console.log(result);
// });

// con.connect(function(err){
//   if(err) throw err;
//   console.log("Connected");
// const sql="select * from customer";
// con.query(sql,function(err,result,fields){
//   console.log(fields);
// });
// });

/*to fetch Data From DataBase Using Where Clause*/
// const mysql=require("mysql");
// const con=mysql.createConnection({
//   host:"localhost",
//     user:"root",
//     password:"",
//     database:"mydb"
// });

// con.connect(function(err){
//   if(err) throw err;
//   console.log("Connected");
//   con.query("select *from customer where name='shivam'",function(err,result){
//     console.log(result);
//   });
// con.connect(function(err){
//   if(err) throw err;
//   console.log("Connected");
//   con.query("select *from customer where name LIKE '%S'",function(err,result){
//     console.log(result);
//   });
// con.connect(function(err){
//   if(err) throw err;
//   console.log("Connected");
//   const name="shivam";
//   con.query("select *from customer where name=?",name,function(err,result){
//     console.log(result);
//   });
// });

/* Too Drop Table from DataBase */
// const mysql=require("mysql");
// const con=mysql.createConnection({
//   host:"localhost",
//     user:"root",
//     password:"",
//     database:"mydb"
// });

// con.connect(function(err){
//   if(err) throw err;
//   console.log("Connected");
//   const sql="drop table student";
//   con.query(sql,function(err,result){
//     console.log("Table Dropped",+result);
//   });
// });

/* Too Delete Table Data */
// const http=require('http');
// const mysql=require("mysql");
// const con=mysql.createConnection({
//   host:"localhost",
//     user:"root",
//     password:"",
//     database:"mydb"
// });

// con.connect(function(err){
//   if(err) throw err;
//   console.log("Connected Successfully");
//   var sql = "UPDATE customer SET surname ='kale' WHERE surname = 'Highway 71'";
//   con.query(sql,function(err,result){
//     console.log("Rows Updated",+result.affectedRows);
//   });
// });

// http.createServer(function(req,resp){
// console.log("Server Running on port 8080")
// resp.write("Hello Dunya ke logo mai shivam hu ");
// resp.end();
// }).listen(8080)

/*Express js Install n Programm  */
const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");

const publicpath = path.join(__dirname, "public");

// app.use(express.static(publicpath));
app.get("", (req, resp) => {
  // resp.send("Welcome to home page "+req.query.name);
  // resp.send(`<h1>Hello my name is ${req.query.name}</h1>`)
  // resp.send(`{name:"shivam",surname:"kale"}`)
  resp.sendFile(`${publicpath}/home.html`);
});

// app.get("/about", (req, resp) => {
//   resp.sendFile(`${publicpath}/about.html`);
// });
// app.set("view engine", "ejs");
// app.get("/profile", (_, resp) => {
//   const user = {
//     name: "Shivam",
//     surname: "Kale",
//     age: "22",
//   };
//   resp.render("profile", { user });
// });

// app.get("*", (req, resp) => {
//   resp.sendFile(`${publicpath}/notfound.html`);
// });

                                                        /* File Upload Code using Multer */
const upload=multer({
  storage:multer.diskStorage({
    destination:function(req,file,cb){
      cb(null,'uploads');
    },
    filename:function(req,file,cb){
      cb(null,file.originalname+"-"+Date.now()+".jpg");
    }
  })
}).single("user_file");

app.post('/upload', upload, (req, res) => {
  res.send("File Uploaded");
});

app.listen(3000);
