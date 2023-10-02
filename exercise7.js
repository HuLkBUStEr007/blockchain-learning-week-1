const n = parseInt(prompt("Enter the number: "));
function fibonacci(n) {
    if (n == 0)
    return 0;

    let num1 = 0;
    let num2 = 1;
    let current;
    for (let i =2; i <=n; i++){
        current = num1 + num2;
        num1 = num2;
        num2 = current;
    }
    return num2;
}
console.log(fibonacci(n));