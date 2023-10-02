function calculateFactorial(i){
    var fact = 1;
//Using for loop to create a range that gives us all the numbers less than tha given number
    for(var a = i; a>0; a--){
//Using multiplication assignment(*=) to multiply all the numbers in range
        fact *= a;
    }
    return fact;
}
//Taking number from user and calling the function
const j = parseInt(prompt("Enter the no: "));
console.log(calculateFactorial(j)); 