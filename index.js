const url = "https://icanhazdadjoke.com/"
const config = { 
  method: "GET", headers: { 
    "Content-Type": "application/json", 
    Accept: "application/json" } 
  }

const jokeContent = document.getElementById('joke-content')
const laughBtn = document.getElementById('emoji-laugh')
const rollEyesBtn = document.getElementById('emoji-rollEyes')
const laughNum = document.getElementById('laugh-count')
const rollEyesNum = document.getElementById('rollEyes-count')
const random = document.getElementById('random-btn')


//function
function getJoke(){
  fetch(url, config)
  .then(data => data.json())
  .then(dataObj => renderJoke(dataObj))
  jokeHeader.textContent = "My Dad Said...";
}

function renderJoke(jokes){
  jokeContent.innerHTML = jokes.joke; 
  laughNum.textContent = 0;
  rollEyesNum.textContent = 0;
}

function addlaugh(laughNum){
  laughNum.textContent = 1+parseInt(laughNum.textContent)
}

function addRollEyes(rollEyesNum){
  rollEyesNum.textContent = 1+parseInt(rollEyesNum.textContent)
}

//evenlistener
document.addEventListener('DOMContentLoaded',getJoke)

random.addEventListener('click',getJoke);

laughBtn.addEventListener('click', () => addlaugh(laughNum)); 

rollEyesBtn.addEventListener('click', () => addRollEyes(rollEyesNum));


const jokeHeader  =  document.querySelector('#joke-header')
const addJoke = document.querySelector('#form-comment')
addJoke.addEventListener('submit', (event) => {
  event.preventDefault();
  const newJoke = document.querySelector('#comment').value;
  jokeHeader.textContent = "What's Your?";
  jokeContent.textContent = newJoke;
  laughBtn.remove();
  rollEyesBtn.remove();
  laughNum.remove();
  rollEyesNum.remove();
  event.target.reset();
  console.log(newJoke)
})









 

