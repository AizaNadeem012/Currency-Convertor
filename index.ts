#! /usr/bin/env node
import inquirer from "inquirer";
let currency: any = {
    USD: 1,
    EUR: 0.91, // Euro
    GBP: 0.79, // Pound 
    INR: 74.57, // Indian Currency
    PKR: 280, // Pakistani Currency
    SAR: 3.75, // Saudi Riyal
    MYR: 4.72, // Malaysia Currency
    NPR: 133.08, // Nepalese Rupee
    BDT: 109.60, //Bangladeshi Taka
    TRY: 32.03, //Turkish lira
    CNY: 7.23, // Chinese Yuan
    AFN: 71.23, // Afghan Afghani currency
    JOD: 0.71, // Jordanian Dinar
    XOF: 604.60, // West African CFA franc
    BTN: 83.17, //Bhutanese Ngultrum
    AZN: 1.70, // Azerbaijani Manat
    AED: 3.67, // United Arab Emirates Dirham
    MVR: 15.46, //Maldivian Rufiyaa
    AUD: 1.52, // Australian Dollar
    HKD: 7.83, // Hong Kong Dollar
    DKK: 6.88, // Danish Krone
    EGP: 47.33, // Egyptian Pound
};
let userAnswer = await inquirer.prompt([
    {
        name: "From",
        message: "Enter From Currency",
        type: "list",
        choices: ['USD', ' EGP', 'INR', 'SAR', 'PKR', 'HKD', 'EUR', 'GBP', 'MYR', "NPR", 'BDT', 'TRY', 'CNY', 'AFN', 'JOD', 'XOF', 'BTN', 'AZN', 'AED', 'MVR', 'AUD', 'HKD', 'DKK', 'EGP']
    },
    {
        name: "To",
        message: "Enter To Currency",
        type: "list",
        choices: ['USD', ' EGP', 'INR', 'SAR', 'PKR', 'HKD', 'EUR', 'GBP', 'MYR', "NPR", 'BDT', 'TRY', 'CNY', 'AFN', 'JOD', 'XOF', 'BTN', 'AZN', 'AED', 'MVR', 'AUD', 'HKD', 'DKK', 'EGP']
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number"
    }
]);
let fromAmount = currency[userAnswer.From];
let toAmount = currency[userAnswer.To];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertAmount = baseAmount * toAmount;
console.log(convertAmount);
// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);
