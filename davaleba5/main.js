const btn1 = document.getElementById('btn1')

btn1.addEventListener("click",(e) => {
    e.target.style.display = 'none'
})


const div1 = document.createElement("div");
div1.id = 'card'
const h2e1 = document.createElement("h2")
const link1 = document.createElement("a")
link1.href = "#"
const text1 = document.createTextNode("Go To Profile")

link1.append(text1)
div1.append(h2e1,link1)
document.body.append(div1)





