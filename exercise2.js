for (let a = 1; a <101; a++){
    if (a % 3 == 0){
        console.log("fizz");
    } else if (a % 5 == 0){
        console.log("buzz");
    }else if (a % 3 && a % 5 == 0){
        console.log("fizzbuzz");
    } else {
        console.log(a);
    }
}