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
    startApp();
});

//Starts app lets us choose what kind of user expeirence we want
function startApp() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "Would you lke to Buy or Leave?",
            choices: [
                "Buy",
                "Leave"
            ]
        })
        .then(function (answer) {
            choosePath(answer.action)
        });
};

//Switch statement to direct us to the users choice
function choosePath(action) {
    switch (action) {
        case "Buy":
            showListings();
            break;

        case "Leave":
            process.exit(-1);
            break;
    }

};

function showListings() {
    //Shows all items with name, department, price, and stock
    let query = "SELECT * FROM products"
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.log(res);
        for (var i = 0; i < res.length; i++) {
            console.log("******************************")
            console.log("Item ID: " + res[i].item_id)
            console.log("Product: " + res[i].product_name)
            console.log("Department: " + res[i].department)
            console.log("Price($USD): " + res[i].price)
            console.log("Stock Availability: " + res[i].stock)
        }
        inquirer
            .prompt({
                type: 'confirm',
                name: "buy",
                message: "Would you like to buy anything?"

            })
            .then(function (answer) {
                if (answer == "Yes") {
                    buy();
                }
                if (answer == "No") {
                    process.exit(-1)
                }
            }
            )
    })};





    function buy(item_id, stock) {
        inquirer
            .prompt({
                type: "rawlist",
                message: "Which item would you like to buy?",
                choices: [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10
                    , 11]
            })
    };