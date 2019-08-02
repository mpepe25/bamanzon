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

   //thequery connection that select the product table 

   connection.query("SELECT * FROM products", function (err, res) {
     if (err) throw err;
    //  const resTab = res.reduce((acc, {
    //    item_id,
    //    ...x
    //  }) => {
    //    acc[item_id] = x;
    //    return acc
    //  }, {})
    //  console.table(resTab);
    //  calling the prompt need 
     inquirer.prompt([{
         type: "input",
         message: "What is the ID of the products you would like to buy: ",
         name: "itemID"
       },
       {
         type: "input",
         message: "how many unit of the products you would like to buy: ",
         name: "quantity"
       }
       //create a check function to select the stock_quantity of products available
     ]).then(function (answers) {
       check();

       function check() {
         connection.query("SELECT stock_quantity, price FROM products WHERE item_id = " + answers.itemID, function (err, res) {
           if (err) throw err;
          //  console.table(res);

           let store_quantity = res[0].stock_quantity;
           let newPrice = parseFloat(res[0].price);

           if(store_quantity < answers.quantity){
             console.log("Insuffcient Quantity!!! Cannot buy all these items!")
           }
           else{
            let newStore_quantity = store_quantity - answers.quantity;

            let totalCost = newPrice * answers.quantity;
 
            console.log("Your total cost comes out to: " + totalCost);

            update();
           function update() {
             connection.query("UPDATE products SET ? WHERE ?",[{
               stock_quantity: newStore_quantity
             },{
               item_id: answers.itemID
             }],function(err, res){
               if (err) throw err;

              //  console.log (res);
               
               
             })
           }



          //  console.log(store_quantity);
          //  console.log(newStore_quantity);

           
           }
           //  "SELECT * FROM WHERE ?"
           //  console.table(res);
           // //Make a select function for the purschase
           //  "SELECT * FROM WHERE ?"
           //  [
           // {
           //  item_id: itemID
           //  }
           // ]

           // function (err, res) { p
           //   if (err) throw err;
           //   if (purchase)

         });
       };





       //  connection.end();
     });
   });
 });