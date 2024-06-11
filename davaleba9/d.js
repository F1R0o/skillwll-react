function FetchPost(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if(!response.ok){
            throw new Error("something is wrong :(")
        }
        return response.json()
    })
    .then(data => {
        const User = document.querySelector('.users')
        data.forEach(user => {
            const userElement = createUserElement(user)
            User.appendChild(userElement)
        })
    })
    .catch(error => {
        console.log("there is some error ", error)
    })
}

function createUserElement(user){
    const User = document.createElement("div");
    User.classList.add("userss")
    User.innerHTML = `
        <div class="Users-info">
            <h1 class="userName">${user.username}</h1>
            <p class="email">${user.email}</p>
            <p class="webiste">${user.website}</p>
        </div>
    `
    return User
}


document.addEventListener('DOMContentLoaded',FetchPost)