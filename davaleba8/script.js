function FetchPost(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        if(!response.ok){
            throw new Error("Something went wrong");
        }
        return response.json();
    })
    .then(data => {
        const cardsContainer = document.getElementById('cards-container');
        data.forEach(post => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h1 class="card-title">${post.title}</h1>
                <p class="card-body">${post.body}</p>
                
            `;
            cardsContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.log("Can't fetch data:", error);
    });
}





function expo(num, exp, callback) {
    if (exp === 0) {
        return callback(1);
    } else if (exp === 1) {
        return callback(num);
    } else {
        return expo(num, exp - 1, function(x) {
            return callback(num * x);
        });
    }
}



function deepCopy(obj) {
    return new Promise((resolve, reject) => {
        if (typeof obj !== 'object' || obj === null) {
            reject(new Error('Argument must be an object'));
        } else {
            setTimeout(() => {
                try {
                    const copiedObj = JSON.parse(JSON.stringify(obj));
                    resolve(copiedObj);
                } catch (error) {
                    reject(error);
                }
            }, 0);
        }
    });
}


const obj = { a: 1, b: { c: 2 } };
deepCopy(obj)
    .then(copiedObj => {
        console.log("Deep copy:", copiedObj);
    })
    .catch(error => {
        console.error("Error:", error.message);
    });

    
document.addEventListener("DOMContentLoaded", FetchPost);