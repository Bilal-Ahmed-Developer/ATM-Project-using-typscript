import inquirer from "inquirer";
const Electric = Math.ceil(Math.random() * 10000 + 1);
const Gas = Math.ceil(Math.random() * 10000 + 1);
const Phone = Math.ceil(Math.random() * 10000 + 1);
async function Utility(balance) {
    const input = await inquirer.prompt([{
            name: "BillType",
            type: "list",
            choices: ["Electric", "Gas", "Phone"],
            message: "Select Your Bill Type ?"
        }]);
    if (input.BillType == "Electric") {
        console.log(`your bill amount is ${Electric}`);
        balance -= Electric;
    }
    else if (input.BillType == "Gas") {
        console.log(`your bill amount is ${Electric}`);
        balance -= Gas;
    }
    else if (input.BillType == "Phone") {
        console.log(`your bill amount is ${Electric}`);
        balance -= Phone;
    }
    return balance;
}
export default Utility;
