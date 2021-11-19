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
const jokeHeader  =  document.querySelector('#joke-header')
const addJoke = document.querySelector('#form-comment')
const header = document.querySelector('#header')
const notFunny = document.createElement("img")
const youreFunny = document.createElement("img")


//function
function getJoke(){
  fetch(url, config)
  .then(data => data.json())
  .then(dataObj => renderJoke(dataObj))
  jokeHeader.textContent = "My Dad Said...";

 

}
function removeEmoji(){
  youreFunny.remove();
  notFunny.remove();
}

function renderJoke(jokes){
  jokeContent.innerHTML = jokes.joke; 
  laughNum.textContent = 0;
  rollEyesNum.textContent = 0;
  removeEmoji();
}

function addlaugh(laughNum){
  laughNum.textContent = 1+parseInt(laughNum.textContent)
}

function addRollEyes(rollEyesNum){
  rollEyesNum.textContent = 1+parseInt(rollEyesNum.textContent)
}



//evenlistener
//document.addEventListener('DOMContentLoaded',getJoke)

random.addEventListener('click',getJoke);

laughBtn.addEventListener('click', () => addlaugh(laughNum)); 

rollEyesBtn.addEventListener('click', () => addRollEyes(rollEyesNum));

addJoke.addEventListener('submit', (event) => {
  event.preventDefault();
  const newJoke = document.querySelector('#comment').value;
  jokeHeader.textContent = "Are You Funny?";
  jokeContent.textContent = newJoke;
  laughBtn.remove();
  rollEyesBtn.remove();
  laughNum.remove();
  rollEyesNum.remove();
  removeEmoji();
  event.target.reset();
  console.log(newJoke)

  function jokeRating(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  const jokeScore = jokeRating(1, 10)
  console.log(jokeScore)
  
  if (jokeScore < 5) {
  jokeHeader.textContent = `Don't Quit Your Dayjob... ${jokeScore} out of 10`
  //const notFunny = document.createElement("img")
  notFunny.src = "https://cdn.shopify.com/s/files/1/1061/1924/products/Face_With_Rolling_Eyes_Emoji_large.png?v=1571606035"
  //document.body.appendChild(notFunny)
  header.appendChild(notFunny)
  }
  else if (jokeScore > 5) {
    jokeHeader.textContent = `Ok That Was Kinda Funny... ${jokeScore} out of 10`
    //const youreFunny = document.createElement("img")
   youreFunny.src ="https://cdn.shopify.com/s/files/1/1061/1924/products/Tears_of_Joy_Emoji_8afc0e22-e3d4-4b07-be7f-77296331c687_large.png?v=1571606036"
  //document.body.appendChild(youreFunny)
  header.appendChild(youreFunny)
  }
})

let dadJoke = false;

document.addEventListener("DOMContentLoaded", () => {
  const btnGo = document.querySelector("#goTo");
  const innerPage = document.querySelector("#inner-page");
  const intro = document.querySelector("#intro");
  btnGo.addEventListener("click", () => {
    dadJoke = !dadJoke;
    if (dadJoke) {
      innerPage.style.display = "block";
      intro.style.display = "none"
    } else {
      innerPage.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const btnExit = document.querySelector("#exit");
  const intro = document.querySelector("#intro");
  const innerPage = document.querySelector("#inner-page");
  btnExit.addEventListener("click", () => {
    dadJoke = dadJoke;
    if (dadJoke) {
      intro.style.display = "block"
      innerPage.style.display = "none";
    } else {
      intro.style.display = "none";
    }
  })
})


///done 













 

