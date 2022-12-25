import inquirer from "inquirer";
import cashwithdraw from "./CaseWidrawl.js";
import CashDeposit from "./cashDeposite.js";
import Transfer from "./cashTransfer.js";
import Utility from "./utilityBills.js";

async function anotherTransaction() {
    const Ot=await inquirer.prompt([{
        name:"otherTransaction",
        type:"list",
        choices:["Yes","No",],
        message:"Do you want to perfrom another Transaction ?"   
    }])
    return Ot.otherTransaction
}

async function mainScreen(balance : number) {
  do {
       const option = await inquirer.prompt([{
                 name:"menu",
                 type:"list",
                 choices:["Balance Inquiry","Cash Widrawl","Cash Deposit","Transfer","Utility Bills","Exit" ],
                 message:"Select your Transaction Type",
    }]);

    switch(option.menu){
                 case "Balance Inquiry":
                     console.log(`your balance is: ${balance}`)
                     break;
                 case "Cash Widrawl":
                    console.log(`Your balance before Cash widraw is: ${balance}`)
                     balance =await cashwithdraw(balance)
                     console.log(`your transaction is successfull your new balance is: ${Number(balance)}`)
                     break;
                 case "Cash Deposit":
                     console.log(`Your balance before Case Deposit is: ${balance}`)
                   balance=await CashDeposit(balance)
                     console.log(`Your new balance is ${balance}`)
                     break;
                 case "Transfer":
                    console.log(`Your balance before Case Transfer is: ${balance}`)
                     balance=await Transfer(balance)
                     console.log(`Your new balance is: ${balance}`)
                     break;  
                 case "Utility Bills": 
                  console.log(`Your balance before paying utility bills is: ${balance}`);
                  balance = await Utility(balance
                    )
                     console.log(`Your transaction is successfull your new balance is: ${balance}`)
                     break;  
                 case "Exit":
                    anothertran = "No"
                     break;                    
    }
    var anothertran = await anotherTransaction()
} while (anothertran != "No" );

}
export default mainScreen