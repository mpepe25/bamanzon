const mysql = require("mysql");
 //  const fs = require("fs");
 const inquirer = require("inquirer");

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

//    connection.query("SELECT * FROM products", function (err, res) {
//      if (err) throw err;
//      const resTab = res.reduce((acc, {
//        item_id,
//        ...x
//      }) => {
//        acc[item_id] = x;
//        return acc
//      }, {})
//      console.table(resTab);