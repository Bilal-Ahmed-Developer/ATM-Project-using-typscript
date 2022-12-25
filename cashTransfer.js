import inquirer from "inquirer";
async function Transfer(balance) {
    const answer = await inquirer.prompt([{
            name: "accountNumber",
            type: "number",
            message: "Enter account Number "
        },
        {
            name: "Amount",
            type: "number",
            message: "Enter your Amount"
        }
    ]);
    balance -= answer.Amount;
    return balance;
}
export default Transfer;
