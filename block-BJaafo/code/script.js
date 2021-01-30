let fullName;
function getFullName(firstName,secondName){
     fullName =  firstName + " " + secondName;
    return fullName;
}

getFullName("Manish","Kushare");

if(fullName !== "Manish Kushare"){
    throw new Error(`wrong full name`);
}


let totalAmount;
function getTotalAmount(amount,taxRate){
    totalAmount = amount + (amount*taxRate);
    return totalAmount;
}

getTotalAmount(2,2);

if(totalAmount !== 6){
    throw new Error("wrong answer");
}