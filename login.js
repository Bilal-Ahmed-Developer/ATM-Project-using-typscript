import users from "./user.js";
import inquirer from "inquirer";
import mainScreen from "./mainScreen.js";
async function login() {
    const answer = await inquirer.prompt([{
            name: "accountNumber",
            type: "number",
            message: "Please Enter your Account Number"
        },
        {
            name: "pin",
            type: "password",
            message: "Enter your pincode"
        },
    ]);
    let usr = users.find(x => x.accountNumber == answer.accountNumber && x.pinCode == answer.pin);
    if (typeof usr != "undefined") {
        console.log(`Welcome ${usr.name}`);
        mainScreen(usr.balance);
    }
    else {
        console.log("you enter invalid account number or pin code");
    }
}
export default login;
