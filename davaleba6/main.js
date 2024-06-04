
var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
   
}

span.onclick = function() {
    modal.style.display = "none";
}

const colorInput = document.getElementById('colorInput');
const colorButton = document.getElementById('colorButton');

colorButton.addEventListener('click', () => {
  const userColor = colorInput.value.toLowerCase();
  if (['red', 'blue', 'green', 'black', 'white'].includes(userColor)) {
    document.body.style.backgroundColor = userColor;
  } else {
    alert(`${userColor} chawere swori feri ra tu dzma xar erti dzma ra!`);
  }
});






const numberInput = document.getElementById('numberInput');
const calculateButton = document.getElementById('calculateButton');
const resultElement = document.getElementById('result');


calculateButton.addEventListener('click', () => {
  const userInput = numberInput.value;
  const numbers = userInput.split(':');
  const numericNumbers = numbers.map(Number);
  const average = numericNumbers.reduce((sum, num) => sum + num, 0) / numericNumbers.length;
  resultElement.textContent = `The average is: ${average.toFixed(2)}`;
});