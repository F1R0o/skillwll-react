

function func1(a,b) {
    if (a === b) {
        return "Tolia"
    }
    else{
        return "ar aris toli"
    }

}




function func2(fahrenheit) {
    if (typeof fahrenheit === 'number') {
        let celsius = ((fahrenheit - 32) / 1.8).toFixed(2);
        return celsius;
    } else {
        return "false";
    }
}



function calculator(a, b, operation) {
    if (typeof a !== "number" || typeof b !== 'number') {
        return false;
    }
    
    if (operation === "+") {
        return a + b;
    } else if (operation === "-") {
        return a - b;
    } else if (operation === "*") {
        return a * b;
    } else if (operation === "/") {
       
            return a / b ;
    } else {
        return false;
    }
}







let d = calculator(1,2,"/")
console.log(d)
