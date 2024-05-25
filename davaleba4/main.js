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


