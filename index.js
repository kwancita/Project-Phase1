const url = "https://icanhazdadjoke.com/"
const config = { 
  method: "GET", headers: { 
    "Content-Type": "application/json", 
    Accept: "application/json" } 
  }

// DOM
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
const emojiSet = document.querySelector("#emoji")
const container = document.querySelector("#comments-container")
const card = document.querySelector("#comment-card")


//function
function getJoke(){
  fetch(url, config)
  .then(data => data.json())
  .then(dataObj => renderJoke(dataObj))
  resetForm();
}

function renderJoke(jokes){
  jokeContent.innerHTML = jokes.joke; 
  removeEmoji();
}

function removeEmoji(){
  youreFunny.remove();
  notFunny.remove();
}

function addlaugh(laughNum){
  laughNum.textContent = 1+parseInt(laughNum.textContent)
}

function addRollEyes(rollEyesNum){
  rollEyesNum.textContent = 1+parseInt(rollEyesNum.textContent)
}

function resetForm(){
  jokeHeader.textContent = "My Dad Once Told Me...";
  laughBtn.textContent = "😂";
  rollEyesBtn.textContent = "🙄";
  laughNum.textContent = 0;
  rollEyesNum.textContent = 0;
}

function randomRate(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function jokeRate(event){
  //event.preventDefault();
  const newJoke = document.querySelector('#comment').value;
  // jokeHeader.textContent = "Are You Funny?";
  jokeContent.textContent = newJoke;
  laughBtn.innerHTML = '';
  rollEyesBtn.innerHTML = '';
  laughNum.innerHTML = '';
  rollEyesNum.innerHTML = '';
  removeEmoji();
  //event.target.reset();
  console.log(newJoke)
  
  const jokeScore = randomRate(1, 10)
  console.log(jokeScore)
  
  if (jokeScore <= 3) {
  const sent1 = `Don't Quit Your Dayjob... ${jokeScore} out of 10`
  jokeHeader.textContent = sent1.toUpperCase()
  //const notFunny = document.createElement("img")
  notFunny.src = "https://cdn.shopify.com/s/files/1/1061/1924/products/Face_With_Rolling_Eyes_Emoji_large.png?v=1571606035"
  //document.body.appendChild(notFunny)
  header.appendChild(notFunny)
  }
  else if (jokeScore <= 5 && jokeScore > 3) {
    const sent2 = `I've Heard Better... ${jokeScore} out of 10`
    jokeHeader.textContent = sent2.toUpperCase()
    //const notFunny = document.createElement("img")
    notFunny.src = "https://cdn.shopify.com/s/files/1/1061/1924/products/Expressionless_Emoji_Icon_45516a90-b907-4345-888a-37597cd6e42e_large.png?v=1571606089"
    //document.body.appendChild(notFunny)
    header.appendChild(notFunny)
  }
  else if (jokeScore > 5 && jokeScore <= 8) {
    const sent3 = `Ok That Was Kinda Funny... ${jokeScore} out of 10`
    jokeHeader.textContent = sent3.toUpperCase()
    //const youreFunny = document.createElement("img")
   youreFunny.src ="https://cdn.shopify.com/s/files/1/1061/1924/products/Tears_of_Joy_Emoji_8afc0e22-e3d4-4b07-be7f-77296331c687_large.png?v=1571606036"
  //document.body.appendChild(youreFunny)
  header.appendChild(youreFunny)
  }
  else if (jokeScore >= 9) {
    const sent4 = `I AM DECEASED. ${jokeScore} out of 10`
    jokeHeader.textContent = sent4.toUpperCase()
    //const youreFunny = document.createElement("img")
   youreFunny.src ="https://cdn.shopify.com/s/files/1/1061/1924/products/Skull_Emoji_Icon_8cee31f2-35dd-42e7-b757-3cb8cfe72437_large.png?v=1571606093"
  //document.body.appendChild(youreFunny)
  header.appendChild(youreFunny)
  }
}



//eventlistener
document.addEventListener('DOMContentLoaded', getJoke)

random.addEventListener('click',getJoke);

laughBtn.addEventListener('click', () => addlaugh(laughNum)); 

rollEyesBtn.addEventListener('click', () => addRollEyes(rollEyesNum));


///////
addJoke.addEventListener('submit', createNewJoke)
////////


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
    
    if (dadJoke) {
      intro.style.display = "block"
      innerPage.style.display = "none";
    } else {
      intro.style.display = "none";
    }
    dadJoke = !dadJoke;
  })
})
///////////


function loadNewJoke() {
  fetch("http://localhost:3000/yourJoke") // returns a promise
  .then(resp => resp.json()) // another promise
  .then(jokes => {
    jokes.forEach(renderNewJoke);  
    // console.log(comments);
  });
}

function renderNewJoke(joke) {
  const commentCard = document.createElement("div");
  const userName = document.createElement("h3");
  const userContent = document.createElement("p");
  const userRate = document.createElement("p");
  
  commentCard.className = "comment-card";
  
  userName.textContent = joke.user;
  
  userContent.textContent = joke.content;

  userRate.textContent = joke.rate;
  
  commentCard.append(userName, userContent, userRate);
  container.append(commentCard);
}


function createNewJoke(e) {
  e.preventDefault();

  let userJoke = addJoke.querySelector("#comment").value;
  let userName = document.querySelector("#user").value;
  let rating = jokeRate();
  let jokes = {
    content: userJoke,
    user: userName,
    rate:rating
  };

  fetch("http://localhost:3000/yourJoke",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(jokes),
  })
  .then((res) => res.json())
  .then(newJoke => {
    console.log(newJoke)
    addJoke.reset();
    container.replaceChildren();
    loadNewJoke();
  });
  
}

loadNewJoke();