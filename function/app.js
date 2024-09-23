// function helo(){
//     console.log("hello world");
    
// }
// helo()


// var currentdatetime = new Date
//         var datetime = document.querySelector("#datetime");
//         datetime.innerHTML = currentdatetime



// var firstName = prompt("enter your first name")
// var lastName = prompt("enter your last name")
// var fullName = firstName + lastName

// console.log("welcome" + fullName )





// var num1 = document.querySelector("#num1")
// var num2 = document.querySelector("#num2")
// var result = document.querySelector("#result")

// function sum(){
// var total = +num1.value + +num2.value;
// console.log(total);
// result.innerHTML = total}


// function sub(){
//     var total = +num1.value - +num2.value;
//     console.log(total);
//     result.innerHTML = total
// }

// function multiply(){
//     var total = +num1.value * +num2.value;
//     console.log(total);
//     result.innerHTML = total
// }
// function divide(){
//     var total = +num1.value / +num2.value;
//     console.log(total);
//     result.innerHTML = total
// }


// function square(number){
//    return number * number
// }
// console.log(square(5));
 

// function factorial(n) {
//     if (n < 0) {
//         return "Factorial is not defined for negative numbers.";
//     } else if (n === 0 || n === 1) {
//         return 1;

//     } 
//     else {
//         let result = 1;
//         for (var i = 2; i <= n; i++) {
//             result *= i;
//         }
//         return result;
//     }
// }
// console.log(factorial(-1));
// console.log(factorial(4));
// console.log(factorial(3));



// function counting(start, end) {
//     if (start > end) {
//         console.log("Start number should be less than or equal to end number.");
//         return;
//     }
// for (let i = start; i <= end; i++) {
//         console.log(i);
//     }
// }

// counting(1, 10); 







// function LargestNumber(numbers) {
//     if (numbers.length === 0) {
//         return "No numbers provided.";
//     }

//     return Math.max(numbers);
// }
// console.log(LargestNumber(1, 3, 6,10, 20));
// console.log(LargestNumber(22, 33, 44, 55));




// function rec_Area(width, height) {
//     if (width <= 0 || height <= 0) {
//         return "Width and height must be positive numbers.";
//     }

//     return width * height;
// }
// console.log(rec_Area(3, 5)); 
// console.log(rec_Area(10, 20));  




// var param = function inner(){
//     return typeof inner;
//     }
//     alert(param());




// function power(base, exponent) {
//     return Math.pow(base, exponent);
// }

// console.log(power(5, 5)); 
// console.log(power(3, 4));


// var username = prompt("enter your name")
// greetuser()

// function greetuser(){
//     console.log("hello" + username);   
// }






// var celcius = prompt("enter temp in celcius")
// var faren = prompt("enter temp in faren")
// function celiToFaren(){
//    var farenh = (+celcius * 9/5) + 32
//     console.log(farenh);
    
// }
// celiToFaren()
// function farenToceli(){
//    var cellcius = (+faren - 32) * 5/9
//     console.log(cellcius);
    
// }
// farenToceli()