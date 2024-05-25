function processOddNumbers(arr) {
    
    if (arr.length <= 2) {
        console.log("ar unda ikos 2 ze naklebi")
    }

    const sumFirstTwo = arr[0] + arr[1];
    let namravli = 1;

    for (let i = 2; i < arr.length; i++) {
        namravli *= arr[i];
    }

   
    return [sumFirstTwo, namravli];
}




function getUserCity(user) {
    const { banks } = user;
    
    if (Array.isArray(banks) && banks.length > 2) {
        const { address } = banks[2];
        if (address && address.city) {
            return address.city;
        }
    }
    
    return undefined;
}




function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    const copy = Array.isArray(obj) ? [...obj] : { ...obj };

    for (let key in copy) {
        if (copy.hasOwnProperty(key)) {
            copy[key] = deepCopy(copy[key]);
        }
    }

    return copy;
}
