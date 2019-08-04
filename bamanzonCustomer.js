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
 //create a connection for funtion if get an err 
 connection.connect(function (err) {
   if (err) throw err;
   console.log("connected as id " + connection.threadId);
   showProducts();
   
 });
 //thequery connection that select the product table 

 function showProducts() {
   connection.query("SELECT item_id, product_name, price FROM products", function (err, res) {
     if (err) throw err;
     console.table(res);
     askUser();
   })
 }





 //calling the prompt need 
 function askUser() {
  
   inquirer
     .prompt([{
         type: "input",
         message: "What is the ID of the products you would like to buy: ",
         name: "listID"
       },
       {
         type: "input",
         message: "how many unit of the products you would like to buy: ",
         name: "quantity"
       }
       //create a check function to select the stock_quantity of products available
     ]).then(function (answers) {

       connection.query("SELECT * FROM products", function (err, res) {
         if (err) throw err;
        
         let = chosenItem = "";
         for (var i = 0; i < res.length; i++) {
           if (res[i].item_id === parseInt(answers.listID)) {
             chosenItem = res[i];
           }
         }
         // let store_quantity = res[0].stock_quantity;
         // let newCost = parseFloat(res[0].price);
// console.log(chosenItem);

         if (parseInt(chosenItem.stock_quantity) < parseInt(answers.quantity)) {
           console.log("Insuffcient Quantity!!! Cannot buy all these items!")
          showProducts();
         } else {
           let newStore_quantity = chosenItem.stock_quantity - parseInt(answers.quantity);
          //  console.log(newStore_quantity);

           let totalCost = chosenItem.price * parseFloat(answers.quantity);

           console.log("Order placed! Your total cost comes out to: $" + totalCost);
           
           connection.query("UPDATE products SET ? WHERE ?", [{
               stock_quantity: newStore_quantity
             },
             {
               item_id: answers.listID
             }
           ], function (err, res) {
             if (err) throw err;


           })
           showProducts();
         }
       });
     })
 }