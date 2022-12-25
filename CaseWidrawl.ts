import inquirer from "inquirer";

async function OtherAmount(balance:number) {
    const otherAmt = await inquirer.prompt([{
        name:"otherAmount",
        type:"number",
        message:"Enter your Amount"
    }]);
    if (otherAmt.otherAmount < balance) {
        balance -=otherAmt.otherAmount
    } else {
        console.log(`your balance is insufficient ${balance}`)
    }
    return balance
}

async function cashwithdraw(balance:number){
    const answer=await inquirer.prompt([{
                 name:"amount",
                 type:'list',
                 choices:["500","1000","2000","5000","10000","OtherAmount"],
                 message:"Please select your amount"
                }]);

    switch(answer.amount){
        case "500":
            if (balance >Number(answer.amount)) {        
                 balance -= 500;
                 console.log(`your current balance is ${balance}`)
                break;         
            }else{
                console.log("you have insuffienct balance");
            }
       case "1000":
        if (balance >Number(answer.amount)) {        
            balance -= 1000;
            console.log(`your current balance is ${balance}`)
           break
        }else{
           console.log("you have insuffienct balance");
        }
        case "2000":
            if (balance >Number(answer.amount)) {        
                balance -= 2000;
                console.log(`your current balance is ${balance}`)
               break
            }else{
               console.log("you have insuffienct balance");
            }   
       case "5000":
        if (balance >Number(answer.amount)) {        
            balance -= 5000;
            console.log(`your current balance is ${balance}`)
           break
        }else{
           console.log("you have insuffienct balance");
        }
  
       case "10000":
        if (balance >Number(answer.amount)) {        
            balance -= 10000;
            console.log(`your current balance is ${balance}`)
           break
        }else{
           console.log("you have insuffienct balance");
        }
        case "OtherAmount":
                balance = await OtherAmount(balance)
                //  console.log(`${balance}`)
                 break                                         
    }      
    return balance
}



export default cashwithdraw