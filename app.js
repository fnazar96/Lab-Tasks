// /* task 1 */

// var input = prompt("Please Enter your name");

// alert("Hi, " + input);

// "<br>"
// /* task 2 */

// var num = prompt("Enter a number to print its multiplication table");

// document.write(num + " x "+ 1 +"= ",  num * 1 + "<br>");
// document.write(num + " x "+ 2 +"= ",  num * 2 + "<br>" );
// document.write(num + " x "+ 3 +"= ",  num * 3 + "<br>");
// document.write(num + " x "+ 4 +"= ",  num * 4 + "<br>" );
// document.write(num + " x "+ 5+"= ",  num * 5 + "<br>");
// document.write(num + " x "+ 6 +"= ",  num * 6  + "<br>");
// document.write(num + " x "+ 7 +"= ",  num * 7 + "<br>");
// document.write(num + " x "+ 8 +"= ",  num * 8 + "<br>" );
// document.write(num + " x "+ 9 +"= ",  num * 9 + "<br>");
// document.write(num + " x "+ 10 +"= ",  num * 10  + "<br>");
// "<br>"

// /* task 3 */



// var city = prompt("Please enter your city");

// if( city === "Karachi")
// {
//     document.write("Welcome to city of lights");
// }
// else{
//     document.write("No city name found");
// }
// "<br>"

// /* task 4 */

// var gender = prompt("Please enter gender");

// if(gender == 'male')
// {
//     document.write("Good morning Sir ");
// }
// else if(gender == 'female')
// {
//     document.write("Good morning ma'am ");
// }
// // else if( )
// // {
// //     document.write("No input ");
// // }
// "<br>"

// /*task 5 */


// var colr = prompt("Enter color");

// if(colr == "red"){
//     document.write("vehicle must stop");
// }
// else if(colr == "yellow")
// {
//     document.write("vehicle should get ready to move");
// }
// else if(colr == "green")
// {
//     document.write("vehicle can move now");
// }

// /* task 6 */

// var maxAge = prompt("enter max age");
// var curretAge = prompt("enter current age");

// if (curretAge <= maxAge)
// {
//     document.write("Your are Welcome");

// }

// /* task 7 */

// var fuelLevel = prompt("enter remaing fuel");

// if( fuelLevel <= 0.25)
// {
//     document.write("Please refill your fuel");
// }


/* task 8 */

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }


// if("car" < "cat"){
// alert("car is smaller than cat");
// }

/* task 9 */
// var sub1 = parseInt(prompt("Enter subjeact 1 #s"));
// var sub2 = parseInt(prompt("Enter subjeact 1 #s"));
// var sub3 = parseInt(prompt("Enter subjeact 1 #s"));
// var subTotal = sub1 + sub2 + sub3;
// var perTage = (subTotal / 300) * 100;
// if (perTage >= 80 && perTage <= 100)
// {
//     document.write("Total marks: 300"); "<br>"
//     document.write("Marks obtained: ", subTotal); "<br>"
//     document.write("Percentage: ", perTage);
//     document.write("Grade: A-1"); "<br>"
//     document.write("Remarks: Excellent"); "<br>"
    
// }

// else if (perTage >= 70 && perTage <= 80)
// {
// document.write("Total marks: 300"); "<br>"
//     document.write("Marks obtained: ", subTotal); "<br>"
//     document.write("Percentage: ", perTage);
//     document.write("Grade: A"); "<br>"
//     document.write("Remarks: good"); "<br>"
    
// }
// else if (perTage >= 60 && perTage <= 70)
// {
// document.write("Total marks: 300"); "<br>"
//     document.write("Marks obtained: ", subTotal); "<br>"
//     document.write("Percentage: ", perTage);
//     document.write("Grade: B"); "<br>"
//     document.write("Remarks: You need improvement"); "<br>"
// }
// else if (perTage < 60)
// {
// document.write("Total marks: 300"); "<br>"
//     document.write("Marks obtained: ", subTotal); "<br>"
//     document.write("Percentage: ", perTage);
//     document.write("Grade: Fail"); "<br>"
//     document.write("Remarks: Sorry"); "<br>"  
// }

