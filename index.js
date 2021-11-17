const url = "https://icanhazdadjoke.com/"
const config = { 
  method: "GET", headers: { 
    "Content-Type": "application/json", 
    Accept: "application/json" } 
  }
  fetch(url, config)
  .then(r => r.json())
  .then(data => renderJoke(data))

  
  const jokeContent = document.getElementById('joke-content')
  const laughBtn = document.getElementById('emoji-laugh')
  const rollEyesBtn = document.getElementById('emoji-rollEyes')
  const laughNum = document.getElementById('laugh-count')
  const rollEyesNum = document.getElementById('rollEyes-count')

  function renderJoke(jokes){
    // create element
    jokeContent.textContent = jokes.joke;  
    laughNum.textContent = 0
    laughBtn.addEventListener('click', () => addlaugh(laughNum)); 
    rollEyesBtn.addEventListener('click', () => addRollEyes(rollEyesNum))
  }

  function addlaugh(laughNum){
    laughNum.textContent = 1+parseInt(laughNum.textContent)
  }
  function addRollEyes(rollEyesNum){
    rollEyesNum.textContent = 1+parseInt(rollEyesNum.textContent)
  }




  // random button
  // const randomBtn = document.getElementById('random-btn');
  // randomBtn.addEventListener('click',getRandomIntInclusive())

  // function getRandomIntInclusive(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }




 

