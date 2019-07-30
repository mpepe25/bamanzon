 const mysql = require("mysql");
 const fs = require("fs");
 const inquirer = require ("inquirer");

 const connection = mysql.createConnection({

   host: "localhost",

   // Your port; if not 3306
   port: 3306,

   // Your username
   user: "root",

   // Your password
   password: "password",
   database: "bamazon_db"
 });

 connection.connect(function (err) {
   if (err) throw err;
   console.log("connected as id " + connection.threadId);

   connection.query("SELECT * FROM product", function (err, res) {
     if (err) throw err;
     console.table(res);

     inquirer.prompt([{
      type: "input",
      message: "What is the ID of the product you would like to buy: ", 
      name: "itemID"
    },
    {
      type: "input",
      message: "how many unit of the product you would like to buy: ",
      name: "quantity"
    }
  ])

   });


   connection.end();
 });