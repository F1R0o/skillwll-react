


const array = [
{name: 'Temo', age: 25},
{name: 'Lasha', age: 21},
{name: 'Ana', age: 28}]



function MinAgeFinder(list) {
    

 let MinAge = list[0];
 for (let i = 1; i < list.length; i++){
     if (list[i].age < MinAge.age) {
        MinAge  = list[i]
        return MinAge.name  + ":" + MinAge.age

    }
  
 }
}


z = MinAgeFinder(array)
console.log(z)




let a = {
    saxeli: "luka",
    tries: 0
};

let b = {
    saxeli: "elene",
    tries: 0
};

function rollDice() {
    return parseInt(Math.random() * 10) 
}

function findWinner(x, y) {
    while (true) {
        x.tries++;
        if (rollDice() === 3) {
            break;
        }
    }

    while (true) {
        y.tries++;
        if (rollDice() === 3) {
            break;
        }
    }

    console.log(`${x.saxeli} moandmoa ${x.tries} cda.`);
    console.log(`${y.saxeli} moandoma ${y.tries} cda.`);

    if (x.tries < y.tries) {
        console.log(`${x.saxeli} gaimarjva`);
    } else if (y.tries < x.tries) {
        console.log(`${y.saxeli} gaimarjva`);
    } else {
        console.log("frea");
    }
}

findWinner(a, b);







let h = {
    saxeli:"h",
    asaki:2
}


function CloneUser(user){
    let NewUser = {}
    for (let i in user) {
        if (user.hasOwnProperty(i)) {
            NewUser[i] = user[i]
            
        }
    }
    return NewUser
}
    
cloned = CloneUser(h)
console.log(cloned)


