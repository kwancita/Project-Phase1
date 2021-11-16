const url = "https://icanhazdadjoke.com/"
const config = { 
  method: "GET", headers: { 
    "Content-Type": "application/json", 
    Accept: "application/json" } 
  }
  fetch(url, config)
  .then(r => r.json())
  .then(data => joke(data))

  
 
  function joke(jokes){
    // create element
    const jokeContent = document.getElementById('joke-content')
    jokeContent.textContent = jokes.joke;
  }



 

