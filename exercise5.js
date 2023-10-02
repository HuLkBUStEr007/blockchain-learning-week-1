//Taking string from user
var string = prompt("Enter the string: ");

//creating a function isPalindrome and taking left and right as range for loop
//then using while loop to check if the giving 
//string from left to right is equal to right to left of string. 
function isPalindrome(str){
    let left = 0;
    let right = str.length-1;

    while(left<right){
        if(str[left] !== str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrome(string));