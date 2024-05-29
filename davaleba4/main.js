function customReplace(str, valueToReplace, valueToReplaceWith) {
    let parts = str.split(valueToReplace);
    return parts.join(valueToReplaceWith);
}



function Uppercase(str) {
    return str.toUpperCase();
}



function sorted_arr(arr){    
    return arr.sort(function(a,b){
        return a.age  - b.age
    }
)}
 

let list = [{name: 'Lasha', age: 30}, {name: 'Saba', age:
    20},{"name":"lka",age:5}]

let d = sorted_arr(list)
console.log(d)