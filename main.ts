#!/usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

let exchange_Rate:any={
    "USD":1,
    "EUR":0.9,
    "JPY":113,
    "CAD":1.3,
    "AUD":1.65,
    "PKR":280, 
}
console.log(chalk.bold.red`\n\tWELOCOME TO CURRENCY CONVERTOR-FAST AND EASY TO USE\n`);
//prompt the user to select currency to convert

let user_Answer= await inquirer.prompt([
    {
       name:"from_Currency",
       type:"list",
       message:"select the currency to convert from:",
       choices:["USD","EUR","JPY","CAD","AUD","PKR"]
    } , 
    {
      name:"to_Currency",
      type:"list",
      message:"select the currency to convert into:",
      choices:["USD","EUR","JPY","CAD","AUD","PKR"]
    },
    {
    name:"amount",
    type:"input",
    message:"Enter the amount to convert"
    },
]);

//end of array
//perform by using formula
let from_Amount = exchange_Rate[user_Answer.from_Currency];
let to_Amount = exchange_Rate[user_Answer.to_Currency];
let amount =user_Answer.amount

//formula of conversion

let base_amount =amount /from_Amount
let converted_amount = base_amount * to_Amount
console.log(`Converted_amount=${converted_amount.toFixed(2)}`);