/* task 10 */
// var bill, discount;
// var item1 = prompt("Item 1 name: ");
// var price1 = prompt("Item 1 price: ");
// var quantity1 = prompt("Item 1 quantity: ");
// var item2 = prompt("Item 2 name: ");
// var price2 = prompt("Item 2 price: ");
// var quantity2 = prompt("Item 2 quantity: ");

// var total = (quantity1*price1) + (quantity2*price2) + 250;

// if (total > 2000)
// {
//     console.log(total);
//     discount = total *(10/100);
//     bill = total - discount;
//     document.write("e-Commernce task 10" + "<br>"+ "<br>")
// document.write("Price of ", item1, ": ", price1 + "<br>");
// document.write("Quantity of ", item1, ": ",quantity1 + "<br>");
// document.write("Price of ", item2, ": ",price2 + "<br>");
// document.write("Quantity of ", item2, ": ",quantity2 + "<br>" + "<br>");
// document.write("Shipping charges: 250" + "<br>" + "<br>");
// document.write("Total cost of order: ", total);
// console.log(bill);
// }
// else if(total <= 2000){
//     console.log(total);
//     document.write("e-Commernce task 10" + "<br>" + "<br>")
// document.write("Price of ", item1, ": ", price1 + "<br>");
// document.write("Quantity of ",item1, ": ", quantity1 + "<br>");
// document.write("Price of ", item2, ": ",price2 + "<br>");
// document.write("Quantity of ",item2, ": ",quantity2 + "<br>"+ "<br>");
// document.write("Shipping charges: 250" + "<br>" + "<br>");
// document.write("Total cost of order: ", total);
// }

/*task 11 */

// var secret = 6;

// document.write("Guess Game -- Task 11" + "<br>" + "<br>");

// var input = prompt("Enter your guess # :");

// if(input  == secret){
//     document.write('"Bingo! Correct answer"');
// }
// else if (input == secret+1 || input == secret-1){
//     document.write("Close enough to the correct answer");
// }
// else if(input != secret){
//     document.write("wrong guess");
// }

/* task 12*/


/* Task 13 */

// var team1 = prompt("Enter team1 name? ");
// var score1 = prompt("Enter team1's Score: ");
// var team2 = prompt("Enter team2 name? ");
// var score2 = prompt("Enter team2's Score: ");

// if (score1 > score2){
//     prompt(team1, "have won the Game.");
//     }
//     else if (score2 > score1)
//     {
//     prompt(team2, "have won the Game.");
//     }
//     else{
//         prompt("The Game is a Tie")
//     }


/* Task 14 */ // not working

// var string = prompt("Enter string number or boolean:");

// if(typeof string == 'number'){
//     document.write(string, "is a string");
// }
// else if (typeof string == 'boolean'){
//     document.write(string, "is a boolean");
// }
// else if(typeof string == 'string'){
//     document.write(string, "is a number");
// }
// else{
//     document.write("Pls enter any data type");
// }

/* Task 15 */

/* Task 16 */

/* Task 17 */
var num1 = prompt("ENter number 1: ","kindly enter greater #");
var num2 = prompt("ENter number 2: ");
var operation = prompt("ENter desired arithematic operation: ");
var result;
if( operation === "+"){
    result === num1 + num2;
    document.write("result: ",result);
}
else if( operation === "-"){
    result === num1 - num2;
    document.write("result: ",result);
}
if( operation === "/"){
    result === num1 / num2;
    document.write("result: ",result);
}
if( operation === "*"){
    result === num1 * num2;
    document.write("result: ",result);
}


/* Task 18 */
// var week = prompt("Enter week day");

// if (week === "monday"|| week === "tuesday"||week === "wednesday"||week === "thursday"||week === "friday"){
//     document.write("Its a week day");
// }
// else if(week === "saturday"){
//     document.write("Its weekend");
// }
// else{
//     document.write("its a holiday");
// }


/* Task 19 */
// var score = prompt("Please enter your score");

// if (score > 50){
//     document.write(" You are passed");
// }
// else if(score <= 50){
// document.write(" Try again");
// }
    
/* task 20 */

// var number1 = prompt("Enter number1");
// var number2 = prompt("Enter number2");

// if (number1 > number2){
//     document.write("Number 1: ", number1, " is greater" );
// }
// else if (number2 > number1){
//     document.write("Number 2: ", number2, " is greater" );
// }
// else if(number1 === number2){
//     document.write(" Both number are equal"); 
// }