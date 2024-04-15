#! /usr/bin/env node

import inquirer from "inquirer";

const currency: any ={
    USD: 1, //base currency
    EUR: 0.94, //UK
    GBP: 0.80,  //British Dollar
    CAD: 1.37, //Canada Dollar
    AUD:  1.54, //Australian Dollar
    JPY:  154.3, //Japanese Yan
    INR: 83.47,  //Indian Rupees
    NZD: 1.68, //New Zealand Dollar
    CHF: 0.91, //Swiss Franc
    ZAR: 18.9, //southAfrica Rand
    RUB: 92.2, //Russian Rubble
    PKR: 278.06, //Pakistani Rupee
    BGN:  1.83, //Bulgairan Lev
    SGD: 1.36, //Singapore Dollar
    HKD: 7.82, //Hong Kong Dollar
    SEK: 10.84, //Swedish Krona
    THB: 36.73, //Thai Baht
    HUF: 369.97, //Hungarian Forint
    CNY: 7.23, // Chinese Yuan Renminbi
    NOK: 10.92, //Norwegian Krone
    MXN: 16.59, //Mexican Peso

}

const user_answer = await inquirer.prompt(
    [
        {
            name: "From_currency",
            type: "list",
            message: "Enter From Currency",
            choices: ["USD", "EUR", "GBP", "CAD", "AUD" , "JPY", "INR", "NZD", "CHF", "ZAR", "RUB", "PKR", "BGN", "SGD", "HKD", "SEK", "THB", "HUF", "CNY", "NOK", "MXN"],
        },
        {
            name: "To_currency",
            type: "list",
            message: "Enter To Currency",
            choices: ["USD", "EUR", "GBP", "CAD", "AUD" , "JPY", "INR", "NZD", "CHF", "ZAR", "RUB", "PKR", "BGN", "SGD", "HKD", "SEK", "THB", "HUF", "CNY", "NOK", "MXN"],
        },
        {
            name: "amount",
            type: "number",
            message: "Enter your amount:",
        }
    ]
    )

    let fromamount= currency[user_answer.From_currency];
    let toamount= currency[user_answer.To_currency];
    let useramount= user_answer.amount;
    let baseamount= useramount / fromamount; //convert amount into base  currency 
    let convertedamount = baseamount * toamount;
    console.log("Your Converted amount is: "+convertedamount);
    