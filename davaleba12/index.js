const arr = ['1','2','3',1,2,3]


for(let i = 0; i < arr.length;i++){
    if (typeof arr[i] === 'number') {
        console.log(arr[i]);
    }   
}