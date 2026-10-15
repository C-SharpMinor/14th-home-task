// Javascript Home Assignment: Decision-Making Programmes1

// Task 1: Movie Ticket Eligibility (Ternary Operator)
// A cinema wants a programme that determines whether a customer qualifies for a discounted movie ticket.
// Customers aged 12 or below qualify for a children's discount.
// Instructions:
// Create a variable called customerAge.
// Assign an age to the variable.
// Use a ternary operator to determine whether the customer qualifies for a discount.
// Store the result in ticketMessage.
// Display either "Children's discount applied!" or "Regular ticket price applies."
// Bonus: Use prompt() to collect the customer's age and validate it before applying the ternary operator.

const customerAge= Number(prompt("What is the customer's age?"));

if(customerAge < 0){
    console.log("Invalid age entered");
}
else if(Number.isNaN(customerAge)){
    console.log("Please enter a figure for age");
}

//applying an if statement here so the code only submits the customerAge variable if a number was entered
if (!Number.isNaN(customerAge) && customerAge > 0 ){
    const ticketMessage= customerAge <= 12? "Children's discount applied!" : "Regular ticket price applies.";
    console.log(ticketMessage);
}




// Task 2: Restaurant Food Ordering System (Switch Statement)
// A restaurant wants a programme that allows customers to select meals from its menu.
// Food option
// Price
// "rice"
//  ₦3,500
// "beans"
//  ₦2,500
// "yam"
//  ₦3,000
// "spaghetti"
//  ₦4,000
// Instructions:
// Use prompt() to ask the customer to enter a food option.
// Display the selected meal and its price.
// If the customer enters an option not on the menu, display "Sorry, this meal is unavailable."
// Use break appropriately after each case.
// Sample output:
// Welcome to FreshBite Restaurant!
// Selected Meal: Rice
// Price: ₦3500
// Thank you for your order!
// Bonus: Use .toLowerCase() to ensure that inputs such as "Rice" and "RICE" are accepted.


const meal = prompt("Which meal do you want?").toLowerCase();

// Use a switch statement to determine the selected meal's price.
 switch (meal){
    case "rice":
        console.log(`Selected Meal: ${meal}, Price: ₦3500. Thank you for your order!`);
        break;
    case "beans":
        console.log(`Selected Meal: ${meal}, Price: ₦2500. Thank you for your order!`);
        break;
    case "yam":
        console.log(`Selected Meal: ${meal}, Price: ₦3000. Thank you for your order!`);
        break;
    case "spaghetti":
        console.log(`Selected Meal: ${meal}, Price: ₦4000. Thank you for your order!`);
        break;
    default:
        console.log("Sorry, this meal is unavailable.");
        break;
 }       

 


// Task 3: Student Scholarship Checker (Combining Conditions)
// A school offers scholarships based on examination performance and attendance.
// A student qualifies for a scholarship if:
// Their examination score is at least 80.
// Their attendance percentage is at least 90.
// Instructions:
// Use prompt() to collect the student's name, examination score and attendance percentage.
// Convert the score and attendance values to numbers.
// Use logical operators and if...else to check whether the student meets both requirements.
// Display "Congratulations! You qualify for a scholarship." if both conditions are met.
// Otherwise, display "You do not qualify for a scholarship."
// Validate both numeric inputs to ensure they are between 0 and 100, and reject empty or invalid entries.

const studentName= prompt("What is your name?");
const examScoreString= prompt("What is your exam score?");
const examScore= Number(examScoreString);
const attendancePercentString= prompt("What is your attendance percentage?");
const attendancePercent= Number(attendancePercentString);


if(Number.isNaN(examScore) || examScoreString.trim() == ""){
    console.log("Please enter a figure for your exam score");
}
else if(Number.isNaN(attendancePercent) || attendancePercentString.trim() == ""){
    console.log("Please enter a figure for your attendance");
}
else if(examScore < 0 || examScore > 100){
    console.log("Invalid exam score entered");
}
else if(attendancePercent < 0 || attendancePercent > 100){
    console.log("Invalid Attendance entered");
}
else if(examScore >= 80 && attendancePercent >= 90){
    console.log("Congratulations! You qualify for a scholarship.");
}
else{
    console.log("You do not qualify for a scholarship.");
}




// In addition to completing the programming tasks, all students are expected to carefully read and revise their JavaScript class notes, paying particular attention to the topics covered so far.
