//Label Dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");

//Connects to mySQL server
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Zebra925",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Server is up!")
});

//Starts app lets us choose what kind of user expeirence we want
function startApp() {
    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "Are you a Customer or Employee?",
            choices: [
                "Customer",
                "Employee"
            ]
        })
        .then(function(answer){
          choosePath(answer.action)
        });
};

//Switch statement to direct us to the users choice
function choosePath(action){
  switch (action) {
      case "Customer":
      showListings();
      break;
  }
};

//function showListings() {
  //  inquirer
    //  .prompt({
      //    name: "action",
        //  type: "What would you like to buy?"
     // })
 //Shows all items with name, department, price, and stock
     
 //   let query = "SELECT * FROM products"
 //   connection.query(query, function(err, res){
 //       if(err) throw err;
 //       console.log(res);
 //       for(var i = 0; i < res.length; i++) {
 //           console.log("******************************")
 //           console.log("Product: " + res[i].product_name)
 //           console.log("Department: " + res[i].department)
 //           console.log("Price($USD): " + res[i].price)
 //           console.log("Stock Availability: " + res[i].stock)
 //       }
 //   })
// }

startApp();