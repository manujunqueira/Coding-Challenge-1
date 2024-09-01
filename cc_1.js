// Task 1: Variables and Data Types

let employeeName = "Elvis Presley";
const employeeID = 15;
var isActive = true; 

console.log(employeeName, typeof(employeeName));
console.log(employeeID, typeof(employeeID));
console.log(isActive, typeof(isActive));



// Task 2: Compound Data Types

let products = ["Nike Air Max", "Iphone 13", "Coca-Cola Zero"];
const productDetails = {
    name: products,
    inStock: 13, 
    price: 250.00,
}

console.log(products, productDetails);



//Task 3: Assignment Operators

let accountBalance = 100;
console.log("Initial Balance:", accountBalance);

accountBalance += 500; 
console.log("After Deposit:", accountBalance);

accountBalance -= 200;
console.log("After Withdrawal:", accountBalance);

accountBalance *= 1.05;
console.log("After Interest", accountBalance);

accountBalance /= 2; 
console.log("After splitting Balance", accountBalance);

accountBalance %= 10;
console.log("After Modulus Operation", accountBalance);
